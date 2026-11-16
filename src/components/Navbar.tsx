import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_DIRECT_URL } from '../data/agencyData';
import { WhatsAppIcon } from './WhatsAppFloatingButton';

interface NavbarProps {
  onOpenAudit: () => void;
}

export default function Navbar({ onOpenAudit }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Clients', href: '#clients' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
          : 'bg-white/60 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xl"
          >
            <div className="w-9 h-9 rounded-xl bg-white shadow-sm border border-black/[0.06] overflow-hidden flex items-center justify-center p-0.5 transition-transform duration-200 group-hover:scale-105">
              <img
                src="/assets/aistudio/logo_png_photoshop_fcd848ba.png"
                alt="PromoteBuddy Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-slate-950 whitespace-nowrap shrink-0">
              PromoteBuddy
            </span>
          </a>

          {/* Zone 2: Clean Single-Line Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-blue-600 active:scale-[0.98] rounded-full transition-all duration-200 shadow-sm whitespace-nowrap shrink-0"
            >
              <span>Get Free Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            <button
              onClick={onOpenAudit}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-950 rounded-full whitespace-nowrap shrink-0"
            >
              Free Audit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200/80 bg-white/95 backdrop-blur-xl px-6 pt-2 pb-6 shadow-xl">
          <nav className="flex flex-col divide-y divide-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors py-3.5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 flex flex-col gap-2.5">
            <a
              href={WHATSAPP_DIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5d] rounded-2xl transition-colors shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat Directly on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-2xl transition-colors"
            >
              <span>Request Free Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
