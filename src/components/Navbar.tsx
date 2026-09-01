import React, { useState, useEffect } from 'react';
import { NovantisFullLogo } from './BrandLogos';
import { ArrowUpRight, Menu, X, Sparkles, Shield, Cpu, Layers } from 'lucide-react';
import { NavView } from '../types';

interface NavbarProps {
  currentView: NavView;
  onNavigate: (view: NavView) => void;
  onOpenAssessment: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenAssessment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; view: NavView }[] = [
    { label: 'Home', view: 'home' },
    { label: 'About', view: 'about' },
    { label: 'Platforms', view: 'platforms' },
    { label: 'Services', view: 'services' },
    { label: 'Industries', view: 'industries' },
    { label: 'Insights', view: 'insights' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: NavView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
      <div className="max-w-7xl mx-auto">
        <nav 
          className={`liquid-glass-strong rounded-full px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
            isScrolled 
              ? 'bg-black/60 shadow-2xl shadow-cyan-950/20 border-white/15 backdrop-blur-2xl' 
              : 'bg-black/30 border-white/10 backdrop-blur-xl'
          }`}
        >
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 cursor-pointer group focus:outline-none"
            aria-label="Novantis Global Home"
          >
            <NovantisFullLogo className="h-8 group-hover:scale-105 transition-transform" />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-body transition-all duration-200 cursor-pointer relative ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold shadow-inner'
                      : 'text-white/65 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#00E5FF]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenAssessment('General Enterprise Consultation')}
              className="liquid-glass-strong rounded-full px-5 py-2 text-xs font-medium text-white flex items-center gap-1.5 hover:bg-white/15 hover:shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all font-body cursor-pointer group border border-white/15 active:scale-95"
            >
              <span>Request an Assessment</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenAssessment('General Enterprise Consultation')}
              className="px-3 py-1.5 rounded-full bg-white text-black font-body text-xs font-medium flex items-center gap-1 cursor-pointer"
            >
              <span>Assess</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-white/80 hover:text-white bg-white/5 border border-white/10 cursor-pointer focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 liquid-glass-card rounded-3xl p-6 border border-white/15 bg-black/90 backdrop-blur-3xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col gap-2 mb-6">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-body transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-500/30'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00E5FF]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment('General Enterprise Consultation');
              }}
              className="w-full bg-white text-black font-body font-semibold py-3 px-4 rounded-full text-xs flex items-center justify-center gap-2 hover:bg-white/90 transition-colors shadow-lg"
            >
              <span>Request an Assessment</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-center font-mono text-[10px] text-white/40 uppercase tracking-widest pt-2">
              Islamabad HQ • Global Enterprise Delivery
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
