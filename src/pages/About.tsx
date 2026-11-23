import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sprout,
  Target,
  Eye,
  Cpu,
  HeartHandshake,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Raj Vairam',
    title: 'Chief Builder',
    bio: 'Blending Eastern wisdom with modern technology to build regenerative food systems.',
    icon: Cpu,
  },
  {
    name: 'Abu Thahir',
    title: 'Supply Side & Partner Wellness',
    bio: 'Takes care of the supply side and partner wellness—building resilient farm-to-door systems and supporting agricultural partners with fair, sustained incomes.',
    icon: HeartHandshake,
  },
  {
    name: 'Rustham Latheef',
    title: 'Consumer Side & User Wellness',
    bio: 'Takes care of everything on the consumer side and user wellness—ensuring every household receives fresh, healthy harvests with complete transparency.',
    icon: ShieldCheck,
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
          SECTION 3: MEET THE TEAM (CLEAN 3-COLUMN GRID DESKTOP, 1-COL MOBILE)
      ====================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] border-b border-[#1B4332]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              Meet the Team
            </h2>
            <p className="text-base sm:text-lg text-[#1F2937]/80 leading-relaxed">
              Focused on building transparent, AI-enabled food systems that care equally for our farming partners and the families we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {TEAM_MEMBERS.map((member) => {
              const IconComponent = member.icon;
              return (
                <div
                  key={member.name}
                  className="bg-white rounded-3xl border-2 border-[#1B4332]/15 hover:border-[#1B4332] p-7 sm:p-8 shadow-xs transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#1B4332] text-[#FAF9F6] flex items-center justify-center shadow-2xs">
                      <IconComponent className="w-6 h-6 text-[#D97706]" />
                    </div>

                    <div>
                      <h3 className="font-serif-display text-2xl font-bold text-[#1B4332]">
                        {member.name}
                      </h3>
                      <span className="inline-block mt-1 text-xs sm:text-sm font-bold text-[#D97706] uppercase tracking-wider">
                        {member.title}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#1F2937]/85 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              );
            })}
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
