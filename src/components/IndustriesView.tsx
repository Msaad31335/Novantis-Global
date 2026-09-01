import React, { useState } from 'react';
import { INDUSTRIES_SERVED } from '../data/novantisData';
import { 
  Building2, 
  Landmark, 
  HeartPulse, 
  Factory, 
  ShoppingBag, 
  Flame, 
  Radio, 
  Truck, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  Globe
} from 'lucide-react';
import { IndustryItem } from '../types';

interface IndustriesViewProps {
  onOpenAssessment: (offerName: string) => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({ onOpenAssessment }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('financial-services');

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark': return <Landmark className="w-6 h-6 text-cyan-400" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-cyan-400" />;
      case 'Factory': return <Factory className="w-6 h-6 text-cyan-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-cyan-400" />;
      case 'Flame': return <Flame className="w-6 h-6 text-cyan-400" />;
      case 'Radio': return <Radio className="w-6 h-6 text-cyan-400" />;
      case 'Truck': return <Truck className="w-6 h-6 text-cyan-400" />;
      default: return <Building2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  const activeIndustry = INDUSTRIES_SERVED.find(i => i.id === selectedIndustryId) || INDUSTRIES_SERVED[0];

  return (
    <div className="pt-28 pb-24 bg-black min-h-screen">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-cyan-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass-strong border border-white/10 text-xs font-mono mb-4 text-cyan-400">
            <Building2 className="w-3.5 h-3.5" />
            <span className="uppercase tracking-[0.2em]">Industry Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.95]">
            Engineered for Vertical Nuance. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
              Battle-Tested in Complex Domains.
            </span>
          </h1>
          <p className="text-white/60 font-body font-light text-base sm:text-lg mt-4">
            Enterprise platforms require specialized regulatory logic, industry taxonomy, and domain-specific data models.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Grid on Left, Deep Dive on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Industry Selector Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {INDUSTRIES_SERVED.map((ind) => {
              const isSelected = ind.id === activeIndustry.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustryId(ind.id)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white text-black font-semibold shadow-[0_0_25px_rgba(255,255,255,0.25)] border-white scale-[1.02]'
                      : 'liquid-glass-card border-white/10 hover:border-white/20 text-white/80 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${isSelected ? 'bg-black/10 text-black' : 'liquid-glass-strong text-cyan-400'}`}>
                      {getIndustryIcon(ind.icon)}
                    </div>
                    <div>
                      <div className="font-body text-sm sm:text-base font-bold">
                        {ind.name}
                      </div>
                      <div className={`font-mono text-[10px] ${isSelected ? 'text-black/60' : 'text-cyan-400'}`}>
                        {ind.platformsUsed.slice(0, 2).join(' • ')}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Active Industry Intelligence Panel */}
          <div className="lg:col-span-7">
            <div className="liquid-glass-card rounded-3xl p-8 sm:p-10 border border-white/15 relative overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="p-3.5 rounded-2xl liquid-glass-strong border border-white/15">
                    {getIndustryIcon(activeIndustry.icon)}
                  </div>
                  <div>
                    <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                      Enterprise Vertical Blueprint
                    </span>
                    <h2 className="text-3xl font-heading italic text-white mt-0.5">
                      {activeIndustry.name}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="font-body text-white/85 text-base sm:text-lg leading-relaxed mb-6">
                {activeIndustry.summary}
              </p>

              {/* Priority Global Markets for this Industry */}
              <div className="mb-6">
                <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2.5">
                  Primary Market Focus:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeIndustry.priorityMarkets.map((mkt, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl liquid-glass-strong border border-white/10 font-mono text-xs text-white/90">
                      🌍 {mkt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Platforms Orchestrated */}
              <div className="mb-6">
                <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2.5">
                  Platforms & Clouds Orchestrated:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeIndustry.platformsUsed.map((plat, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-white">
                      {plat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Challenges Solved */}
              <div className="mb-8">
                <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2.5">
                  Key Friction Points Eliminated:
                </div>
                <div className="space-y-2">
                  {activeIndustry.keyChallengesSolved.map((chal, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{chal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Trigger */}
              <button
                onClick={() => onOpenAssessment(`${activeIndustry.name} Industry Architecture Assessment`)}
                className="w-full bg-white text-black font-body font-semibold py-3.5 px-6 rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-white/90 transition-all cursor-pointer shadow-lg active:scale-95"
              >
                <span>Request {activeIndustry.name} Assessment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
