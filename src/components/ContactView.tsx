import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { NovantisLogoChip } from './BrandLogos';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'Enterprise Architecture Consultation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 bg-black min-h-screen">
      {/* Ambient Depth Glow */}
      <div className="absolute top-1/4 left-1/3 w-[700px] h-[500px] bg-cyan-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass-strong border border-white/10 text-xs font-mono mb-4 text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span className="uppercase tracking-[0.2em]">Direct Engagement</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.95]">
            Initiate Your Enterprise <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
              Transformation Dialogue.
            </span>
          </h1>
          <p className="text-white/60 font-body font-light text-base sm:text-lg mt-4">
            Connect directly with our senior platform solution architects and delivery leadership in Islamabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: HQ Details & Delivery Pods */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="liquid-glass-card rounded-3xl p-8 border border-white/15">
              <div className="flex items-center gap-3 mb-6">
                <NovantisLogoChip className="w-10 h-10 drop-shadow-[0_0_12px_#00E5FF]" />
                <div>
                  <h3 className="font-heading italic text-2xl text-white">Novantis Global</h3>
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold">
                    Global Delivery Headquarters
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-white/80 font-body">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-mono text-xs uppercase mb-0.5">Islamabad Headquarters</strong>
                    <span>Executive Towers, Sector F-7 / Blue Area, Islamabad, Pakistan</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-white/80 font-body">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-mono text-xs uppercase mb-0.5">Enterprise Inquiries</strong>
                    <span className="text-cyan-300">contact@novantisglobal.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-white/80 font-body">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-mono text-xs uppercase mb-0.5">Global Operations SLA</strong>
                    <span>24x7x365 Continuous Managed Ops Support Pods</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Priority Markets Badge */}
            <div className="liquid-glass-strong rounded-3xl p-6 border border-white/10">
              <div className="font-mono text-[11px] uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                Supported Delivery Jurisdictions:
              </div>
              <p className="font-body text-xs text-white/70 leading-relaxed">
                United States, United Kingdom, Germany, UAE, Saudi Arabia, India, Canada, Australia, France, and Pakistan.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="liquid-glass-card rounded-3xl p-8 sm:p-10 border border-white/15">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/15 border border-cyan-400 text-cyan-400 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading italic text-3xl text-white">
                    Message Dispatched Successfully
                  </h3>
                  <p className="font-body text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our enterprise team will review your message regarding <span className="text-cyan-300">{formData.subject}</span> and respond within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-heading italic text-2xl sm:text-3xl text-white mb-2">
                    Send an Inquiry
                  </h3>
                  <p className="font-body text-xs text-white/60 mb-6">
                    Connect with an Enterprise Solutions Architect for exploratory scoping or RFP submissions.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm font-body text-white placeholder:text-white/30 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john.doe@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm font-body text-white placeholder:text-white/30 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
                        Company *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Company Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm font-body text-white placeholder:text-white/30 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm font-body text-white focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="Enterprise Architecture Consultation" className="bg-black text-white">Enterprise Architecture Consultation</option>
                        <option value="SAP S/4HANA Transformation" className="bg-black text-white">SAP S/4HANA Transformation</option>
                        <option value="Salesforce & Agentforce AI" className="bg-black text-white">Salesforce & Agentforce AI</option>
                        <option value="ServiceNow Workflows" className="bg-black text-white">ServiceNow Workflows</option>
                        <option value="Managed Services SLA Review" className="bg-black text-white">Managed Services SLA Review</option>
                        <option value="Strategic Partnership / Vendor Inquiry" className="bg-black text-white">Strategic Partnership / Vendor Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
                      Message Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please outline your requirements, target timeline, or scope questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm font-body text-white placeholder:text-white/30 focus:border-cyan-400 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-white/40">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Confidential & Secure</span>
                    </div>

                    <button
                      type="submit"
                      className="bg-white text-black font-body font-semibold px-8 py-3.5 rounded-full text-xs sm:text-sm hover:bg-white/90 transition-all cursor-pointer flex items-center gap-2 shadow-lg"
                    >
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
