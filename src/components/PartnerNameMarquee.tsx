import React, { useState } from 'react';
import { PartnerLogoBadge } from './BrandLogos';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface PartnerNameMarqueeProps {
  onSelectPlatform: (platformId: string) => void;
}

export const PartnerNameMarquee: React.FC<PartnerNameMarqueeProps> = ({ onSelectPlatform }) => {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  const partners = [
    { id: 'sap', name: 'SAP S/4HANA', tagline: 'Enterprise ERP Core' },
    { id: 'salesforce', name: 'Salesforce', tagline: 'Customer 360 & Agentforce' },
    { id: 'servicenow', name: 'ServiceNow', tagline: 'ITSM & Enterprise Workflows' },
    { id: 'dynamics', name: 'Microsoft Dynamics 365', tagline: 'Unified Business Cloud' },
    { id: 'netsuite', name: 'Oracle NetSuite', tagline: 'Global Financials & ERP' },
    { id: 'odoo', name: 'Odoo Enterprise', tagline: 'Modular Business Apps' },
    { id: 'erpnext', name: 'ERPNext', tagline: 'Open Agile ERP & Frappe' },
  ];

  // Duplicate 3x to ensure completely seamless infinite loop on ultra-wide screens
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-black border-y border-white/10 relative overflow-hidden marquee-container">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Label (Prompt §6: font-mono uppercase tracking-[0.2em] text-cyan-400 text-xs) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold px-4 py-1.5 rounded-full liquid-glass-strong border border-white/10 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Partners</span>
        </div>
      </div>

      {/* Full-width Scrolling Marquee Track (Prompt §6: 90–140px size, hover-pause, scale-135) */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left and Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Flex Row */}
        <div className="marquee-track flex items-center gap-8 sm:gap-12 animate-marquee whitespace-nowrap py-4">
          {marqueeItems.map((item, index) => {
            const isHovered = hoveredLogo === `${item.id}-${index}`;
            return (
              <div
                key={`${item.id}-${index}`}
                className="shrink-0 flex items-center"
                onMouseEnter={() => setHoveredLogo(`${item.id}-${index}`)}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                <button
                  onClick={() => onSelectPlatform(item.id)}
                  className={`group relative px-6 sm:px-8 py-4 sm:py-5 rounded-3xl transition-all duration-300 ease-out cursor-pointer flex flex-col items-center justify-center ${
                    isHovered
                      ? 'scale-125 sm:scale-135 liquid-glass-strong bg-white/15 border-cyan-400/60 shadow-[0_0_35px_rgba(0,229,255,0.35)] z-20'
                      : 'bg-white/[0.02] border border-white/10 hover:border-white/20 opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Learn more about ${item.name}`}
                >
                  {/* Large Logo Badge (Height 90-140px scale) */}
                  <div className="h-12 sm:h-14 flex items-center justify-center">
                    <PartnerLogoBadge name={item.id} size="lg" />
                  </div>

                  {/* Tagline reveals prominently on hover */}
                  <div className={`mt-2 font-mono text-[10px] text-cyan-300 transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                    {item.tagline}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
