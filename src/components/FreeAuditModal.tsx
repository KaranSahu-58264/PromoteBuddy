import { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight, MessageCircle, Sparkles, ShieldCheck, Phone, Mail } from 'lucide-react';

interface FreeAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillGoal?: string;
}

export default function FreeAuditModal({ isOpen, onClose, prefillGoal }: FreeAuditModalProps) {
  const [businessName, setBusinessName] = useState('');
  const [handle, setHandle] = useState('');
  const [service, setService] = useState('Social Media Management (SMM)');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (prefillGoal) {
      setService(prefillGoal);
    }
  }, [prefillGoal]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) {
      setError('Please provide your Business or Brand Name.');
      return;
    }
    if (!phone.trim() && !email.trim()) {
      setError('Please provide either your WhatsApp phone number or email address.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi Ayush, I would like to get a Free Audit from PromoteBuddy!\n\n` +
      `🏢 Brand: ${businessName}\n` +
      `🌐 Profile / Web: ${handle || 'N/A'}\n` +
      `🎯 Interest: ${service}\n` +
      `📞 Phone: ${phone || 'N/A'}\n` +
      `✉️ Email: ${email || 'N/A'}\n` +
      `📝 Note: ${notes || 'Looking forward to your audit review.'}`
    );
    return `https://wa.me/919669042618?text=${text}`;
  };

  const handleReset = () => {
    setBusinessName('');
    setHandle('');
    setPhone('');
    setEmail('');
    setNotes('');
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-10 shadow-2xl border border-black/10 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              Complimentary Assessment
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Get Your Free Growth Audit
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ayush will personally analyze your current social media feed, advertising funnel, and visual identity. You&apos;ll receive a 3-point action plan with zero sales pressure.
            </p>

            {error && (
              <div className="mt-4 p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Brand or Business Name *
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Apex Auto, GreenSolar Ltd."
                  className="w-full px-4 py-3 rounded-2xl bg-[#f5f5f7] border border-black/[0.06] text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Instagram Handle / Website
                  </label>
                  <input
                    type="text"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="@yourbrand or website.com"
                    className="w-full px-4 py-3 rounded-2xl bg-[#f5f5f7] border border-black/[0.06] text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Primary Objective
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-[#f5f5f7] border border-black/[0.06] text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                  >
                    <option value="Social Media Management (SMM)">Social Media Management (SMM)</option>
                    <option value="Paid Ads & Lead Generation">Paid Ads & Lead Gen (Meta & Google)</option>
                    <option value="UI/UX & Graphic Design">UI/UX & Graphic Design</option>
                    <option value="Full-Service 360° Growth">Full-Service 360° Agency Growth</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-2xl bg-[#f5f5f7] border border-black/[0.06] text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="founder@brand.com"
                    className="w-full px-4 py-3 rounded-2xl bg-[#f5f5f7] border border-black/[0.06] text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Current Marketing Bottleneck (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Inconsistent posts, high ad cost per lead, need fresh logo/visual branding..."
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#f5f5f7] border border-black/[0.06] text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 active:scale-[0.99] rounded-2xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Submit for Personal Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your contact details are strictly confidential. Ayush replies within 24 hours.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Audit Request Registered
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
                Thank you, {businessName}!
              </h3>
              <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Ayush has received your details for <span className="font-semibold text-slate-900">{service}</span> and is preparing an individualized growth teardown.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f5f5f7] border border-black/[0.04] text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="font-semibold text-slate-800">What happens next?</div>
              <ul className="space-y-1.5 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span>Review of current creative assets & positioning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span>Identification of 3 immediate high-ROI levers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  <span>Direct delivery via WhatsApp / Email in under 24 hours</span>
                </li>
              </ul>
            </div>

            {/* Direct Instant WhatsApp CTA */}
            <div className="flex flex-col gap-2 pt-2 max-w-md mx-auto">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] rounded-2xl transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open Instant WhatsApp with Ayush</span>
              </a>

              <button
                onClick={handleReset}
                className="py-2.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
              >
                Done / Back to Landing Page
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
