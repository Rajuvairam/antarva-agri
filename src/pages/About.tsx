import React from 'react';
import { Link } from 'react-router-dom';
import {
  Apple,
  Users,
  Sprout,
  Smile,
  Compass,
  Building2,
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Globe,
  Sparkles,
} from 'lucide-react';
import { BRAND_CONFIG } from '../data/cropData';

const FOUR_PILLAR_MISSION = [
  {
    number: '01',
    title: 'Make Everyone Eat Healthier',
    subtitle: 'Nutrient-Dense, Zero-Residue Food',
    description:
      'Eliminate hidden synthetic pesticides, calcium carbide ripeners, and months of nutrient-depleting cold storage so every household can trust the biological integrity of their daily food.',
    icon: Apple,
  },
  {
    number: '02',
    title: 'Support Small Farmers',
    subtitle: 'Dignified Livelihoods & 100% Direct Payouts',
    description:
      'Empower India’s 85%+ smallholder farmers and rural artisans with pre-booked market certainty, zero middleman deductions, and verifiable recognition on every Crop Passport.',
    icon: Users,
  },
  {
    number: '03',
    title: 'Make Soil Healthier',
    subtitle: 'Regenerating Living Topsoil & Organic Carbon',
    description:
      'Transition orchards and farmlands from chemical exhaustion back to thriving microbial ecosystems using AI soil diagnostics, indigenous heirloom seeds, and ancient Vrikshayurveda bio-inputs.',
    icon: Sprout,
  },
  {
    number: '04',
    title: 'Make Farming Fun',
    subtitle: 'Restoring Pride, Predictability & Joy to Cultivation',
    description:
      'When debt traps and post-harvest distress sales are replaced by intelligent local-language crop advisory, thriving soil life, and proud direct-to-consumer connections, farming becomes joyful and aspirational again.',
    icon: Smile,
  },
];

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1F2937]">
      {/* =====================================================================
          1. HERO & MISSION
      ====================================================================== */}
      <section className="bg-[#1B4332] text-[#FAF9F6] py-16 lg:py-24 border-b border-[#FAF9F6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF9F6]/10 border border-[#FAF9F6]/20 text-xs font-bold uppercase tracking-wider text-[#D97706]">
              <Sparkles className="w-4 h-4" />
              <span>Who We Are • {BRAND_CONFIG.parentCompany}</span>
            </div>

            <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.12]">
              &ldquo;Turning skills into livelihoods, and connecting them directly to the market.&rdquo;
            </h1>

            <p className="text-base sm:text-lg text-[#FAF9F6]/85 leading-relaxed max-w-3xl">
              Across India, extraordinary agricultural and artisanal skills exist in rural valleys, hillside orchards, and heritage villages—yet remain disconnected from fair markets.{' '}
              <strong className="text-white font-semibold">Antarva Agri</strong> was born to bridge that gap with transparency, regenerative science, and zero-middleman market linkage.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. 4-PILLAR MISSION GRID
      ====================================================================== */}
      <section className="py-16 lg:py-24 border-b border-[#1B4332]/15 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              The Antarva Agri Charter
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              Our 4-Pillar Mission Grid
            </h2>
            <p className="text-sm sm:text-base text-[#1F2937]/80">
              Every technological tool we build—from AI soil spectroscopy to Digital Crop Passports—serves four foundational human and ecological outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FOUR_PILLAR_MISSION.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="bg-white rounded-3xl border-2 border-[#1B4332]/15 hover:border-[#1B4332] p-7 sm:p-8 shadow-xs transition-all space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#1B4332] text-[#FAF9F6] flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#D97706]" />
                    </div>
                    <span className="font-mono text-sm font-bold text-[#1B4332]/50">
                      PILLAR {pillar.number}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block">
                      {pillar.subtitle}
                    </span>
                    <h3 className="font-serif-display text-2xl font-bold text-[#1B4332] mt-1">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#1F2937]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. ABOUT ANTARVA COLLECTIVE PRIVATE LIMITED (VENTURE-BUILDER MODEL)
      ====================================================================== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#D97706]" />
                <span>Parent Venture Studio Architecture</span>
              </div>

              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332] leading-tight">
                About {BRAND_CONFIG.parentCompany}: Build, Pilot, Spin Out.
              </h2>

              <p className="text-sm sm:text-base text-[#1F2937]/85 leading-relaxed">
                <strong className="text-[#1B4332]">Antarva Collective Private Limited</strong> operates as a purpose-driven venture builder dedicated to unlocking grassroots human potential and ecological resilience. Rather than building theoretical software in isolation, we validate real-world economics on the ground through a disciplined three-stage operating model:
              </p>

              {/* Build -> Pilot -> Spin Out Steps */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#1B4332]/15 flex items-start gap-3.5">
                  <span className="px-2.5 py-1 rounded-lg bg-[#1B4332] text-white font-mono text-xs font-bold shrink-0">
                    01. BUILD
                  </span>
                  <p className="text-xs sm:text-sm text-[#1F2937]/85">
                    Architect full-stack digital and physical infrastructure around real community skills—starting across{' '}
                    <strong className="text-[#1B4332]">Agri Tech (Antarva Agri)</strong> and{' '}
                    <strong className="text-[#1B4332]">Travel Tech</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#1B4332]/15 flex items-start gap-3.5">
                  <span className="px-2.5 py-1 rounded-lg bg-[#D97706] text-white font-mono text-xs font-bold shrink-0">
                    02. PILOT
                  </span>
                  <p className="text-xs sm:text-sm text-[#1F2937]/85">
                    Run live, high-accountability field trials—like our Bichom Valley High-Altitude Kiwi Harvest Trial #01—to prove unit economics, farmer payout uplift, and consumer delight.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#1B4332]/15 flex items-start gap-3.5">
                  <span className="px-2.5 py-1 rounded-lg bg-[#1B4332] text-white font-mono text-xs font-bold shrink-0">
                    03. SPIN OUT
                  </span>
                  <p className="text-xs sm:text-sm text-[#1F2937]/85">
                    Scale validated platforms into self-sustaining operating ventures with dedicated leadership, shared community equity, and deep regional supply chains.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Active Verticals & Long-Term Holistic Vision */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF9F6] border-2 border-[#1B4332]/20 space-y-5">
                <h3 className="font-serif-display text-2xl font-bold text-[#1B4332]">
                  Core Venture Verticals
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white border border-[#1B4332]/15 space-y-2">
                    <div className="flex items-center gap-2 text-[#1B4332] font-bold text-sm">
                      <Sprout className="w-5 h-5 text-[#D97706]" />
                      <span>Agri Tech (Antarva Agri)</span>
                    </div>
                    <p className="text-xs text-[#1F2937]/80 leading-relaxed">
                      5-layer soil-to-market regenerative stack connecting smallholders directly to retail households and global bulk trade.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-[#1B4332]/15 space-y-2">
                    <div className="flex items-center gap-2 text-[#1B4332] font-bold text-sm">
                      <Compass className="w-5 h-5 text-[#D97706]" />
                      <span>Travel Tech</span>
                    </div>
                    <p className="text-xs text-[#1F2937]/80 leading-relaxed">
                      Immersive, community-rooted rural, agro-ecological, and cultural experiences that turn local hospitality skills into sustainable income.
                    </p>
                  </div>
                </div>

                {/* Holistic Long-Term Horizon */}
                <div className="pt-4 border-t border-[#1B4332]/15 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block">
                    Long-Term Holistic Vision
                  </span>
                  <h4 className="font-serif-display text-xl font-bold text-[#1B4332]">
                    Education, Preventative Health &amp; Thriving Rural Communities
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1F2937]/80 leading-relaxed">
                    Healthy soil and fair market linkage are the foundation of a larger ecosystem. As Antarva Collective grows, our long-term horizon reinvests in experiential skill education, nutrition-first preventative health, and holistic community well-being—ensuring rural youth no longer have to migrate away from their roots to build prosperous lives.
                  </p>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-white border border-[#1B4332]/10 text-center">
                      <GraduationCap className="w-5 h-5 text-[#1B4332] mx-auto mb-1" />
                      <span className="text-[11px] font-bold text-[#1B4332] block">
                        Skill Education
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#1B4332]/10 text-center">
                      <HeartPulse className="w-5 h-5 text-[#D97706] mx-auto mb-1" />
                      <span className="text-[11px] font-bold text-[#1B4332] block">
                        Preventative Health
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-[#1B4332]/10 text-center">
                      <Globe className="w-5 h-5 text-[#1B4332] mx-auto mb-1" />
                      <span className="text-[11px] font-bold text-[#1B4332] block">
                        Community Well-Being
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA back to live Kiwi Trial */}
              <div className="p-6 rounded-3xl bg-[#1B4332] text-[#FAF9F6] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase text-[#D97706] block">
                    Experience Pilot #01 Live
                  </span>
                  <p className="font-serif-display text-lg font-bold text-white">
                    Taste our Bichom Valley High-Altitude Kiwi Harvest
                  </p>
                </div>
                <Link
                  to="/"
                  className="px-5 py-3 rounded-full bg-[#D97706] hover:bg-[#b86305] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shrink-0 transition-all"
                >
                  <span>Explore Kiwi Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
