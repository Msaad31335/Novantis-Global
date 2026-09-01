import React from 'react';
import { ASSESSMENT_OFFERS } from '../data/novantisData';
import { Sparkles, Clock, Target, CheckCircle2, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { AssessmentOffer } from '../types';

interface AssessmentOffersProps {
  onBookAssessment: (offerTitle: string) => void;
}

export const AssessmentOffers: React.FC<AssessmentOffersProps> = ({ onBookAssessment }) => {
  return (
    <section id="assessments" className="py-24 sm:py-32 bg-black relative overflow-hidden border-t border-white/10">
      {/* Ambient Depth Light */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[400px] bg-cyan-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass-strong border border-white/10 text-xs font-mono mb-4 text-cyan-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="uppercase tracking-[0.2em]">Low-Risk Entry Engagements</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.95]">
            Structured Technical Assessments. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
              Clear Roadmap. Zero Guesswork.
            </span>
          </h2>
          <p className="text-white/60 font-body font-light text-base sm:text-lg mt-4">
            Before committing to multi-million dollar transformation programs, de-risk your investment with an independent, fixed-scope architecture & readiness assessment.
          </p>
        </div>

        {/* 8 Assessment Cards Grid (Miller's Law - Digestible Structured Offers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ASSESSMENT_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-white/15 flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {offer.platform}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-white/50">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{offer.duration}</span>
                  </div>
                </div>

                <h3 className="font-heading italic text-2xl text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {offer.title}
                </h3>

                <div className="font-mono text-[11px] text-white/40 mb-4">
                  Audience: <span className="text-white/70">{offer.targetRole}</span>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-2 mb-6">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 font-semibold">
                    Key Deliverables:
                  </div>
                  {offer.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-white/80 font-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onBookAssessment(offer.title)}
                className="w-full bg-white text-black font-body font-semibold py-3 px-4 rounded-full text-xs flex items-center justify-center gap-2 hover:bg-white/90 transition-all cursor-pointer shadow-lg active:scale-95 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
              >
                <span>Book This Assessment</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
