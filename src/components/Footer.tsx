import React, { useEffect, useRef } from 'react';
import { NovantisFullLogo, NovantisLogoChip } from './BrandLogos';
import { ArrowUpRight, Shield, Heart, Sparkles, Layers, Globe, Mail } from 'lucide-react';
import { NavView } from '../types';

interface FooterProps {
  onNavigate: (view: NavView) => void;
  onOpenAssessment: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAssessment }) => {
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

  const handleLinkClick = (view: NavView) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-white/10">
      
      {/* Final Cinematic Video Background CTA Container (Prompt §3.5 & §8) */}
      <div className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Background Looping HLS Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20 filter brightness-90 contrast-125"
            poster="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80"
          />

          {/* Soft Depth Ambient Glows */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Top 200px Black Gradient Fade (Prompt §3.5) */}
          <div className="video-fade-top" />
        </div>

        {/* CTA Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass-strong border border-white/15 text-xs font-mono mb-6 text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-[0.2em]">Initiate Transformation</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.95] mb-6">
            Ready to Modernize Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
              Enterprise Architecture?
            </span>
          </h2>

          <p className="text-white/60 font-body font-light text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Connect with our certified solution architects in Islamabad to schedule an independent readiness assessment across SAP, Salesforce, ServiceNow, or Dynamics 365.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenAssessment('General Enterprise Consultation')}
              className="w-full sm:w-auto bg-white text-black rounded-full px-8 py-3.5 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-white/90 transition-all font-body cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95"
            >
              <span>Request an Assessment</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full sm:w-auto liquid-glass-strong rounded-full px-8 py-3.5 text-sm font-medium text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-all font-body cursor-pointer border border-white/15 active:scale-95"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Delivery Leadership</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          
          {/* Brand & HQ Column */}
          <div className="col-span-2 space-y-4">
            <NovantisFullLogo className="h-8" />
            <p className="font-body text-xs text-white/60 max-w-sm leading-relaxed">
              Novantis Global is an enterprise technology & digital transformation partner helping organizations modernize ERP, CRM, ITSM, data, and autonomous AI automation.
            </p>
            <div className="font-mono text-xs text-cyan-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#00E5FF]" />
              <span>Islamabad Delivery HQ • Global Reach</span>
            </div>
          </div>

          {/* Platforms */}
          <div className="space-y-2.5">
            <div className="font-mono text-[11px] uppercase tracking-wider text-white/90 font-semibold mb-3">
              Platforms
            </div>
            <ul className="space-y-2 font-body text-xs text-white/60">
              <li><button onClick={() => handleLinkClick('platforms')} className="hover:text-white transition-colors cursor-pointer">SAP S/4HANA</button></li>
              <li><button onClick={() => handleLinkClick('platforms')} className="hover:text-white transition-colors cursor-pointer">Salesforce & Agentforce</button></li>
              <li><button onClick={() => handleLinkClick('platforms')} className="hover:text-white transition-colors cursor-pointer">ServiceNow Workflows</button></li>
              <li><button onClick={() => handleLinkClick('platforms')} className="hover:text-white transition-colors cursor-pointer">Microsoft Dynamics 365</button></li>
              <li><button onClick={() => handleLinkClick('platforms')} className="hover:text-white transition-colors cursor-pointer">Oracle NetSuite ERP</button></li>
              <li><button onClick={() => handleLinkClick('platforms')} className="hover:text-white transition-colors cursor-pointer">Odoo & ERPNext</button></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-2.5">
            <div className="font-mono text-[11px] uppercase tracking-wider text-white/90 font-semibold mb-3">
              Services
            </div>
            <ul className="space-y-2 font-body text-xs text-white/60">
              <li><button onClick={() => handleLinkClick('services')} className="hover:text-white transition-colors cursor-pointer">Enterprise Integration</button></li>
              <li><button onClick={() => handleLinkClick('services')} className="hover:text-white transition-colors cursor-pointer">Autonomous AI Agents</button></li>
              <li><button onClick={() => handleLinkClick('services')} className="hover:text-white transition-colors cursor-pointer">Data & MDM Analytics</button></li>
              <li><button onClick={() => handleLinkClick('services')} className="hover:text-white transition-colors cursor-pointer">Managed Operations</button></li>
              <li><button onClick={() => handleLinkClick('services')} className="hover:text-white transition-colors cursor-pointer">Custom Software Engineering</button></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-2.5">
            <div className="font-mono text-[11px] uppercase tracking-wider text-white/90 font-semibold mb-3">
              Company
            </div>
            <ul className="space-y-2 font-body text-xs text-white/60">
              <li><button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors cursor-pointer">About Novantis</button></li>
              <li><button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors cursor-pointer">10 Core Values</button></li>
              <li><button onClick={() => handleLinkClick('industries')} className="hover:text-white transition-colors cursor-pointer">Industries Served</button></li>
              <li><button onClick={() => handleLinkClick('insights')} className="hover:text-white transition-colors cursor-pointer">Executive Insights</button></li>
              <li><button onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors cursor-pointer">Global Contact</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar (Prompt §8: Copyright, Made by Novantis, Footer Links) */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Copyright */}
          <div className="text-white/40 font-body font-light text-xs text-center sm:text-left">
            © 2026 Novantis Global. All rights reserved.
          </div>

          {/* Center/Credit line: Made by Novantis (Prompt §8) */}
          <div className="text-white/40 font-body font-light text-xs">
            Made by Novantis
          </div>

          {/* Right: Legal & Trust Links */}
          <div className="flex items-center gap-6 text-white/40 font-body font-light text-xs">
            <button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </button>
            <button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors cursor-pointer">
              Trust Center
            </button>
            <button onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors cursor-pointer">
              Contact
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
