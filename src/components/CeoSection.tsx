import React from 'react';
import { NovantisLogoChip } from './BrandLogos';
import { Sparkles, Quote, CheckCircle2 } from 'lucide-react';

export const CeoSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-black relative overflow-hidden border-t border-white/10">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Official Portrait of Waseem Khan */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative group w-full max-w-sm">
              {/* Soft Cyan Ambient Aura behind the portrait */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-sky-500/10 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Portrait Container */}
              <div className="relative rounded-3xl overflow-hidden liquid-glass-card border border-white/20 p-2 bg-gradient-to-b from-white/10 to-transparent">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-gradient-to-b from-[#0A1224] to-black">
                  {/* Official Photo of Founder & CEO Waseem Khan */}
                  <img
                    src="/assets/ceo-waseem-khan.jpg"
                    alt="Waseem Khan, Founder & CEO of Novantis Global"
                    className="w-full h-full object-cover object-center contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Dark gradient fade on image bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Floating Novantis Seal on Image */}
                  <div className="absolute top-4 right-4 p-2 rounded-2xl liquid-glass-strong border border-white/20 bg-black/40 backdrop-blur-md">
                    <NovantisLogoChip className="w-8 h-8 drop-shadow-[0_0_10px_#00E5FF]" />
                  </div>

                  {/* Caption on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-heading italic text-2xl text-white">Waseem Khan</div>
                    <div className="font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase">
                      Founder & CEO, Novantis Global
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick executive highlights chip */}
              <div className="mt-4 flex items-center justify-between px-4 py-2.5 rounded-2xl liquid-glass-strong border border-white/10 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                  <span className="font-mono text-[11px]">Islamabad, PK • Global Delivery</span>
                </div>
                <span className="font-mono text-[11px] text-cyan-400">Enterprise Platforms & AI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Card */}
          <div className="lg:col-span-7">
            <div className="liquid-glass-strong rounded-3xl p-8 sm:p-12 border border-white/15 relative overflow-hidden shadow-2xl">
              {/* Watermark quote glyph */}
              <div className="absolute -top-6 -right-6 text-white/[0.03] font-heading italic text-[160px] pointer-events-none select-none leading-none">
                “
              </div>

              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 mb-6 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>A word from our founder</span>
              </div>

              {/* Opening Giant Instrument Serif Quotation Mark */}
              <div className="text-cyan-400 font-heading italic text-5xl sm:text-6xl leading-none mb-2 select-none">
                “
              </div>

              {/* Exact Approved Verbatim Quote Body */}
              <blockquote className="font-body font-light text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose mb-8">
                At Novantis Global, we believe meaningful technology begins with people, purpose, and trust. By bringing together deep enterprise platform expertise and practical AI innovation, we help businesses simplify complexity, work smarter, and adapt with confidence in a constantly changing world. Our work is not just about platforms or automation — it’s about enabling teams, improving experiences, and creating lasting value. Every step forward is powered by the passion, creativity, and commitment of our people. As the future of enterprise IT continues to evolve, we remain focused on building intelligent, reliable solutions that help organizations grow today and stay ready for tomorrow.
              </blockquote>

              {/* Attribution Signature */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-heading italic text-2xl text-white tracking-wide">
                    Waseem Khan
                  </div>
                  <div className="font-body text-xs sm:text-sm text-cyan-400 font-medium tracking-wide">
                    Founder & CEO, Novantis Global
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-white/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Approved Executive Charter</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
