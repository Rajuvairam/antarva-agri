import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Sprout,
  ShieldCheck,
  Award,
  Cpu,
  Leaf,
  CheckCircle2,
  Layers,
  BookOpen,
  History,
  ChevronDown,
  FlaskConical,
  TrendingUp,
  Landmark,
  UserCheck,
  Sparkles,
  QrCode,
} from 'lucide-react';

interface StorySlide {
  label: string;
  headline: string;
}

const STORY_SLIDES: StorySlide[] = [
  {
    label: 'THE FARMERS MARKET, BROUGHT BACK',
    headline:
      'Whole apartment societies buy directly from farmers—so consumers pay less and farmers earn more.',
  },
  {
    label: 'PRE-SOLD & VERIFIED ORGANIC',
    headline:
      'Existing platforms digitise supply chains. We bring back the true Farmers Market: community buying, pre-sold harvests, and PGS-verified organic food.',
  },
  {
    label: 'POWERED BY FARM INTELLIGENCE AI',
    headline:
      'With AI predictions of yield, pest, and price—plus an AI planner and soil monitoring—farmers focus solely on growing healthy food.',
  },
  {
    label: 'BETTER EARNINGS • HEALTHIER FOOD',
    headline:
      'Restoring living soil across India, building dignified farmer incomes, and bringing chemical-free organic harvests to every home.',
  },
];

interface BrokenLoopCard {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const BROKEN_LOOP_CARDS: BrokenLoopCard[] = [
  {
    number: '01',
    title: 'Farmers Earn Less',
    description:
      'Fragmented buyers, weak logistics, and zero price visibility force farmers to accept whatever price is offered.',
    icon: Landmark,
  },
  {
    number: '02',
    title: 'No Bargaining Power',
    description:
      'Small volumes and perishability lock growers into middlemen—even organic farmers end up selling at conventional mandi prices with no way to prove their practice.',
    icon: Layers,
  },
  {
    number: '03',
    title: 'Soil Gets Hurt',
    description:
      "Nearly 30% of India's land is degraded (ISRO, 2018–19); decades of chemical fertilisers have stripped living ecosystems from the ground.",
    icon: Sprout,
  },
  {
    number: '04',
    title: 'Chemical-Laden Food',
    description:
      'Intensive chemical farming leaves residues on our plates, and without verification, households cannot tell what is truly organic.',
    icon: FlaskConical,
  },
];

interface PlatformFeatureCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const COMMUNITY_MARKET_CARDS: PlatformFeatureCard[] = [
  {
    title: 'Community Buying Engine',
    description:
      'Whole apartment societies buy together directly from upcoming harvests—consumers pay less, farmers earn more.',
    icon: UserCheck,
  },
  {
    title: 'Digital Farmers Market',
    description:
      'Direct access to households, restaurants, retailers, institutions, and quick-commerce through one marketplace.',
    icon: Landmark,
  },
  {
    title: 'Pre-Harvest Sales',
    description:
      'AI yield and price forecasts let buyers pre-book weeks before harvest, giving farmers certainty and fair pricing.',
    icon: TrendingUp,
  },
  {
    title: 'PGS Verified Organic',
    description:
      'Participatory Guarantee System peer verification makes every organic claim credible and transparent.',
    icon: ShieldCheck,
  },
];

const FARM_INTELLIGENCE_CARDS: PlatformFeatureCard[] = [
  {
    title: 'Soil Monitoring Assistant',
    description:
      'Tracks soil health via sensor and satellite data and guides farmers on restoring living topsoil organically.',
    icon: Sprout,
  },
  {
    title: 'AI Agentic Planner',
    description:
      'Handles scheduling, business coordination, and logistics so the farmer can focus solely on farming.',
    icon: Cpu,
  },
  {
    title: 'Yield, Pest & Price Predictions',
    description:
      'Predicts harvest volumes and pricing weeks ahead and flags pests early for timely organic intervention.',
    icon: Sparkles,
  },
  {
    title: 'Zero-Middleman Traceability',
    description:
      'Connects verified smallholder farms directly to conscious communities with full origin clarity.',
    icon: QrCode,
  },
];

interface TimelineEra {
  era: string;
  period: string;
  title: string;
  body: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
  highlight?: boolean;
}

const FARMING_TIMELINE: TimelineEra[] = [
  {
    era: 'Era 1',
    period: 'Ancient Ecological Roots',
    title: '5,000+ Years of Living Soil (Vrikshayurveda & Polyculture)',
    body: (
      <>
        India pioneered ecological agronomy—intercropping, rainwater harvesting, cow-based bio-manures like{' '}
        <em className="font-semibold not-italic text-[#1B4332]">Kunapajala</em>, and seed diversity documented from the
        Indus Valley to <em className="italic">Krishi-Parashara</em> and <em className="italic">Vrikshayurveda</em>.
      </>
    ),
    icon: Sprout,
  },
  {
    era: 'Era 2',
    period: '1905–1930s',
    title: 'When the West Learned From India (1905–1930s)',
    body: (
      <>
        British botanist Sir Albert Howard arrived in colonial India to teach Western farming, realized Indian peasants
        understood living soil biology better, and documented the{' '}
        <em className="italic">Indore Composting Method</em>—founding the global organic movement.
      </>
    ),
    icon: BookOpen,
  },
  {
    era: 'Era 3',
    period: 'Colonial Era & 1960s',
    title: 'Colonial Cash Crops & The 1960s Western Chemical Shift',
    body: (
      <>
        Colonial revenue policies first pushed extractive cash crops. Later, the 1960s Green Revolution imported Western
        industrial farming—synthetic urea/NPK, chemical pesticides, and monoculture HYV seeds. It ended acute grain
        shortages, but replaced polyculture with chemical dependency, depleted soil organic carbon, dried aquifers, and
        trapped smallholders in rising input debt.
      </>
    ),
    icon: FlaskConical,
  },
  {
    era: 'Era 4',
    period: 'Today & Beyond',
    title: 'The Return — Ancient Ecological Wisdom + Modern AI (Today)',
    body: (
      <>
        India is now moving beyond calorie-only industrial farming toward living topsoil, natural inputs, and
        AI-assisted precision agronomy so smallholders reclaim soil fertility and fair market value.
      </>
    ),
    icon: Cpu,
    highlight: true,
  },
];

interface FieldGuideStep {
  stepNumber: string;
  title: string;
  summary: React.ReactNode;
  fieldChecklist: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const ORGANIC_FIELD_STEPS: FieldGuideStep[] = [
  {
    stepNumber: 'Step 1',
    title: 'Shift From "Input-Swapping" to Soil Biology',
    summary: (
      <>
        Stop treating symptoms with quick sprays; run a baseline soil test (organic carbon, pH, micronutrients) to see
        what your living soil actually lacks.
      </>
    ),
    fieldChecklist: [
      'Sample topsoil (0–15 cm) across multiple plot corners before sowing season.',
      'Track Soil Organic Carbon (aiming toward >0.75%–1.0%), EC, pH, and available Boron, Zinc, and Iron.',
      'Phase out synthetic urea gradually over 2–3 seasons rather than shocking depleted plots overnight.',
    ],
    icon: FlaskConical,
  },
  {
    stepNumber: 'Step 2',
    title: 'Rebuild Soil Carbon With On-Farm Bio-Inputs',
    summary: (
      <>
        Start composting farm biomass (Indore/vermicompost) and preparing fermented microbial cultures (
        <em className="italic">Jeevamrut</em>, <em className="italic">Beejamrut</em>,{' '}
        <em className="italic">Kunapajala</em>) using local livestock and botanicals to cut synthetic fertilizer costs.
      </>
    ),
    fieldChecklist: [
      'Treat seeds and seedlings with Beejamrut for early root-zone microbial colonization.',
      'Apply filtered Jeevamrut with irrigation or foliar spray every 15–21 days to multiply beneficial soil microbes.',
      'Turn crop residues and cattle bedding into aerated Indore compost or vermicompost pits on-farm.',
    ],
    icon: Sprout,
  },
  {
    stepNumber: 'Step 3',
    title: 'Break Monoculture With Multi-Cropping & Mulching',
    summary: (
      <>
        Keep soil covered year-round with live/biomass mulch to lock in moisture, and add legume intercrops, border
        crops, and trap crops to naturally disrupt pest cycles.
      </>
    ),
    fieldChecklist: [
      'Maintain a 3–4 inch dry straw or pruned-biomass mulch blanket (Acchadana) to cool soil and cut water loss by up to 30%.',
      'Intercrop nitrogen-fixing pulses, cowpea, or clover between orchard rows and main cereal/vegetable beds.',
      'Plant marigold, mustard, or Napier grass along bunds as trap and barrier crops.',
    ],
    icon: Layers,
  },
  {
    stepNumber: 'Step 4',
    title: 'Prevent Pests Naturally',
    summary: (
      <>
        Use neem-based botanicals, fermented leaf extracts (<em className="italic">Agniastra</em> /{' '}
        <em className="italic">Neemastra</em>), pheromone traps, and predator-friendly field borders instead of
        broad-spectrum chemical sprays.
      </>
    ),
    fieldChecklist: [
      'Install yellow/blue sticky cards and species-specific pheromone lures early for weekly pest scouting.',
      'Spray preventive Neemastra for sucking pests and Agniastra or Dashaparni Ark for borer/caterpillar pressure.',
      'Preserve flowering field margins to shelter ladybirds, lacewings, spiders, and native pollinators.',
    ],
    icon: ShieldCheck,
  },
  {
    stepNumber: 'Step 5',
    title: 'Certify & Bypass Middlemen',
    summary: (
      <>
        Join a local farmer group under <strong className="font-bold text-[#1B4332]">PGS-India</strong> (Participatory
        Guarantee System) for affordable peer certification, document natural practices from day one, and link directly
        to conscious buyers.
      </>
    ),
    fieldChecklist: [
      'Form or join a 5+ farmer local group under a PGS-India Regional Council for low-cost peer-reviewed certification.',
      'Keep a simple season logbook of seed sources, bio-input batches, harvest dates, and buffer zones.',
      'Pool graded harvests with fellow growers to supply city buyer collectives and transparent farm-gate partners directly.',
    ],
    icon: Award,
  },
];

type ReadingGroupKey = 'history' | 'guides';

interface ReadingResource {
  category: string;
  title: string;
  source: string;
  url: string;
  summary: string;
}

const HISTORY_RESOURCES: ReadingResource[] = [
  {
    category: 'Agri Heritage & Trials',
    title: 'Vrikshayurveda & Traditional Indian Knowledge for Sustainable Agriculture',
    source: 'MANAGE (Govt. of India)',
    url: 'https://www.manage.gov.in/nf/resextn/publications/PUB-GBPUAT1.PDF',
    summary:
      'Traces 6,000 years of Indian agronomy, colonial disruption, and modern trials reviving Kunapajala across India including Arunachal Pradesh.',
  },
  {
    category: 'Peer-Reviewed Study',
    title: 'Rediscovery of Vrikshayurveda: A Nature-Based Vision for Sustainability',
    source: 'PubMed Central (2025)',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12636377/',
    summary:
      'Peer-reviewed study validating ancient Indian soil regeneration, agroforestry, and non-chemical pest control with modern science.',
  },
  {
    category: 'Primary Archive',
    title: 'Sir Albert Howard & The Indore Composting Method',
    source: 'Journey to Forever Archive',
    url: 'https://journeytoforever.org/farm_library/howard.html',
    summary:
      'Primary writings showing how traditional Indian composting inspired the worldwide organic agriculture movement.',
  },
  {
    category: 'Policy & Ecology',
    title: 'Green Revolution 2.0: Pathway to Food Sovereignty',
    source: 'Down To Earth',
    url: 'https://www.downtoearth.org.in/agriculture/green-revolution-20-pathway-to-food-sovereignty',
    summary:
      'Examines the ecological limits of 1960s industrial agriculture and the shift toward biodiversity, farmer collectives, and precision tech.',
  },
  {
    category: 'Soil Science Report',
    title: 'How Balanced Soil Nutrient Management Can Save Indian Agriculture',
    source: 'Down To Earth',
    url: 'https://www.downtoearth.org.in/agriculture/how-balanced-soil-nutrient-management-can-save-indian-agriculture-75460',
    summary:
      'Data-backed look at how post-1965 synthetic fertilizer imbalance created soil sickness and micronutrient loss across Indian farms.',
  },
  {
    category: 'Visual Essay',
    title: 'The Green Revolution of Agricultural India: An Unequal Exchange',
    source: 'ArcGIS StoryMaps',
    url: 'https://storymaps.arcgis.com/stories/8453066634a24c2facba74c35220039c',
    summary:
      'Visual essay detailing how Western industrial seed and chemical models reshaped Indian crop diversity and smallholder economics.',
  },
];

const STARTER_GUIDE_RESOURCES: ReadingResource[] = [
  {
    category: 'National Field Manual',
    title: 'Technical Manual on Natural Farming (2025)',
    source: 'Ministry of Agriculture, Govt. of India',
    url: 'https://naturalfarming.dac.gov.in/uploads/studymaterial/Technical-Manual-on-Natural_Farming_10.03.2025.pdf',
    summary:
      'Comprehensive national field manual covering 10 agro-ecological strategies, soil microbiomes, mulching, and diversified cropping.',
  },
  {
    category: 'Transition Roadmap',
    title: 'Steps to a Successful Organic Transition',
    source: 'TNAU Agritech Portal',
    url: 'https://agritech.tnau.ac.in/org_farm/orgfarm_successful%20organic%20transition.html',
    summary:
      'Practical beginner roadmap explaining how to transition farmland smoothly using preventative ecological farm management.',
  },
  {
    category: 'Official Handbooks',
    title: 'Official Organic & Natural Farming Books & Field Guides',
    source: 'NCONF (Govt. of India)',
    url: 'https://nconf.dac.gov.in/booksmanuals',
    summary:
      'Free downloadable handbooks on biofertilizers, natural pest protection, and horticulture packages of practice.',
  },
  {
    category: 'Certification Portal',
    title: 'PGS-India Organic & Natural Certification Portal',
    source: 'Ministry of Agriculture',
    url: 'https://pgsindia-ncof.gov.in/',
    summary:
      'Official portal for smallholder farmer groups to get low-cost participatory organic certification and traceability.',
  },
];

export const Landing: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>({ 0: true });
  const [activeReadingTab, setActiveReadingTab] = useState<ReadingGroupKey>('history');

  const applySlowPlayback = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultPlaybackRate = 0.55;
      videoRef.current.playbackRate = 0.55;
    }
  };

  useEffect(() => {
    applySlowPlayback();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % STORY_SLIDES.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  const handleScrollDown = () => {
    document.getElementById('why-we-exist')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleStep = (index: number) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const displayedResources =
    activeReadingTab === 'history' ? HISTORY_RESOURCES : STARTER_GUIDE_RESOURCES;

  const currentSlide = STORY_SLIDES[activeSlide];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1F2937]">
      <style>{`
        @keyframes antarvaHeroFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* =====================================================================
          HERO: 0.55x SLOW-MO VALLEY VIDEO + 4-BEAT (7s) AUTO-CYCLING STORY
      ====================================================================== */}
      <section className="relative overflow-hidden min-h-[88vh] flex flex-col justify-between text-white">
        {/* Full-Bleed Auto-Playing Valley Farmers Background Video (0.55x Slow Motion) */}
        <video
          ref={videoRef}
          src="/hero-valley-farmers.mp4.mp4"
          autoPlay
          muted
          loop
          playsInline
          onLoadedMetadata={applySlowPlayback}
          onCanPlay={applySlowPlayback}
          onPlay={applySlowPlayback}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Warm Golden-Hour Semi-Transparent Gradient Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#14261c]/55 via-[#1B4332]/40 to-[#14261c]/75"
        />

        {/* Top Spacer to Balance Vertical Centering */}
        <div className="h-6 sm:h-10 shrink-0" aria-hidden="true" />

        {/* Centered 4-Beat Auto-Cycling Story & Steady CTAs */}
        <div className="relative z-20 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center flex flex-col items-center space-y-6 sm:space-y-7">
          {/* Fixed-Height Story Container for Zero Layout Jump */}
          <div className="relative w-full min-h-[210px] sm:min-h-[230px] flex items-center justify-center">
            <div
              key={activeSlide}
              style={{ animation: 'antarvaHeroFadeIn 650ms cubic-bezier(0.22, 1, 0.36, 1) forwards' }}
              className="flex flex-col items-center justify-center space-y-4 sm:space-y-5 px-2"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/25 backdrop-blur-md border border-white/25 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#fbbf24]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                <span>{currentSlide.label}</span>
              </div>

              {activeSlide === 0 ? (
                <h1 className="font-serif-display text-xl sm:text-3xl md:text-[2.35rem] font-bold tracking-tight text-white max-w-4xl leading-[1.22] drop-shadow-md">
                  {currentSlide.headline}
                </h1>
              ) : (
                <p className="font-serif-display text-xl sm:text-3xl md:text-[2.35rem] font-bold tracking-tight text-white max-w-4xl leading-[1.22] drop-shadow-md">
                  {currentSlide.headline}
                </p>
              )}
            </div>
          </div>

          {/* 4 Slim Clickable Harvest Amber Progress Bars */}
          <div
            className="flex items-center justify-center gap-2.5"
            role="tablist"
            aria-label="Story progress"
          >
            {STORY_SLIDES.map((slide, index) => {
              const isActive = index === activeSlide;
              return (
                <button
                  key={slide.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Slide ${index + 1}: ${slide.label}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-12 bg-[#D97706]'
                      : 'w-8 bg-white/35 hover:bg-white/60'
                  }`}
                />
              );
            })}
          </div>

          {/* Steady Anchored CTA Buttons */}
          <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              to="/explore"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#D97706] hover:bg-[#b86305] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
            >
              <span>Explore the Harvest →</span>
            </Link>

            <Link
              to="/farmers"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black/25 hover:bg-black/35 backdrop-blur-md border border-white/35 hover:border-white/60 text-white font-semibold text-sm sm:text-base transition-all"
            >
              <span>Join as a Farmer</span>
            </Link>
          </div>
        </div>

        {/* Subtle Bottom Scroll Indicator */}
        <div className="relative z-20 pb-7 sm:pb-9 flex justify-center">
          <button
            type="button"
            onClick={handleScrollDown}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-stone-100/90 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Scroll to see why we exist &amp; how it works</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-1 text-[#fbbf24]">
              ↓
            </span>
          </button>
        </div>
      </section>

      {/* =====================================================================
          SHOWCASE SECTION 1: THE BROKEN LOOP WE ARE FIXING
      ====================================================================== */}
      <section
        id="why-we-exist"
        className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-[#1B4332]/15"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D97706]/15 text-[#D97706] text-xs font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Why We Exist</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              The Broken Loop We Are Fixing
            </h2>
            <p className="text-base sm:text-lg text-[#1F2937]/80 leading-relaxed">
              When growers and households are separated by opaque middlemen, farmer incomes, soil biology, and food
              purity all suffer together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {BROKEN_LOOP_CARDS.map((card) => {
              const IconComponent = card.icon;
              return (
                <article
                  key={card.number}
                  className="rounded-3xl bg-white border-2 border-[#1B4332]/15 hover:border-[#D97706] p-6 sm:p-7 shadow-xs transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#FAF9F6] border border-[#1B4332]/15 flex items-center justify-center text-[#D97706] shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-full bg-[#1B4332]/10 text-[#1B4332]">
                        {card.number}
                      </span>
                    </div>

                    <h3 className="font-serif-display text-xl font-bold text-[#1B4332] leading-snug">
                      {card.title}
                    </h3>

                    <p className="text-sm text-[#1F2937]/80 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SHOWCASE SECTION 2: THE FARMERS MARKET, POWERED BY FARM INTELLIGENCE
      ====================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#1B4332] text-[#FAF9F6] border-b border-[#FAF9F6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6]/10 border border-[#FAF9F6]/20 text-[#fbbf24] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#D97706]" />
              <span>How Antarva Works</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white">
              The Farmers Market, Powered by Farm Intelligence
            </h2>
            <p className="text-base sm:text-lg text-[#FAF9F6]/80 leading-relaxed">
              We unite collective demand from city communities with on-farm AI and PGS organic verification—unlocking
              fair farm-gate value and trustworthy harvests.
            </p>
          </div>

          {/* Group 1: Community-Led Farmers Market */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#D97706]" />
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.14em] text-[#fbbf24]">
                Community-Led Farmers Market
              </h3>
              <div className="h-px flex-1 bg-[#FAF9F6]/15" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {COMMUNITY_MARKET_CARDS.map((card) => {
                const IconComponent = card.icon;
                return (
                  <article
                    key={card.title}
                    className="rounded-3xl bg-[#FAF9F6] text-[#1F2937] p-6 border-2 border-transparent hover:border-[#D97706] shadow-md transition-all space-y-3.5"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-[#1B4332] text-[#D97706] flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif-display text-lg sm:text-xl font-bold text-[#1B4332] leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-sm text-[#1F2937]/80 leading-relaxed">
                      {card.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Group 2: Farm & Farmer Intelligence Stack */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#D97706]" />
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.14em] text-[#fbbf24]">
                Farm &amp; Farmer Intelligence Stack
              </h3>
              <div className="h-px flex-1 bg-[#FAF9F6]/15" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {FARM_INTELLIGENCE_CARDS.map((card) => {
                const IconComponent = card.icon;
                return (
                  <article
                    key={card.title}
                    className="rounded-3xl bg-white/8 hover:bg-white/12 border border-[#FAF9F6]/20 hover:border-[#D97706] p-6 transition-all space-y-3.5"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-[#D97706] text-white flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif-display text-lg sm:text-xl font-bold text-white leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-sm text-[#FAF9F6]/85 leading-relaxed">
                      {card.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          EDUCATIONAL SECTION A: THE STORY OF INDIAN FARMING
      ====================================================================== */}
      <section
        id="indian-farming-story"
        className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] border-b border-[#1B4332]/15"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-wider">
              <History className="w-4 h-4 text-[#D97706]" />
              <span>Agrarian Lineage • Era 1 → Era 4</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              The Story of Indian Farming — And How the West Reshaped It
            </h2>
            <p className="text-base sm:text-lg text-[#1F2937]/80 leading-relaxed">
              Before synthetic fertilizers existed, Indian smallholders practiced sophisticated living-soil agronomy
              that inspired the global organic movement. Here is how five millennia of ecological wisdom evolved, broke,
              and began returning.
            </p>
          </div>

          {/* 4-Chapter Visual Timeline */}
          <div className="relative">
            {/* Subtle Desktop Connecting Timeline Rail */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-11 left-12 right-12 h-0.5 bg-gradient-to-r from-[#1B4332]/25 via-[#D97706]/50 to-[#1B4332]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
              {FARMING_TIMELINE.map((chapter) => {
                const IconComponent = chapter.icon;
                const isHighlight = Boolean(chapter.highlight);

                return (
                  <article
                    key={chapter.era}
                    className={`relative rounded-3xl p-6 sm:p-7 border-2 flex flex-col justify-between transition-all ${
                      isHighlight
                        ? 'bg-[#1B4332] text-[#FAF9F6] border-[#1B4332] shadow-lg'
                        : 'bg-white text-[#1F2937] border-[#1B4332]/15 hover:border-[#1B4332]/50 shadow-xs'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Era Pill + Icon Node */}
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                            isHighlight
                              ? 'bg-[#D97706] text-white'
                              : 'bg-[#1B4332] text-[#FAF9F6]'
                          }`}
                        >
                          {chapter.era}
                        </span>

                        <div
                          className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                            isHighlight
                              ? 'bg-[#FAF9F6]/15 text-[#fbbf24]'
                              : 'bg-[#FAF9F6] border border-[#1B4332]/15 text-[#D97706]'
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <div>
                        <span
                          className={`text-[11px] font-bold uppercase tracking-wider block ${
                            isHighlight ? 'text-[#fbbf24]' : 'text-[#D97706]'
                          }`}
                        >
                          {chapter.period}
                        </span>
                        <h3
                          className={`font-serif-display text-lg sm:text-xl font-bold mt-1 leading-snug ${
                            isHighlight ? 'text-white' : 'text-[#1B4332]'
                          }`}
                        >
                          {chapter.title}
                        </h3>
                      </div>

                      <p
                        className={`text-sm leading-relaxed ${
                          isHighlight ? 'text-[#FAF9F6]/90' : 'text-[#1F2937]/80'
                        }`}
                      >
                        {chapter.body}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          EDUCATIONAL SECTION B: FIELD GUIDE — ORGANIC & NATURAL FARMING IN INDIA
      ====================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#1B4332]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D97706]/15 text-[#D97706] text-xs font-bold uppercase tracking-wider">
              <Leaf className="w-4 h-4" />
              <span>Practical 5-Step Transition Roadmap</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              Field Guide: How to Start Organic &amp; Natural Farming in India
            </h2>
            <p className="text-base sm:text-lg text-[#1F2937]/80 leading-relaxed">
              A grounded, step-by-step playbook for farmers, orchardists, and landowners transitioning away from
              chemical dependency—click any step for first-season field actions.
            </p>
          </div>

          <div className="space-y-4">
            {ORGANIC_FIELD_STEPS.map((item, index) => {
              const IconComponent = item.icon;
              const isExpanded = Boolean(expandedSteps[index]);

              return (
                <div
                  key={item.stepNumber}
                  className={`rounded-3xl border-2 transition-all overflow-hidden ${
                    isExpanded
                      ? 'bg-[#FAF9F6] border-[#1B4332] shadow-md'
                      : 'bg-[#FAF9F6]/65 border-[#1B4332]/15 hover:border-[#1B4332]/45'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleStep(index)}
                    aria-expanded={isExpanded}
                    className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#1B4332] text-[#FAF9F6] flex flex-col items-center justify-center shrink-0 mt-0.5">
                        <IconComponent className="w-5 h-5 text-[#D97706]" />
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D97706]/15 text-[#D97706]">
                            {item.stepNumber}
                          </span>
                        </div>

                        <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#1B4332]">
                          {item.title}
                        </h3>

                        <p className="text-sm sm:text-base text-[#1F2937]/85 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`shrink-0 mt-1 w-9 h-9 rounded-full border border-[#1B4332]/20 bg-white flex items-center justify-center text-[#1B4332] transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 bg-[#1B4332] text-white' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
                      <div className="sm:ml-17 p-4 sm:p-5 rounded-2xl bg-white border border-[#1B4332]/15 space-y-2.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1B4332] block">
                          On-Field Starter Checklist
                        </span>
                        <ul className="space-y-2">
                          {item.fieldChecklist.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2937]/85 leading-relaxed"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          EDUCATIONAL SECTION C: CURATED READING LIBRARY & OFFICIAL FIELD MANUALS
      ====================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] border-b border-[#1B4332]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-[#D97706]" />
              <span>Verified Research &amp; Government Handbooks</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              Curated Reading Library &amp; Official Field Manuals
            </h2>
            <p className="text-base sm:text-lg text-[#1F2937]/80 leading-relaxed">
              Primary archives, peer-reviewed research, and official Government of India natural farming manuals to
              explore at your own pace.
            </p>
          </div>

          {/* 2-Tab Switcher */}
          <div className="flex justify-center mb-10">
            <div
              role="tablist"
              aria-label="Reading library categories"
              className="inline-flex flex-col sm:flex-row gap-2 p-1.5 rounded-2xl bg-white border-2 border-[#1B4332]/15 shadow-xs w-full sm:w-auto"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeReadingTab === 'history'}
                onClick={() => setActiveReadingTab('history')}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeReadingTab === 'history'
                    ? 'bg-[#1B4332] text-[#FAF9F6] shadow-xs'
                    : 'text-[#1F2937]/75 hover:text-[#1B4332]'
                }`}
              >
                Indian Agri History &amp; The Western Shift (6)
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeReadingTab === 'guides'}
                onClick={() => setActiveReadingTab('guides')}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeReadingTab === 'guides'
                    ? 'bg-[#1B4332] text-[#FAF9F6] shadow-xs'
                    : 'text-[#1F2937]/75 hover:text-[#1B4332]'
                }`}
              >
                Official Organic &amp; Natural Farming Starter Guides (4)
              </button>
            </div>
          </div>

          {/* 2-Column Resource Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedResources.map((resource) => (
              <article
                key={resource.url}
                className="rounded-3xl bg-white border-2 border-[#1B4332]/15 hover:border-[#1B4332] p-6 sm:p-7 shadow-xs transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#D97706]/15 text-[#D97706] text-xs font-bold uppercase tracking-wider">
                      {resource.category}
                    </span>
                    <span className="text-xs font-semibold text-[#1B4332]/80">
                      {resource.source}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-xl font-bold text-[#1B4332] leading-snug">
                    {resource.title}
                  </h3>

                  <p className="text-sm text-[#1F2937]/80 leading-relaxed">
                    {resource.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1B4332]/10 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-[#1F2937]/60 truncate">
                    Source: {resource.source}
                  </span>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#D97706] hover:text-[#b86305] hover:underline shrink-0"
                  >
                    <span>Read Article ↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          EDUCATIONAL SECTION D: MINIMAL FOOTER BRIDGE
      ====================================================================== */}
      <section className="py-12 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#1B4332] text-[#FAF9F6] px-6 py-7 sm:px-10 sm:py-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="font-serif-display text-xl sm:text-2xl font-bold text-white text-center md:text-left">
              Ready to see this soil-first philosophy in action?
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              <Link
                to="/explore"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#D97706] hover:bg-[#b86305] text-white font-bold text-sm transition-all"
              >
                <span>Explore Live Harvests →</span>
              </Link>

              <Link
                to="/farmers"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-transparent hover:bg-[#FAF9F6]/10 text-[#FAF9F6] border border-[#FAF9F6]/30 hover:border-[#FAF9F6]/60 font-semibold text-sm transition-all"
              >
                <span>Join as a Farming Partner →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
