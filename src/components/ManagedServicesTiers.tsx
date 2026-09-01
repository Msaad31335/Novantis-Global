import React from 'react';
import { MANAGED_SERVICES_TIERS } from '../data/novantisData';
import { Clock, Shield, CheckCircle2, ArrowUpRight, Zap, Sparkles } from 'lucide-react';
import { ManagedServiceTier } from '../types';

interface ManagedServicesTiersProps {
  onSelectTier: (tierName: string) => void;
}

export const ManagedServicesTiers: React.FC<ManagedServicesTiersProps> = ({ onSelectTier }) => {
  return (
    <section className="py-24 sm:py-32 bg-black relative overflow-hidden border-t border-white/10">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[500px] bg-cyan-500/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass-strong border border-white/10 text-xs font-mono mb-4 text-cyan-400">
            <Zap className="w-3.5 h-3.5" />
            <span className="uppercase tracking-[0.2em]">Continuous Operations</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.95]">
            Enterprise Managed Services. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
              Guaranteed 15-Minute SLAs.
            </span>
          </h2>
          <p className="text-white/60 font-body font-light text-base sm:text-lg mt-4">
            Go-live is merely the beginning. Novantis provides multi-tier 24/7 hypercare, preventative maintenance, and dedicated pods of certified solution architects.
          </p>
        </div>

        {/* 4 Tiers Comparison Grid (Bronze, Silver, Gold, Enterprise) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {MANAGED_SERVICES_TIERS.map((tier) => {
            const isGold = tier.recommended;
            return (
              <div
                key={tier.name}
                className={`liquid-glass-card rounded-3xl p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                  isGold
                    ? 'border-cyan-400/80 shadow-[0_0_40px_rgba(0,229,255,0.25)] bg-white/[0.04] scale-105 z-20'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {isGold && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-cyan-400 text-black font-mono text-[10px] font-bold uppercase tracking-widest shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading italic text-3xl text-white">
                      {tier.name}
                    </span>
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      {tier.slaResponse}
                    </span>
                  </div>

                  <div className="font-mono text-[11px] text-cyan-300 mb-4">
                    {tier.tagline}
                  </div>

                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 mb-6 text-xs text-white/70 font-body">
                    <div className="font-mono text-[10px] uppercase text-white/40 mb-1">Coverage:</div>
                    <div className="text-white font-medium">{tier.coverageHours}</div>
                  </div>

                  <p className="font-body text-xs text-white/60 mb-6 leading-relaxed">
                    {tier.idealFor}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 mb-8">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/85 font-body">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectTier(tier.name)}
                  className={`w-full py-3 px-4 rounded-full font-body text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    isGold
                      ? 'bg-white text-black hover:bg-white/90 shadow-lg'
                      : 'liquid-glass-strong border border-white/15 text-white hover:bg-white/10'
                  }`}
                >
                  <span>Select {tier.name} Plan</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
