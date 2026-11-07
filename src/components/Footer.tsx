import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ShieldCheck, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/cropData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1B4332] text-[#FAF9F6] border-t border-[#FAF9F6]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FAF9F6]/15">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF9F6]/10 border border-[#FAF9F6]/20 flex items-center justify-center">
                <Sprout className="w-5 h-5 text-[#D97706]" />
              </div>
              <div>
                <span className="font-serif-display text-xl font-bold tracking-tight text-[#FAF9F6] block">
                  Antarva Agri
                </span>
                <span className="text-xs text-[#FAF9F6]/75">
                  A Venture of {BRAND_CONFIG.parentCompany}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#FAF9F6]/85 leading-relaxed max-w-md">
              Turning rural agricultural skills into dignified livelihoods, regenerating living topsoil with AI + ancient Vrikshayurveda wisdom, and connecting chemical-free harvests directly from smallholder orchards to conscious homes and global markets.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FAF9F6]/10 border border-[#FAF9F6]/15 text-xs text-[#FAF9F6]/90">
              <ShieldCheck className="w-4 h-4 text-[#D97706] shrink-0" />
              <span>Zero Middleman Deductions • 100% Batch-Traced Crop Passports</span>
            </div>
          </div>

          {/* Strictly 4 Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              Platform Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-[#FAF9F6]/80 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Home (Kiwi Trial #01)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/wholesale"
                  className="text-[#FAF9F6]/80 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Wholesale & Trade</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/farmers"
                  className="text-[#FAF9F6]/80 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>For Smallholder Farmers & FPOs</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#FAF9F6]/80 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Who We Are (Antarva Collective)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Details & Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              Corporate & Field Operations
            </h3>
            <div className="space-y-2.5 text-sm text-[#FAF9F6]/85">
              <p className="font-semibold text-white">
                {BRAND_CONFIG.parentCompany}
              </p>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
                <span>{BRAND_CONFIG.headquarters}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D97706] shrink-0" />
                <a
                  href={`mailto:${BRAND_CONFIG.supportEmail}`}
                  className="hover:underline text-[#FAF9F6]/90"
                >
                  {BRAND_CONFIG.supportEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[#D97706] font-medium hover:underline"
                >
                  <span>WhatsApp Direct Trade & Trial Desk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F6]/70">
          <p>
            © {new Date().getFullYear()} {BRAND_CONFIG.parentCompany}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Built for Living Soil, Smallholder Sovereignty & Conscious Consumption.
          </p>
        </div>
      </div>
    </footer>
  );
};
