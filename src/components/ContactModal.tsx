import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Shield } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    objective: 'Behavioral Strategy & Diagnostics',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#0d0e13] p-6 sm:p-8 shadow-2xl text-stone-200"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#c48b76]/10 blur-3xl" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact modal"
          className="absolute top-5 right-5 rounded-full p-2 text-stone-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#c48b76]/15 border border-[#c48b76]/30 text-[#c48b76]">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-white tracking-wide">
              Inquiry Dispatched
            </h3>
            <p className="text-sm text-stone-300 max-w-sm mx-auto leading-relaxed">
              Your brief has been logged into the executive advisory queue. A senior behavioral strategist will respond within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-black hover:bg-stone-200 transition-all cursor-pointer"
            >
              Return to Platform
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c48b76]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Executive Engagement</span>
              </div>
              <h2
                id="contact-modal-title"
                className="mt-2 font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white"
              >
                Initiate Dialogue
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-stone-300 leading-relaxed">
                Connect with our behavioral science operators for executive briefings, organizational diagnostics, or strategic workshops.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. Elena Rostova"
                    className="w-full rounded-xl border border-white/10 bg-[#13151d] px-3.5 py-2 text-xs text-white placeholder-stone-600 focus:border-[#c48b76] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-400 mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full rounded-xl border border-white/10 bg-[#13151d] px-3.5 py-2 text-xs text-white placeholder-stone-600 focus:border-[#c48b76] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-400 mb-1">
                  Organization / Initiative
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="Company, fund, or research group"
                  className="w-full rounded-xl border border-white/10 bg-[#13151d] px-3.5 py-2 text-xs text-white placeholder-stone-600 focus:border-[#c48b76] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-400 mb-1">
                  Primary Engagement Scope
                </label>
                <select
                  value={formData.objective}
                  onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-[#13151d] px-3.5 py-2 text-xs text-stone-200 focus:border-[#c48b76] focus:outline-none"
                >
                  <option value="Behavioral Strategy & Diagnostics">Behavioral Strategy &amp; Diagnostics</option>
                  <option value="High-Stakes Negotiation Advisory">High-Stakes Negotiation Advisory</option>
                  <option value="Consumer Choice Architecture">Consumer Choice Architecture</option>
                  <option value="Executive Team Training">Executive Team Training &amp; Wargaming</option>
                  <option value="Academic / Research Collaboration">Academic / Research Collaboration</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-400 mb-1">
                  Strategic Brief / Challenge
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the decision environment, behavioral barrier, or objective..."
                  className="w-full rounded-xl border border-white/10 bg-[#13151d] px-3.5 py-2 text-xs text-white placeholder-stone-600 focus:border-[#c48b76] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
                  <Shield className="h-3.5 w-3.5 text-[#c48b76]" />
                  <span>Strict confidentiality assured</span>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-black hover:bg-stone-200 transition-all cursor-pointer shadow-md"
                >
                  <span>Transmit Brief</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
