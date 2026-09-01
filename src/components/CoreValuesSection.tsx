import React, { useState } from 'react';
import { CORE_VALUES, BRAND_DIFFERENTIATORS } from '../data/novantisData';
import { 
  ShieldCheck, 
  Target, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Lock, 
  TrendingUp, 
  Handshake, 
  BarChart2, 
  Clock, 
  Gauge, 
  Cpu, 
  GitFork, 
  ShieldAlert, 
  HeartHandshake,
  ChevronDown,
  Quote
} from 'lucide-react';
import { NovantisLogoChip } from './BrandLogos';

export const CoreValuesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'values' | 'differentiators'>('values');
  const [expandedValue, setExpandedValue] = useState<number | null>(1);

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-5 h-5 text-cyan-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'Award': return <Award className="w-5 h-5 text-cyan-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Lock': return <Lock className="w-5 h-5 text-cyan-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-cyan-400" />;
      case 'Handshake': return <Handshake className="w-5 h-5 text-cyan-400" />;
      case 'BarChart2': return <BarChart2 className="w-5 h-5 text-cyan-400" />;
      default: return <Clock className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getDifferentiatorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gauge': return <Gauge className="w-6 h-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'GitFork': return <GitFork className="w-6 h-6 text-cyan-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-cyan-400" />;
      default: return <HeartHandshake className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-black relative overflow-hidden border-t border-white/10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mission Statement Hero Banner (Prompt §1 verbatim) */}
        <div className="mb-20">
          <div className="liquid-glass-strong rounded-3xl p-8 sm:p-12 border border-white/15 relative overflow-hidden text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 mb-4 font-semibold">
              <NovantisLogoChip className="w-4 h-4 inline-block" />
              <span>Our Mission</span>
            </div>
            <p className="font-heading italic text-2xl sm:text-3xl md:text-4xl text-white leading-snug sm:leading-normal">
              “To combine business expertise, enterprise platforms, software engineering, integration, automation, data, and AI to deliver measurable value to clients.”
            </p>
            <div className="mt-4 font-mono text-xs text-white/40 uppercase tracking-widest">
              Novantis Global Executive Charter
            </div>
          </div>
        </div>

        {/* Section Tabs: Core Values vs Brand Differentiators */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1.5 rounded-full liquid-glass-strong border border-white/15 gap-2">
            <button
              onClick={() => setActiveTab('values')}
              className={`px-6 py-2.5 rounded-full text-xs font-body font-semibold transition-all cursor-pointer ${
                activeTab === 'values'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              10 Core Values
            </button>
            <button
              onClick={() => setActiveTab('differentiators')}
              className={`px-6 py-2.5 rounded-full text-xs font-body font-semibold transition-all cursor-pointer ${
                activeTab === 'differentiators'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              5 Brand Differentiators
            </button>
          </div>
        </div>

        {/* Tab 1: 10 Core Values Grid / Accordion */}
        {activeTab === 'values' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 animate-fade-in">
            {CORE_VALUES.map((val) => {
              const isExpanded = expandedValue === val.number;
              return (
                <div
                  key={val.number}
                  onClick={() => setExpandedValue(isExpanded ? null : val.number)}
                  className={`liquid-glass-card rounded-2xl p-5 sm:p-6 border transition-all duration-300 cursor-pointer ${
                    isExpanded 
                      ? 'border-cyan-400/60 bg-white/[0.04] shadow-[0_0_25px_rgba(0,229,255,0.15)]' 
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl liquid-glass-strong border border-white/15">
                        {getValueIcon(val.icon)}
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest font-semibold">
                          Value #{val.number}
                        </span>
                        <h3 className="font-heading italic text-xl sm:text-2xl text-white">
                          {val.title}
                        </h3>
                      </div>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-white/50 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-cyan-400' : ''}`} />
                  </div>

                  <p className="font-body text-xs sm:text-sm text-white/70 mt-3 leading-relaxed">
                    {val.shortDesc}
                  </p>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-white/10 text-xs sm:text-sm font-body text-white/90 leading-relaxed animate-fade-in bg-white/[0.02] p-3 rounded-xl">
                      {val.fullDesc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: 5 Brand Differentiators */}
        {activeTab === 'differentiators' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {BRAND_DIFFERENTIATORS.map((diff) => (
              <div
                key={diff.number}
                className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-white/15 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl liquid-glass-strong border border-white/15">
                      {getDifferentiatorIcon(diff.icon)}
                    </div>
                    <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                      0{diff.number}
                    </span>
                  </div>

                  <h3 className="font-heading italic text-2xl text-white mb-2">
                    {diff.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                    {diff.shortDesc}
                  </p>

                  <div className="space-y-2">
                    {diff.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-body text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
