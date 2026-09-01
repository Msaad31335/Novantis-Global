import React, { useState } from 'react';
import { PRIORITY_MARKETS } from '../data/novantisData';
import { Globe, MapPin, Sparkles, Building2, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PriorityMarket } from '../types';

interface GlobalMarketsProps {
  onOpenAssessment: (serviceName?: string) => void;
}

export const GlobalMarkets: React.FC<GlobalMarketsProps> = ({ onOpenAssessment }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('United States');

  const activeMarket = PRIORITY_MARKETS.find(m => m.country === selectedCountry) || PRIORITY_MARKETS[0];

  return (
    <section className="py-24 sm:py-32 bg-black relative overflow-hidden border-t border-white/10">
      {/* Ambient Radial Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass-strong border border-white/10 text-xs font-mono mb-4 text-cyan-400">
            <Globe className="w-3.5 h-3.5" />
            <span className="uppercase tracking-[0.2em]">Global Footprint</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.95]">
            Priority International Markets. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
              Worldwide Delivery Excellence.
            </span>
          </h2>
          <p className="text-white/60 font-body font-light text-base sm:text-lg mt-4">
            Headquartered in Islamabad, Pakistan with specialized global delivery pods serving Fortune 500 and high-growth enterprises across top international tech corridors.
          </p>
        </div>

        {/* Interactive Layout: Market List vs Deep Dive Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Country Pills (Ranked 1–10) */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-2 gap-2.5">
            {PRIORITY_MARKETS.map((market) => {
              const isSelected = market.country === activeMarket.country;
              return (
                <button
                  key={market.country}
                  onClick={() => setSelectedCountry(market.country)}
                  className={`p-3.5 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.25)] border-white scale-[1.02]'
                      : 'liquid-glass-card border-white/10 hover:border-white/20 text-white/80 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-lg">{market.flag}</span>
                    <div className="truncate">
                      <div className="font-body text-xs sm:text-sm truncate">
                        {market.country}
                      </div>
                      <div className={`font-mono text-[9px] uppercase ${isSelected ? 'text-black/60' : 'text-cyan-400'}`}>
                        Rank #{market.rank}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Market Intelligence Card */}
          <div className="lg:col-span-7">
            <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 border border-white/15 relative overflow-hidden">
              
              {/* Country Header Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{activeMarket.flag}</span>
                  <div>
                    <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                      {activeMarket.region} • Priority Rank #{activeMarket.rank}
                    </div>
                    <h3 className="text-3xl font-heading italic text-white mt-0.5">
                      {activeMarket.country}
                    </h3>
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-full liquid-glass-strong border border-white/10 font-mono text-xs text-white/90">
                  {activeMarket.marketRole}
                </div>
              </div>

              {/* Market Description */}
              <p className="font-body text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                {activeMarket.description}
              </p>

              {/* Platform Demand Focus */}
              <div className="mb-6">
                <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2.5">
                  Priority Platform Deployments:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeMarket.platformFocus.map((plat, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl liquid-glass-strong border border-white/10 font-mono text-xs text-white"
                    >
                      {plat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Industries in Country */}
              <div className="mb-8">
                <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2.5">
                  Core Industry Verticals:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeMarket.keyIndustries.map((ind, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Consultation CTA */}
              <div className="p-5 rounded-2xl liquid-glass-strong border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="font-mono text-[10px] text-cyan-400 uppercase font-semibold">Local Engagement & Governance</div>
                  <div className="font-body font-bold text-sm text-white">Deploy a Dedicated Delivery Squad in {activeMarket.country}</div>
                </div>
                <button
                  onClick={() => onOpenAssessment(`${activeMarket.country} Market Consultation`)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black font-body text-xs font-semibold hover:bg-white/90 transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Connect with Lead</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
