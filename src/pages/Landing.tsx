import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sprout,
  ShieldCheck,
  MapPin,
  QrCode,
  Award,
  Cpu,
  Truck,
  Leaf,
  CheckCircle2,
  Hash,
  UserCheck,
  Layers,
  Sparkles,
  TrendingUp,
  MessageSquareText,
  Landmark,
} from 'lucide-react';

type FarmerStackTab = 'soil' | 'advisory' | 'yield';
type PassportTab = 'pest' | 'geography' | 'farmer';

interface EcosystemPillar {
  number: string;
  title: string;
  tag: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
}

const FIVE_ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    number: '01',
    title: 'Soil Enrichment Plan',
    tag: 'LIVING TOPSOIL REGENERATION',
    description:
      'Custom soil diagnostics and step-by-step organic carbon enrichment plans that restore microbial life, balance micronutrients naturally, and reverse chemical soil exhaustion.',
    icon: Sprout,
  },
  {
    number: '02',
    title: 'AI Guide for Organic & Natural Farming',
    tag: '24/7 FIELD ADVISORY',
    description:
      'Accessible, AI-powered guidance helping farmers transition to 100% organic and natural farming—providing exact bio-input recipes, natural pest remedies, and stage-wise crop care.',
    icon: MessageSquareText,
  },
  {
    number: '03',
    title: 'Yield Prediction & Crop Planning',
    tag: 'CLIMATE & DEMAND INTELLIGENCE',
    description:
      'AI-driven yield forecasting and seasonal crop planning aligned with micro-climate patterns and real market demand—reducing crop gluts and post-harvest distress.',
    icon: TrendingUp,
  },
  {
    number: '04',
    title: 'Blockchain & GI-Tag Traceability',
    tag: 'IMMUTABLE ORIGIN PROOF',
    description:
      'Every batch is minted with a Digital Crop Passport on the blockchain—verifying the exact farmer, GPS geography, GI-tag authenticity, and zero-chemical pest management logs.',
    icon: Hash,
  },
  {
    number: '05',
    title: 'Direct Access to Market',
    tag: 'ZERO-MIDDLEMAN LINKAGE',
    description:
      "Direct farm-gate linkage to city consumer group-buys and institutional wholesale buyers, ensuring transparent payouts directly into the farmer's bank account.",
    icon: Landmark,
    featured: true,
  },
];

export const Landing: React.FC = () => {
  const [farmerTab, setFarmerTab] = useState<FarmerStackTab>('soil');
  const [passportTab, setPassportTab] = useState<PassportTab>('pest');

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1F2937]">
      {/* =====================================================================
          SECTION 1: HERO — COMPLETE SOIL-TO-MARKET SHOWCASE
      ====================================================================== */}
      <section className="relative overflow-hidden bg-[#1B4332] text-[#FAF9F6] py-16 sm:py-20 lg:py-28 border-b border-[#FAF9F6]/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 20%, rgba(217, 119, 6, 0.22) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(250, 249, 246, 0.08) 0%, transparent 45%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-7">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FAF9F6]/10 border border-[#FAF9F6]/20 text-xs font-bold uppercase tracking-wider text-[#D97706]">
              <Sprout className="w-4 h-4 shrink-0" />
              <span>SOIL ENRICHMENT • AI NATURAL FARMING • GI &amp; BLOCKCHAIN TRACED</span>
            </div>

            <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.12] tracking-tight">
              From Living Soil &amp; AI Crop Planning to Blockchain-Verified Markets.
            </h1>

            <p className="text-base sm:text-xl text-[#FAF9F6]/85 leading-relaxed max-w-3xl">
              A complete showcase of what Antarva Agri does: we equip farmers with custom soil enrichment plans, AI guides for organic farming, and yield prediction—then connect their GI-tagged harvests directly to markets with blockchain traceability.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/explore"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-[#D97706] hover:bg-[#b86305] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all"
              >
                <span>Explore Live Platform →</span>
              </Link>

              <Link
                to="/farmers"
                className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-transparent hover:bg-[#FAF9F6]/10 text-[#FAF9F6] border-2 border-[#FAF9F6]/30 hover:border-[#FAF9F6]/60 font-bold text-base transition-all"
              >
                <span>Partner as a Farmer →</span>
              </Link>
            </div>

            {/* Full Lifecycle Micro-Strip */}
            <div className="pt-7 border-t border-[#FAF9F6]/15 grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs text-[#FAF9F6]/85">
              <div className="flex items-center gap-2">
                <Sprout className="w-4 h-4 text-[#D97706] shrink-0" />
                <span className="font-semibold">Soil Enrichment</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#D97706] shrink-0" />
                <span className="font-semibold">AI Organic Guide</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#D97706] shrink-0" />
                <span className="font-semibold">Yield &amp; Crop Plan</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D97706] shrink-0" />
                <span className="font-semibold">GI &amp; Blockchain</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Truck className="w-4 h-4 text-[#D97706] shrink-0" />
                <span className="font-semibold">Direct Market Link</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: WHAT WE DO — OUR 5-PILLAR SOIL-TO-MARKET ECOSYSTEM
      ====================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-[#1B4332]/15 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#D97706]" />
              <span>End-to-End Agricultural Stack</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              What We Do: Empowering Every Step From Soil to Market
            </h2>
            <p className="text-base sm:text-lg text-[#1F2937]/80 leading-relaxed">
              We don&apos;t just trade produce—we partner with farmers before a single seed is planted and trace the harvest all the way to the kitchen table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {FIVE_ECOSYSTEM_PILLARS.map((pillar, index) => {
              const IconComponent = pillar.icon;
              const colSpanClass = index < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
              const isFeatured = Boolean(pillar.featured);

              return (
                <div
                  key={pillar.number}
                  className={`${colSpanClass} rounded-3xl p-7 sm:p-8 border-2 transition-all flex flex-col justify-between space-y-5 ${
                    isFeatured
                      ? 'bg-[#1B4332] text-[#FAF9F6] border-[#1B4332] shadow-md'
                      : 'bg-white text-[#1F2937] border-[#1B4332]/15 hover:border-[#1B4332] shadow-xs'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                          isFeatured
                            ? 'bg-[#D97706] text-white'
                            : 'bg-[#1B4332] text-[#D97706]'
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <span
                        className={`font-mono text-xs font-extrabold px-2.5 py-1 rounded-full ${
                          isFeatured
                            ? 'bg-[#FAF9F6]/15 text-[#FAF9F6]'
                            : 'bg-[#1B4332]/10 text-[#1B4332]'
                        }`}
                      >
                        PILLAR {pillar.number}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block">
                        {pillar.tag}
                      </span>
                      <h3
                        className={`font-serif-display text-xl sm:text-2xl font-bold mt-1 ${
                          isFeatured ? 'text-white' : 'text-[#1B4332]'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                    </div>

                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        isFeatured ? 'text-[#FAF9F6]/90' : 'text-[#1F2937]/80'
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
          SECTION 3: INTERACTIVE DUAL PREVIEW — "INSIDE OUR TECHNOLOGY STACK"
      ====================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#1B4332]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D97706]/15 text-[#D97706] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Upstream Farm Intelligence + Downstream On-Chain Proof</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              Inside Our Technology Stack
            </h2>
            <p className="text-base sm:text-lg text-[#1F2937]/80">
              See how orchard-level AI soil and crop intelligence connects directly to the blockchain Digital Crop Passport scanned by buyers and households.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* LEFT CARD — FARMER AI & SOIL INTELLIGENCE PREVIEW */}
            <div className="rounded-3xl bg-[#FAF9F6] border-2 border-[#1B4332]/25 shadow-lg overflow-hidden flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="bg-[#1B4332] text-[#FAF9F6] p-6 sm:p-7 border-b border-[#FAF9F6]/15 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6]/10 border border-[#FAF9F6]/20 text-[11px] font-bold uppercase tracking-wider text-[#D97706]">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Farmer AI &amp; Soil Intelligence Preview</span>
                    </span>
                    <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Active Advisory</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#FAF9F6]/70 block">
                      Sample Partner Orchard Profile
                    </span>
                    <h3 className="font-serif-display text-2xl font-bold text-white mt-0.5">
                      Bichom Valley Cluster #04
                    </h3>
                  </div>
                </div>

                {/* 3 Core Farmer Intelligence Metrics */}
                <div className="p-6 sm:p-7 space-y-3.5">
                  <div className="p-4 rounded-2xl bg-white border border-[#1B4332]/15 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706]">
                      <Sprout className="w-4 h-4" />
                      <span>Soil Enrichment Status</span>
                    </div>
                    <p className="text-sm font-bold text-[#1B4332]">
                      Organic Carbon +18% • Bio-Compost &amp; Jeevamrut Schedule Active
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#1B4332]/15 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706]">
                      <Leaf className="w-4 h-4" />
                      <span>AI Natural Farming Guide</span>
                    </div>
                    <p className="text-sm font-bold text-[#1B4332]">
                      Neem &amp; Fermented Botanical Pest Shield Recommended (Zero Synthetic Sprays)
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#1B4332]/15 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706]">
                      <TrendingUp className="w-4 h-4" />
                      <span>Crop Plan &amp; Yield Forecast</span>
                    </div>
                    <p className="text-sm font-bold text-[#1B4332]">
                      High-Altitude Kiwi • Projected Harvest: 4.2 MT (Grade A)
                    </p>
                  </div>

                  {/* Interactive Module Switcher */}
                  <div className="pt-2 space-y-3">
                    <div className="grid grid-cols-3 gap-1.5 bg-white p-1.5 rounded-2xl border border-[#1B4332]/15">
                      {(
                        [
                          { id: 'soil', label: 'Soil Plan' },
                          { id: 'advisory', label: 'AI Guide' },
                          { id: 'yield', label: 'Yield Model' },
                        ] as const
                      ).map((tab) => {
                        const active = farmerTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => setFarmerTab(tab.id)}
                            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              active
                                ? 'bg-[#1B4332] text-[#FAF9F6]'
                                : 'text-[#1F2937]/75 hover:text-[#1B4332]'
                            }`}
                          >
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>

                    <div className="p-4 rounded-2xl bg-[#1B4332]/5 border border-[#1B4332]/15 text-xs sm:text-sm text-[#1F2937]/85">
                      {farmerTab === 'soil' && (
                        <p>
                          <strong className="text-[#1B4332]">3-Season Topsoil Prescription:</strong>{' '}
                          Microbial rhizosphere restoration with cow-based Jeevamrut, vermi-compost, and leguminous cover mulching—zero chemical urea.
                        </p>
                      )}
                      {farmerTab === 'advisory' && (
                        <p>
                          <strong className="text-[#1B4332]">Local-Language Voice &amp; WhatsApp Alerts:</strong>{' '}
                          Stage-wise natural foliar sprays and humidity-triggered pest prevention delivered in regional dialects.
                        </p>
                      )}
                      {farmerTab === 'yield' && (
                        <p>
                          <strong className="text-[#1B4332]">Pre-Harvest Market Matching:</strong>{' '}
                          Canopy &amp; weather telemetry locks 4.2 MT across city group-buys and B2B buyers 60 days ahead of picking.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-7 py-3.5 bg-white border-t border-[#1B4332]/10 flex items-center justify-between text-xs font-semibold text-[#1B4332]">
                <span>Delivered via Voice &amp; WhatsApp</span>
                <Link to="/farmers" className="text-[#D97706] font-bold hover:underline">
                  Farmer Program →
                </Link>
              </div>
            </div>

            {/* RIGHT CARD — BLOCKCHAIN & GI TRACEABILITY PASSPORT PREVIEW */}
            <div className="rounded-3xl bg-[#FAF9F6] border-2 border-[#1B4332] shadow-xl overflow-hidden flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="bg-[#1B4332] text-[#FAF9F6] p-6 sm:p-7 border-b border-[#FAF9F6]/15 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6]/10 border border-[#FAF9F6]/20 text-[11px] font-bold uppercase tracking-wider text-[#D97706]">
                      <QrCode className="w-3.5 h-3.5" />
                      <span>Blockchain &amp; GI Traceability Passport</span>
                    </span>

                    <span className="font-mono text-xs px-3 py-1 rounded-lg bg-black/25 border border-white/15 text-[#FAF9F6]/90">
                      Hash <strong className="text-[#D97706]">0x7a4f...9c2e</strong>
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#FAF9F6]/70 block">
                        Linked On-Chain Harvest Batch
                      </span>
                      <h3 className="font-serif-display text-2xl font-bold text-white mt-0.5">
                        Batch #BCH-KW-2601
                      </h3>
                    </div>

                    <div className="shrink-0 p-2.5 rounded-2xl bg-[#FAF9F6] text-[#1B4332] flex flex-col items-center justify-center">
                      <QrCode className="w-8 h-8 text-[#1B4332]" />
                      <span className="text-[9px] font-extrabold uppercase tracking-wider mt-0.5">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3 Core On-Chain Passport Metrics */}
                <div className="p-6 sm:p-7 space-y-3.5">
                  <div className="p-4 rounded-2xl bg-white border border-[#1B4332]/15 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706]">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Pest &amp; Input Log</span>
                    </div>
                    <p className="text-sm font-bold text-[#1B4332]">
                      100% Natural Inputs Verified • Zero Chemical Residue • Carbide-Free
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#1B4332]/15 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706]">
                      <MapPin className="w-4 h-4" />
                      <span>Geography &amp; GI Tag</span>
                    </div>
                    <p className="text-sm font-bold text-[#1B4332]">
                      1,850m Elevation • Arunachal Pradesh GI-Verified Origin
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#1B4332]/15 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706]">
                      <UserCheck className="w-4 h-4" />
                      <span>Farmer &amp; Market Link</span>
                    </div>
                    <p className="text-sm font-bold text-[#1B4332]">
                      Verified Smallholder Orchard • Direct Payout Bypassing Mandi
                    </p>
                  </div>

                  {/* Interactive Verification Tab Switcher */}
                  <div className="pt-2 space-y-3">
                    <div className="grid grid-cols-3 gap-1.5 bg-white p-1.5 rounded-2xl border border-[#1B4332]/15">
                      {(
                        [
                          { id: 'pest', label: 'Pest & Inputs' },
                          { id: 'geography', label: 'Geography & GI' },
                          { id: 'farmer', label: 'Farmer Link' },
                        ] as const
                      ).map((tab) => {
                        const active = passportTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => setPassportTab(tab.id)}
                            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              active
                                ? 'bg-[#1B4332] text-[#FAF9F6]'
                                : 'text-[#1F2937]/75 hover:text-[#1B4332]'
                            }`}
                          >
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>

                    <div className="p-4 rounded-2xl bg-[#1B4332]/5 border border-[#1B4332]/15 text-xs sm:text-sm text-[#1F2937]/85">
                      {passportTab === 'pest' && (
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-[#1B4332]">Zero Synthetic Sprays:</strong>{' '}
                            Every botanical pest-shield application from Bichom Valley Cluster #04 is hashed before harvest sign-off.
                          </span>
                        </p>
                      )}
                      {passportTab === 'geography' && (
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-[#1B4332]">GPS &amp; GI Sealed:</strong>{' '}
                            27.2648° N, 92.4152° E • Authentic Arunachal Pradesh GI belt—eliminating cold-storage mixing.
                          </span>
                        </p>
                      )}
                      {passportTab === 'farmer' && (
                        <p className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-[#1B4332]">100% Direct Farm-Gate Settlement:</strong>{' '}
                            Plucked to pre-booked demand and settled straight into the grower&apos;s account.
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-7 py-3.5 bg-white border-t border-[#1B4332]/10 flex items-center justify-between text-xs font-semibold text-[#1B4332]">
                <span>QR Included in Every Consumer &amp; Bulk Lot</span>
                <Link to="/wholesale" className="text-[#D97706] font-bold hover:underline">
                  Inspect Live Ledger →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: OUR SOIL-TO-MARKET PORTFOLIO (GI-TAGGED & SINGLE-ORIGIN CROPS)
      ====================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] border-b border-[#1B4332]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              GI-Tagged &amp; Single-Origin Harvests
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              Our Soil-to-Market Portfolio
            </h2>
            <p className="text-base sm:text-lg text-[#1F2937]/80 leading-relaxed">
              High-altitude, GI-tagged, and naturally grown harvests cultivated under our soil and AI advisory program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* 1. High-Altitude Arunachal Kiwis */}
            <div className="rounded-3xl bg-white border-2 border-[#1B4332] p-7 sm:p-8 shadow-md flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B4332] text-[#FAF9F6] text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>LIVE HARVEST TRIAL #01</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-serif-display text-2xl font-bold text-[#1B4332]">
                    High-Altitude Arunachal Kiwis
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#1F2937]/70 flex items-center gap-1.5 mt-1.5">
                    <MapPin className="w-4 h-4 text-[#D97706] shrink-0" />
                    <span>Origin: Bichom Valley (1,850m)</span>
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#D97706]/15 text-[#D97706] text-xs font-bold">
                  <Award className="w-3.5 h-3.5 shrink-0" />
                  <span>Soil-Enriched • GI-Origin • Blockchain Traced</span>
                </div>

                <p className="text-sm sm:text-base text-[#1F2937]/80 leading-relaxed">
                  Sweet, tree-ripened mountain kiwis grown under our organic soil enrichment and botanical pest-shield program—plucked fresh to order for 30-family city harvest drops.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/explore"
                  className="w-full py-3.5 px-5 rounded-2xl bg-[#D97706] hover:bg-[#b86305] text-white font-bold text-sm shadow-sm hover:shadow-md transition-all inline-flex items-center justify-center"
                >
                  <span>Explore &amp; Reserve →</span>
                </Link>
              </div>
            </div>

            {/* 2. Himalayan Mountain Walnuts */}
            <div className="rounded-3xl bg-white border-2 border-[#1B4332]/15 hover:border-[#1B4332]/50 p-7 sm:p-8 shadow-xs transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D97706]/15 text-[#D97706] text-xs font-bold uppercase tracking-wider">
                    <span>UPCOMING SEASON</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-serif-display text-2xl font-bold text-[#1B4332]">
                    Himalayan Mountain Walnuts
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#1F2937]/70 flex items-center gap-1.5 mt-1.5">
                    <MapPin className="w-4 h-4 text-[#D97706] shrink-0" />
                    <span>Origin: High-Altitude Arunachal Orchards</span>
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                  <span>AI Crop Planned • Single-Origin • Chemical-Free</span>
                </div>

                <p className="text-sm sm:text-base text-[#1F2937]/80 leading-relaxed">
                  Cold-mountain thin-shell harvests guided by micro-climate yield planning and slow-dried naturally in crisp Himalayan air without chemical bleaching.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1B4332]/10 text-xs font-bold text-[#1B4332]/75 flex items-center justify-between">
                <span>Seasonal Orchard Cohort</span>
                <Link to="/explore" className="text-[#D97706] hover:underline">
                  Join Pantry Waitlist →
                </Link>
              </div>
            </div>

            {/* 3. Northeast GI-Tagged Spices & Heritage Produce */}
            <div className="rounded-3xl bg-white border-2 border-[#1B4332]/15 hover:border-[#1B4332]/50 p-7 sm:p-8 shadow-xs transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-wider">
                    <span>PORTFOLIO PIPELINE</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-serif-display text-2xl font-bold text-[#1B4332]">
                    Northeast GI-Tagged Spices &amp; Heritage Produce
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#1F2937]/70 flex items-center gap-1.5 mt-1.5">
                    <MapPin className="w-4 h-4 text-[#D97706] shrink-0" />
                    <span>Origin: Arunachal, Assam &amp; Meghalaya</span>
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold">
                  <Award className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                  <span>Organic Guided • GI-Verified • Direct FPO Trade</span>
                </div>

                <p className="text-sm sm:text-base text-[#1F2937]/80 leading-relaxed">
                  High-curcumin Lakadong turmeric, heirloom mountain ginger, orthodox Assam tea, and regional GI specialties cultivated with natural farming advisory and direct FPO trade linkage.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1B4332]/10 text-xs font-bold text-[#1B4332]/75 flex items-center justify-between">
                <span>Batch-Level GI Seal</span>
                <Link to="/wholesale" className="text-[#D97706] hover:underline">
                  B2B Trade Specs →
                </Link>
              </div>
            </div>
          </div>

          {/* Subtle Wholesale & Institutional Link */}
          <div className="mt-10 text-center">
            <Link
              to="/wholesale"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#1B4332]/20 hover:border-[#1B4332] text-xs sm:text-sm font-bold text-[#1B4332] hover:text-[#D97706] transition-colors"
            >
              <span>Looking for GI-tagged bulk supply? Visit Wholesale &amp; Trade →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: FULL-WIDTH BOTTOM CTA BANNER
      ====================================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#1B4332] text-[#FAF9F6] p-8 sm:p-12 lg:p-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block">
                Full Soil-to-Market Platform
              </span>
              <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-white leading-tight">
                Ready to experience farm-verified produce or partner with us?
              </h2>
              <p className="text-sm sm:text-lg text-[#FAF9F6]/85 leading-relaxed">
                Step inside our live platform to join your city&apos;s 30-family Kiwi harvest drop, request bulk GI-verified supply, or onboard your farm.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/explore"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-[#D97706] hover:bg-[#b86305] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all"
              >
                <span>Explore Antarva Agri →</span>
              </Link>
              <Link
                to="/farmers"
                className="inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-transparent hover:bg-[#FAF9F6]/10 text-[#FAF9F6] border-2 border-[#FAF9F6]/25 hover:border-[#FAF9F6]/50 font-bold text-sm sm:text-base transition-all"
              >
                <span>For Farmers →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
