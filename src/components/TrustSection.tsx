import { useState } from 'react';
import { CLIENT_BRANDS, ClientBrand, INSTAGRAM_PROFILE_URL } from '../data/agencyData';
import { ChevronDown, ArrowUpRight, Eye, Building2, Instagram } from 'lucide-react';

interface TrustSectionProps {
  onOpenAudit: () => void;
}

export default function TrustSection({ onOpenAudit }: TrustSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<ClientBrand | null>(null);
  const [showDeckModal, setShowDeckModal] = useState(false);

  const instagramHighlights = [
    {
      title: 'Arham Palladium Ads',
      subtitle: 'Real Estate Lead Gen',
      image: './assets/portfolio/crops/ad_arham_palladium.png',
    },
    {
      title: 'AVS Solar Campaign',
      subtitle: 'CleanTech Leads',
      image: './assets/portfolio/crops/ad_avs_solar.png',
    },
    {
      title: 'Alert SGS Pvt. Ltd.',
      subtitle: 'Corporate B2B Ads',
      image: './assets/portfolio/crops/ad_alert_sgs.png',
    },
    {
      title: 'Voltage Lubes 3D',
      subtitle: 'Product Creatives',
      image: './assets/portfolio/crops/post_voltage_shine.png',
    },
  ];

  return (
    <section id="clients" className="py-14 sm:py-20 bg-[#f5f5f7] border-b border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header with Direct @promotebuddy11 Instagram CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Collaborated With &amp; Live Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
              Trusted by 11+ Brands
            </h2>
          </div>

          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start lg:self-auto inline-flex items-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-95 active:scale-[0.98] rounded-full shadow-md transition-all duration-200 whitespace-nowrap shrink-0"
          >
            <Instagram className="w-4 h-4 shrink-0" />
            <span>See Our Work on @promotebuddy11</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </a>
        </div>

        {/* Clean, Scannable Logo Grid (All 11 Brands + @promotebuddy11 Instagram Tile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {CLIENT_BRANDS.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setSelectedBrand(brand)}
              className="group text-left p-4 rounded-2xl bg-white hover:bg-slate-950 border border-black/[0.05] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between min-h-[86px]"
            >
              <div className="flex items-center justify-between w-full">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: brand.accentColor }}
                />
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-white transition-colors" />
              </div>
              <div className="mt-2">
                <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-white transition-colors truncate">
                  {brand.name}
                </div>
                <div className="text-[11px] text-slate-400 group-hover:text-slate-300 truncate">
                  {brand.category}
                </div>
              </div>
            </button>
          ))}

          {/* 12th Slot: Direct @promotebuddy11 Instagram Profile Tile */}
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] text-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between min-h-[86px] text-left group"
          >
            <div className="flex items-center justify-between w-full">
              <Instagram className="w-4 h-4 text-white shrink-0" />
              <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div className="mt-2">
              <div className="text-xs sm:text-sm font-bold text-white truncate">
                @promotebuddy11
              </div>
              <div className="text-[11px] text-white/85 truncate">
                View Live Feed
              </div>
            </div>
          </a>
        </div>

        {/* Instagram Profile Showcase Strip */}
        <div className="mt-6 rounded-3xl bg-white border border-black/[0.06] p-5 sm:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#F77737] via-[#E1306C] to-[#833AB4] shrink-0">
                <div className="w-full h-full rounded-full bg-white p-1 overflow-hidden flex items-center justify-center">
                  <img
                    src="./assets/aistudio/logo_png_photoshop_fcd848ba.png"
                    alt="PromoteBuddy Instagram Avatar"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-extrabold text-slate-950">
                    @promotebuddy11
                  </span>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs font-medium text-slate-500">Official Work Feed</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Reels, 9-grid launches &amp; client results
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => setShowDeckModal(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-[#f5f5f7] hover:bg-slate-200 rounded-full transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Client Deck</span>
              </button>
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-[#E1306C] rounded-full transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Open Instagram</span>
              </a>
            </div>
          </div>

          {/* 4-Post Visual Feed Preview linking directly to @promotebuddy11 */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {instagramHighlights.map((post, idx) => (
              <a
                key={idx}
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-black/[0.06]"
              >
                <img
                  src={post.image}
                  alt={`${post.title} - PromoteBuddy Instagram Work`}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white">
                  <div className="text-xs font-bold leading-tight">{post.title}</div>
                  <div className="flex items-center justify-between text-[11px] text-slate-300 mt-0.5">
                    <span>{post.subtitle}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Collapsible Dropdown for Full Client Scope Details */}
        <div className="mt-5 rounded-2xl bg-white border border-black/[0.06] overflow-hidden shadow-xs">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-sm font-bold text-slate-900">
                See Full Scope of Work Across All 11 Collaborations
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span>{isExpanded ? 'Hide Details' : 'Expand List'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isExpanded ? 'rotate-180 text-blue-600' : ''
                }`}
              />
            </div>
          </button>

          {isExpanded && (
            <div className="px-6 pb-6 pt-2 border-t border-slate-100 divide-y divide-slate-100">
              {CLIENT_BRANDS.map((brand) => (
                <div
                  key={brand.id}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <span className="text-sm font-bold text-slate-900">{brand.name}</span>
                    <span className="text-xs text-slate-400 ml-2">· {brand.category}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600">{brand.scope}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Selected Brand Quick Modal */}
      {selectedBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-black/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                {selectedBrand.category}
              </span>
              <button
                onClick={() => setSelectedBrand(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">{selectedBrand.name}</h3>
            {selectedBrand.tagline && (
              <p className="text-sm text-slate-500 italic mt-1">&ldquo;{selectedBrand.tagline}&rdquo;</p>
            )}
            <div className="mt-5 p-4 rounded-2xl bg-[#f5f5f7]">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Deliverables Executed
              </div>
              <div className="text-sm font-semibold text-slate-800 mt-1">{selectedBrand.scope}</div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-semibold text-white bg-[#E1306C] hover:opacity-90 rounded-full transition-opacity"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>View on IG</span>
              </a>
              <button
                onClick={() => {
                  setSelectedBrand(null);
                  onOpenAudit();
                }}
                className="flex-1 py-3 text-xs font-semibold text-white bg-slate-950 hover:bg-blue-600 rounded-full transition-colors"
              >
                Get Similar Results
              </button>
              <button
                onClick={() => setSelectedBrand(null)}
                className="px-4 py-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Official Deck Page 6 Modal */}
      {showDeckModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-5 sm:p-6 shadow-2xl border border-black/10">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-sm font-bold text-slate-900">
                PromoteBuddy Official Client Roster
              </span>
              <button
                onClick={() => setShowDeckModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 rounded-2xl overflow-hidden bg-slate-900">
              <img
                src="./assets/portfolio/page_06.png"
                alt="PromoteBuddy Official Collaborations Roster"
                className="w-full h-auto object-contain max-h-[70vh]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
