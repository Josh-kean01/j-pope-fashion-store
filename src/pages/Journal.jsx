import React from 'react';
import { articles } from '../data/journal';
import { Link } from 'react-router-dom';

const Journal = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-48 animate-fadeIn">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-32">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent block mb-6">Anthology</span>
          <h1 className="text-6xl md:text-8xl font-serif text-brand-dark leading-[0.9] uppercase tracking-tighter">
            The <br/><span className="italic ml-24 md:ml-48">Journal.</span>
          </h1>
        </div>

        {/* Featured Article */}
        <Link to={`/journal/${articles[0].id}`} className="mb-48 group cursor-pointer block">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 aspect-[16/9] overflow-hidden rounded-[3rem] shadow-2xl relative">
              <img 
                src={articles[0].image} 
                alt={articles[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-1000"></div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">{articles[0].category}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">{articles[0].date}</span>
              </div>
              <h2 className="text-5xl font-serif text-brand-dark leading-tight group-hover:italic transition-all duration-700">
                {articles[0].title}
              </h2>
              <p className="text-gray-500 font-light text-lg leading-relaxed">
                {articles[0].excerpt}
              </p>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] pb-2 border-b border-brand-dark group-hover:border-brand-accent group-hover:text-brand-accent transition-colors">
                Read Narrative
              </span>
            </div>
          </div>
        </Link>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {articles.slice(1).map((article) => (
            <Link key={article.id} to={`/journal/${article.id}`} className="group cursor-pointer block">
              <div className="aspect-square overflow-hidden rounded-[2.5rem] mb-10 shadow-lg relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">{article.category}</span>
                   <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{article.readTime}</span>
                </div>
                <h3 className="text-3xl font-serif text-brand-dark leading-tight group-hover:italic transition-all">
                  {article.title}
                </h3>
                <p className="text-gray-500 font-light line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="mt-48 py-32 bg-brand-bg/50 border-y border-gray-100">
        <div className="container mx-auto px-6 text-center">
           <div className="max-w-2xl mx-auto space-y-12">
              <h2 className="text-4xl font-serif text-brand-dark italic">Join the Inner Circle</h2>
              <p className="text-gray-500 font-light">Receive early access to collections and exclusive editorial insights directly from the Atelier.</p>
              <div className="flex gap-4 max-w-md mx-auto relative">
                <input 
                  type="email" 
                  placeholder="vidal@j-pope.com"
                  className="w-full bg-white border-none py-6 px-8 rounded-full shadow-sm outline-none focus:ring-1 focus:ring-brand-accent transition-all font-light"
                />
                <button className="absolute right-2 top-2 bottom-2 px-8 bg-brand-dark text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Join
                </button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;
