import React, { useState } from 'react';
import { PLATFORM_PRACTICES } from '../data/novantisData';
import { PartnerLogoBadge } from './BrandLogos';
import { ArrowUpRight, CheckCircle2, Cpu, Layers, Sparkles, Shield, ChevronRight } from 'lucide-react';
import { PlatformPractice } from '../types';

interface PlatformsViewProps {
  onOpenAssessment: (offerName: string) => void;
  initialPlatformId?: string;
}

export const PlatformsView: React.FC<PlatformsViewProps> = ({ onOpenAssessment, initialPlatformId = 'sap' }) => {
  const [selectedId, setSelectedId] = useState<string>(initialPlatformId);

  const currentPlatform = PLATFORM_PRACTICES.find(p => p.id === selectedId) || PLATFORM_PRACTICES[0];

  return (
    <div className="pt-28 pb-24 bg-black min-h-screen">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full liquid-glass-strong border border-white/10 text-xs font-mono mb-4 text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span className="uppercase tracking-[0.2em]">Platform Practices</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.95]">
            Seven Enterprise Ecosystems. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
              Architected for Scale.
            </span>
          </h1>
          <p className="text-white/60 font-body font-light text-base sm:text-lg mt-4">
            Novantis is a certified transformation partner across the world’s leading software platforms — from multi-billion dollar ERP cores to autonomous AI agent swarms.
          </p>
        </div>

        {/* Platform Selector Horizontal Tab Pills (Hick's Law - Clear Categorization) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {PLATFORM_PRACTICES.map((platform) => {
            const isSelected = platform.id === currentPlatform.id;
            return (
              <button
                key={platform.id}
                onClick={() => setSelectedId(platform.id)}
                className={`px-5 py-3 rounded-full text-xs font-body font-medium transition-all duration-300 shrink-0 flex items-center gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-black font-semibold shadow-[0_0_25px_rgba(255,255,255,0.3)] scale-105'
                    : 'liquid-glass-card text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <PartnerLogoBadge name={platform.id} size="sm" className="h-3 w-auto" />
                </div>
                <span>{platform.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Active Platform Feature Hero & Architecture Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Left Architecture Panel */}
          <div className="lg:col-span-8 space-y-6">
            <div className="liquid-glass-card rounded-3xl p-8 sm:p-10 border border-white/15 relative overflow-hidden">
              
              {/* Top Meta Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl liquid-glass-strong border border-white/15">
                    <PartnerLogoBadge name={currentPlatform.id} size="md" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                      {currentPlatform.tagline}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-heading italic text-white mt-0.5">
                      {currentPlatform.name}
                    </h2>
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-full liquid-glass-strong border border-white/10 font-mono text-xs text-white/80">
                  Tier-1 Practice Group
                </div>
              </div>

              {/* Description */}
              <div className="py-6">
                <p className="font-body text-white/80 text-base sm:text-lg leading-relaxed">
                  {currentPlatform.fullDesc}
                </p>
              </div>

              {/* Sub-Capabilities Grid */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                  Core Engineering & Implementation Capabilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentPlatform.subCapabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="font-body text-xs sm:text-sm text-white/80">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supported Modules & Components */}
              <div className="pt-6 border-t border-white/10">
                <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-3">
                  Key Modules & Integrated Applications:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentPlatform.modules.map((mod, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl liquid-glass-strong border border-white/10 font-mono text-xs text-white/90"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Sidebar: Measurable Business ROI & Assessment Booking Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Measurable ROI Card */}
            <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-white/15">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Measurable Business ROI</span>
              </div>
              <h3 className="font-heading italic text-2xl text-white mb-4">
                Proven Enterprise Value
              </h3>
              <ul className="space-y-3">
                {currentPlatform.businessOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 mt-1.5 shadow-[0_0_8px_#00E5FF]" />
                    <span className="font-body text-xs sm:text-sm text-white/90 leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Assessment CTA Card */}
            <div className="liquid-glass-strong rounded-3xl p-6 sm:p-8 border border-cyan-500/30 relative overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.1)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider font-semibold mb-2">
                Recommended Entry Assessment:
              </div>
              <h4 className="font-heading italic text-2xl text-white mb-3">
                {currentPlatform.entryOffer}
              </h4>
              <p className="font-body text-xs text-white/60 mb-6 leading-relaxed">
                A structured, low-risk architectural review evaluating codebase quality, migration readiness, license optimization, and cloud roadmap.
              </p>

              <button
                onClick={() => onOpenAssessment(currentPlatform.entryOffer)}
                className="w-full bg-white text-black font-body font-semibold py-3.5 px-6 rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-white/90 transition-all cursor-pointer shadow-lg active:scale-95"
              >
                <span>Request Assessment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
