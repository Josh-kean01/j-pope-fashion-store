import React, { useEffect } from 'react';
import { collections } from '../data/collections';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Moodboard from '../components/Moodboard';

const Collections = ({ addToCart, toggleWishlist, wishlistItems }) => {
  return (
    <div className="bg-brand-bg min-h-screen animate-fadeIn">
      {/* Intro Section */}
      <header className="pt-32 pb-20 container mx-auto px-6 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent mb-4 block">The Anthology</span>
        <h1 className="text-6xl md:text-8xl font-serif text-brand-dark mb-8 uppercase tracking-tighter">Collections</h1>
        <p className="max-w-xl mx-auto text-gray-500 font-light leading-relaxed">
          A curated journey through our seasonal narratives. Each collection is a distinct chapter in our exploration of form, material, and the modern silhouette.
        </p>
      </header>

      {/* Collections List */}
      <div className="space-y-48 pb-48">
        {collections.map((collection, index) => {
          const featuredItems = products.filter(p => collection.featuredProducts.includes(p.id));
          const isEven = index % 2 === 0;

          return (
            <section key={collection.id} id={collection.id} className="relative overflow-hidden">
              {/* Hero Section for Collection */}
              <div className="container mx-auto px-6 mb-24">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                  <div className="w-full lg:w-3/5 aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-1000 z-10"
                    >
                      <source src="https://videos.pexels.com/video-files/5532765/5532765-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                    </video>
                    <img 
                      src={collection.heroImage} 
                      alt={collection.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700 z-20"></div>
                  </div>
                  
                  <div className="w-full lg:w-2/5 space-y-8">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent block mb-2">{collection.subtitle}</span>
                      <h2 className="text-5xl font-serif text-brand-dark uppercase tracking-tight leading-none">{collection.title}</h2>
                    </div>
                    <p className="text-gray-600 font-light leading-relaxed text-lg italic">
                      {collection.story}
                    </p>
                    <div className="flex gap-4 items-center">
                      <div className="flex -space-x-2">
                        {collection.colorPalette && collection.colorPalette.map((color, i) => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: color }}></div>
                        ))}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Palette</span>
                    </div>
                  </div>
                </div>
              </div>

               {/* Aesthetic Grid */}
              <div className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                  <div className="md:col-span-4 space-y-12">
                    <div className="aspect-square rounded-[2rem] overflow-hidden shadow-soft">
                      <img src={collection.moodImages[0]} alt="Mood 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div className="p-12 bg-white rounded-[2rem] shadow-soft text-center quote-container relative overflow-hidden">
                       <span className="absolute top-4 left-4 text-6xl font-serif text-brand-accent opacity-20">"</span>
                       <p className="font-serif text-2xl italic text-brand-dark">{collection.quote}</p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-8">
                     <div className="mb-12 flex justify-between items-end">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-dark">Curated Essentials</h3>
                        <button className="text-[9px] font-bold uppercase tracking-[0.3em] border-b border-brand-accent pb-1 hover:text-brand-accent transition-colors">Shop Full Collection</button>
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                        {featuredItems.map(product => (
                          <ProductCard key={product.id} product={product} onAddToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />
                        ))}
                     </div>
                  </div>
                </div>
              </div>

              {/* Technical Specifications / Materiality Deep Dive */}
              <div className="bg-white py-32 mb-32">
                <div className="container mx-auto px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                       <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent mb-6 block">Materiality</span>
                       <h3 className="text-4xl font-serif text-brand-dark mb-8 italic">The integrity of the fiber defines the integrity of the form.</h3>
                       <div className="space-y-8 text-gray-500 font-light leading-relaxed">
                          <p>We source exclusively from heritage mills in the Biella region of Italy. From 15.5-micron superfine wool to double-faced cashmere, every material is selected for its architectural capability and haptic resonance.</p>
                          <div className="grid grid-cols-2 gap-8 pt-8">
                             <div>
                                <p className="text-brand-dark font-bold text-xs uppercase tracking-widest mb-2 font-sans">Origin</p>
                                <p className="text-sm">Biella, Italy / Gifu, Japan</p>
                             </div>
                             <div>
                                <p className="text-brand-dark font-bold text-xs uppercase tracking-widest mb-2 font-sans">Composition</p>
                                <p className="text-sm">Regenerative Cashmere / Organic Silk</p>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                       <div className="aspect-video rounded-[3rem] overflow-hidden bg-brand-bg relative group">
                          <img src={collection.moodImages[1]} alt="Materials" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" />
                          <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-20 h-20 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center text-white text-[10px] font-bold uppercase tracking-widest">Details</div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Behind the Design section */}
              <div className="container mx-auto px-6 mb-32">
                 <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-dark/30 mb-6 block text-center">Behind the Design</span>
                    <h2 className="text-5xl font-serif text-brand-dark mb-12 uppercase tracking-tight">Experimental Prototype {collection.id.split('-')[0].toUpperCase()}.01</h2>
                    <div className="mb-12">
                       <Moodboard images={[...collection.moodImages, collection.heroImage]} />
                    </div>
                    <p className="text-gray-500 font-light leading-relaxed max-w-2xl mx-auto italic">
                      This series explores the point of tension where structure fails and fluidity takes over. We used 3D-modeling to calculate the exact drape angle for each cocoon silhouette.
                    </p>
                 </div>
              </div>

              {/* Large Mood Image Backdrop (Subtle) */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 aspect-video opacity-[0.03] pointer-events-none">
                 {collection.moodImages && collection.moodImages[1] && (
                   <img src={collection.moodImages[1]} alt="Backdrop" className="w-full h-full object-cover rounded-full blur-3xl" />
                 )}
              </div>
            </section>
          );
        })}
      </div>

      {/* Newsletter / CTA */}
      <section className="py-48 bg-brand-dark text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-4xl font-serif mb-8 italic">Stay inspired.</h2>
          <p className="text-white/60 font-light mb-12 tracking-wide leading-relaxed">
            Join our anthology to receive seasonal updates, editorial stories, and exclusive access to new collection launches.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent border-b border-white/20 py-4 px-2 text-sm focus:border-white outline-none transition-colors w-full md:w-80"
            />
            <button className="px-12 py-4 bg-white text-brand-dark text-[10px] font-bold uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all rounded-full">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
