import React, { useState } from 'react';
import {
  Database,
  Globe2,
  Truck,
  Cpu,
  CheckCircle2,
  MapPin,
  Calendar,
  Hash,
  FileCheck2,
  Send,
  ArrowRight,
  Layers,
  Scale,
} from 'lucide-react';
import { BLOCKCHAIN_LEDGER_LOTS, BRAND_CONFIG, type BlockchainLedgerEntry } from '../data/cropData';
import { insertWholesaleInquiryToSupabase } from '../lib/supabase';

export const Wholesale: React.FC = () => {
  const [selectedLot, setSelectedLot] = useState<BlockchainLedgerEntry>(BLOCKCHAIN_LEDGER_LOTS[0]);

  // Wholesale & Export Inquiry Form State
  const [companyName, setCompanyName] = useState('');
  const [buyerType, setBuyerType] = useState('Wholesaler');
  const [commodity, setCommodity] = useState('Northeast Kiwi (High-Altitude Hayward)');
  const [estimatedTonnage, setEstimatedTonnage] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !estimatedTonnage.trim() || !whatsapp.trim() || !email.trim()) {
      return;
    }
    setIsSubmitting(true);
    await insertWholesaleInquiryToSupabase({
      company_name: companyName.trim(),
      buyer_type: buyerType,
      commodity,
      estimated_tonnage: estimatedTonnage.trim(),
      whatsapp: whatsapp.trim(),
      email: email.trim(),
      status: 'new_lead',
    });
    setIsSubmitting(false);
    setInquirySubmitted(true);
  };

  const buildWholesaleWhatsAppUrl = () => {
    const text = [
      `Hello Antarva Agri Trade Desk! We would like to request a bulk/export allocation & COA pack.`,
      ``,
      `*Company:* ${companyName}`,
      `*Buyer Category:* ${buyerType}`,
      `*Commodity:* ${commodity}`,
      `*Estimated Volume:* ${estimatedTonnage}`,
      `*WhatsApp:* ${whatsapp}`,
      `*Email:* ${email}`,
    ].join('\n');
    return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1F2937]">
      {/* =====================================================================
          1. HERO: BULK AGRICULTURAL TRADE BACKED BY BLOCKCHAIN & AI GRADING
      ====================================================================== */}
      <section className="bg-[#1B4332] text-[#FAF9F6] py-16 lg:py-24 border-b border-[#FAF9F6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF9F6]/10 border border-[#FAF9F6]/20 text-xs font-bold uppercase tracking-wider text-[#D97706]">
                <Globe2 className="w-4 h-4" />
                <span>Domestic Bulk • Global Exports • Specialty Imports</span>
              </div>

              <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-white leading-tight">
                Bulk Agricultural Trade Backed by Blockchain Traceability &amp; Farm-Gate AI Quality Grading.
              </h1>

              <p className="text-base sm:text-lg text-[#FAF9F6]/85 leading-relaxed max-w-3xl">
                Eliminate multi-tier mandi opacity, inconsistent moisture/curcumin/Brix grades, and MRL pesticide rejection risks. Antarva Agri aggregates regenerative smallholder clusters across Northeast &amp; Southern India into export-ready, cryptographically audited bulk lots.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#wholesale-inquiry-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#D97706] hover:bg-[#b86305] text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>Request Bulk Lot Allocation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#blockchain-ledger-explorer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FAF9F6]/10 hover:bg-[#FAF9F6]/20 text-[#FAF9F6] border border-[#FAF9F6]/20 font-semibold text-sm transition-all"
                >
                  <Database className="w-4 h-4 text-[#D97706]" />
                  <span>Inspect Live Blockchain Ledger</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#FAF9F6]/5 border border-[#FAF9F6]/15 rounded-3xl p-6 space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                Trade Desk Specifications
              </h2>
              <div className="space-y-3 text-sm">
                <div className="p-3.5 rounded-2xl bg-[#FAF9F6]/5 border border-[#FAF9F6]/10">
                  <span className="text-xs text-[#FAF9F6]/65 block">Residue & Phytosanitary</span>
                  <span className="font-bold text-white">
                    NABL Lab COA + EU/NOP/APEDA MRL Compliance
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#FAF9F6]/5 border border-[#FAF9F6]/10">
                  <span className="text-xs text-[#FAF9F6]/65 block">Optical & AI Farm-Gate Grading</span>
                  <span className="font-bold text-white">
                    94%+ Size, Brix & Curcuminoid Uniformity
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#FAF9F6]/5 border border-[#FAF9F6]/10">
                  <span className="text-xs text-[#FAF9F6]/65 block">Pre-Harvest Visibility</span>
                  <span className="font-bold text-white">
                    Lock Container Tonnage 60–90 Days Before Harvest
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. INTERACTIVE BLOCKCHAIN LEDGER PREVIEW
      ====================================================================== */}
      <section
        id="blockchain-ledger-explorer"
        className="py-16 lg:py-24 border-b border-[#1B4332]/15"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-wider">
              <Hash className="w-4 h-4 text-[#D97706]" />
              <span>Immutable Origin & Phytosanitary Explorer</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              Interactive Blockchain Ledger Preview
            </h2>
            <p className="text-sm sm:text-base text-[#1F2937]/80">
              Select a flagship bulk commodity lot below to inspect its immutable hash record, geo-coordinates, elevation, residue-free phytosanitary log, and AI quality grade.
            </p>
          </div>

          {/* Commodity Switcher Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {BLOCKCHAIN_LEDGER_LOTS.map((lot) => {
              const active = selectedLot.lotId === lot.lotId;
              return (
                <button
                  key={lot.lotId}
                  type="button"
                  onClick={() => setSelectedLot(lot)}
                  className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer border-2 flex items-center gap-2.5 ${
                    active
                      ? 'bg-[#1B4332] text-[#FAF9F6] border-[#1B4332] shadow-md'
                      : 'bg-white text-[#1F2937] border-[#1B4332]/15 hover:border-[#1B4332]/50'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      active ? 'bg-[#D97706]' : 'bg-[#1B4332]/40'
                    }`}
                  />
                  <span>{lot.commodity.split(' (')[0]}</span>
                  <span className="font-mono text-[11px] opacity-75">({lot.lotId})</span>
                </button>
              );
            })}
          </div>

          {/* Blockchain Explorer Card */}
          <div className="bg-white rounded-3xl border-2 border-[#1B4332]/25 shadow-lg overflow-hidden">
            {/* Terminal-style Hash Header */}
            <div className="bg-[#1F2937] text-[#FAF9F6] p-5 sm:p-6 border-b border-[#FAF9F6]/10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#D97706] text-white font-mono text-xs font-bold">
                      VERIFIED BLOCK RECORD
                    </span>
                    <span className="font-mono text-xs text-[#FAF9F6]/70">
                      Timestamp: {selectedLot.timestampUtc}
                    </span>
                  </div>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white">
                    {selectedLot.commodity}
                  </h3>
                </div>

                <div className="text-left sm:text-right font-mono text-xs bg-black/30 px-4 py-2.5 rounded-xl border border-white/10">
                  <span className="text-[#D97706] block font-semibold">
                    LOT ID: {selectedLot.lotId}
                  </span>
                  <span className="text-[#FAF9F6]/80 break-all">
                    SHA-256: {selectedLot.blockHash.slice(0, 26)}...{selectedLot.blockHash.slice(-10)}
                  </span>
                </div>
              </div>
            </div>

            {/* Ledger Details Grid */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#1B4332]/15 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#D97706]">
                  <MapPin className="w-4 h-4" />
                  <span>Geo-Coordinates & Elevation</span>
                </div>
                <p className="font-bold text-base text-[#1B4332]">{selectedLot.geoCoordinates}</p>
                <p className="text-xs font-semibold text-[#1F2937]/80">
                  Elevation: {selectedLot.elevation}
                </p>
                <p className="text-xs text-[#1F2937]/70">{selectedLot.originCluster}</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#1B4332]/15 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#D97706]">
                  <Calendar className="w-4 h-4" />
                  <span>Harvest Date & Volume</span>
                </div>
                <p className="font-bold text-base text-[#1B4332]">{selectedLot.harvestDate}</p>
                <p className="text-xs font-semibold text-[#1F2937]/80">
                  Available: {selectedLot.availableTonnage}
                </p>
                <p className="text-xs text-[#1F2937]/70">MOQ: {selectedLot.minimumOrderQuantity}</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#1B4332]/15 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#D97706]">
                  <Cpu className="w-4 h-4" />
                  <span>AI Farm-Gate Quality Grade</span>
                </div>
                <p className="font-bold text-base text-[#1B4332]">{selectedLot.aiQualityGrade}</p>
                <p className="text-xs font-semibold text-[#1F2937]/80">
                  {selectedLot.moistureOrCurcuminOrBrixSpec}
                </p>
              </div>

              <div className="md:col-span-2 p-5 rounded-2xl bg-[#1B4332]/5 border border-[#1B4332]/20 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#1B4332]">
                  <FileCheck2 className="w-4 h-4 text-[#D97706]" />
                  <span>Residue-Free Phytosanitary & MRL Log</span>
                </div>
                <p className="font-bold text-sm sm:text-base text-[#1B4332]">
                  {selectedLot.pesticideResidueStatus}
                </p>
                <p className="text-xs text-[#1F2937]/80">{selectedLot.phytosanitaryLog}</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#1B4332] text-[#FAF9F6] space-y-1.5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-[#D97706] block">
                    Logistics & Export Gateway
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-1">
                    {selectedLot.exportReadiness}
                  </p>
                </div>
                <a
                  href="#wholesale-inquiry-form"
                  onClick={() => setCommodity(selectedLot.commodity)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D97706] hover:underline pt-2"
                >
                  <span>Reserve This Lot ({selectedLot.lotId})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Full Cryptographic Hash Footer */}
            <div className="px-6 py-3.5 bg-[#FAF9F6] border-t border-[#1B4332]/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#1F2937]/70">
              <span>Full Block Hash: {selectedLot.blockHash}</span>
              <span>Parent Hash: {selectedLot.previousBlockHash.slice(0, 22)}...</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. 3-STEP PRE-HARVEST BULK BOOKING FLOW
      ====================================================================== */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#1B4332]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-xs font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#D97706]" />
              <span>Predictable Supply Chain</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#1B4332]">
              3-Step Pre-Harvest Bulk Booking Flow
            </h2>
            <p className="text-sm sm:text-base text-[#1F2937]/80">
              Instead of scrambling for spot-market inventory of dubious origin, lock in single-origin regenerative tonnage before the harvest blade touches the crop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-[#FAF9F6] border-2 border-[#1B4332]/15 space-y-4 relative">
              <div className="w-12 h-12 rounded-2xl bg-[#1B4332] text-white flex items-center justify-center font-mono font-bold text-lg">
                01
              </div>
              <h3 className="font-serif-display text-xl font-bold text-[#1B4332]">
                AI Yield Forecast (60–90 Days Ahead)
              </h3>
              <p className="text-sm text-[#1F2937]/80 leading-relaxed">
                Our computer-vision canopy scans and micro-climate models publish expected cluster tonnage, fruit size calibration, and phytochemical specs (Brix / Curcumin / Theaflavin) up to 90 days pre-harvest.
              </p>
              <div className="pt-2 text-xs font-bold text-[#D97706] flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                <span>Real-time cluster telemetry shared with buyers</span>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF9F6] border-2 border-[#1B4332]/15 space-y-4 relative">
              <div className="w-12 h-12 rounded-2xl bg-[#1B4332] text-white flex items-center justify-center font-mono font-bold text-lg">
                02
              </div>
              <h3 className="font-serif-display text-xl font-bold text-[#1B4332]">
                Pre-Book Container / Truckload Lots
              </h3>
              <p className="text-sm text-[#1F2937]/80 leading-relaxed">
                Lock in forward contracts with transparent farm-gate pricing. Custom grading, packaging specs, and NABL / Eurofins MRL residue lab panels are tagged directly to your reserved lot ID.
              </p>
              <div className="pt-2 text-xs font-bold text-[#D97706] flex items-center gap-1.5">
                <Scale className="w-4 h-4" />
                <span>Flexible MOQ from 250 kg to 20-ft Reefer FCLs</span>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-[#1B4332] text-[#FAF9F6] space-y-4 relative">
              <div className="w-12 h-12 rounded-2xl bg-[#D97706] text-white flex items-center justify-center font-mono font-bold text-lg">
                03
              </div>
              <h3 className="font-serif-display text-xl font-bold text-white">
                Direct Cluster-to-Port / Warehouse Dispatch
              </h3>
              <p className="text-sm text-[#FAF9F6]/85 leading-relaxed">
                Harvested strictly at peak maturity, optically graded at our regional packhouses, sealed with a Blockchain Lot Passport, and dispatched straight to your warehouse, ICD dry port, or sea/air gateway.
              </p>
              <div className="pt-2 text-xs font-bold text-[#D97706] flex items-center gap-1.5">
                <Truck className="w-4 h-4" />
                <span>Zero mandi handling damage or cold-chain breaks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. WHOLESALE & EXPORT INQUIRY FORM
      ====================================================================== */}
      <section id="wholesale-inquiry-form" className="py-16 lg:py-24 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border-2 border-[#1B4332] shadow-xl p-6 sm:p-10">
            <div className="space-y-2 pb-6 mb-6 border-b border-[#1B4332]/15">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
                Direct B2B & Export Desk • Antarva Collective Private Limited
              </span>
              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1B4332]">
                Wholesale, Export &amp; Import Inquiry Form
              </h2>
              <p className="text-sm text-[#1F2937]/75">
                Share your commodity requirement and target tonnage. Our trade desk will respond within 4 business hours with live packhouse availability, FOB/Ex-Packhouse pricing, and lab COA sheets.
              </p>
            </div>

            {!inquirySubmitted ? (
              <form onSubmit={handleInquirySubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="b2b-company"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                    >
                      Company / Organization Name *
                    </label>
                    <input
                      id="b2b-company"
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g., GreenLeaf Global Exports Pvt Ltd"
                      className="w-full px-4 py-3 rounded-xl border border-[#1F2937]/20 bg-[#FAF9F6] text-sm focus:outline-none focus:border-[#1B4332] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="b2b-buyer-type"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                    >
                      Buyer Type *
                    </label>
                    <select
                      id="b2b-buyer-type"
                      value={buyerType}
                      onChange={(e) => setBuyerType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#1F2937]/20 bg-[#FAF9F6] text-sm focus:outline-none focus:border-[#1B4332] focus:bg-white"
                    >
                      <option value="Wholesaler">Wholesaler (Domestic Bulk)</option>
                      <option value="Exporter">Exporter (International Trade)</option>
                      <option value="Importer">Importer (Overseas Buyer)</option>
                      <option value="Retailer">Retailer / Modern Trade / Clean-Label Brand</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="b2b-commodity"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                    >
                      Commodity of Interest *
                    </label>
                    <select
                      id="b2b-commodity"
                      value={commodity}
                      onChange={(e) => setCommodity(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#1F2937]/20 bg-[#FAF9F6] text-sm focus:outline-none focus:border-[#1B4332] focus:bg-white"
                    >
                      <option value="Northeast Kiwi (High-Altitude Hayward)">
                        Northeast Kiwi (High-Altitude Hayward)
                      </option>
                      <option value="Lakadong Turmeric (7.5%+ Curcumin GI)">
                        Lakadong Turmeric (7.5%+ Curcumin GI)
                      </option>
                      <option value="Single-Origin Assam Tea (Orthodox Whole Leaf)">
                        Single-Origin Assam Tea (Orthodox Whole Leaf)
                      </option>
                      <option value="Naga King Chilli / Bhut Jolokia (Dry / Smoked)">
                        Naga King Chilli / Bhut Jolokia (Dry / Smoked)
                      </option>
                      <option value="Himalayan Mountain Walnuts & Badam">
                        Himalayan Mountain Walnuts & Badam
                      </option>
                      <option value="Artisanal Palmyra Palm Sugar (Karupatti)">
                        Artisanal Palmyra Palm Sugar (Karupatti)
                      </option>
                      <option value="Wood-Pressed Mustard & White Sesame Oils">
                        Wood-Pressed Mustard & White Sesame Oils
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="b2b-tonnage"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                    >
                      Estimated Tonnage / Volume *
                    </label>
                    <input
                      id="b2b-tonnage"
                      type="text"
                      required
                      value={estimatedTonnage}
                      onChange={(e) => setEstimatedTonnage(e.target.value)}
                      placeholder="e.g., 2.5 Metric Tons or 1x20ft Reefer"
                      className="w-full px-4 py-3 rounded-xl border border-[#1F2937]/20 bg-[#FAF9F6] text-sm focus:outline-none focus:border-[#1B4332] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="b2b-whatsapp"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                    >
                      WhatsApp Contact Number *
                    </label>
                    <input
                      id="b2b-whatsapp"
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
                      htmlFor="b2b-email"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1F2937] mb-1.5"
                    >
                      Corporate Email *
                    </label>
                    <input
                      id="b2b-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="procurement@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#1F2937]/20 bg-[#FAF9F6] text-sm focus:outline-none focus:border-[#1B4332] focus:bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-[#1B4332] hover:bg-[#143325] disabled:opacity-60 text-[#FAF9F6] font-bold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#D97706]" />
                  <span>
                    {isSubmitting
                      ? 'Saving Inquiry to Trade Desk...'
                      : 'Submit Wholesale & Export Inquiry'}
                  </span>
                </button>
              </form>
            ) : (
              <div className="space-y-5 py-4">
                <div className="p-5 rounded-2xl bg-[#1B4332]/10 border border-[#1B4332]/25 flex items-start gap-3.5">
                  <CheckCircle2 className="w-6 h-6 text-[#1B4332] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1B4332] block">
                      Trade Desk Dossier Logged
                    </span>
                    <h3 className="font-bold text-lg text-[#1F2937] mt-0.5">
                      Thank you, {companyName} ({buyerType})
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1F2937]/80 mt-1">
                      We have registered your inquiry for <strong>{estimatedTonnage}</strong> of{' '}
                      <strong>{commodity}</strong>. You can also connect immediately with our B2B Trade Desk on WhatsApp below:
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={buildWholesaleWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3.5 px-5 rounded-xl bg-[#D97706] hover:bg-[#b86305] text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Open Instant WhatsApp Trade Line</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setInquirySubmitted(false)}
                    className="px-5 py-3.5 rounded-xl border border-[#1B4332]/25 text-xs font-bold text-[#1B4332] hover:bg-[#1B4332]/5 cursor-pointer"
                  >
                    Submit Another Lot Inquiry
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
