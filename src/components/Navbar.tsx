import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sprout, Menu, X, ShieldCheck } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Showcase', path: '/' },
  { label: 'Explore Harvests', path: '/explore' },
  { label: 'Wholesale & Trade', path: '/wholesale' },
  { label: 'For Farmers', path: '/farmers' },
  { label: 'About Us', path: '/about' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#1B4332]/15">
      {/* Top micro announcement bar */}
      <div className="bg-[#1B4332] text-[#FAF9F6] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
            <span className="font-medium tracking-wide">
              LIVE HARVEST TRIAL #01: High-Altitude Bichom Valley Kiwis (1,850m) — Dispatched within 36h of picking
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[#FAF9F6]/80">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D97706]" />
              100% Carbide-Free &amp; Crop-Passport Verified
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none shrink-0"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-11 h-11 rounded-xl bg-[#1B4332] flex items-center justify-center text-[#FAF9F6] shadow-sm group-hover:bg-[#1B4332]/90 transition-colors">
            <Sprout className="w-6 h-6 text-[#D97706]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-[#1B4332]">
              Antarva Agri
            </span>
            <span className="text-[11px] text-[#1B4332]/80 font-medium">
              AI-Enabled Regenerative Agriculture
            </span>
          </div>
        </Link>

        {/* Desktop Route Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#1B4332]/5 p-1.5 rounded-full border border-[#1B4332]/10">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `px-3.5 xl:px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1B4332] text-[#FAF9F6] shadow-sm'
                    : 'text-[#1F2937] hover:text-[#1B4332] hover:bg-[#1B4332]/10'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Primary CTA Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 bg-[#D97706] hover:bg-[#b86305] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap"
          >
            <span>Explore →</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl border border-[#1B4332]/20 text-[#1B4332] hover:bg-[#1B4332]/5"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-b border-[#1B4332]/15 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1.5">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#1B4332] text-[#FAF9F6]'
                      : 'text-[#1F2937] hover:bg-[#1B4332]/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="pt-2">
            <Link
              to="/explore"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#D97706] hover:bg-[#b86305] text-white font-semibold text-sm px-5 py-3 rounded-xl shadow-sm"
            >
              <span>Explore →</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
