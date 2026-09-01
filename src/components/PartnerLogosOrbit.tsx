import React, { useState } from 'react';
import { NovantisLogoChip, PartnerLogoBadge } from './BrandLogos';
import { ProfessionalEarthGlobe } from './ProfessionalEarthGlobe';
import { ArrowUpRight, Sparkles, Globe } from 'lucide-react';
import { PLATFORM_PRACTICES } from '../data/novantisData';

interface PartnerLogosOrbitProps {
  onSelectPlatform: (platformId: string) => void;
  onOpenAssessment: (offerName: string) => void;
}

export const PartnerLogosOrbit: React.FC<PartnerLogosOrbitProps> = ({ onSelectPlatform, onOpenAssessment }) => {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);

  // 7 Core Platform Practices in the Orbit
  const orbitPartners = [
    { id: 'sap', name: 'SAP S/4HANA', shortName: 'SAP', angle: 0 },
    { id: 'salesforce', name: 'Salesforce & Agentforce', shortName: 'Salesforce', angle: 51.43 },
    { id: 'servicenow', name: 'ServiceNow Workflows', shortName: 'ServiceNow', angle: 102.86 },
    { id: 'dynamics', name: 'Microsoft Dynamics 365', shortName: 'Microsoft', angle: 154.29 },
    { id: 'netsuite', name: 'Oracle NetSuite ERP', shortName: 'Oracle NetSuite', angle: 205.71 },
    { id: 'odoo', name: 'Odoo Enterprise', shortName: 'Odoo', angle: 257.14 },
    { id: 'erpnext', name: 'ERPNext & Frappe', shortName: 'ERPNext', angle: 308.57 },
  ];

  const activePlatformData = PLATFORM_PRACTICES.find(p => p.id === hoveredPlatform);

  return (
    <section className="relative py-28 sm:py-36 bg-black overflow-hidden border-t border-white/10">
      
      {/* Background Soft Depth Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyan-500/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-strong border border-white/10 text-xs font-mono mb-4 text-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
            <Globe className="w-3.5 h-3.5" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold">Global Orchestration in Motion</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.92]">
            Seven Global Platforms. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 font-normal">
              One Unified Delivery Partner.
            </span>
          </h2>
          <p className="text-white/70 font-body font-light text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Novantis connects, modernizes, and operates mission-critical ERP, CRM, ITSM, and autonomous AI across global enterprises.
          </p>
        </div>

        {/* Orbit Interaction Container with 3D Holographic Earth Animation */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          {/* Circular Orbit Ring Wrapper (Large scale, zero blank space) */}
          <div className="relative w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] lg:w-[680px] lg:h-[680px] flex items-center justify-center group/orbit pause-on-hover select-none">
            
            {/* 3D Animated Interactive Earth Canvas Globe */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
              <ProfessionalEarthGlobe size={620} className="w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[580px] lg:h-[580px]" />
            </div>

            {/* Center Fixed Large Novantis Chip Logo Mark */}
            <div className="relative z-20 flex flex-col items-center justify-center p-4 sm:p-7 rounded-full liquid-glass-strong border border-white/30 shadow-[0_0_60px_rgba(0,229,255,0.45)] backdrop-blur-3xl bg-black/85">
              <NovantisLogoChip className="w-14 h-14 sm:w-20 sm:h-20 drop-shadow-[0_0_20px_rgba(0,229,255,0.8)]" />
              <div className="text-center mt-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-cyan-400 font-bold">
                Novantis Core
              </div>
            </div>

            {/* Orbiting Ring (Rotates 360° continuously) - NO track outline */}
            <div className="orbit-ring-track absolute inset-0 rounded-full animate-orbit-spin pointer-events-none">
              {orbitPartners.map((partner) => {
                const angleRad = (partner.angle * Math.PI) / 180;
                const radiusPct = 44; // radius from center
                const left = 50 + radiusPct * Math.cos(angleRad);
                const top = 50 + radiusPct * Math.sin(angleRad);

                const isHovered = hoveredPlatform === partner.id;

                return (
                  <div
                    key={partner.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                    }}
                    onMouseEnter={() => setHoveredPlatform(partner.id)}
                    onMouseLeave={() => setHoveredPlatform(null)}
                  >
                    {/* Counter-Spin Wrapper to keep logo upright at all times (Prompt §5) */}
                    <div className="orbit-counter-chip animate-counter-spin">
                      <button
                        onClick={() => onSelectPlatform(partner.id)}
                        className={`rounded-2xl p-1 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl ${
                          isHovered
                            ? 'scale-125 ring-2 ring-cyan-400 shadow-[0_0_40px_rgba(0,229,255,0.7)] z-30'
                            : 'hover:scale-110 hover:ring-2 hover:ring-cyan-400/70 shadow-black/80'
                        }`}
                        style={{
                          width: '110px',
                          height: '52px',
                        }}
                        aria-label={`View ${partner.name} practice`}
                      >
                        <PartnerLogoBadge name={partner.id} className="w-full h-full" size="sm" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Info Panel / Platform Summary Card */}
          <div className="w-full lg:w-[420px] shrink-0">
            <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-white/15 relative overflow-hidden bg-black/85 backdrop-blur-2xl shadow-2xl">
              {activePlatformData ? (
                <div className="animate-fade-in space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-semibold">
                      {activePlatformData.tagline}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {activePlatformData.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading italic text-white leading-tight">
                    {activePlatformData.name}
                  </h3>

                  <p className="text-white/70 font-body text-xs sm:text-sm leading-relaxed">
                    {activePlatformData.heroDesc}
                  </p>

                  <div className="pt-2">
                    <div className="font-mono text-[11px] text-white/40 uppercase mb-2">Key Modules & Capabilities:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {activePlatformData.modules.slice(0, 4).map((mod, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-white/80">
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectPlatform(activePlatformData.id)}
                      className="text-xs font-semibold text-white hover:text-cyan-400 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Full Architecture Spec</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenAssessment(activePlatformData.name)}
                      className="px-4 py-2 rounded-full bg-white text-black font-body text-xs font-semibold hover:bg-white/90 transition-all cursor-pointer"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading italic text-white">
                    Hover Any Platform Chip
                  </h3>
                  <p className="text-white/50 font-body text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                    Hover over any of the 7 large orbiting platform logos or drag the 3D Earth globe to inspect global deployment architectures.
                  </p>
                  <div className="font-mono text-[10px] text-cyan-400/80 uppercase tracking-widest pt-2">
                    SAP • Salesforce • ServiceNow • Dynamics • NetSuite • Odoo • ERPNext
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
