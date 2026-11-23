import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ShieldCheck, Mail } from 'lucide-react';
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
                  AI-Enabled Agricultural Technology
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

          {/* Platform Navigation Links */}
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
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  className="text-[#FAF9F6]/80 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Harvests (Kiwi Trial #01)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/wholesale"
                  className="text-[#FAF9F6]/80 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Wholesale &amp; Trade</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/farmers"
                  className="text-[#FAF9F6]/80 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>For Smallholder Farmers &amp; FPOs</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#FAF9F6]/80 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>About Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Details & Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#D97706]">
              Corporate & Field Operations
            </h3>
            <div className="space-y-3 text-sm text-[#FAF9F6]/85">
              <div>
                <p className="font-semibold text-white">
                  Antarva Collective Private Limited
                </p>
                <p className="text-xs mt-0.5 text-[#FAF9F6]/75">DPIIT Recognized Startup • India</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D97706] shrink-0" />
                <a
                  href="mailto:people@antarvacollective.com"
                  className="hover:underline text-[#FAF9F6]/90"
                >
                  people@antarvacollective.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-[#D97706] shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <a
                  href="https://www.linkedin.com/company/antarva-collective/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#FAF9F6]/90"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F6]/70">
          <p>
            © {new Date().getFullYear()} {BRAND_CONFIG.brandName}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Built for Living Soil, Smallholder Sovereignty & Conscious Consumption.
          </p>
        </div>
      </div>
    </footer>
  );
};
