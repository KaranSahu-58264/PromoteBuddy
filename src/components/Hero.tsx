import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { WHATSAPP_DIRECT_URL } from '../data/agencyData';
import { WhatsAppIcon } from './WhatsAppFloatingButton';

interface HeroProps {
  onOpenAudit: () => void;
}

export default function Hero({ onOpenAudit }: HeroProps) {
  return (
    <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-14 bg-white border-b border-black/[0.06] overflow-hidden">
      {/* Subtle architectural ambient gradient */}
      <div
        className="absolute -top-24 right-0 w-[620px] h-[520px] bg-gradient-to-bl from-blue-500/[0.08] via-indigo-400/[0.05] to-orange-400/[0.06] blur-[100px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Crisp Editorial Copy & Direct Actions */}
          <div className="lg:col-span-7 space-y-4">
            {/* Clean Unboxed Kicker (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 tracking-wide">
              <span>PromoteBuddy</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="text-slate-500 font-medium">Digital Marketing & Design Studio</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="text-slate-500 font-medium">Raipur, India</span>
            </div>

            {/* Dominant Hero Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.08] text-balance">
              I help brands grow with{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500 bg-clip-text text-transparent">
                clean design
              </span>
              , smart marketing, and converting visuals.
            </h1>

            {/* Breathable Intro */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
              Hi, I&apos;m <strong className="font-semibold text-slate-900">Ayush</strong> — Founder of PromoteBuddy, Digital Marketing Expert &amp; Graphic Designer.
            </p>

            {/* Primary & Direct WhatsApp CTAs */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5d] active:scale-[0.98] rounded-full shadow-lg shadow-[#25D366]/20 transition-all duration-200 whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp Ayush</span>
              </a>

              <button
                onClick={onOpenAudit}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 active:scale-[0.98] rounded-full shadow-sm transition-all duration-200 whitespace-nowrap"
              >
                <span>Get a Free Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                <span>View Work</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>
            </div>

            {/* Clean Inline Proof Metrics */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight tabular-nums">
                  11+
                </div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">Brands Scaled</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-blue-600 tracking-tight tabular-nums">
                  4.8x
                </div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">Average Ad ROAS</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight tabular-nums">
                  2.5K+
                </div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">Organic Growth</div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Visual Anchor */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-[#0B0F19] p-3 shadow-2xl border border-black/10 overflow-hidden max-w-md mx-auto lg:ml-auto">
              <div className="relative h-[280px] sm:h-[330px] rounded-2xl overflow-hidden bg-slate-800">
                <img
                  src="./assets/portfolio/crops/ayush_portrait.png"
                  alt="Ayush - Founder, Digital Marketing Expert and Graphic Designer"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                    Founder &amp; Creative Director
                  </div>
                  <div className="flex items-end justify-between gap-4 mt-0.5">
                    <div>
                      <div className="text-xl font-extrabold tracking-tight">Ayush</div>
                      <p className="text-xs text-slate-300">
                        Digital Marketing Expert · Graphic Designer
                      </p>
                    </div>
                    <a
                      href={WHATSAPP_DIRECT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/15 hover:bg-[#25D366] backdrop-blur-md text-xs font-semibold text-white transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
