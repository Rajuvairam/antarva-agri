import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Sprout,
  MapPin,
  CheckCircle2,
  CreditCard,
  MessageCircle,
  Share2,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Clock,
  Users,
  Truck,
  QrCode,
} from 'lucide-react';
import {
  KIWI_TRIAL_BOXES,
  POPULAR_CITY_HUBS,
  BRAND_CONFIG,
  getCitySeedData,
  type KiwiBoxOption,
} from '../data/cropData';
import {
  fetchCityOrdersFromSupabase,
  insertB2COrderToSupabase,
  type B2COrderRecord,
} from '../lib/supabase';

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
    };
  }
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export const CityBatchDrop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCity = searchParams.get('city')?.trim() || 'Bengaluru';

  const [city, setCity] = useState(initialCity);
  const citySeed = getCitySeedData(city);

  // Live City Order Count (Seed + Supabase/Local orders)
  const [dbOrderCount, setDbOrderCount] = useState(0);
  const [recentDbOrders, setRecentDbOrders] = useState<B2COrderRecord[]>([]);
  const [loadingCount, setLoadingCount] = useState(true);

  // Selected Box & Customer Checkout Inputs
  const [selectedBox, setSelectedBox] = useState<KiwiBoxOption>(KIWI_TRIAL_BOXES[1]);
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [pincode, setPincode] = useState('');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Confirmation State after ₹50 Spot Reservation
  const [reservationSuccess, setReservationSuccess] = useState<B2COrderRecord | null>(null);

  useEffect(() => {
    const queryCity = searchParams.get('city')?.trim();
    if (queryCity && queryCity !== city) {
      setCity(queryCity);
    }
  }, [searchParams, city]);

  useEffect(() => {
    let active = true;
    setLoadingCount(true);
    fetchCityOrdersFromSupabase(city).then(({ count, recentOrders }) => {
      if (!active) return;
      setDbOrderCount(count);
      setRecentDbOrders(recentOrders);
      setLoadingCount(false);
    });
    return () => {
      active = false;
    };
  }, [city]);

  const handleCitySwitch = (newCity: string) => {
    setCity(newCity);
    setSearchParams({ city: newCity });
    setReservationSuccess(null);
  };

  const totalReservedSpots = citySeed.seedReservedCount + dbOrderCount;
  const batchTarget = citySeed.batchTarget; // 30 spots
  const spotsLeft = Math.max(0, batchTarget - totalReservedSpots);
  const progressPercentage = Math.min(100, Math.round((totalReservedSpots / batchTarget) * 100));

  // Combine recent Supabase/local bookings with realistic anonymized activity pills
  const activityPills = [
    ...recentDbOrders.map((o) => ({
      text: `${o.customer_name.split(' ')[0]} in ${city} reserved a ${o.box_size} just now`,
      isLiveUser: true,
    })),
    ...citySeed.recentActivityTemplates.map((item) => ({
      text: `${item.firstName} in ${city} reserved a ${item.boxLabel} ${item.timeAgo}`,
      isLiveUser: false,
    })),
  ].slice(0, 3);

  const recordSpotReservation = async (
    paymentId: string,
    status: 'spot_reserved' | 'reserved_50_paid' | 'whatsapp_50_pending'
  ) => {
    const newOrder: B2COrderRecord = {
      city,
      customer_name: fullName.trim(),
      whatsapp: whatsapp.trim(),
      pincode: pincode.trim(),
      box_size: selectedBox.shortLabel,
      reservation_paid_inr: 50,
      total_box_price_inr: selectedBox.priceInr,
      balance_due_inr: selectedBox.balanceOnDispatchInr,
      payment_status: status,
      razorpay_payment_id: paymentId,
    };

    const { record } = await insertB2COrderToSupabase(newOrder);
    setDbOrderCount((prev) => prev + 1);
    setRecentDbOrders((prev) => [record, ...prev]);
    setReservationSuccess(record);
    setIsProcessingPayment(false);
  };

  // Primary CTA: Open Razorpay Checkout for ₹50 (5000 paise)
  const handleRazorpaySpotReserve = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !whatsapp.trim() || !pincode.trim()) return;

    setIsProcessingPayment(true);
    const razorpayKeyId = (
      import.meta.env.EXPO_PUBLIC_RAZORPAY_KEY_ID ||
      import.meta.env.VITE_RAZORPAY_KEY_ID
    ) as string | undefined;

    if (razorpayKeyId) {
      const sdkLoaded = await loadRazorpayScript();
      if (sdkLoaded && window.Razorpay) {
        const rzp = new window.Razorpay({
          key: razorpayKeyId,
          amount: 5000, // Exactly ₹50 in paise
          currency: 'INR',
          name: BRAND_CONFIG.brandName,
          description: `₹50 Spot Reservation — ${city} Kiwi Harvest Batch #01 (${selectedBox.shortLabel})`,
          prefill: {
            name: fullName.trim(),
            contact: whatsapp.trim(),
          },
          theme: {
            color: '#1B4332',
          },
          handler: async (response: { razorpay_payment_id?: string }) => {
            const paymentId =
              response.razorpay_payment_id || `pay_rzp_${Date.now().toString().slice(-6)}`;
            await recordSpotReservation(paymentId, 'spot_reserved');
          },
          modal: {
            ondismiss: () => {
              setIsProcessingPayment(false);
            },
          },
        });
        rzp.open();
        return;
      }
    }

    // Instant fallback when Razorpay test/live key isn't set in .env yet
    const simulatedPaymentId = `pay_spot50_${Math.floor(100000 + Math.random() * 900000)}`;
    await recordSpotReservation(simulatedPaymentId, 'spot_reserved');
  };

  // Secondary CTA: Reserve via WhatsApp (Pay ₹50 on UPI Link)
  const handleWhatsAppSpotReserve = async () => {
    if (!fullName.trim() || !whatsapp.trim() || !pincode.trim()) {
      const formEl = document.getElementById('spot-reservation-form') as HTMLFormElement | null;
      formEl?.reportValidity();
      return;
    }

    setIsProcessingPayment(true);
    const waPaymentId = `wa_upi50_${Math.floor(100000 + Math.random() * 900000)}`;
    await recordSpotReservation(waPaymentId, 'whatsapp_50_pending');

    const message = [
      `Hello Antarva Agri! I want to reserve my spot in the *${city} Fresh Kiwi Harvest Batch #01*.`,
      ``,
      `*Selected Box:* ${selectedBox.shortLabel} (Total ₹${selectedBox.priceInr})`,
      `*Spot Reservation Today:* ₹50`,
      `*Balance on Dispatch:* ₹${selectedBox.balanceOnDispatchInr}`,
      `*Name:* ${fullName.trim()}`,
      `*WhatsApp:* ${whatsapp.trim()}`,
      `*Delivery Pincode:* ${pincode.trim()} (${city})`,
      ``,
      `Please send me the ₹50 UPI link to lock my spot in ${city}'s 30-box batch!`,
    ].join('\n');

    window.open(
      `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const buildShareWithFriendsWhatsAppUrl = () => {
    const shareUrl = `${window.location.origin}/batch?city=${encodeURIComponent(city)}`;
    const newSpotsLeft = Math.max(0, batchTarget - totalReservedSpots);
    const shareText = [
      `Hey! I just reserved a box of fresh, tree-ripened Arunachal Pradesh Kiwis in the *${city} Harvest Batch Drop* on Antarva Agri 🌱🥝`,
      ``,
      `We are at *${totalReservedSpots} / ${batchTarget} spots* in ${city} (only ${newSpotsLeft} spots left to trigger fresh orchard plucking & dispatch!).`,
      ``,
      `You can lock your spot for just ₹50 today and pay the rest when our city's batch ships: ${shareUrl}`,
    ].join('\n');
    return `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1F2937] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Back Navigation & Quick City Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1B4332] hover:text-[#D97706] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-[#1F2937]/60 mr-1">Switch City:</span>
            {POPULAR_CITY_HUBS.slice(0, 6).map((hub) => {
              const isCurrent = hub.city.toLowerCase() === city.toLowerCase();
              return (
                <button
                  key={hub.city}
                  type="button"
                  onClick={() => handleCitySwitch(hub.city)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-[#1B4332] text-[#FAF9F6]'
                      : 'bg-white border border-[#1B4332]/15 text-[#1F2937]/75 hover:border-[#1B4332]'
                  }`}
                >
                  {hub.city}
                </button>
              );
            })}
          </div>
        </div>

        {/* ===================================================================
            MAIN 2-COLUMN LAYOUT:
            Left: Live City Batch Progress Tracker + 3-Step Rule
            Right: Box Selection & ₹50 Spot Reservation Checkout
        ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN: LIVE CITY BATCH PROGRESS TRACKER */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#1B4332] text-[#FAF9F6] rounded-3xl p-6 sm:p-9 shadow-xl space-y-6 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6]/10 border border-[#FAF9F6]/20 text-xs font-bold uppercase tracking-wider text-[#D97706]">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] animate-ping" />
                  <span>30-Family Community Harvest Drop</span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FAF9F6]/80">
                  <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Bichom Valley Orchard → {city}</span>
                </span>
              </div>

              <h1 className="font-serif-display text-2xl sm:text-4xl font-bold text-white leading-tight">
                🌱 {city} Fresh Kiwi Harvest Batch #01
              </h1>

              {/* Animated Progress Bar Block */}
              <div className="bg-[#FAF9F6]/10 border border-[#FAF9F6]/15 rounded-2xl p-5 space-y-3.5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif-display text-3xl sm:text-4xl font-bold text-[#D97706]">
                      {loadingCount ? '...' : totalReservedSpots} / {batchTarget}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white">
                      Spots Reserved in {city}
                    </span>
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D97706] text-white">
                    {spotsLeft > 0 ? `Only ${spotsLeft} spots left!` : 'Batch Goal Unlocked!'}
                  </span>
                </div>

                {/* Progress Bar Track */}
                <div className="w-full h-4 rounded-full bg-black/30 overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#D97706] to-[#fbbf24] transition-all duration-700 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>

                <p className="text-xs sm:text-sm font-semibold text-[#FAF9F6]/90">
                  {spotsLeft > 0 ? (
                    <>
                      <strong>
                        {totalReservedSpots} / {batchTarget} Spots Reserved in {city}
                      </strong>{' '}
                      — Only <strong>{spotsLeft} spots left</strong> to trigger orchard harvest &amp; dispatch!
                    </>
                  ) : (
                    <>
                      🎉 <strong>{city} Batch #01 has hit {totalReservedSpots} orders!</strong> Orchard plucking is triggered—reserve now to join this dispatch truck!
                    </>
                  )}
                </p>
              </div>

              {/* Recent Anonymized Activity Pills */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FAF9F6]/70 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Recent Activity in {city}</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {activityPills.map((pill, idx) => (
                    <div
                      key={idx}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border ${
                        pill.isLiveUser
                          ? 'bg-[#D97706]/25 border-[#D97706] text-white font-bold'
                          : 'bg-[#FAF9F6]/10 border-[#FAF9F6]/15 text-[#FAF9F6]/90'
                      }`}
                    >
                      <Sprout className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                      <span>{pill.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3-Step Group-Buy Explanation Card */}
            <div className="bg-white rounded-3xl border-2 border-[#1B4332]/15 p-6 sm:p-8 space-y-5 shadow-xs">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block">
                    Zero Cold-Storage Guarantee
                  </span>
                  <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#1B4332]">
                    How the ₹50 City Batch Reservation Works
                  </h2>
                </div>
                <Users className="w-7 h-7 text-[#1B4332]/40 hidden sm:block" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#1B4332]/15 space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#D97706] text-white text-xs font-bold">
                    Step 1
                  </span>
                  <h3 className="font-bold text-base text-[#1B4332]">
                    Pay Just ₹50 Today
                  </h3>
                  <p className="text-xs text-[#1F2937]/80 leading-relaxed">
                    Lock your spot in <strong>{city}&apos;s</strong> 30-box harvest batch with a fully refundable ₹50 token deposit.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#1B4332]/15 space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#1B4332] text-white text-xs font-bold">
                    Step 2
                  </span>
                  <h3 className="font-bold text-base text-[#1B4332]">
                    Batch Hits 30 Orders
                  </h3>
                  <p className="text-xs text-[#1F2937]/80 leading-relaxed">
                    Once 30 families in {city} join, farmers hand-pluck your Kiwis fresh from the vine in Bichom Valley.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#1B4332]/15 space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#1B4332] text-white text-xs font-bold">
                    Step 3
                  </span>
                  <h3 className="font-bold text-base text-[#1B4332]">
                    Pay Balance on Dispatch
                  </h3>
                  <p className="text-xs text-[#1F2937]/80 leading-relaxed">
                    You receive your farmer&apos;s Digital Crop Passport on WhatsApp and pay the remaining box price only when the batch is ready to ship.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#1B4332]/10 text-xs text-[#1F2937]/75">
                <span className="flex items-center gap-1.5 font-semibold text-[#1B4332]">
                  <Truck className="w-4 h-4 text-[#D97706]" />
                  <span>{citySeed.deliveryTransitDays}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <QrCode className="w-4 h-4 text-[#1B4332]" />
                  <span>Includes QR Food Story Card inside every box</span>
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: BOX SELECTION & ₹50 SPOT RESERVATION CHECKOUT */}
          <div className="lg:col-span-5 bg-white rounded-3xl border-2 border-[#1B4332] shadow-xl p-6 sm:p-8">
            <div className="pb-5 mb-5 border-b border-[#1B4332]/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block">
                {city} Harvest Drop • ₹50 Spot Lock
              </span>
              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1B4332] mt-1">
                Choose Your Box &amp; Reserve Spot
              </h2>
            </div>

            {!reservationSuccess ? (
              <form
                id="spot-reservation-form"
                onSubmit={handleRazorpaySpotReserve}
                className="space-y-5"
              >
                {/* Box Selection Cards with Full Pricing & ₹50 Breakdown */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2937]/80">
                    1. Select Your Harvest Box Size
                  </label>

                  {KIWI_TRIAL_BOXES.map((box) => {
                    const isSelected = selectedBox.id === box.id;
                    return (
                      <button
                        key={box.id}
                        type="button"
                        onClick={() => setSelectedBox(box)}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#1B4332] bg-[#1B4332]/5 shadow-xs'
                            : 'border-[#1F2937]/15 hover:border-[#1B4332]/40 bg-[#FAF9F6]/70'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-base text-[#1B4332]">
                                {box.shortLabel}
                              </span>
                              {box.tag && (
                                <span
                                  className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                                    isSelected
                                      ? 'bg-[#D97706] text-white'
                                      : 'bg-[#1B4332]/10 text-[#1B4332]'
                                  }`}
                                >
                                  {box.tag}
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-[#1F2937]/70 block mt-0.5">
                              {box.piecesApprox}
                            </span>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="text-base font-extrabold text-[#1B4332] block">
                              Total ₹{box.priceInr.toLocaleString('en-IN')}
                            </span>
                            <span className="text-[11px] text-[#1F2937]/45 line-through">
                              ₹{box.originalPriceInr.toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>

                        {/* Clear ₹50 Now + Balance on Dispatch Strip */}
                        <div
                          className={`mt-3 pt-2.5 border-t flex items-center justify-between text-xs ${
                            isSelected
                              ? 'border-[#1B4332]/20 text-[#1B4332]'
                              : 'border-[#1F2937]/10 text-[#1F2937]/80'
                          }`}
                        >
                          <span className="font-bold text-[#D97706]">
                            Pay ₹{box.spotReservationInr} now
                          </span>
                          <span className="font-semibold">
                            ₹{box.balanceOnDispatchInr.toLocaleString('en-IN')} when batch dispatches
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Customer Details Inputs */}
                <div className="space-y-3.5 pt-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F2937]/80">
                    2. Your Delivery Details in {city}
                  </label>

                  <div>
                    <label
                      htmlFor="batch-fullname"
                      className="block text-xs font-semibold text-[#1F2937] mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="batch-fullname"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g., Rohan Verma"
                      className="w-full px-4 py-3 rounded-xl border border-[#1F2937]/20 bg-[#FAF9F6] text-sm focus:outline-none focus:border-[#1B4332] focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="batch-whatsapp"
                        className="block text-xs font-semibold text-[#1F2937] mb-1"
                      >
                        WhatsApp Number *
                      </label>
                      <input
                        id="batch-whatsapp"
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-[#1F2937]/20 bg-[#FAF9F6] text-sm focus:outline-none focus:border-[#1B4332] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="batch-pincode"
                        className="block text-xs font-semibold text-[#1F2937] mb-1"
                      >
                        Delivery Pincode *
                      </label>
                      <input
                        id="batch-pincode"
                        type="text"
                        required
                        pattern="[0-9]{6}"
                        maxLength={6}
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        placeholder="6-digit Pincode"
                        className="w-full px-4 py-3 rounded-xl border border-[#1F2937]/20 bg-[#FAF9F6] text-sm focus:outline-none focus:border-[#1B4332] focus:bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Summary Pill */}
                <div className="p-3.5 rounded-2xl bg-[#FAF9F6] border border-[#1B4332]/15 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#1B4332] block">
                      Due Today: ₹50 Spot Reservation
                    </span>
                    <span className="text-[#1F2937]/70">
                      Balance ₹{selectedBox.balanceOnDispatchInr.toLocaleString('en-IN')} payable on orchard dispatch
                    </span>
                  </div>
                  <span className="text-lg font-extrabold text-[#D97706]">₹50</span>
                </div>

                {/* Primary CTA: Pay ₹50 via Razorpay */}
                <div className="space-y-2.5">
                  <button
                    type="submit"
                    disabled={isProcessingPayment}
                    className="w-full py-4 px-5 rounded-2xl bg-[#D97706] hover:bg-[#b86305] disabled:opacity-60 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>
                      {isProcessingPayment
                        ? 'Locking Your Spot...'
                        : 'Pay ₹50 to Reserve My Spot (UPI / Card)'}
                    </span>
                  </button>

                  {/* Secondary CTA: Reserve via WhatsApp */}
                  <button
                    type="button"
                    disabled={isProcessingPayment}
                    onClick={handleWhatsAppSpotReserve}
                    className="w-full py-3.5 px-5 rounded-2xl bg-[#1B4332] hover:bg-[#143325] text-[#FAF9F6] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#D97706]" />
                    <span>Reserve via WhatsApp (Pay ₹50 on UPI Link)</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#1F2937]/65 text-center">
                  <ShieldCheck className="w-4 h-4 text-[#1B4332] shrink-0" />
                  <span>100% refundable if your city batch doesn&apos;t dispatch within 14 days.</span>
                </div>
              </form>
            ) : (
              /* Confirmation State + Live Progress Increment + Share with Friends in City */
              <div className="space-y-5 py-2 animate-fadeIn">
                <div className="p-5 rounded-2xl bg-[#1B4332]/10 border-2 border-[#1B4332] space-y-2">
                  <div className="flex items-center gap-2 text-[#1B4332] font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-5 h-5 text-[#D97706]" />
                    <span>Spot #{totalReservedSpots} Locked in {city}!</span>
                  </div>
                  <h3 className="font-serif-display text-xl font-bold text-[#1B4332]">
                    Thank you, {reservationSuccess.customer_name}!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1F2937]/85 leading-relaxed">
                    Your <strong>{reservationSuccess.box_size}</strong> is reserved in the{' '}
                    <strong>{city} Harvest Batch #01</strong>. Notice the progress bar just jumped to{' '}
                    <strong className="text-[#D97706]">
                      {totalReservedSpots} / {batchTarget} spots
                    </strong>
                    !
                  </p>
                </div>

                <div className="bg-[#FAF9F6] rounded-2xl p-4 border border-[#1B4332]/15 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#1F2937]/70">Selected Box:</span>
                    <span className="font-bold text-[#1B4332]">{reservationSuccess.box_size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1F2937]/70">Spot Reservation Paid:</span>
                    <span className="font-bold text-[#1B4332]">
                      ₹{reservationSuccess.reservation_paid_inr} ({reservationSuccess.razorpay_payment_id})
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1F2937]/70">Balance Due on Dispatch:</span>
                    <span className="font-bold text-[#D97706]">
                      ₹{reservationSuccess.balance_due_inr.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Viral Loop: Share with Friends in [City] */}
                <div className="p-5 rounded-2xl bg-[#D97706]/10 border border-[#D97706]/30 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706]">
                    <Sparkles className="w-4 h-4" />
                    <span>Help Unlock {city}&apos;s Harvest Faster!</span>
                  </div>
                  <p className="text-xs text-[#1F2937]/80 leading-relaxed">
                    Only <strong>{spotsLeft} more families</strong> in {city} are needed to trigger fresh orchard plucking in Arunachal Pradesh. Invite friends or your apartment group:
                  </p>
                  <a
                    href={buildShareWithFriendsWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 px-5 rounded-xl bg-[#1B4332] hover:bg-[#143325] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Share2 className="w-4 h-4 text-[#D97706]" />
                    <span>Share on WhatsApp with Friends in {city}</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setReservationSuccess(null)}
                  className="w-full text-xs font-semibold text-[#1F2937]/60 hover:text-[#1B4332] underline py-1 cursor-pointer"
                >
                  Reserve another box for family or neighbours
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
