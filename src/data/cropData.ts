export interface KiwiBoxOption {
  id: string;
  label: string;
  shortLabel: string;
  weightKg: number;
  piecesApprox: string;
  priceInr: number;
  originalPriceInr: number;
  spotReservationInr: number;
  balanceOnDispatchInr: number;
  tag?: string;
  description: string;
}

export interface CityHubSeed {
  city: string;
  seedReservedCount: number;
  batchTarget: number;
  deliveryTransitDays: string;
  recentActivityTemplates: {
    firstName: string;
    boxLabel: string;
    timeAgo: string;
  }[];
}

export interface FoodStoryCardItem {
  id: string;
  stepLabel: string;
  title: string;
  description: string;
  highlightTag: string;
}

export interface HarvestStepItem {
  stepNumber: string;
  title: string;
  description: string;
}

export interface PantryWaitlistItem {
  id: string;
  title: string;
  subtitle: string;
  originRegion: string;
  description: string;
  badge: string;
  isBlockchainGiVerified?: boolean;
}

export interface BlockchainLedgerEntry {
  lotId: string;
  commodity: string;
  variety: string;
  originCluster: string;
  geoCoordinates: string;
  elevation: string;
  harvestDate: string;
  availableTonnage: string;
  minimumOrderQuantity: string;
  blockHash: string;
  previousBlockHash: string;
  timestampUtc: string;
  phytosanitaryLog: string;
  pesticideResidueStatus: string;
  aiQualityGrade: string;
  moistureOrCurcuminOrBrixSpec: string;
  exportReadiness: string;
}

export const BRAND_CONFIG = {
  brandName: 'Antarva Agri',
  parentCompany: 'Antarva Collective Private Limited',
  whatsappNumber: '919876543210', // Edit this single number to route all WhatsApp orders & inquiries
  supportEmail: 'agri@antarvacollective.com',
  headquarters: 'Guwahati & Bengaluru | Partner Orchards across Arunachal Pradesh, Assam & Meghalaya',
};

export const POPULAR_CITY_HUBS: CityHubSeed[] = [
  {
    city: 'Bengaluru',
    seedReservedCount: 23,
    batchTarget: 30,
    deliveryTransitDays: '48–72 hrs direct air-surface express from Guwahati gateway',
    recentActivityTemplates: [
      { firstName: 'Aarav', boxLabel: '2.5 kg Family Box', timeAgo: '2 hours ago' },
      { firstName: 'Meera', boxLabel: '5 kg Sharing Box', timeAgo: '4 hours ago' },
      { firstName: 'Karthik', boxLabel: '1 kg Trial Box', timeAgo: '6 hours ago' },
    ],
  },
  {
    city: 'Chennai',
    seedReservedCount: 21,
    batchTarget: 30,
    deliveryTransitDays: '48–72 hrs direct express dispatch',
    recentActivityTemplates: [
      { firstName: 'Ananya', boxLabel: '2.5 kg Family Box', timeAgo: '1 hour ago' },
      { firstName: 'Sundar', boxLabel: '2.5 kg Family Box', timeAgo: '5 hours ago' },
      { firstName: 'Divya', boxLabel: '1 kg Trial Box', timeAgo: 'Yesterday' },
    ],
  },
  {
    city: 'Mumbai',
    seedReservedCount: 24,
    batchTarget: 30,
    deliveryTransitDays: '48–72 hrs direct express dispatch',
    recentActivityTemplates: [
      { firstName: 'Rohan', boxLabel: '5 kg Sharing Box', timeAgo: '45 mins ago' },
      { firstName: 'Neha', boxLabel: '2.5 kg Family Box', timeAgo: '3 hours ago' },
      { firstName: 'Siddharth', boxLabel: '2.5 kg Family Box', timeAgo: 'Yesterday' },
    ],
  },
  {
    city: 'Delhi NCR',
    seedReservedCount: 22,
    batchTarget: 30,
    deliveryTransitDays: '48–60 hrs direct express dispatch',
    recentActivityTemplates: [
      { firstName: 'Vikram', boxLabel: '2.5 kg Family Box', timeAgo: '2 hours ago' },
      { firstName: 'Aditi', boxLabel: '5 kg Sharing Box', timeAgo: '5 hours ago' },
      { firstName: 'kabir', boxLabel: '1 kg Trial Box', timeAgo: 'Yesterday' },
    ],
  },
  {
    city: 'Hyderabad',
    seedReservedCount: 19,
    batchTarget: 30,
    deliveryTransitDays: '48–72 hrs direct express dispatch',
    recentActivityTemplates: [
      { firstName: 'Pranav', boxLabel: '2.5 kg Family Box', timeAgo: '3 hours ago' },
      { firstName: 'kavya', boxLabel: '1 kg Trial Box', timeAgo: '7 hours ago' },
      { firstName: 'Harsha', boxLabel: '5 kg Sharing Box', timeAgo: 'Yesterday' },
    ],
  },
  {
    city: 'Kolkata',
    seedReservedCount: 24,
    batchTarget: 30,
    deliveryTransitDays: '24–48 hrs direct Northeast corridor express',
    recentActivityTemplates: [
      { firstName: 'Sourav', boxLabel: '2.5 kg Family Box', timeAgo: '1 hour ago' },
      { firstName: 'Riya', boxLabel: '2.5 kg Family Box', timeAgo: '4 hours ago' },
      { firstName: 'Debashish', boxLabel: '5 kg Sharing Box', timeAgo: 'Yesterday' },
    ],
  },
  {
    city: 'Guwahati',
    seedReservedCount: 24,
    batchTarget: 30,
    deliveryTransitDays: '24 hrs direct Bichom Valley hillside linehaul',
    recentActivityTemplates: [
      { firstName: 'Bhaskar', boxLabel: '5 kg Sharing Box', timeAgo: '30 mins ago' },
      { firstName: 'Plabita', boxLabel: '2.5 kg Family Box', timeAgo: '3 hours ago' },
      { firstName: 'Manash', boxLabel: '1 kg Trial Box', timeAgo: 'Yesterday' },
    ],
  },
  {
    city: 'Coimbatore',
    seedReservedCount: 18,
    batchTarget: 30,
    deliveryTransitDays: '60–72 hrs direct express dispatch',
    recentActivityTemplates: [
      { firstName: 'Senthil', boxLabel: '2.5 kg Family Box', timeAgo: '2 hours ago' },
      { firstName: 'Lakshmi', boxLabel: '5 kg Sharing Box', timeAgo: '6 hours ago' },
      { firstName: 'Arun', boxLabel: '1 kg Trial Box', timeAgo: 'Yesterday' },
    ],
  },
];

export function getCitySeedData(cityInput: string): CityHubSeed {
  const cleaned = cityInput.trim() || 'Bengaluru';
  const match = POPULAR_CITY_HUBS.find(
    (h) => h.city.toLowerCase() === cleaned.toLowerCase()
  );
  if (match) return match;

  return {
    city: cleaned,
    seedReservedCount: 7,
    batchTarget: 30,
    deliveryTransitDays: '48–72 hrs direct orchard-to-city express dispatch',
    recentActivityTemplates: [
      { firstName: 'Aarav', boxLabel: '2.5 kg Family Box', timeAgo: '2 hours ago' },
      { firstName: 'Priya', boxLabel: '1 kg Trial Box', timeAgo: '5 hours ago' },
      { firstName: 'Rahul', boxLabel: '5 kg Sharing Box', timeAgo: 'Yesterday' },
    ],
  };
}

export const KIWI_TRIAL_BOXES: KiwiBoxOption[] = [
  {
    id: 'box-1kg',
    label: '1 kg Trial Box',
    shortLabel: '1 kg Trial Box',
    weightKg: 1,
    piecesApprox: '9–11 Fresh Mountain Kiwis',
    priceInr: 349,
    originalPriceInr: 420,
    spotReservationInr: 50,
    balanceOnDispatchInr: 299,
    tag: 'Great to Taste',
    description: 'Perfect for tasting the natural sweetness of fresh, tree-ripened Arunachal Kiwis.',
  },
  {
    id: 'box-2.5kg',
    label: '2.5 kg Family Box',
    shortLabel: '2.5 kg Family Box',
    weightKg: 2.5,
    piecesApprox: '23–27 Fresh Mountain Kiwis',
    priceInr: 799,
    originalPriceInr: 980,
    spotReservationInr: 50,
    balanceOnDispatchInr: 749,
    tag: 'Most Popular',
    description: 'Ideal for a family of four to enjoy fresh, juicy kiwis over two weeks.',
  },
  {
    id: 'box-5kg',
    label: '5 kg Sharing Box',
    shortLabel: '5 kg Sharing Box',
    weightKg: 5,
    piecesApprox: '46–54 Fresh Mountain Kiwis',
    priceInr: 1499,
    originalPriceInr: 1850,
    spotReservationInr: 50,
    balanceOnDispatchInr: 1449,
    tag: 'Best Value',
    description: 'Share with neighbours, parents, and friends. Packed in breathable eco-friendly trays.',
  },
];

export const FOOD_STORY_CARDS: FoodStoryCardItem[] = [
  {
    id: 'who-grew-it',
    stepLabel: '01 • THE PEOPLE',
    title: 'Who Grew Your Food',
    description:
      'Meet Tsering Dorjee and the mountain families in Bichom Valley who tended the orchard, along with their family farming story.',
    highlightTag: 'Bichom Valley, Arunachal Pradesh',
  },
  {
    id: 'when-plucked',
    stepLabel: '02 • THE HARVEST DAY',
    title: 'When It Was Plucked',
    description:
      'See when the crop was planted, when the trees flowered, and the exact morning your Kiwis were hand-plucked from the vine.',
    highlightTag: 'Never Stored for Months',
  },
  {
    id: 'what-was-used',
    stepLabel: '03 • PURE & NATURAL',
    title: 'What Was Used to Grow It',
    description:
      'Complete honesty on what touched the soil and fruit: natural compost, cow-based jeevamrutham, and neem oil. Strictly zero toxic pesticides or artificial ripeners.',
    highlightTag: '100% Chemical-Free',
  },
  {
    id: 'blockchain-gi-seal',
    stepLabel: '04 • GENUINE ORIGIN',
    title: 'Blockchain Seal for GI-Tagged Treasures',
    description:
      'Buying famous regional specialties like Assam Tea, Lakadong Turmeric, or Arunachal Kiwis? One tap verifies on the blockchain that it came from the genuine GI-tagged village—never fake or mixed.',
    highlightTag: 'Blockchain Verified Origin',
  },
];

export const HOW_HARVEST_REACHES_YOU_STEPS: HarvestStepItem[] = [
  {
    stepNumber: 'Step 1',
    title: 'Grown in Healthy Mountain Soil',
    description:
      'Farmers use ancient natural methods and pure seeds to grow nutrient-rich fruit.',
  },
  {
    stepNumber: 'Step 2',
    title: 'Plucked Only After You Book',
    description:
      'No months in cold storage. Farmers harvest fresh based on pre-booked orders.',
  },
  {
    stepNumber: 'Step 3',
    title: 'Straight From Orchard to Your Home',
    description:
      'Packed at the farm gate and delivered to your doorstep while farmers keep 100% of their fair price.',
  },
];

export const PANTRY_WAITLIST_ITEMS: PantryWaitlistItem[] = [
  {
    id: 'walnuts-badam',
    title: 'Mountain Walnuts & Badam (Almonds)',
    subtitle: 'Unbleached, sun-dried, farm-direct.',
    originRegion: 'Dirang Valley, Arunachal Pradesh',
    description:
      'Thin-shelled mountain walnuts and sweet almonds, slow-dried under crisp mountain sun without chemical bleaching. Rich in natural oils and crunch, sent straight from family orchards.',
    badge: 'Sun-Dried & Unbleached',
  },
  {
    id: 'wood-pressed-oils',
    title: 'Wood-Pressed (Cold-Pressed) Oils',
    subtitle: 'Pure Kachi Ghani oils, zero chemical refining.',
    originRegion: 'Assam Mustard & Meghalaya Sesame Farms',
    description:
      'Slow-pressed in traditional wooden ghanis at room temperature to keep all the natural aroma and heart-healthy nutrients intact. Zero chemical solvents, zero preservatives, and never blended.',
    badge: 'Pure Wooden Ghani',
  },
  {
    id: 'palm-sugar-karupatti',
    title: 'Artisanal Palm Sugar (Karupatti / Jaggery)',
    subtitle: 'Unrefined, sulphur-free rural craft.',
    originRegion: 'Traditional Palmyra Groves, Tamil Nadu',
    description:
      'Fresh palm nectar collected at dawn in clay pots and slow-cooked over firewood by rural artisan families. A mineral-rich, unrefined sweetener with zero sulphur or white sugar adulteration.',
    badge: 'Sulphur-Free Craft',
  },
  {
    id: 'gi-tagged-treasures',
    title: 'GI-Tagged Assam Tea & Lakadong Turmeric',
    subtitle: 'Single-origin Assam Tea, Lakadong Turmeric, King Chilli.',
    originRegion: 'Jaintia Hills (Meghalaya) & Upper Assam',
    description:
      'Golden Lakadong Turmeric bursting with natural curcumin and whole-leaf Assam Tea harvested from their true native villages. Every pack carries a tamper-proof seal proving it is 100% genuine and unblended.',
    badge: 'Blockchain Verified GI Origin',
    isBlockchainGiVerified: true,
  },
  {
    id: 'seasonal-fruits-veggies',
    title: 'Seasonal Fruits & Veggies',
    subtitle: 'Harvested strictly to order.',
    originRegion: 'Partner Smallholder Family Farms',
    description:
      'Naturally ripened citrus, heirloom tomatoes, leafy greens, and root vegetables grown without synthetic sprays. Plucked just 24 hours before delivery so your kitchen gets peak farm freshness.',
    badge: 'Harvested to Order',
  },
];

export const BLOCKCHAIN_LEDGER_LOTS: BlockchainLedgerEntry[] = [
  {
    lotId: 'ANT-BLK-KIWI-2026-881',
    commodity: 'Northeast Kiwi (High-Altitude Hayward)',
    variety: 'Grade-A Export & Retail Table Selection',
    originCluster: 'Bichom & Dirang Valley Cluster, Arunachal Pradesh',
    geoCoordinates: '27.2648° N, 92.4152° E',
    elevation: '1,850 meters ASL',
    harvestDate: '2026-10-28 (Peak Natural Starch-to-Sugar Window)',
    availableTonnage: '18.5 Metric Tons (Pre-Bookable in 1 MT – 10 MT Lots)',
    minimumOrderQuantity: '500 kg Domestic / 2,000 kg Reefer Export',
    blockHash: '0x9f84c2e1b7a04891d6c53a9e8b21f047c6d82a19e4f501238b7c6e4a1290d8f3',
    previousBlockHash: '0x4a19d302f8b76c14e920a5d3b871e6f49012c3d4e5f6a7b8c9d0e1f2a3b4c5d6',
    timestampUtc: '2026-10-28T06:42:19Z',
    phytosanitaryLog: 'NPPO / APEDA Phytosanitary Clear — Zero Fruit Fly & Zero Quarantine Pest',
    pesticideResidueStatus: 'NABL Accredited Lab Verified: 0.00 mg/kg Synthetic Residue (EU/Codex Compliant)',
    aiQualityGrade: 'Grade A+ (94.2% Uniformity Score, Firmness 6.8 kgf, Target Brix 14.4°)',
    moistureOrCurcuminOrBrixSpec: 'Harvest Brix: 6.8° | Ripened Table Brix: 14.4° | Dry Matter: 17.8%',
    exportReadiness: 'Ready for Cold-Chain Reefer / Air Cargo Dispatch (Guwahati & Kolkata Gateways)',
  },
  {
    lotId: 'ANT-BLK-TURM-2026-409',
    commodity: 'Lakadong Turmeric (GI-Heartland Sliced & Sun-Dried / Powder)',
    variety: 'Heirloom Jaintia Lakadong (High Curcuminoid Strain)',
    originCluster: 'Laskein Block, West Jaintia Hills, Meghalaya',
    geoCoordinates: '25.4670° N, 92.2036° E',
    elevation: '1,320 meters ASL',
    harvestDate: '2026-03-19 (9-Month Mature Rhizome Dig)',
    availableTonnage: '12.0 Metric Tons (Dry Polished Fingers / Cold-Milled)',
    minimumOrderQuantity: '250 kg Domestic / 1,000 kg Export Lot',
    blockHash: '0x3e71b5a902d48f61c82a7e94d103f5b28c491e07a6d2b8f4c1e903a57d62b4e1',
    previousBlockHash: '0x8c20f4e19a73b6d5012e8f4a9c3b7d16e502a8f4c9b1d7e304a6f2c8b5d9e1a0',
    timestampUtc: '2026-03-22T11:15:04Z',
    phytosanitaryLog: 'Zero Lead Chromate, Zero Artificial Yellow Dye, Steam-Sterilized Option Available',
    pesticideResidueStatus: '100% Traditional Natural Mulch Grown — EU Organic MRL Pass',
    aiQualityGrade: 'Grade Super-A (HPLC Curcuminoid Content: 7.84%, Essential Oil: 4.9%)',
    moistureOrCurcuminOrBrixSpec: 'Curcumin: 7.84% (Lab Certified) | Moisture: <8.5%',
    exportReadiness: 'Nutraceutical & Specialty Spice Export Ready (COA + HPLC Graph Attached)',
  },
  {
    lotId: 'ANT-BLK-TEA-2026-612',
    commodity: 'Single-Origin Assam Tea (Artisanal Orthodox Whole Leaf)',
    variety: 'Khorikatia & Dibrugarh Small-Grower Assamica Clone',
    originCluster: 'Upper Assam Regenerative Small Tea Grower Collective',
    geoCoordinates: '27.4728° N, 94.9120° E',
    elevation: '145 meters ASL (Brahmaputra Alluvial Floodplain)',
    harvestDate: '2026-06-14 (Second Flush Tippy Golden Pick)',
    availableTonnage: '6.4 Metric Tons (Multi-Wall Foil Lined Paper Sacks)',
    minimumOrderQuantity: '100 kg Specialty Lot / 1,000 kg Bulk Container',
    blockHash: '0x7d12a8f3e904b6c15d28e7a4f093c6b81e2d4f7a90b3c5e8d1f2a4b6c8e0d2f5',
    previousBlockHash: '0x1b4332a9d97706f1f2937e8a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c',
    timestampUtc: '2026-06-15T14:28:51Z',
    phytosanitaryLog: 'Tea Board India Compliant — Zero Synthetic Acaricides, Neem & Vermi-Wash Managed',
    pesticideResidueStatus: 'Eurofins 500-Compound Screen Passed (Zero Detectable Neonicotinoids)',
    aiQualityGrade: 'FTGFOP1 Clonal Tippy Grade (18.6% Golden Tips by Vision Optical Sorter)',
    moistureOrCurcuminOrBrixSpec: 'Theaflavin: 1.62% | Water Extract: 44.1% | Moisture: 3.1%',
    exportReadiness: 'Direct Estate-to-Importer Dispatch (ICD Amingaon / Kolkata Port)',
  },
];
