import React, { useState } from 'react';
import { INSIGHTS_ARTICLES } from '../data/novantisData';
import { BookOpen, Clock, Calendar, User, ArrowUpRight, X, Sparkles, Tag } from 'lucide-react';
import { InsightArticle } from '../types';

export const InsightsView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  const categories = ['All', 'Enterprise AI', 'Platform Architecture', 'Integration & Data', 'Executive Strategy'];

  const filteredArticles = activeCategory === 'All'
    ? INSIGHTS_ARTICLES
    : INSIGHTS_ARTICLES.filter(a => a.category === activeCategory);

  return (
    <div className="pt-28 pb-24 bg-black min-h-screen">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 right-1/3 w-[700px] h-[400px] bg-cyan-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full liquid-glass-strong border border-white/10 text-xs font-mono mb-4 text-cyan-400">
            <BookOpen className="w-3.5 h-3.5" />
            <span className="uppercase tracking-[0.2em]">Thought Leadership</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.95]">
            Engineering Perspectives. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
              Architectural Blueprints.
            </span>
          </h1>
          <p className="text-white/60 font-body font-light text-base sm:text-lg mt-4">
            Insights on autonomous AI swarms, clean core ERP modernizations, MuleSoft event streaming, and EU AI Act governance.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-body font-medium transition-all duration-200 cursor-pointer shrink-0 ${
                activeCategory === cat
                  ? 'bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.25)]'
                  : 'liquid-glass-card text-white/70 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="liquid-glass-card rounded-3xl p-8 border border-white/15 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-white/40">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h2 className="font-heading italic text-2xl sm:text-3xl text-white mb-3 group-hover:text-cyan-200 transition-colors leading-tight">
                  {art.title}
                </h2>

                <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                  {art.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {art.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-white/60">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author & Read Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-white/60">{art.author}</span>
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
            onClick={() => setSelectedArticle(null)}
          />

          <div className="relative w-full max-w-3xl liquid-glass-card rounded-3xl p-6 sm:p-10 border border-white/20 bg-black/95 shadow-2xl z-10 animate-fade-in my-8 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full liquid-glass-strong border border-white/15 text-white/70 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                {selectedArticle.category}
              </span>
              <span className="font-mono text-xs text-white/40">• {selectedArticle.readTime}</span>
              <span className="font-mono text-xs text-white/40">• {selectedArticle.date}</span>
            </div>

            <h2 className="font-heading italic text-3xl sm:text-4xl text-white mb-4 leading-tight">
              {selectedArticle.title}
            </h2>

            <div className="font-mono text-xs text-cyan-400 mb-8 pb-4 border-b border-white/10">
              By {selectedArticle.author}
            </div>

            <div className="space-y-4 font-body text-white/85 text-sm sm:text-base leading-relaxed">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {selectedArticle.tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg liquid-glass-strong text-xs font-mono text-white/70">
                    #{t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-full bg-white text-black font-body text-xs font-semibold cursor-pointer hover:bg-white/90"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
