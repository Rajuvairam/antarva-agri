import React, { useState } from 'react';
import {
  Sprout,
  HeartHandshake,
  MessageSquareText,
  Smartphone,
  Landmark,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/cropData';
import { insertFarmerRegistrationToSupabase } from '../lib/supabase';

const ENABLEMENT_PILLARS = [
  {
    number: '01',
    title: 'Soil Restoration Roadmap',
    subtitle: 'Heal Depleted Land Without Expensive Chemicals',
    description:
      'We test your plot’s organic carbon, pH, and microbial health, then provide a step-by-step 3-season regeneration plan using on-farm bio-cultures like Jeevamrutham and living mulch—slashing input expenses by up to 60%.',
    badge: 'Zero Urea Debt Trap',
    icon: Sprout,
  },
  {
    number: '02',
    title: 'Resilient & Heirloom Seeds',
    subtitle: 'Climate-Hardened Non-GMO Planting Material',
    description:
      'Access indigenous, pest-resistant, and high-nutrition seed strains matched to your village micro-climate and altitude so erratic rains or dry spells don’t wipe out your season’s hard work.',
    badge: 'Seed Sovereignty',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Ancient + AI Advisory via WhatsApp & Voice',
    subtitle: 'In Your Own Local Language',
    description:
      'No complex apps needed. Receive timely voice notes and WhatsApp alerts in Assamese, Hindi, Nyishi, Khasi, or Tamil combining traditional Vrikshayurveda wisdom with hyper-local weather & pest predictions.',
    badge: 'Voice & WhatsApp First',
    icon: MessageSquareText,
  },
  {
    number: '04',
    title: 'Smartphone Traceability Passport',
    subtitle: 'Prove Your Crop’s Purity to Premium Buyers',
    description:
      'With simple photos and voice logs, your harvest receives an official Antarva Digital Crop Passport. Consumers see your name, village, and chemical-free cultivation story—rewarding your honesty with premium pricing.',
    badge: 'Identity & Pride',
    icon: Smartphone,
  },
  {
    number: '05',
    title: '100% Direct Bank Payouts (0% Middleman Deduction)',
    subtitle: 'Pre-Booked Demand Before You Harvest',
    description:
      'Because we pre-sell your harvest to conscious families and bulk buyers 60–90 days ahead, you never face distress selling at the mandi. Payment goes 100% directly into your bank account upon farm-gate grading.',
    badge: '0% Commission Cut',
    icon: Landmark,
  },
];

export const Farmers: React.FC = () => {
  const [farmerOrFpoName, setFarmerOrFpoName] = useState('');
  const [roleType, setRoleType] = useState('Individual Smallholder Farmer');
  const [villageDistrictState, setVillageDistrictState] = useState('');
  const [landSizeOrMemberCount, setLandSizeOrMemberCount] = useState('');
  const [primaryCrops, setPrimaryCrops] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [farmingPractice, setFarmingPractice] = useState(
    'Natural / Chemical-Free (Traditional)'
  );
  const [preferredLanguage, setPreferredLanguage] = useState('Assamese / Hindi / English');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOnboardingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!farmerOrFpoName.trim() || !villageDistrictState.trim() || !whatsappNumber.trim()) {
      return;
    }
    setIsSubmitting(true);
    await insertFarmerRegistrationToSupabase({
      farmer_or_fpo_name: farmerOrFpoName.trim(),
      entity_type: roleType,
      village_district_state: villageDistrictState.trim(),
      land_size_or_members: landSizeOrMemberCount.trim(),
      crops_grown: primaryCrops.trim(),
      whatsapp: whatsappNumber.trim(),
      farming_practice: `${farmingPractice} (Lang: ${preferredLanguage})`,
      onboarding_status: 'submitted',
    });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const buildFarmerWhatsAppUrl = () => {
    const message = [
      `Namaste Antarva Agri Kisan Mitra Desk! I would like to register as a Partner Farmer / FPO.`,
      ``,
      `*Name / FPO:* ${farmerOrFpoName}`,
      `*Category:* ${roleType}`,
      `*Village, District & State:* ${villageDistrictState}`,
      `*Acreage / Members:* ${landSizeOrMemberCount}`,
      `*Primary Crops:* ${primaryCrops}`,
      `*Farming Practice:* ${farmingPractice}`,
      `*Preferred Language:* ${preferredLanguage}`,
      `*Phone / WhatsApp:* ${whatsappNumber}`,
    ].join('\n');
    return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1F2937]">
      {/* =====================================================================
          1. HERO: MAKING SOIL HEALTHIER, LIVELIHOODS FAIRER, AND FARMING JOYFUL
      ====================================================================== */}
      <section className="bg-[#1B4332] text-[#FAF9F6] py-16 lg:py-24 border-b border-[#FAF9F6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF9F6]/10 border border-[#FAF9F6]/20 text-xs font-bold uppercase tracking-wider text-[#D97706]">
                <Users className="w-4 h-4" />
                <span>Built for India&apos;s 85%+ Small &amp; Marginal Farmers &amp; FPOs</span>
              </div>

              <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-white leading-tight">
                Making soil healthier, livelihoods fairer, and farming joyful again.
              </h1>

              <p className="text-base sm:text-lg text-[#FAF9F6]/85 leading-relaxed max-w-3xl">
                Over 85% of India&apos;s farmers cultivate less than two hectares of land—yet they bear the brunt of rising chemical input costs, soil exhaustion, climate unpredictability, and exploitative middleman chains. Antarva Agri stands beside smallholders and FPOs as a full-stack partner from seed to assured bank payout.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#farmer-onboarding-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#D97706] hover:bg-[#b86305] text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>Join as a Partner Farmer or FPO</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#FAF9F6]/5 border border-[#FAF9F6]/15 rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <HeartHandshake className="w-7 h-7 text-[#D97706]" />
                <h2 className="font-serif-display text-xl font-bold text-white">
                  Our Farmer Guarantee
                </h2>
              </div>
              <ul className="space-y-3 text-sm text-[#FAF9F6]/90">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
                  <span>Zero hidden mandi commissions or arbitrary weight deductions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
                  <span>Free soil organic carbon diagnostic &amp; Jeevamrutham transition training</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
                  <span>Your name &amp; village honoured on every consumer Digital Crop Passport</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. FULL-STACK FARMER ENABLEMENT CARDS
      ====================================================================== */}
      <section className="py-16 lg:py-24 border-b border-[#1B4332]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#D97706]" />
              <span>5-Pillar Smallholder Enablement Stack</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              Everything You Need to Grow Chemical-Free &amp; Sell With Dignity
            </h2>
            <p className="text-sm sm:text-base text-[#1F2937]/80">
              We don&apos;t ask smallholders to take uncalculated risks. We walk with you through soil healing, resilient seed selection, local-language advisory, and guaranteed pre-booked off-take.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENABLEMENT_PILLARS.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              const isLast = idx === ENABLEMENT_PILLARS.length - 1;
              return (
                <div
                  key={pillar.number}
                  className={`rounded-3xl p-7 border-2 transition-all flex flex-col justify-between ${
                    isLast
                      ? 'md:col-span-2 lg:col-span-2 bg-[#1B4332] text-[#FAF9F6] border-[#1B4332]'
                      : 'bg-white text-[#1F2937] border-[#1B4332]/15 hover:border-[#1B4332]'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                          isLast ? 'bg-[#D97706] text-white' : 'bg-[#1B4332]/10 text-[#1B4332]'
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${
                          isLast
                            ? 'bg-[#FAF9F6]/15 text-[#D97706]'
                            : 'bg-[#D97706]/15 text-[#D97706]'
                        }`}
                      >
                        {pillar.badge}
                      </span>
                    </div>

                    <div>
                      <span
                        className={`text-xs font-semibold block ${
                          isLast ? 'text-[#FAF9F6]/75' : 'text-[#D97706]'
                        }`}
                      >
                        Pillar {pillar.number} • {pillar.subtitle}
                      </span>
                      <h3
                        className={`font-serif-display text-2xl font-bold mt-1 ${
                          isLast ? 'text-white' : 'text-[#1B4332]'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>

                    <p
                      className={`text-sm leading-relaxed ${
                        isLast ? 'text-[#FAF9F6]/90 max-w-2xl' : 'text-[#1F2937]/80'
                      }`}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. FARMER / FPO ONBOARDING FORM
      ====================================================================== */}
      <section id="farmer-onboarding-form" className="py-16 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border-2 border-[#1B4332] shadow-xl p-6 sm:p-10">
            <div className="space-y-2 pb-6 mb-6 border-b border-[#1B4332]/15">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                Kisan &amp; FPO Partnership Desk
              </span>
              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1B4332]">
                Farmer &amp; FPO Onboarding Registration
              </h2>
              <p className="text-sm text-[#1F2937]/75">
                Whether you are an individual smallholder orchardist, a self-help group (SHG), or a Farmer Producer Organization (FPO), register below to schedule a field agronomist call in your preferred language.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleOnboardingSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="farmer-name"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                    >
                      Farmer Name or FPO / SHG Name *
                    </label>
                    <input
                      id="farmer-name"
                      type="text"
                      required
                      value={farmerOrFpoName}
                      onChange={(e) => setFarmerOrFpoName(e.target.value)}
                      placeholder="e.g., Pema Wangchuk / Bichom Organic FPO"
                      className="w-full px-4 py-3 rounded-xl border border-[#1F2937]/20 bg-[#FAF9F6] text-sm focus:outline-none focus:border-[#1B4332] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="farmer-role"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                    >
                      Registration Category *
                    </label>
                    <select
                      id="farmer-role"
                      value={roleType}
                      onChange={(e) => setRoleType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#1F2937]/20 bg-[#FAF9F6] text-sm focus:outline-none focus:border-[#1B4332] focus:bg-white"
                    >
                      <option value="Individual Smallholder Farmer">
                        Individual Smallholder Farmer
                      </option>
                      <option value="Farmer Producer Organization (FPO / FPC)">
                        Farmer Producer Organization (FPO / FPC)
                      </option>
                      <option value="Village Cooperative / Women SHG">
                        Village Cooperative / Women SHG
                      </option>
                      <option value="Traditional Rural Artisan (Oils / Jaggery)">
                        Traditional Rural Artisan (Wood-Pressed Oils / Palm Jaggery)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="farmer-location"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                    >
                      Village, District &amp; State *
                    </label>
                    <input
                      id="farmer-location"
                      type="text"
                      required
                      value={villageDistrictState}
                      onChange={(e) => setVillageDistrictState(e.target.value)}
                      placeholder="e.g., Dirang, West Kameng, Arunachal Pradesh"
                      className="w-full px-4 py-3 rounded-xl border border-[#1F2937]/20 bg-[#FAF9F6] text-sm focus:outline-none focus:border-[#1B4332] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="farmer-land"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                    >
                      Cultivated Land Size (or FPO Member Count) *
                    </label>
                    <input
                      id="farmer-land"
                      type="text"
                      required
                      value={landSizeOrMemberCount}
                      onChange={(e) => setLandSizeOrMemberCount(e.target.value)}
                      placeholder="e.g., 2.5 Acres or 120 Smallholder Members"
                      className="w-full px-4 py-3 rounded-xl border border-[#1F2937]/20 bg-[#FAF9F6] text-sm focus:outline-none focus:border-[#1B4332] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="farmer-crops"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                    >
                      Crops Grown *
                    </label>
                    <input
                      id="farmer-crops"
                      type="text"
                      required
                      value={primaryCrops}
                      onChange={(e) => setPrimaryCrops(e.target.value)}
                      placeholder="e.g., Kiwi, Turmeric, Assam Tea"
                      className="w-full px-4 py-3 rounded-xl border border-[#1F2937]/20 bg-[#FAF9F6] text-sm focus:outline-none focus:border-[#1B4332] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="farmer-whatsapp"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                    >
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="farmer-whatsapp"
                      type="tel"
                      required
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-[#1F2937]/20 bg-[#FAF9F6] text-sm focus:outline-none focus:border-[#1B4332] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="farmer-practice"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                    >
                      Current Farming Practice *
                    </label>
                    <select
                      id="farmer-practice"
                      value={farmingPractice}
                      onChange={(e) => setFarmingPractice(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#1F2937]/20 bg-[#FAF9F6] text-sm focus:outline-none focus:border-[#1B4332] focus:bg-white"
                    >
                      <option value="Natural / Chemical-Free (Traditional)">
                        Natural / Chemical-Free (Traditional)
                      </option>
                      <option value="Certified Organic (NPOP / PGS)">
                        Certified Organic (NPOP / PGS)
                      </option>
                      <option value="Transitioning to Chemical-Free">
                        Transitioning to Chemical-Free (Need Soil Support)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="farmer-lang"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                    >
                      Preferred Voice Language
                    </label>
                    <select
                      id="farmer-lang"
                      value={preferredLanguage}
                      onChange={(e) => setPreferredLanguage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#1F2937]/20 bg-[#FAF9F6] text-sm focus:outline-none focus:border-[#1B4332] focus:bg-white"
                    >
                      <option value="Assamese / Hindi / English">Assamese / Hindi / English</option>
                      <option value="Arunachali (Nyishi / Monpa / Hindi)">
                        Arunachali (Nyishi / Monpa / Hindi)
                      </option>
                      <option value="Khasi / Jaintia / Garo">Khasi / Jaintia / Garo</option>
                      <option value="Tamil / Kannada / Telugu">Tamil / Kannada / Telugu</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-[#D97706] hover:bg-[#b86305] disabled:opacity-60 text-white font-bold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>
                    {isSubmitting
                      ? 'Saving Registration...'
                      : 'Register With Antarva Agri Kisan Desk'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="space-y-5 py-4">
                <div className="p-5 rounded-2xl bg-[#1B4332]/10 border border-[#1B4332]/25 flex items-start gap-3.5">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4332] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1B4332] block">
                      Farmer / FPO Registration Received
                    </span>
                    <h3 className="font-bold text-lg text-[#1F2937] mt-0.5">
                      Namaste, {farmerOrFpoName}!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1F2937]/80 mt-1">
                      Our regional field agronomist will reach out to you on{' '}
                      <strong>{whatsappNumber}</strong> in <strong>{preferredLanguage}</strong> to schedule your soil health onboarding and crop passport setup.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={buildFarmerWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3.5 px-5 rounded-xl bg-[#1B4332] hover:bg-[#143325] text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Send Registration Details on WhatsApp Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3.5 rounded-xl border border-[#1B4332]/25 text-xs font-bold text-[#1B4332] hover:bg-[#1B4332]/5 cursor-pointer"
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
