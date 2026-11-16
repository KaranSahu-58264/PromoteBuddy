import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_DIRECT_URL } from '../data/agencyData';
import { WhatsAppIcon } from './WhatsAppFloatingButton';

interface FooterProps {
  onOpenAudit: () => void;
}

export default function Footer({ onOpenAudit }: FooterProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <footer id="contact" className="bg-[#f5f5f7] pt-14 pb-20 sm:pb-16 border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Contact Card */}
        <div className="rounded-3xl bg-white p-7 sm:p-12 border border-black/[0.06] shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Call to Action */}
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Start a Conversation
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight text-balance">
                Ready to grow with clean design and smart marketing?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-md">
                Chat directly with Ayush on WhatsApp or claim a free 15-minute brand audit.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_DIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5d] rounded-full transition-colors shadow-md shadow-[#25D366]/20"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Direct WhatsApp Chat</span>
                </a>

                <button
                  onClick={onOpenAudit}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 rounded-full transition-colors"
                >
                  <span>Get a Free Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Contact Tiles */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Email */}
              <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/[0.04] flex items-center justify-between gap-2 sm:col-span-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shrink-0 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Email
                    </div>
                    <a
                      href="mailto:ayushdesign6@gmail.com"
                      className="text-sm font-bold text-slate-900 hover:text-blue-600 truncate block"
                    >
                      ayushdesign6@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('ayushdesign6@gmail.com', 'email')}
                  className="p-2 rounded-xl bg-white hover:bg-slate-200 text-slate-500 transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedText === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone 1 */}
              <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/[0.04] flex items-center justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Phone / WhatsApp
                    </div>
                    <a
                      href="tel:+919669042618"
                      className="text-sm font-bold text-slate-900 hover:text-blue-600 truncate block tabular-nums"
                    >
                      +91 9669042618
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('+919669042618', 'phone1')}
                  className="p-2 rounded-xl bg-white hover:bg-slate-200 text-slate-500 transition-colors shrink-0"
                  title="Copy phone"
                >
                  {copiedText === 'phone1' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone 2 */}
              <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/[0.04] flex items-center justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-700 shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Secondary Phone
                    </div>
                    <a
                      href="tel:+919584961975"
                      className="text-sm font-bold text-slate-900 hover:text-blue-600 truncate block tabular-nums"
                    >
                      +91 9584961975
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('+919584961975', 'phone2')}
                  className="p-2 rounded-xl bg-white hover:bg-slate-200 text-slate-500 transition-colors shrink-0"
                  title="Copy phone"
                >
                  {copiedText === 'phone2' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/[0.04] flex items-center gap-3 sm:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-orange-500 shrink-0 shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Location
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    Raipur, Chhattisgarh, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/80 text-xs text-slate-500">
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/aistudio/logo_png_photoshop_fcd848ba.png"
              alt="PromoteBuddy Logo"
              className="w-6 h-6 object-contain rounded-md"
              referrerPolicy="no-referrer"
            />
            <span className="font-bold text-slate-900">PromoteBuddy</span>
            <span>·</span>
            <span>Founded by Ayush</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a href="#smm" className="hover:text-slate-950 transition-colors">SMM</a>
            <a href="#services" className="hover:text-slate-950 transition-colors">Services</a>
            <a href="#clients" className="hover:text-slate-950 transition-colors">Clients</a>
            <a href="#portfolio" className="hover:text-slate-950 transition-colors">Work</a>
            <a href="#about" className="hover:text-slate-950 transition-colors">About</a>
          </div>

          <div>© {new Date().getFullYear()} PromoteBuddy</div>
        </div>
      </div>
    </footer>
  );
}
