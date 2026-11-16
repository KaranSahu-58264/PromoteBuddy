import { useState } from 'react';
import { Calendar, Sparkles, BarChart3, MessageCircle, ChevronDown, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_DIRECT_URL } from '../data/agencyData';
import { WhatsAppIcon } from './WhatsAppFloatingButton';

interface SMMValuePropProps {
  onOpenAudit: () => void;
}

export default function SMMValueProp({ onOpenAudit }: SMMValuePropProps) {
  const [showShowcase, setShowShowcase] = useState(false);

  const glassPillars = [
    {
      num: '01',
      title: 'Strategic Planning',
      summary: 'Weekly calendars built around buyer intent.',
      icon: Calendar,
      accent: 'text-blue-600 bg-blue-50',
    },
    {
      num: '02',
      title: 'Engaging Content',
      summary: '9-grid aesthetics, 3D renders & Reels.',
      icon: Sparkles,
      accent: 'text-orange-600 bg-orange-50',
    },
    {
      num: '03',
      title: 'In-Depth Analytics',
      summary: 'Bi-weekly KPI reports tied to real leads.',
      icon: BarChart3,
      accent: 'text-emerald-600 bg-emerald-50',
    },
    {
      num: '04',
      title: 'Community & DMs',
      summary: 'Fast WhatsApp & DM routing for inquiries.',
      icon: MessageCircle,
      accent: 'text-indigo-600 bg-indigo-50',
    },
  ];

  return (
    <section id="smm" className="py-10 sm:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Social Media Partnership
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 text-balance">
            Strategic planning, engaging content, and in-depth analytics.
          </h2>
        </div>

        {/* 2 Cards Per Row Compact Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {glassPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="rounded-2xl bg-[#f5f5f7]/85 backdrop-blur-md p-5 border border-black/[0.05] hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-4"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${pillar.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-950 tracking-tight">
                      {pillar.title}
                    </h3>
                    <span className="text-[11px] font-bold text-slate-400 tabular-nums">
                      {pillar.num}
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Collapsible Live Client Feed Dropdown */}
        <div className="mt-5 rounded-2xl bg-[#f5f5f7] border border-black/[0.06] overflow-hidden">
          <button
            onClick={() => setShowShowcase(!showShowcase)}
            aria-expanded={showShowcase}
            className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-slate-200/40 transition-colors"
          >
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                Proof in Action
              </div>
              <div className="text-sm sm:text-base font-extrabold text-slate-950 mt-0.5">
                Live Client Feeds: Voltage Lubes &amp; Fibertek India
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 shrink-0">
              <span className="hidden sm:inline">{showShowcase ? 'Hide Preview' : 'View Mockups'}</span>
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-xs">
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showShowcase ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </div>
            </div>
          </button>

          {showShowcase && (
            <div className="px-5 sm:px-6 pb-6 pt-3 border-t border-black/[0.05]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-6">
                  <div className="rounded-xl overflow-hidden bg-[#0B0F19] p-2.5 shadow-md">
                    <img
                      src="/assets/portfolio/crops/mockup_smm_phones.png"
                      alt="Voltage Lubes and Fibertek Instagram Grid Mockups"
                      className="w-full h-auto max-h-[280px] object-contain mx-auto rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <h3 className="text-xl font-extrabold text-slate-950 tracking-tight">
                    A cohesive feed builds instant buyer trust in under 2 seconds.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    For <strong className="text-slate-900">Voltage Lubes (2,564+ followers)</strong> and <strong className="text-slate-900">Fibertek India</strong>, we transformed technical products into clean 9-grid visual showcases that attract pan-India dealers and direct inquiries.
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={WHATSAPP_DIRECT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5d] rounded-full transition-colors shadow-sm"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Chat About SMM</span>
                    </a>
                    <button
                      onClick={onOpenAudit}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-900 hover:text-white rounded-full border border-black/[0.08] transition-colors"
                    >
                      <span>Audit My Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
