import React, { useState } from 'react';
import { PLATFORM_PRACTICES } from '../data/novantisData';
import { PartnerLogoBadge, NovantisLogoChip } from './BrandLogos';
import { ArrowUpRight, CheckCircle2, Cpu, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { PlatformPractice } from '../types';

interface PlatformShowcaseGridProps {
  onSelectPlatform: (platformId: string) => void;
  onOpenAssessment: (platformName: string) => void;
}

export const PlatformShowcaseGrid: React.FC<PlatformShowcaseGridProps> = ({ onSelectPlatform, onOpenAssessment }) => {
  const [activePlatformId, setActivePlatformId] = useState<string>('sap');

  const activePlatform = PLATFORM_PRACTICES.find(p => p.id === activePlatformId) || PLATFORM_PRACTICES[0];

  return (
    <section id="companies" className="py-24 sm:py-32 bg-black relative overflow-hidden border-t border-white/10">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-cyan-500/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-strong border border-white/10 text-xs font-mono mb-4 text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span className="uppercase tracking-[0.2em] font-semibold">Enterprise Platform Practices</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.95]">
            World-Class Partner Ecosystems. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 font-normal">
              Delivered with Mastery.
            </span>
          </h2>
          <p className="text-white/60 font-body font-light text-base sm:text-lg mt-4">
            Novantis architects, modernizes, and operates leading global enterprise platforms across ERP, CRM, ITSM, and autonomous AI automation.
          </p>
        </div>

        {/* 7 Enterprise Companies / Platforms Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {PLATFORM_PRACTICES.map((platform) => {
            const isSelected = platform.id === activePlatform.id;
            return (
              <div
                key={platform.id}
                onClick={() => {
                  setActivePlatformId(platform.id);
                  onSelectPlatform(platform.id);
                }}
                className={`liquid-glass-card rounded-3xl p-6 sm:p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                  isSelected
                    ? 'border-cyan-400/80 shadow-[0_0_40px_rgba(0,229,255,0.25)] bg-white/[0.04] scale-[1.02]'
                    : 'border-white/10 hover:border-white/30 hover:bg-white/[0.03]'
                }`}
              >
                <div>
                  {/* Top Logo Badge (Large, Real, Zero Blank Space) */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-14 flex items-center justify-start group-hover:scale-105 transition-transform">
                      <PartnerLogoBadge name={platform.id} size="md" />
                    </div>
                    <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 font-semibold">
                      {platform.category}
                    </span>
                  </div>

                  {/* Platform Title & Tagline */}
                  <h3 className="font-heading italic text-2xl sm:text-3xl text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {platform.name}
                  </h3>
                  <div className="font-mono text-xs text-cyan-400/90 font-medium mb-4">
                    {platform.tagline}
                  </div>

                  <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                    {platform.heroDesc}
                  </p>

                  {/* Modules Pill Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {platform.modules.slice(0, 4).map((mod, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-white/80"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>

                  {/* Key Capabilities */}
                  <div className="space-y-2 mb-6">
                    {platform.subCapabilities.slice(0, 3).map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-body text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Trigger */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-body text-xs text-white/60 group-hover:text-white transition-colors font-medium">
                    Explore Architecture Spec
                  </span>
                  <div className="p-2 rounded-full liquid-glass-strong border border-white/15 text-white group-hover:text-cyan-400 group-hover:border-cyan-400/50 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
