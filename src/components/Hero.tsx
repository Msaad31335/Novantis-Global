import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, Cpu, Layers } from 'lucide-react';
import { NovantisLogoChip } from './BrandLogos';

interface HeroProps {
  onOpenAssessment: (serviceName?: string) => void;
  onExplorePlatforms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAssessment, onExplorePlatforms }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
    const HlsClass = (window as unknown as { Hls?: any }).Hls;
    if (HlsClass && HlsClass.isSupported()) {
      const hls = new HlsClass({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, []);

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      
      {/* Background Looping / HLS Video Layer (Clean - NO Earth overlay in video) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 scale-105 filter brightness-90 contrast-125"
          poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
        />
        
        {/* Soft Cyan Depth Ambient Blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[350px] bg-sky-500/8 rounded-full blur-[120px] pointer-events-none" />
        
        {/* 200px Black Gradient Edge Fades (Prompt §3.5) */}
        <div className="video-fade-top" />
        <div className="video-fade-bottom" />
      </div>

      {/* Foreground Content with Professional High-End Typography */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Eyebrow Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full liquid-glass-strong border border-white/15 text-xs font-mono mb-8 backdrop-blur-2xl animate-fade-in shadow-[0_0_25px_rgba(0,229,255,0.18)]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_#00E5FF]" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-400 font-semibold">
            Enterprise Technology & Digital Transformation
          </span>
        </div>

        {/* Hero Title (Instrument Serif Italic Professional Writing Style) */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading italic text-white tracking-tight leading-[0.88] max-w-4xl mb-6">
          Architecting Intelligent <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 font-normal">
            Enterprise Platforms
          </span>
        </h1>

        {/* Professional Subtitle / Mission Statement */}
        <p className="text-white/70 font-body font-light text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed tracking-wide">
          Novantis Global empowers multinational organizations to implement, integrate, operate, optimize, and modernize mission-critical digital backbones across <strong className="text-white font-medium">SAP</strong>, <strong className="text-white font-medium">Salesforce</strong>, <strong className="text-white font-medium">ServiceNow</strong>, <strong className="text-white font-medium">Microsoft Dynamics 365</strong>, and <strong className="text-white font-medium">Enterprise AI</strong>.
        </p>

        {/* Action Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          {/* Primary Solid CTA */}
          <button
            onClick={() => onOpenAssessment('General Enterprise Consultation')}
            className="w-full sm:w-auto bg-white text-black rounded-full px-8 py-3.5 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-white/90 hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] transition-all font-body cursor-pointer group active:scale-95"
          >
            <span>Request an Assessment</span>
            <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Secondary Glass CTA */}
          <button
            onClick={onExplorePlatforms}
            className="w-full sm:w-auto liquid-glass-strong rounded-full px-8 py-3.5 text-sm font-medium text-white flex items-center justify-center gap-2 hover:bg-white/10 hover:border-cyan-400/40 transition-all font-body cursor-pointer border border-white/15 active:scale-95"
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Explore 7 Platforms</span>
          </button>
        </div>

        {/* Stat Metric Chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
          <div className="liquid-glass-card rounded-2xl p-4 text-left border border-white/10">
            <div className="font-heading italic text-2xl sm:text-3xl text-white">7+</div>
            <div className="font-mono text-[10px] sm:text-xs text-cyan-400 uppercase tracking-wider mt-0.5">Ecosystem Practices</div>
            <div className="font-body text-xs text-white/50 mt-1">SAP, SFDC, ServiceNow & more</div>
          </div>

          <div className="liquid-glass-card rounded-2xl p-4 text-left border border-white/10">
            <div className="font-heading italic text-2xl sm:text-3xl text-white">10+</div>
            <div className="font-mono text-[10px] sm:text-xs text-cyan-400 uppercase tracking-wider mt-0.5">Priority Markets</div>
            <div className="font-body text-xs text-white/50 mt-1">USA, UK, Germany, UAE, Saudi</div>
          </div>

          <div className="liquid-glass-card rounded-2xl p-4 text-left border border-white/10">
            <div className="font-heading italic text-2xl sm:text-3xl text-white">15 Min</div>
            <div className="font-mono text-[10px] sm:text-xs text-cyan-400 uppercase tracking-wider mt-0.5">P1 Response SLA</div>
            <div className="font-body text-xs text-white/50 mt-1">24/7 Enterprise Managed Ops</div>
          </div>

          <div className="liquid-glass-card rounded-2xl p-4 text-left border border-white/10">
            <div className="font-heading italic text-2xl sm:text-3xl text-white">100%</div>
            <div className="font-mono text-[10px] sm:text-xs text-cyan-400 uppercase tracking-wider mt-0.5">Outcome Focused</div>
            <div className="font-body text-xs text-white/50 mt-1">Measurable business ROI</div>
          </div>
        </div>

      </div>
    </section>
  );
};
