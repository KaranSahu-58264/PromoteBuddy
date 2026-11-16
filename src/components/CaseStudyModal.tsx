import { CaseStudy } from '../data/agencyData';
import { X, CheckCircle2, ArrowUpRight, TrendingUp } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenAudit: (goal?: string) => void;
}

export default function CaseStudyModal({ caseStudy, onClose, onOpenAudit }: CaseStudyModalProps) {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-black/10 relative">
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
              {caseStudy.categoryLabel}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              {caseStudy.client}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors font-bold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Main Visual Asset */}
          <div className="rounded-2xl overflow-hidden bg-slate-900 border border-black/[0.06] flex items-center justify-center p-2 sm:p-4">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full max-h-[420px] object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Headline & Narrative */}
          <div>
            <h4 className="text-2xl font-bold text-slate-900 tracking-tight">
              {caseStudy.headline}
            </h4>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              {caseStudy.summary}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-3 p-5 rounded-2xl bg-[#f5f5f7] border border-black/[0.04]">
            {caseStudy.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                  {m.value}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Deliverables Checklist */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Core Deliverables Executed
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Need tailored results like this for your industry?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenAudit(`Case Study Inquiry: ${caseStudy.client}`);
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-full transition-colors shadow-sm"
              >
                <span>Request Similar Strategy</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onClose}
                className="px-5 py-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
