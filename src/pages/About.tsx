import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sprout,
  Target,
  Eye,
  TrendingUp,
  Users,
  Mail,
  Building2,
} from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  linkedin: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Raj Vairam',
    title: 'Founder & CEO (Chief Builder)',
    bio: 'Leads product architecture, AI systems, and company strategy at Antarva Collective. Combines software engineering, analytics, and grassroots agricultural systems design to build regenerative soil-to-market infrastructure.',
    linkedin: 'https://www.linkedin.com/in/raj-vairam-l-4649bb14a/',
  },
  {
    name: 'Abu Thahir',
    title: 'Co-Founder & COO (Supply Side & Partner Wellness)',
    bio: 'Leads farm-side operations, supply-chain architecture, and partner wellness. Focuses on resilient farm-to-market logistics, grower onboarding, and fair, sustained livelihoods for smallholder farmers.',
    linkedin: 'https://www.linkedin.com/in/abu-thahir-671a56226/',
  },
  {
    name: 'Rustham Latheef',
    title: 'Co-Founder & Head of Growth (Consumer Side & User Wellness)',
    bio: 'Leads consumer community buying, strategic partnerships, and user wellness. Drives apartment society onboarding, institutional demand, and transparent access to verified organic produce.',
    linkedin: 'https://www.linkedin.com/in/rusthamlatheef/',
  },
];

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1F2937]">
      {/* =====================================================================
          SECTION 1: HERO — ABOUT US
      ====================================================================== */}
      <section className="relative overflow-hidden bg-[#1B4332] text-[#FAF9F6] py-16 sm:py-20 lg:py-24 border-b border-[#FAF9F6]/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              'radial-gradient(circle at 85% 20%, rgba(217, 119, 6, 0.18) 0%, transparent 45%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF9F6]/10 border border-[#FAF9F6]/20 text-xs font-bold uppercase tracking-wider text-[#D97706]">
              <Sprout className="w-4 h-4" />
              <span>ABOUT ANTARVA AGRI</span>
            </div>

            <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.12] tracking-tight">
              Better Earnings for Farmers. Healthier Food for Everyone.
            </h1>

            <p className="text-base sm:text-xl text-[#FAF9F6]/85 leading-relaxed max-w-3xl">
              We are bringing the Farmers Market back digitally—connecting whole apartment societies directly to verified organic farmers, powered by farm intelligence AI.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: MISSION & VISION (CLEAN 2-COLUMN SIDE-BY-SIDE CARDS)
      ====================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-[#1B4332]/15 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Our Mission Card */}
            <div className="bg-white rounded-3xl border-2 border-[#1B4332]/15 hover:border-[#1B4332] p-8 sm:p-10 shadow-xs transition-all flex flex-col justify-between">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-[#1B4332] text-[#FAF9F6] flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#D97706]" />
                </div>

                <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1B4332]">
                  Our Mission
                </h2>

                <p className="text-base sm:text-lg text-[#1F2937]/85 leading-relaxed">
                  To transform the agri industry with technology, improving farmers&apos; living conditions, processes, and earnings.
                </p>
              </div>
            </div>

            {/* Our Vision Card */}
            <div className="bg-[#1B4332] text-[#FAF9F6] rounded-3xl border-2 border-[#1B4332] p-8 sm:p-10 shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6]/10 border border-[#FAF9F6]/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#D97706]" />
                </div>

                <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
                  Our Vision
                </h2>

                <p className="text-base sm:text-lg text-[#FAF9F6]/90 leading-relaxed">
                  A world where soil is healthy again, everyone eats healthier organic food, and farming moves away from chemicals and pesticides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2B: OUR 5-YEAR PLEDGE
      ====================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-[#1B4332]/15 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#FAF9F6] border-2 border-[#1B4332]/20 p-8 sm:p-10 lg:p-12 shadow-xs space-y-8">
            <div className="max-w-4xl space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-wider">
                <Sprout className="w-4 h-4 text-[#D97706]" />
                <span>Our 5-Year Pledge</span>
              </span>

              <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#1B4332] leading-tight">
                Our Pledge to Indian Agriculture
              </h2>

              <p className="text-base sm:text-lg text-[#1F2937]/85 leading-relaxed">
                For years, those before us tried farmers markets and rural innovations so growers could earn better and families could eat fresher—facing real-world setbacks along the way. Antarva carries that exact mission forward. With modern AI and new inventions, we pledge to farm India efficiently—preserving living soil so farmers earn better and everyone eats healthier.
              </p>
            </div>

            {/* Highlight Callout Strip */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div className="rounded-2xl bg-[#1B4332] text-[#FAF9F6] p-6 sm:p-7 flex items-start gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6]/10 border border-[#FAF9F6]/20 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-[#D97706]" />
                </div>
                <div className="space-y-1">
                  <div className="font-serif-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    1,00,000+ <span className="text-xl sm:text-2xl text-[#D97706]">Farmers</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#FAF9F6]/85">
                    5-Year Target
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white border-2 border-[#1B4332]/20 p-6 sm:p-7 flex items-start gap-4 shadow-2xs">
                <div className="w-12 h-12 rounded-2xl bg-[#D97706]/15 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#D97706]" />
                </div>
                <div className="space-y-1">
                  <div className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332] tracking-tight">
                    ≥ 2X <span className="text-xl sm:text-2xl text-[#D97706]">Earnings</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#1F2937]/80">
                    Minimum net income uplift
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: FOUNDING TEAM (CLEAN 3-COLUMN EDITORIAL CARDS)
      ====================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#1B4332]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              Founding Team
            </h2>
            <p className="text-base sm:text-lg text-[#1F2937]/80 leading-relaxed">
              Focused on building transparent, AI-enabled food systems that care equally for our farming partners and the families we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {TEAM_MEMBERS.map((member) => (
              <article
                key={member.name}
                className="bg-[#FAF9F6] rounded-2xl border border-[#1B4332]/15 border-t-4 border-t-[#1B4332] p-7 sm:p-8 shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif-display text-2xl font-bold text-[#1B4332]">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 text-sm font-semibold text-[#D97706] leading-snug">
                      {member.title}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#1F2937]/85 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#1B4332]/10">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#1B4332]/20 text-sm font-semibold text-[#1B4332] hover:bg-[#1B4332] hover:text-[#FAF9F6] hover:border-[#1B4332] transition-colors"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    <span>LinkedIn Profile ↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3B: GET IN TOUCH (COMPACT CONTACT & ENTITY STRIP)
      ====================================================================== */}
      <section className="py-12 sm:py-16 bg-[#FAF9F6] border-b border-[#1B4332]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white border border-[#1B4332]/15 border-l-4 border-l-[#1B4332] p-6 sm:p-8 shadow-xs flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block">
                Official Contact
              </span>
              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1B4332]">
                Get in Touch
              </h2>
              <div className="flex items-center gap-2 pt-1 text-xs sm:text-sm text-[#1F2937]/80 font-medium">
                <Building2 className="w-4 h-4 text-[#1B4332] shrink-0" />
                <span>Antarva Collective Private Limited (CIN: U62011TN2026PTC193592) • India</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="mailto:people@antarvacollective.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#1B4332]/20 text-sm font-semibold text-[#1B4332] hover:bg-[#1B4332] hover:text-[#FAF9F6] hover:border-[#1B4332] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>people@antarvacollective.com</span>
              </a>

              <a
                href="https://www.linkedin.com/company/antarva-collective/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#1B4332]/20 text-sm font-semibold text-[#1B4332] hover:bg-[#1B4332] hover:text-[#FAF9F6] hover:border-[#1B4332] transition-colors"
              >
                <svg
                  className="w-4 h-4 text-[#D97706] shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>Antarva Collective LinkedIn ↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: SIMPLE BOTTOM CTA
      ====================================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#1B4332] text-[#FAF9F6] p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2.5 text-center lg:text-left max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706] block">
                Live Seasonal Harvest
              </span>
              <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-white leading-tight">
                Taste Freshly Plucked Mountain Kiwis From Our Partner Orchards
              </h2>
              <p className="text-sm sm:text-base text-[#FAF9F6]/85">
                Join your city&apos;s 30-family harvest batch with complete transparency from orchard to doorstep.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/batch"
                className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-[#D97706] hover:bg-[#b86305] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
              >
                <span>Explore Our Live Kiwi Harvest →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
