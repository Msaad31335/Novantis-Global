import React, { useState } from 'react';
import { CROSS_CUTTING_SERVICES } from '../data/novantisData';
import { 
  Layers, 
  Users, 
  Activity, 
  Network, 
  Cpu, 
  BarChart3, 
  Code2, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { CrossCuttingService } from '../types';

interface ServicesHubProps {
  onOpenAssessment: (offerName: string) => void;
}

export const ServicesHub: React.FC<ServicesHubProps> = ({ onOpenAssessment }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('cat-integration');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Users': return <Users className="w-5 h-5 text-cyan-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'Network': return <Network className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      default: return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  const activeService = CROSS_CUTTING_SERVICES.find(s => s.id === selectedServiceId) || CROSS_CUTTING_SERVICES[0];

  return (
    <section className="py-24 sm:py-32 bg-black relative overflow-hidden border-t border-white/10">
      {/* Soft Ambient Depth Aura */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-cyan-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass-strong border border-white/10 text-xs font-mono mb-4 text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-[0.2em]">Cross-Cutting Practices</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.95]">
            Bridging Silos. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
              Powering Autonomous Scale.
            </span>
          </h2>
          <p className="text-white/60 font-body font-light text-base sm:text-lg mt-4">
            True enterprise agility requires more than individual platforms. Novantis connects your ERP, CRM, ITSM, data lakes, and autonomous AI agents into a synchronized fabric.
          </p>
        </div>

        {/* Interactive Grid / Pill Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CROSS_CUTTING_SERVICES.map((service) => {
            const isSelected = service.id === activeService.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`liquid-glass-card rounded-3xl p-6 sm:p-8 border transition-all duration-300 cursor-pointer relative group flex flex-col justify-between ${
                  isSelected
                    ? 'border-cyan-400/70 shadow-[0_0_35px_rgba(0,229,255,0.2)] bg-white/[0.04]'
                    : 'border-white/10 hover:border-white/25 hover:bg-white/[0.03]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl liquid-glass-strong border border-white/15 group-hover:scale-110 transition-transform">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      {service.tagline}
                    </span>
                  </div>

                  <h3 className="font-heading italic text-2xl text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-white/65 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Capabilities Bullet Chips */}
                  <div className="space-y-1.5 mb-6">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/80 font-body">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Assessment Trigger */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-white/50">{service.entryOffer}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenAssessment(service.entryOffer);
                    }}
                    className="p-2 rounded-full liquid-glass-strong border border-white/15 text-white hover:text-cyan-400 hover:border-cyan-400/50 transition-all cursor-pointer"
                    aria-label={`Assess ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
