import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { articles } from '../data/journal';

const JournalArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const article = articles.find(a => a.id === id);
  const related = articles.filter(a => a.id !== id).slice(0, 2);

  useEffect(() => {
    if (!article) { navigate('/journal'); return; }

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / total) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article, navigate]);

  if (!article) return null;

  return (
    <div className="bg-white animate-fadeIn">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 z-[200] h-[2px] bg-brand-accent transition-all duration-100" style={{ width: `${scrollProgress}%` }} />

      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12 md:p-24">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <div className="flex items-center gap-6 mb-8">
                <Link to="/journal" className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60 hover:text-white transition-colors">← Journal</Link>
                <span className="text-white/30">|</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">{article.category}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{article.date} · {article.readTime} read</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1] uppercase tracking-tighter">
                {article.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto py-24">
          {/* Excerpt */}
          <p className="text-2xl font-serif text-brand-dark/70 italic leading-relaxed mb-16 pb-16 border-b border-gray-100">
            {article.excerpt}
          </p>

          {/* Body Content */}
          <div className="space-y-10">
            {article.body?.map((block, idx) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={idx} className="text-gray-600 leading-[1.9] text-lg font-light">
                    {block.content}
                  </p>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={idx} className="py-8 px-10 border-l-2 border-brand-accent my-16 relative">
                    <p className="font-serif text-2xl text-brand-dark italic leading-relaxed">
                      {block.content}
                    </p>
                  </blockquote>
                );
              }
              return null;
            })}
          </div>

          {/* Secondary Image */}
          {article.secondaryImage && (
            <div className="my-24 aspect-[16/9] overflow-hidden rounded-[3rem] shadow-2xl">
              <img src={article.secondaryImage} alt="Editorial" className="w-full h-full object-cover" />
            </div>
          )}
        </div>
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="border-t border-gray-100 py-24 bg-brand-bg/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent">Continue Reading</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {related.map(rel => (
                <Link key={rel.id} to={`/journal/${rel.id}`} className="group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden rounded-[2rem] mb-8 shadow-lg">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">{rel.category}</span>
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{rel.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-brand-dark group-hover:italic transition-all leading-tight">{rel.title}</h3>
                    <p className="text-gray-500 font-light text-sm leading-relaxed line-clamp-2">{rel.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default JournalArticle;
