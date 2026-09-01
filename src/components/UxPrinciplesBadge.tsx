import React, { useState } from 'react';
import { Sparkles, Shield, X, Eye, Compass, Layers, CheckCircle2 } from 'lucide-react';

export const UxPrinciplesBadge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const principles = [
    {
      law: "Fitts's Law",
      application: "Pill-shaped enlarged CTA touch targets with high-contrast hover feedback and minimal travel distance across viewport corners."
    },
    {
      law: "Hick's Law",
      application: "Categorized platform tabs, progressive disclosure on complex enterprise specs, and focused assessment selection reducing decision fatigue."
    },
    {
      law: "Gestalt: Proximity & Continuity",
      application: "Infinite marquee stream and seamless orbiting partner ring with consistent liquid-glass backdrops grouping related technologies."
    },
    {
      law: "Jakob's Law",
      application: "Intuitive enterprise navigation patterns (sticky glass nav, clear hierarchy, familiar breadcrumbs and lead booking flows)."
    },
    {
      law: "Aesthetic-Usability Effect",
      application: "Obsidian dark canvas (#000), liquid-glass luminosity, Instrument Serif italic headings, and fluid 60fps animations conveying premium enterprise trust."
    },
    {
      law: "Miller's Law (7±2 Chunking)",
      application: "Strict grouping into 7 primary platform practices, 5 differentiators, and 4 managed service tiers for optimal cognitive absorption."
    },
  ];

  return (
    <>
      {/* Floating UX Laws HUD Button in bottom corner */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="liquid-glass-strong rounded-full px-4 py-2 border border-cyan-400/40 text-cyan-300 text-xs font-mono flex items-center gap-2 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all cursor-pointer group shadow-xl"
          aria-label="Toggle UI/UX Laws HUD"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">UI/UX Laws Applied</span>
          <span className="sm:hidden">UX Laws</span>
        </button>
      </div>

      {/* Popover Drawer */}
      {isOpen && (
        <div className="fixed bottom-16 left-5 z-50 w-80 sm:w-96 liquid-glass-card rounded-3xl p-6 border border-cyan-400/30 bg-black/95 shadow-2xl backdrop-blur-2xl animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#00E5FF]" />
              <h3 className="font-heading italic text-lg text-white">Cognitive UI/UX Laws</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/60 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {principles.map((item, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-left">
                <div className="font-mono text-[11px] text-cyan-400 font-bold mb-0.5">
                  {item.law}
                </div>
                <div className="font-body text-xs text-white/70 leading-relaxed">
                  {item.application}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-center font-mono text-[10px] text-white/40">
            Engineered for high enterprise conversion & cognitive clarity
          </div>
        </div>
      )}
    </>
  );
};
