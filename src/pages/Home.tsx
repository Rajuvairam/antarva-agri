import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Sprout,
  Calendar,
  CheckCircle2,
  MapPin,
  ArrowRight,
  MessageCircle,
  Leaf,
  Award,
  BellRing,
  QrCode,
  UserCheck,
  Truck,
  HeartHandshake,
  Users,
} from 'lucide-react';
import {
  POPULAR_CITY_HUBS,
  FOOD_STORY_CARDS,
  HOW_HARVEST_REACHES_YOU_STEPS,
  PANTRY_WAITLIST_ITEMS,
  BRAND_CONFIG,
} from '../data/cropData';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  // City Harvest Drop Launcher State
  const [cityInput, setCityInput] = useState('Bengaluru');

  // Kitchen Waitlist State
  const [notifiedItems, setNotifiedItems] = useState<Record<string, boolean>>({});

  const handleCityBatchLaunch = (e: React.FormEvent) => {
    e.preventDefault();
    const targetCity = cityInput.trim() || 'Bengaluru';
    navigate(`/batch?city=${encodeURIComponent(targetCity)}`);
  };

  const handleQuickCitySelect = (cityName: string) => {
    setCityInput(cityName);
  };

  const handleWaitlistNotify = (itemTitle: string, itemId: string) => {
    setNotifiedItems((prev) => ({ ...prev, [itemId]: true }));
    const text = `Hello Antarva Agri! Please notify me on WhatsApp when *${itemTitle}* is freshly harvested and ready to order.`;
    window.open(
      `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const getStoryCardIcon = (id: string) => {
    switch (id) {
      case 'who-grew-it':
        return <UserCheck className="w-6 h-6 text-[#D97706]" />;
      case 'when-plucked':
        return <Calendar className="w-6 h-6 text-[#D97706]" />;
      case 'what-was-used':
        return <Sprout className="w-6 h-6 text-[#D97706]" />;
      default:
        return <Award className="w-6 h-6 text-[#D97706]" />;
    }
  };

  const getStepIcon = (index: number) => {
    if (index === 0) return <Sprout className="w-6 h-6 text-[#D97706]" />;
    if (index === 1) return <Calendar className="w-6 h-6 text-[#D97706]" />;
    return <Truck className="w-6 h-6 text-[#D97706]" />;
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1F2937]">
      {/* =====================================================================
          SECTION 1: CLEAN, WARM HERO + "CHECK YOUR CITY'S HARVEST BATCH" LAUNCHER
      ====================================================================== */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24 border-b border-[#1B4332]/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              'radial-gradient(circle at 12% 18%, rgba(27, 67, 50, 0.07) 0%, transparent 45%), radial-gradient(circle at 88% 82%, rgba(217, 119, 6, 0.08) 0%, transparent 45%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Side: Story & Trust */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1B4332]/10 border border-[#1B4332]/20 text-[#1B4332] text-xs sm:text-sm font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D97706]" />
                <span>Fresh Seasonal Harvest — Arunachal Pradesh Kiwis</span>
              </div>

              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#1B4332] leading-[1.14] tracking-tight">
                Sweet, tree-ripened Kiwis. Meet the farmer who grew your box.
              </h1>

              <p className="text-base sm:text-xl text-[#1F2937]/80 leading-relaxed max-w-2xl">
                Most store-bought fruit sits in cold storage for months. Our Kiwis are plucked fresh from mountain orchards in Arunachal Pradesh and sent straight to your home—with zero toxic chemicals.
              </p>

              {/* 3 Simple Visual Trust Pills with Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="flex items-center gap-3 bg-white px-4 py-3.5 rounded-2xl border border-[#1B4332]/15 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#1B4332]/10 flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5 text-[#1B4332]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1B4332] leading-snug">
                    Know Your Farmer&apos;s Name &amp; Story
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-white px-4 py-3.5 rounded-2xl border border-[#1B4332]/15 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#D97706]/15 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-[#D97706]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1B4332] leading-snug">
                    See the Exact Day It Was Plucked
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-white px-4 py-3.5 rounded-2xl border border-[#1B4332]/15 shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#1B4332]/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#1B4332]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1B4332] leading-snug">
                    100% Free of Toxic Chemicals
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Exciting "Check Your City's Harvest Batch" Launcher Card */}
            <div
              id="kiwi-order-widget"
              className="lg:col-span-5 bg-white rounded-3xl border-2 border-[#1B4332] shadow-xl p-6 sm:p-8"
            >
              <div className="space-y-4 pb-5 mb-5 border-b border-[#1B4332]/10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332] text-[#FAF9F6] text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] animate-ping" />
                  <span>LIVE COMMUNITY HARVEST DROP — 30 SPOTS PER CITY</span>
                </div>

                <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1B4332] leading-snug">
                  Unlock a Fresh Kiwi Batch for Your City
                </h2>

                <p className="text-sm text-[#1F2937]/80 leading-relaxed">
                  We don&apos;t keep fruit in cold storage. Once 30 families in your city reserve a spot, our farmers in Arunachal Pradesh pluck and dispatch a fresh Kiwi batch straight to your city!
                </p>
              </div>

              <form onSubmit={handleCityBatchLaunch} className="space-y-5">
                {/* Interactive City Input */}
                <div>
                  <label
                    htmlFor="city-selector-input"
                    className="block text-xs font-bold uppercase tracking-wider text-[#1F2937]/80 mb-2"
                  >
                    Enter or Select Your City
                  </label>
                  <div className="relative">
                    <MapPin className="w-5 h-5 text-[#D97706] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="city-selector-input"
                      type="text"
                      required
                      value={cityInput}
                      onChange={(e) => setCityInput(e.target.value)}
                      placeholder="Type your city (e.g., Bengaluru, Pune, Kochi...)"
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl border-2 border-[#1B4332]/25 bg-[#FAF9F6] text-sm sm:text-base font-semibold text-[#1B4332] focus:outline-none focus:border-[#1B4332] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Popular City Hubs Quick-Select Pills */}
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#1F2937]/60 mb-2">
                    Popular Active City Drops:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {POPULAR_CITY_HUBS.map((hub) => {
                      const isSelected =
                        cityInput.trim().toLowerCase() === hub.city.toLowerCase();
                      return (
                        <button
                          key={hub.city}
                          type="button"
                          onClick={() => handleQuickCitySelect(hub.city)}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-[#1B4332] text-[#FAF9F6] border-[#1B4332] shadow-2xs'
                              : 'bg-[#FAF9F6] text-[#1F2937]/80 border-[#1B4332]/15 hover:border-[#1B4332]/40 hover:text-[#1B4332]'
                          }`}
                        >
                          {hub.city}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Big Amber Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#D97706] hover:bg-[#b86305] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Buy Now &amp; Check City Batch Status -&gt;</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-[#1B4332] font-semibold bg-[#1B4332]/5 py-2.5 px-3 rounded-xl">
                  <Users className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>Reserve your spot today for just ₹50 • Pay balance on dispatch</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: "WHAT'S INSIDE YOUR FOOD STORY" (SIMPLE 4-CARD VISUAL GRID)
      ====================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-[#1B4332]/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-wider">
              <QrCode className="w-4 h-4 text-[#D97706]" />
              <span>What&apos;s Inside Your Food Story</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              Every Box Comes With the True Story of Your Food
            </h2>
            <p className="text-base sm:text-lg text-[#1F2937]/80">
              Scan the QR code on your box to see four simple things:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOOD_STORY_CARDS.map((card) => {
              const isGiCard = card.id === 'blockchain-gi-seal';
              return (
                <div
                  key={card.id}
                  className={`rounded-3xl p-6 sm:p-7 border-2 transition-all flex flex-col justify-between ${
                    isGiCard
                      ? 'bg-[#1B4332] text-[#FAF9F6] border-[#1B4332] shadow-md'
                      : 'bg-[#FAF9F6] text-[#1F2937] border-[#1B4332]/15 hover:border-[#1B4332]/40'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                          isGiCard
                            ? 'bg-[#FAF9F6]/10 border border-[#FAF9F6]/20'
                            : 'bg-white border border-[#1B4332]/10 shadow-2xs'
                        }`}
                      >
                        {getStoryCardIcon(card.id)}
                      </div>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          isGiCard
                            ? 'bg-[#D97706] text-white'
                            : 'bg-[#1B4332]/10 text-[#1B4332]'
                        }`}
                      >
                        {card.stepLabel}
                      </span>
                    </div>

                    <h3
                      className={`font-serif-display text-xl font-bold leading-snug ${
                        isGiCard ? 'text-white' : 'text-[#1B4332]'
                      }`}
                    >
                      {card.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed ${
                        isGiCard ? 'text-[#FAF9F6]/90' : 'text-[#1F2937]/80'
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>

                  <div
                    className={`mt-6 pt-4 border-t text-xs font-bold flex items-center gap-1.5 ${
                      isGiCard
                        ? 'border-[#FAF9F6]/15 text-[#D97706]'
                        : 'border-[#1B4332]/10 text-[#1B4332]'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                    <span>{card.highlightTag}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: SIMPLE 3-STEP VISUAL STRIP ("HOW YOUR HARVEST REACHES YOU")
      ====================================================================== */}
      <section className="py-16 sm:py-20 border-b border-[#1B4332]/10 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-2.5 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              Simple, Honest &amp; Direct
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              How Your Harvest Reaches You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_HARVEST_REACHES_YOU_STEPS.map((step, index) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-3xl border border-[#1B4332]/15 p-7 shadow-xs flex flex-col justify-between relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#1B4332]/10 flex items-center justify-center">
                        {getStepIcon(index)}
                      </div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#D97706]">
                        {step.stepNumber}
                      </span>
                    </div>
                    {index < HOW_HARVEST_REACHES_YOU_STEPS.length - 1 && (
                      <ArrowRight className="hidden md:block w-5 h-5 text-[#1B4332]/35" />
                    )}
                  </div>

                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#1B4332]">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#1F2937]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: "COMING SOON TO YOUR KITCHEN" (CLEAN 3-COLUMN PRODUCT GRID)
      ====================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#1B4332]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D97706]/15 text-[#D97706] text-xs font-bold uppercase tracking-wider">
              <BellRing className="w-4 h-4" />
              <span>Small-Batch Family Pantry</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              Coming Soon to Your Kitchen
            </h2>
            <p className="text-sm sm:text-base text-[#1F2937]/80">
              Pure, unrefined everyday essentials sourced directly from traditional farming families and rural artisans. Tap any item to get a WhatsApp alert when the fresh batch is ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PANTRY_WAITLIST_ITEMS.map((item) => {
              const isNotified = Boolean(notifiedItems[item.id]);
              return (
                <div
                  key={item.id}
                  className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
                    item.isBlockchainGiVerified
                      ? 'bg-[#FAF9F6] border-2 border-[#D97706] shadow-md'
                      : 'bg-[#FAF9F6] border border-[#1B4332]/15 shadow-xs hover:shadow-md'
                  }`}
                >
                  <div className="space-y-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      {item.isBlockchainGiVerified ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B4332] text-[#FAF9F6] text-xs font-bold shadow-2xs">
                          <Award className="w-3.5 h-3.5 text-[#D97706]" />
                          <span>Blockchain Verified GI Origin</span>
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold">
                          {item.badge}
                        </span>
                      )}

                      <span className="text-xs font-semibold text-[#1F2937]/65 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                        <span>{item.originRegion}</span>
                      </span>
                    </div>

                    <div className="pt-1">
                      <h3 className="font-serif-display text-xl font-bold text-[#1B4332]">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#D97706] mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-[#1F2937]/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#1B4332]/10">
                    <button
                      type="button"
                      onClick={() => handleWaitlistNotify(item.title, item.id)}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isNotified
                          ? 'bg-[#1B4332]/10 text-[#1B4332] border border-[#1B4332]/30'
                          : 'bg-[#1B4332] hover:bg-[#143325] text-[#FAF9F6]'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4 text-[#D97706]" />
                      <span>
                        {isNotified ? 'Added to WhatsApp Alert List' : 'Notify Me on WhatsApp'}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: WARM FAMILY PROMISE BANNER
      ====================================================================== */}
      <section className="py-16 bg-[#1B4332] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#FAF9F6]/5 border border-[#FAF9F6]/15 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D97706] text-white text-xs font-bold uppercase tracking-wider">
                <Leaf className="w-3.5 h-3.5" />
                <span>Our Promise to Your Home</span>
              </div>
              <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-white leading-tight">
                Real food grown in living soil—without toxic sprays or artificial ripeners.
              </h2>
              <p className="text-sm sm:text-base text-[#FAF9F6]/85 leading-relaxed">
                Every box you order supports small mountain and village farming families directly, while bringing honest, freshly plucked nutrition to your kitchen table.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <a
                href="#kiwi-order-widget"
                className="w-full sm:w-auto py-4 px-7 rounded-2xl bg-[#D97706] hover:bg-[#b86305] text-white font-bold text-sm sm:text-base text-center shadow-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <HeartHandshake className="w-5 h-5" />
                <span>Check Your City&apos;s Harvest Batch</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
