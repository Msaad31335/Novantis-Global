import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { ASSESSMENT_OFFERS, PLATFORM_PRACTICES } from '../data/novantisData';
import { NovantisLogoChip } from './BrandLogos';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({ isOpen, onClose, initialService }) => {
  const [selectedOffer, setSelectedOffer] = useState<string>(initialService || 'Salesforce Health Check');
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    targetPlatform: 'Salesforce',
    timeline: 'Immediate (Next 30 Days)',
    projectScope: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedOffer(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop with strong blur */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl liquid-glass-card rounded-3xl p-6 sm:p-10 border border-white/20 bg-black/95 shadow-[0_0_80px_rgba(0,229,255,0.2)] z-10 animate-fade-in my-8">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 rounded-full liquid-glass-strong border border-white/15 text-white/70 hover:text-white hover:border-cyan-400/50 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-cyan-500/15 border border-cyan-400 text-cyan-400 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading italic text-3xl sm:text-4xl text-white">
              Assessment Request Received
            </h3>
            <p className="font-body text-sm sm:text-base text-white/70 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName || 'Partner'}</strong>. A senior solutions architect from our Islamabad Delivery HQ will review your scope for <strong className="text-cyan-300">{selectedOffer}</strong> and reach out within 2 business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-white text-black font-body font-semibold text-xs sm:text-sm hover:bg-white/90 transition-all cursor-pointer shadow-lg"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-2">
              <NovantisLogoChip className="w-8 h-8 drop-shadow-[0_0_10px_#00E5FF]" />
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                Novantis Enterprise Advisory
              </span>
            </div>
            <h2 className="font-heading italic text-3xl sm:text-4xl text-white mb-2">
              Request an Architecture Assessment
            </h2>
            <p className="font-body text-xs sm:text-sm text-white/60 mb-6">
              Fixed-scope, zero-commitment evaluation led by certified enterprise platform architects.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Selected Offer Selection */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
                  Select Assessment Type
                </label>
                <select
                  value={selectedOffer}
                  onChange={(e) => setSelectedOffer(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm font-body text-white focus:border-cyan-400 focus:outline-none transition-colors"
                >
                  {ASSESSMENT_OFFERS.map((off) => (
                    <option key={off.id} value={off.title} className="bg-black text-white">
                      {off.title} ({off.platform})
                    </option>
                  ))}
                  <option value="General Enterprise Consultation" className="bg-black text-white">
                    General Enterprise Platform Consultation
                  </option>
                </select>
              </div>

              {/* 2-Column Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm font-body text-white placeholder:text-white/30 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="s.jenkins@enterprise.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm font-body text-white placeholder:text-white/30 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Company & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Global Industries"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm font-body text-white placeholder:text-white/30 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
                    Expected Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm font-body text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option value="Immediate (Next 30 Days)" className="bg-black text-white">Immediate (Next 30 Days)</option>
                    <option value="Next Quarter (1–3 Months)" className="bg-black text-white">Next Quarter (1–3 Months)</option>
                    <option value="Budgeting & Exploratory" className="bg-black text-white">Budgeting & Exploratory</option>
                  </select>
                </div>
              </div>

              {/* Scope Notes */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
                  Key Challenges or Scope Goals (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Evaluating S/4HANA migration from legacy ECC, or optimizing Salesforce Agentforce flows..."
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm font-body text-white placeholder:text-white/30 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-mono text-[10px] text-white/40">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Strict NDA & Data Privacy Protected</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-black font-body font-semibold px-8 py-3.5 rounded-full text-xs sm:text-sm hover:bg-white/90 transition-all cursor-pointer flex items-center gap-2 shadow-lg disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Submit Assessment Request'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
