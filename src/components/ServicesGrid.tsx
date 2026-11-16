import { useState } from 'react';
import {
  TrendingUp,
  Share2,
  Palette,
  Layers,
  ChevronDown,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { SERVICE_DROPDOWNS, WHATSAPP_NUMBER } from '../data/agencyData';
import { WhatsAppIcon } from './WhatsAppFloatingButton';

interface ServicesGridProps {
  onOpenAudit: (prefillGoal?: string) => void;
}

export default function ServicesGrid({ onOpenAudit }: ServicesGridProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'marketing' | 'smm' | 'design'>('all');
  const [openDropdownId, setOpenDropdownId] = useState<string>('');

  const pillars = [
    {
      id: 'marketing' as const,
      title: 'Digital Marketing',
      subtitle: 'Lead Gen · SEO · Ads',
      summary: 'Meta & Google ads, local SEO, and lead funnels.',
      icon: TrendingUp,
      accent: 'text-blue-600 bg-blue-50',
    },
    {
      id: 'smm' as const,
      title: 'Social Media (SMM)',
      subtitle: 'Plan · Create · Track',
      summary: 'Content calendars, Reels, and DM management.',
      icon: Share2,
      accent: 'text-orange-600 bg-orange-50',
    },
    {
      id: 'design' as const,
      title: 'Design & UI/UX',
      subtitle: 'Web · Brand · Packaging',
      summary: 'Websites, brand identity, and 3D ad creatives.',
      icon: Palette,
      accent: 'text-indigo-600 bg-indigo-50',
    },
    {
      id: 'all' as const,
      title: 'Full 360° Growth',
      subtitle: 'Strategy · Execution',
      summary: 'All-in-one retainer for ads, content & design.',
      icon: Layers,
      accent: 'text-emerald-600 bg-emerald-50',
    },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? SERVICE_DROPDOWNS
      : SERVICE_DROPDOWNS.filter((item) => item.pillar === activeFilter);

  const toggleItem = (id: string) => {
    setOpenDropdownId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="services" className="py-10 sm:py-14 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Services
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
            Core Pillars. Zero Guesswork.
          </h2>
        </div>

        {/* 2 Cards Per Row Compact Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = activeFilter === pillar.id && pillar.id !== 'all';
            return (
              <button
                key={pillar.id}
                onClick={() => {
                  if (pillar.id === 'all') {
                    setActiveFilter('all');
                    setOpenDropdownId('dm-growth');
                  } else {
                    const nextFilter = isSelected ? 'all' : pillar.id;
                    setActiveFilter(nextFilter);
                    const firstMatch = SERVICE_DROPDOWNS.find((d) => d.pillar === pillar.id);
                    if (firstMatch) setOpenDropdownId(firstMatch.id);
                  }
                }}
                className={`text-left rounded-2xl p-5 border transition-all duration-200 flex items-start gap-4 group ${
                  isSelected
                    ? 'bg-slate-950 text-white border-slate-950 shadow-lg'
                    : 'bg-white text-slate-950 border-black/[0.06] hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-white/10 text-white' : pillar.accent
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-extrabold tracking-tight">
                      {pillar.title}
                    </h3>
                    <span
                      className={`text-[11px] font-semibold truncate ${
                        isSelected ? 'text-blue-400' : 'text-slate-400'
                      }`}
                    >
                      {pillar.subtitle}
                    </span>
                  </div>
                  <p
                    className={`mt-1 text-xs sm:text-sm leading-relaxed ${
                      isSelected ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {pillar.summary}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Compact Interactive Dropdown Menu */}
        <div className="rounded-2xl bg-white border border-black/[0.06] shadow-xs overflow-hidden">
          <div className="px-5 sm:px-6 py-3.5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-xs sm:text-sm font-extrabold text-slate-900">
              Detailed Service Menu
            </div>
            <div className="flex flex-wrap items-center gap-1 p-1 bg-[#f5f5f7] rounded-full">
              {(
                [
                  { id: 'all', label: 'All (3)' },
                  { id: 'marketing', label: 'Marketing' },
                  { id: 'smm', label: 'SMM' },
                  { id: 'design', label: 'Design' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors whitespace-nowrap ${
                    activeFilter === tab.id
                      ? 'bg-white text-slate-950 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {filteredItems.map((item) => {
              const isOpen = openDropdownId === item.id;
              const waMessage = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                `Hi Ayush, I'm interested in "${item.title}" for my brand.`
              )}`;

              return (
                <div key={item.id} className="transition-colors">
                  <button
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full px-5 sm:px-6 py-3.5 flex items-center justify-between gap-4 text-left hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-xs font-bold text-blue-600 tabular-nums shrink-0">
                        {item.number}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-bold text-slate-950 truncate">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {item.shortHook}
                        </p>
                      </div>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-[#f5f5f7] flex items-center justify-center shrink-0">
                      <ChevronDown
                        className={`w-4 h-4 text-slate-600 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 bg-slate-50/60">
                      <div className="sm:pl-7 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                        <div className="lg:col-span-7 space-y-2">
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {item.details}
                          </p>
                          <div className="text-xs font-bold text-emerald-700">
                            Target Impact: {item.outcome}
                          </div>
                        </div>

                        <div className="lg:col-span-5 space-y-3">
                          <div className="space-y-1.5">
                            {item.deliverables.map((del, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-xs font-medium text-slate-700"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                <span>{del}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap items-center gap-2">
                            <a
                              href={waMessage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5d] rounded-full transition-colors"
                            >
                              <WhatsAppIcon className="w-3.5 h-3.5" />
                              <span>WhatsApp</span>
                            </a>
                            <button
                              onClick={() => onOpenAudit(item.title)}
                              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-900 hover:text-white rounded-full border border-black/[0.08] transition-colors"
                            >
                              <span>Request Quote</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
