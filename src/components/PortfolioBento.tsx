import { useState } from 'react';
import {
  CASE_STUDIES,
  CREATIVE_GALLERY,
  CaseStudy,
  CreativeWorkItem,
  WHATSAPP_DIRECT_URL,
} from '../data/agencyData';
import { ArrowUpRight, Maximize2, ChevronDown, Images, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppFloatingButton';

interface PortfolioBentoProps {
  onOpenAudit: () => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export default function PortfolioBento({ onOpenAudit, onSelectCaseStudy }: PortfolioBentoProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'smm' | 'ads' | 'design'>('all');
  const [showAllCards, setShowAllCards] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryBrand, setGalleryBrand] = useState<'all' | 'voltage' | 'fibertek'>('all');
  const [lightboxWork, setLightboxWork] = useState<CreativeWorkItem | null>(null);

  const filteredStudies =
    activeTab === 'all'
      ? showAllCards
        ? CASE_STUDIES
        : CASE_STUDIES.slice(0, 4)
      : CASE_STUDIES.filter((item) => item.category === activeTab);

  const filteredGallery =
    galleryBrand === 'all'
      ? CREATIVE_GALLERY
      : CREATIVE_GALLERY.filter((item) => item.brand === galleryBrand);

  return (
    <section id="portfolio" className="py-10 sm:py-14 bg-[#0B0F19] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Compact Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 mb-7">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
              Our Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Converting Visuals in Action
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="inline-flex flex-wrap items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-full self-start lg:self-auto">
            {(
              [
                { id: 'all', label: 'All Work' },
                { id: 'smm', label: 'Instagram' },
                { id: 'ads', label: 'Paid Ads' },
                { id: 'design', label: 'Packaging' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id !== 'all') setShowAllCards(false);
                }}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-white text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Compact 2-Cards-Per-Row Grid (Minimal Text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => onSelectCaseStudy(study)}
              className="rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 p-4 flex flex-col justify-between cursor-pointer group transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                    {study.categoryLabel}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                    {study.client}
                  </h3>
                </div>
                <Maximize2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors shrink-0" />
              </div>

              <div className="rounded-xl overflow-hidden bg-[#0F1624] border border-white/10">
                <img
                  src={study.image}
                  alt={`${study.client} - ${study.title}`}
                  className={`w-full h-40 sm:h-44 ${
                    study.id === 'voltage-lubes-case'
                      ? 'object-contain p-1'
                      : 'object-cover object-top'
                  } transition-transform duration-500 group-hover:scale-105`}
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between gap-2 text-xs">
                <span className="font-bold text-emerald-400 tabular-nums">
                  {study.highlightMetric}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Toggle for 5th Case Study */}
        {activeTab === 'all' && CASE_STUDIES.length > 4 && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowAllCards(!showAllCards)}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
            >
              <span>{showAllCards ? 'Show Less' : 'View Fibertek Case Study'}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  showAllCards ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        )}

        {/* Collapsible Creative Gallery Dropdown (12 Uploaded Posters & Ads) */}
        <div className="mt-6 rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden">
          <button
            onClick={() => setGalleryOpen(!galleryOpen)}
            aria-expanded={galleryOpen}
            className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-white/[0.03] transition-colors"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
                <Images className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-base font-extrabold text-white truncate">
                  Creative Gallery · 12 Poster &amp; Ad Designs
                </div>
                <div className="text-xs text-slate-400 truncate">
                  Voltage Lubes &amp; Fibertek campaign visuals
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {/* Mini visual thumbnail preview stack when collapsed */}
              <div className="hidden sm:flex -space-x-2">
                {CREATIVE_GALLERY.slice(0, 4).map((thumb) => (
                  <img
                    key={thumb.id}
                    src={thumb.image}
                    alt={thumb.title}
                    className="w-8 h-8 rounded-lg object-cover border border-slate-800"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-blue-400 hidden sm:inline">
                {galleryOpen ? 'Hide' : 'Open Gallery'}
              </span>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                <ChevronDown
                  className={`w-4 h-4 text-white transition-transform duration-200 ${
                    galleryOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </div>
          </button>

          {galleryOpen && (
            <div className="px-5 pb-6 pt-3 border-t border-white/10">
              {/* Brand Filter Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="text-xs text-slate-400">Click any design to view full size</span>
                <div className="inline-flex items-center gap-1 p-1 bg-white/5 rounded-full">
                  {(
                    [
                      { id: 'all', label: 'All (12)' },
                      { id: 'voltage', label: 'Voltage Lubes (9)' },
                      { id: 'fibertek', label: 'Fibertek (3)' },
                    ] as const
                  ).map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setGalleryBrand(filter.id)}
                      className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors whitespace-nowrap ${
                        galleryBrand === filter.id
                          ? 'bg-white text-slate-950'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 12 Designs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {filteredGallery.map((work) => (
                  <button
                    key={work.id}
                    onClick={() => setLightboxWork(work)}
                    className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 border border-white/10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                        {work.brandLabel}
                      </span>
                      <span className="text-xs font-bold text-white leading-tight mt-0.5">
                        {work.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Compact Conversion Strip */}
        <div className="mt-6 rounded-2xl bg-white/[0.05] border border-white/10 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-base sm:text-lg font-extrabold text-white tracking-tight">
            Want results like these for your brand?
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href={WHATSAPP_DIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5d] rounded-full transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-white hover:bg-blue-500 hover:text-white rounded-full transition-colors"
            >
              <span>Get Free Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-Size Lightbox Modal for Creative Gallery */}
      {lightboxWork && (
        <div
          onClick={() => setLightboxWork(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0F1624] rounded-3xl max-w-xl w-full p-4 sm:p-5 border border-white/15 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                  {lightboxWork.brandLabel}
                </div>
                <div className="text-sm sm:text-base font-bold text-white">
                  {lightboxWork.title}
                </div>
              </div>
              <button
                onClick={() => setLightboxWork(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 rounded-2xl overflow-hidden bg-black/40">
              <img
                src={lightboxWork.image}
                alt={lightboxWork.title}
                className="w-full max-h-[75vh] object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
