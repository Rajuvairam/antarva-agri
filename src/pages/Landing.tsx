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
  ArrowRight,
  Layers,
  FileCheck2,
} from 'lucide-react';

type PassportTab = 'pest' | 'geography' | 'farmer';

interface VerificationPillar {
  id: PassportTab;
  tabLabel: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const VERIFICATION_PILLARS: VerificationPillar[] = [
  {
    id: 'pest',
    tabLabel: 'Pest & Inputs',
    number: '01',
    title: 'Pest & Input Transparency',
    description:
      'Immutable logs of natural bio-inputs, zero synthetic pesticide checks, and 100% carbide-free natural ripening from soil prep to harvest.',
    icon: Leaf,
  },
  {
    id: 'geography',
    tabLabel: 'Geography & GI',
    number: '02',
    title: 'Geography & GI-Tag Authenticity',
    description:
      'Verified GPS orchard coordinates, elevation (e.g., 1,850m Bichom Valley), micro-climate data, and cryptographic GI-tag origin proof that eliminates counterfeit mixing.',
    icon: MapPin,
  },
  {
    id: 'farmer',
    tabLabel: 'Farmer Profile',
    number: '03',
    title: 'Farmer Identity & Fair Payout',
    description:
      'Direct attribution to the exact smallholder farmer or FPO, plucking timestamp, and transparent direct-to-farmer payout record bypassing Mandi middlemen.',
    icon: UserCheck,
  },
];

const ARCHITECTURE_STEPS = [
  {
    step: '01',
    title: 'Living Soil Intelligence',
    description: 'AI-guided soil diagnostics and natural nutrition planning.',
    icon: Cpu,
  },
  {
    step: '02',
    title: 'Pest & Input Logging',
    description: 'Field-level logging of natural pest control and plucking dates.',
    icon: FileCheck2,
  },
  {
    step: '03',
    title: 'GI & Blockchain Minting',
    description: 'Each harvest batch receives an immutable Digital Crop Passport.',
    icon: Hash,
  },
  {
    step: '04',
    title: 'Direct Market Access',
    description: 'Shipped directly from orchard to city batches and wholesale partners.',
    icon: Truck,
  },
];

export const Landing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PassportTab>('pest');

  const scrollToPassport = () => {
    document
      .getElementById('blockchain-traceability')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1F2937]">
      {/* =====================================================================
          SECTION 1: HERO — SOIL-TO-MARKET SHOWCASE
      ====================================================================== */}
      <section className="relative overflow-hidden bg-[#1B4332] text-[#FAF9F6] py-16 sm:py-20 lg:py-28 border-b border-[#FAF9F6]/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 20%, rgba(217, 119, 6, 0.20) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(250, 249, 246, 0.08) 0%, transparent 45%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-7">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FAF9F6]/10 border border-[#FAF9F6]/20 text-xs font-bold uppercase tracking-wider text-[#D97706]">
              <Sprout className="w-4 h-4 shrink-0" />
              <span>SOIL-TO-MARKET • GI-TAGGED • BLOCKCHAIN VERIFIED</span>
            </div>

            <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-[58px] font-bold text-white leading-[1.12] tracking-tight">
              From Living Soil to Verified Markets—Every Harvest Traced on the Blockchain.
            </h1>

            <p className="text-base sm:text-xl text-[#FAF9F6]/85 leading-relaxed max-w-3xl">
              Antarva Agri connects India&apos;s rarest geographical harvests directly to conscious homes and global trade, proving the farmer, exact geography, and natural pest-management history on every single batch.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/explore"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-[#D97706] hover:bg-[#b86305] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all"
              >
                <span>Explore Live Platform →</span>
              </Link>

              <button
                type="button"
                onClick={scrollToPassport}
                className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-transparent hover:bg-[#FAF9F6]/10 text-[#FAF9F6] border-2 border-[#FAF9F6]/30 hover:border-[#FAF9F6]/60 font-bold text-base transition-all cursor-pointer"
              >
                <span>See Blockchain Passport ↓</span>
              </button>
            </div>

            {/* Trust Micro-Bar */}
            <div className="pt-6 border-t border-[#FAF9F6]/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#FAF9F6]/85">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Immutable Natural Pest &amp; Input Logs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Cryptographic GI-Tag Origin Proof</span>
              </div>
              <div className="flex items-center gap-2.5">
                <UserCheck className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>Verified Farmer Attribution &amp; Direct Payout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: INTERACTIVE BLOCKCHAIN TRACEABILITY SHOWCASE ("TRACE WHAT MATTERS")
      ====================================================================== */}
      <section
        id="blockchain-traceability"
        className="py-16 sm:py-20 lg:py-24 border-b border-[#1B4332]/15 bg-[#FAF9F6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-wider">
              <QrCode className="w-4 h-4 text-[#D97706]" />
              <span>Trace What Matters</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              Cryptographic Proof From Orchard Soil to Your Table
            </h2>
            <p className="text-base sm:text-lg text-[#1F2937]/80">
              Every Antarva Agri harvest batch is minted with a tamper-proof Digital Crop Passport—verifying biological purity, true geographical origin, and fair smallholder compensation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column — The 3 Pillars of Verification */}
            <div className="lg:col-span-6 space-y-4">
              {VERIFICATION_PILLARS.map((pillar) => {
                const IconComponent = pillar.icon;
                const isSelected = activeTab === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActiveTab(pillar.id)}
                    className={`w-full text-left rounded-3xl p-6 sm:p-7 border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#1B4332] shadow-md'
                        : 'bg-white/70 border-[#1B4332]/15 hover:border-[#1B4332]/45 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#1B4332] text-[#D97706]'
                            : 'bg-[#1B4332]/10 text-[#1B4332]'
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                            Pillar {pillar.number}
                          </span>
                          {isSelected && (
                            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#1B4332]/10 text-[#1B4332]">
                              Inspecting in Passport →
                            </span>
                          )}
                        </div>
                        <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#1B4332]">
                          {pillar.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#1F2937]/80 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column — Sample Blockchain Crop Passport Card */}
            <div className="lg:col-span-6 bg-white rounded-3xl border-2 border-[#1B4332] shadow-xl overflow-hidden">
              {/* Top Passport Header */}
              <div className="bg-[#1B4332] text-[#FAF9F6] p-6 sm:p-7 border-b border-[#FAF9F6]/15 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6]/10 border border-[#FAF9F6]/20 text-[11px] font-bold uppercase tracking-wider text-[#D97706]">
                    <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                    <span>Sample Live Verification Preview</span>
                  </span>

                  <span className="font-mono text-xs px-3 py-1 rounded-lg bg-black/25 border border-white/15 text-[#FAF9F6]/90">
                    Tx Hash: <strong className="text-[#D97706]">0x7a4f...9c2e</strong>
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#FAF9F6]/70 block">
                      Antarva Digital Crop Passport
                    </span>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
                      Batch #BCH-KW-2601
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FAF9F6]/85">
                      High-Altitude Arunachal Kiwi • Harvest Season Ledger
                    </p>
                  </div>

                  {/* QR Visual Badge */}
                  <div className="shrink-0 p-3 rounded-2xl bg-[#FAF9F6] text-[#1B4332] shadow-sm flex flex-col items-center justify-center border border-[#FAF9F6]/30">
                    <QrCode className="w-10 h-10 text-[#1B4332]" />
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#1B4332] mt-1">
                      QR Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Core Verified Snapshot Summary */}
              <div className="px-6 sm:px-7 py-4 bg-[#FAF9F6] border-b border-[#1B4332]/15 space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-semibold text-[#1F2937]/65 shrink-0">Origin:</span>
                  <span className="font-bold text-[#1B4332] text-right">
                    Bichom Valley, Arunachal Pradesh (1,850m • GI Region)
                  </span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <span className="font-semibold text-[#1F2937]/65 shrink-0">Pest Status:</span>
                  <span className="font-bold text-[#1B4332] text-right">
                    Zero Chemical Residue • Natural Bio-Inputs Verified
                  </span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <span className="font-semibold text-[#1F2937]/65 shrink-0">Farmer:</span>
                  <span className="font-bold text-[#1B4332] text-right">
                    Verified Smallholder Orchard • Direct Payout Confirmed
                  </span>
                </div>
              </div>

              {/* Interactive Tab Switcher */}
              <div className="p-6 sm:p-7 space-y-5">
                <div
                  role="tablist"
                  aria-label="Blockchain Passport Verification Tabs"
                  className="grid grid-cols-3 gap-1.5 bg-[#FAF9F6] p-1.5 rounded-2xl border border-[#1B4332]/15"
                >
                  {VERIFICATION_PILLARS.map((tab) => {
                    const active = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        role="tab"
                        aria-selected={active}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                          active
                            ? 'bg-[#1B4332] text-[#FAF9F6] shadow-2xs'
                            : 'text-[#1F2937]/75 hover:text-[#1B4332] hover:bg-[#1B4332]/5'
                        }`}
                      >
                        {tab.tabLabel}
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Tab Inspection Body */}
                {activeTab === 'pest' && (
                  <div className="space-y-3 rounded-2xl bg-[#FAF9F6] border border-[#1B4332]/15 p-5">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D97706]">
                      <span>Immutable Input &amp; Residue Log</span>
                      <span>3/3 Checks Passed</span>
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#1F2937]/85">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#1B4332]">Bio-Inputs Logged:</strong> Cow-based Jeevamrutham, Neem Kernel Extract &amp; forest leaf mulch compost.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#1B4332]">Synthetic Pesticide Screen:</strong> 0.00 mg/kg synthetic residue verified prior to harvest release.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#1B4332]">Ripening Integrity:</strong> 100% vine-matured, zero calcium carbide or synthetic ethylene chambers.
                        </span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === 'geography' && (
                  <div className="space-y-3 rounded-2xl bg-[#FAF9F6] border border-[#1B4332]/15 p-5">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D97706]">
                      <span>Geo-Tag &amp; GI Origin Proof</span>
                      <span>GPS Locked</span>
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#1F2937]/85">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#1B4332]">Orchard Coordinates:</strong> 27.2648° N, 92.4152° E • Bichom Valley, Arunachal Pradesh.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#1B4332]">Altitude &amp; Terroir:</strong> 1,850m ASL sub-temperate mist zone fed by natural mountain springs.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#1B4332]">GI-Region Seal:</strong> Cryptographically locked at orchard gate—zero non-GI blending.
                        </span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === 'farmer' && (
                  <div className="space-y-3 rounded-2xl bg-[#FAF9F6] border border-[#1B4332]/15 p-5">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D97706]">
                      <span>Smallholder Attribution &amp; Settlement</span>
                      <span>0% Middleman Cut</span>
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#1F2937]/85">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#1B4332]">Grower Identity:</strong> Verified Bichom Valley Smallholder Family Orchard Partner.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#1B4332]">Harvest Timestamp:</strong> Plucked fresh to pre-booked city batch order; dispatched within 36 hours.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#1B4332]">Direct Settlement:</strong> 100% direct-to-farmer bank payout bypassing multi-tier Mandi deductions.
                        </span>
                      </li>
                    </ul>
                  </div>
                )}

                <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-[#1F2937]/60">
                  <span>Block Record: 0x7a4f82d1...e4b09c2e</span>
                  <span className="text-[#1B4332] font-sans font-bold">Immutable Audit Trail</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: OUR SOIL-TO-MARKET PORTFOLIO (GI-TAGGED & HERITAGE CROPS)
      ====================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#1B4332]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              GI-Tagged &amp; Single-Origin Harvests
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              Our Soil-to-Market Portfolio
            </h2>
            <p className="text-base sm:text-lg text-[#1F2937]/80 leading-relaxed">
              Curating high-altitude, GI-tagged, and single-origin harvests directly from smallholder clusters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: High-Altitude Arunachal Kiwis */}
            <div className="rounded-3xl bg-[#FAF9F6] border-2 border-[#1B4332] p-7 sm:p-8 shadow-md flex flex-col justify-between space-y-6">
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
                  <span>GI-Origin • Blockchain Traced</span>
                </div>

                <p className="text-sm sm:text-base text-[#1F2937]/80 leading-relaxed">
                  Naturally sweet, vine-ripened mountain kiwis grown in living Himalayan soil without synthetic sprays or cold-storage warehousing—plucked fresh for 30-family city harvest drops.
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

            {/* Card 2: Himalayan Mountain Walnuts */}
            <div className="rounded-3xl bg-[#FAF9F6] border-2 border-[#1B4332]/15 hover:border-[#1B4332]/50 p-7 sm:p-8 shadow-xs transition-all flex flex-col justify-between space-y-6">
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
                  <span>Single-Origin • Chemical-Free</span>
                </div>

                <p className="text-sm sm:text-base text-[#1F2937]/80 leading-relaxed">
                  Cold-mountain thin-shell harvests slow-dried under crisp high-altitude sun with zero chemical bleaching, preserving rich natural omega oils and authentic orchard crunch.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1B4332]/10 text-xs font-bold text-[#1B4332]/75 flex items-center justify-between">
                <span>Pre-Season Orchard Mapping Active</span>
                <Link to="/explore" className="text-[#D97706] hover:underline">
                  Join Waitlist →
                </Link>
              </div>
            </div>

            {/* Card 3: Northeast GI-Tagged Spices & Heritage Produce */}
            <div className="rounded-3xl bg-[#FAF9F6] border-2 border-[#1B4332]/15 hover:border-[#1B4332]/50 p-7 sm:p-8 shadow-xs transition-all flex flex-col justify-between space-y-6">
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
                  <span>GI-Verified • Direct FPO Trade</span>
                </div>

                <p className="text-sm sm:text-base text-[#1F2937]/80 leading-relaxed">
                  High-curcumin Lakadong turmeric, heirloom mountain ginger, orthodox Assam tea, and regional GI specialties aggregated directly from regenerative smallholder FPO clusters.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1B4332]/10 text-xs font-bold text-[#1B4332]/75 flex items-center justify-between">
                <span>Batch-Level GI Seal</span>
                <Link to="/wholesale" className="text-[#D97706] hover:underline">
                  B2B Specs →
                </Link>
              </div>
            </div>
          </div>

          {/* Subtle Wholesale & Institutional Link */}
          <div className="mt-10 text-center">
            <Link
              to="/wholesale"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF9F6] border border-[#1B4332]/20 hover:border-[#1B4332] text-xs sm:text-sm font-bold text-[#1B4332] hover:text-[#D97706] transition-colors"
            >
              <span>Looking for GI-tagged bulk supply? Visit Wholesale &amp; Trade →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: THE 4-STEP SOIL-TO-MARKET ARCHITECTURE
      ====================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] border-b border-[#1B4332]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#D97706]" />
              <span>Full-Stack Traceability Flow</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              The 4-Step Soil-to-Market Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {ARCHITECTURE_STEPS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white rounded-3xl border border-[#1B4332]/15 p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-[#1B4332] text-[#FAF9F6] flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-[#D97706]" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-extrabold text-[#D97706] bg-[#D97706]/10 px-2.5 py-1 rounded-full">
                          STEP {item.step}
                        </span>
                        {idx < ARCHITECTURE_STEPS.length - 1 && (
                          <ArrowRight className="hidden lg:block w-4 h-4 text-[#1B4332]/35" />
                        )}
                      </div>
                    </div>

                    <h3 className="font-serif-display text-xl font-bold text-[#1B4332]">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#1F2937]/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: FULL-WIDTH BOTTOM CTA BANNER
      ====================================================================== */}
      <section className="py-16 sm:py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#1B4332] text-[#FAF9F6] p-8 sm:p-12 lg:p-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block">
                Live Harvest Drops &amp; Direct Partnerships
              </span>
              <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-white leading-tight">
                Ready to experience farm-verified produce firsthand?
              </h2>
              <p className="text-sm sm:text-lg text-[#FAF9F6]/85 leading-relaxed">
                Step inside our live platform to join your city&apos;s 30-family Kiwi harvest drop or partner with us directly.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto text-center">
              <Link
                to="/explore"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-[#D97706] hover:bg-[#b86305] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all"
              >
                <span>Explore Antarva Agri →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
