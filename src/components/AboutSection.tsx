import { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, ChevronDown, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_DIRECT_URL } from '../data/agencyData';
import { WhatsAppIcon } from './WhatsAppFloatingButton';

interface AboutSectionProps {
  onOpenAudit: () => void;
}

export default function AboutSection({ onOpenAudit }: AboutSectionProps) {
  const [openSection, setOpenSection] = useState<string>('');

  const aboutAccordions = [
    {
      id: 'experience',
      title: 'Agency & Industry Experience',
      subtitle: 'PromoteBuddy · Digital Marketing Wala · Ansh Trading Company',
      icon: Briefcase,
      content: (
        <ul className="space-y-3 text-sm text-slate-600">
          <li>
            <strong className="text-slate-900">Founder – PROMOTE BUDDY:</strong> Leading full-stack digital marketing, Meta advertising, and high-converting visual design for 11+ growing brands.
          </li>
          <li>
            <strong className="text-slate-900">Digital Marketing Wala Marketing Agency:</strong> Executed multi-channel lead generation funnels, brand positioning, and social campaigns.
          </li>
          <li>
            <strong className="text-slate-900">Ansh Trading Company (Goyal Agency):</strong> Handled commercial B2B marketing collateral, visual communications, and market alignment.
          </li>
        </ul>
      ),
    },
    {
      id: 'education',
      title: 'Education & Business Foundation',
      subtitle: 'BBA (Expected 2026–27) · Mahant Laxminarayan Das College, Raipur',
      icon: GraduationCap,
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          Currently pursuing a <strong className="text-slate-900">Bachelor of Business Administration (BBA)</strong> at Mahant Laxminarayan Das College, Raipur (Expected Graduation: 2026–27). Every campaign is grounded in unit economics, consumer psychology, and measurable commercial ROI—not just aesthetics.
        </p>
      ),
    },
    {
      id: 'process',
      title: 'How Our Partnership Works',
      subtitle: 'Audit → Strategy → Creative Production → Weekly Reporting',
      icon: MapPin,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-600">
          <div className="p-3.5 rounded-2xl bg-white border border-black/[0.04]">
            <div className="font-bold text-slate-900 mb-1">1. Free Audit</div>
            <p>We review your current feed, ad creatives, and competitors within 24 hours.</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-white border border-black/[0.04]">
            <div className="font-bold text-slate-900 mb-1">2. Custom Visuals</div>
            <p>Bespoke Photoshop &amp; Illustrator creatives designed from scratch for your brand.</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-white border border-black/[0.04]">
            <div className="font-bold text-slate-900 mb-1">3. Direct Growth</div>
            <p>Weekly KPI updates and direct WhatsApp access to Ayush—no middlemen.</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Crisp Founder Intro */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Meet the Founder
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 text-balance">
              Business strategy meets clean visual craft.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Founder of PromoteBuddy in Raipur—combining BBA business fundamentals with direct design and ad execution.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5d] rounded-full transition-colors shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Message Ayush</span>
              </a>
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-1.5 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-900 bg-[#f5f5f7] hover:bg-slate-200 rounded-full transition-colors"
              >
                <span>Get Free Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Dropdown Accordions */}
          <div className="lg:col-span-7 rounded-3xl bg-[#f5f5f7] border border-black/[0.05] divide-y divide-black/[0.06] overflow-hidden">
            {aboutAccordions.map((item) => {
              const Icon = item.icon;
              const isOpen = openSection === item.id;
              return (
                <div key={item.id}>
                  <button
                    onClick={() => setOpenSection(isOpen ? '' : item.id)}
                    aria-expanded={isOpen}
                    className="w-full px-6 sm:px-8 py-5 flex items-center justify-between gap-4 text-left hover:bg-black/[0.02] transition-colors"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-2xl bg-white shadow-xs flex items-center justify-center text-blue-600 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-extrabold text-slate-950">{item.title}</h3>
                        <p className="text-xs text-slate-500 mt-0.5 truncate">{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                      <ChevronDown
                        className={`w-4 h-4 text-slate-600 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 pt-1 sm:pl-[5.5rem]">
                      {item.content}
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
