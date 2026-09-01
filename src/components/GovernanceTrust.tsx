import React from 'react';
import { ShieldCheck, Lock, Award, FileCheck, RefreshCw, Cpu, CheckCircle2 } from 'lucide-react';
import { NovantisLogoChip } from './BrandLogos';

export const GovernanceTrust: React.FC = () => {
  const governanceItems = [
    {
      title: 'Enterprise Assurance Framework',
      tagline: '8-Phase Delivery Lifecycle',
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      desc: 'Rigorous architectural milestones spanning discovery, clean-core blueprinting, automated unit testing, cutover simulations, and 90-day hypercare.'
    },
    {
      title: 'Quality Management System (QMS)',
      tagline: 'ISO 9001 Process Discipline',
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      desc: 'Structured peer code reviews, continuous automated regression testing pipelines, and strict definition-of-done across all platform deliverables.'
    },
    {
      title: 'InfoSec & Data Privacy',
      tagline: 'SOC 2, ISO 27001 & GDPR Ready',
      icon: <Lock className="w-5 h-5 text-cyan-400" />,
      desc: 'Zero-trust architecture, end-to-end payload encryption at rest and in transit, strict RBAC permissions, and comprehensive audit trail logging.'
    },
    {
      title: 'Responsible AI Framework',
      tagline: 'EU AI Act Article 50 Aligned',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      desc: 'Deterministic guardrails, explainability benchmarks, human-in-the-loop oversight, and strict elimination of LLM hallucination risks in enterprise production.'
    },
    {
      title: 'Business Continuity & DR',
      tagline: 'Multi-Region High Availability',
      icon: <RefreshCw className="w-5 h-5 text-cyan-400" />,
      desc: 'Documented disaster recovery runbooks, automated database snapshots, secondary failover environments, and periodic cutover resilience drills.'
    },
    {
      title: 'Dedicated Architecture Pods',
      tagline: 'Certified Senior Practitioners',
      icon: <FileCheck className="w-5 h-5 text-cyan-400" />,
      desc: 'Engagements led directly by certified Master Architects with average 10+ years of domain experience across SAP, Salesforce, and ServiceNow.'
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Strip */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass-strong border border-white/10 text-xs font-mono mb-4 text-cyan-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="uppercase tracking-[0.2em]">Enterprise Assurance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading italic text-white tracking-tight">
            Institutional Governance & Trust
          </h2>
          <p className="text-white/60 font-body text-xs sm:text-sm mt-3">
            Every engagement is fortified by rigorous security, quality management, and compliance frameworks.
          </p>
        </div>

        {/* 6 Scannable Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {governanceItems.map((item, idx) => (
            <div
              key={idx}
              className="liquid-glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl liquid-glass-strong border border-white/15">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading italic text-xl text-white">
                    {item.title}
                  </h3>
                  <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest">
                    {item.tagline}
                  </span>
                </div>
              </div>
              <p className="font-body text-xs text-white/65 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
