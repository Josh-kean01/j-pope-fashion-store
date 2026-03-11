import React from 'react';
import { collections } from '../data/collections';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Moodboard from '../components/Moodboard';
import Seo from '../components/Seo';

const Collections = ({ addToCart, toggleWishlist, wishlistItems }) => {
  return (
    <div className="bg-brand-bg min-h-screen animate-fadeIn">
      <Seo
        title="Collections"
        description="Explore J-Pope seasonal collections and editorial fashion narratives, from The Minimalist Edit to Evening Noir and Urban Sanctuary."
      />
      {/* Intro Section */}
      <header className="container mx-auto px-4 pb-16 pt-28 text-center sm:px-6 sm:pb-20 sm:pt-32">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent mb-4 block">The Anthology</span>
        <h1 className="mb-6 font-serif text-4xl uppercase tracking-tight text-brand-dark sm:mb-8 sm:text-6xl md:text-8xl">Collections</h1>
        <p className="mx-auto max-w-xl text-sm font-light leading-relaxed text-gray-500 sm:text-base">
          A curated journey through our seasonal narratives. Each collection is a distinct chapter in our exploration of form, material, and the modern silhouette.
        </p>
      </header>

      {/* Collections List */}
      <div className="space-y-32 pb-32 sm:space-y-48 sm:pb-48">
        {collections.map((collection, index) => {
          const featuredItems = products.filter(p => collection.featuredProducts.includes(p.id));
          const isEven = index % 2 === 0;

          return (
            <section key={collection.id} id={collection.id} className="relative overflow-hidden">
              {/* Hero Section for Collection */}
              <div className="container mx-auto mb-20 px-4 sm:px-6 sm:mb-24">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 sm:gap-16`}>
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] shadow-2xl group sm:rounded-[3rem] lg:w-3/5">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-1000 z-10"
                    >
                      <source src="https://cdn.pixabay.com/video/2022/11/28/140828-776043783_large.mp4" type="video/mp4" />
                    </video>
                    <img 
                      src={collection.heroImage} 
                      alt={collection.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700 z-20"></div>
                  </div>
                  
                  <div className="w-full space-y-6 lg:w-2/5 lg:space-y-8">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent block mb-2">{collection.subtitle}</span>
                      <h2 className="font-serif text-3xl uppercase leading-none tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">{collection.title}</h2>
                    </div>
                    <p className="text-base font-light italic leading-relaxed text-gray-600 lg:text-lg">
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
              <div className="container mx-auto mb-24 px-4 sm:px-6 sm:mb-32">
                <div className="grid grid-cols-1 items-end gap-10 sm:gap-12 md:grid-cols-12">
                  <div className="space-y-8 sm:space-y-12 md:col-span-4">
                    <div className="aspect-square rounded-[2rem] overflow-hidden shadow-soft">
                      <img src={collection.moodImages[0]} alt="Mood 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div className="quote-container relative overflow-hidden rounded-[2rem] bg-white p-8 text-center shadow-soft sm:p-12">
                       <span className="absolute top-4 left-4 text-5xl font-serif text-brand-accent opacity-20 sm:text-6xl">"</span>
                       <p className="font-serif text-xl italic text-brand-dark sm:text-2xl">{collection.quote}</p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-8">
                     <div className="mb-8 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-dark">Curated Essentials</h3>
                        <button className="text-[9px] font-bold uppercase tracking-[0.3em] border-b border-brand-accent pb-1 hover:text-brand-accent transition-colors">Shop Full Collection</button>
                     </div>
                     <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
                        {featuredItems.map(product => (
                          <ProductCard key={product.id} product={product} onAddToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />
                        ))}
                     </div>
                  </div>
                </div>
              </div>

              {/* Technical Specifications / Materiality Deep Dive */}
              <div className="mb-24 bg-white py-20 sm:mb-32 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6">
                  <div className="grid grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-24">
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                       <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent mb-6 block">Materiality</span>
                       <h3 className="mb-6 font-serif text-3xl italic text-brand-dark sm:mb-8 sm:text-4xl">The integrity of the fiber defines the integrity of the form.</h3>
                       <div className="space-y-8 text-gray-500 font-light leading-relaxed">
                          <p>We source exclusively from heritage mills in the Biella region of Italy. From 15.5-micron superfine wool to double-faced cashmere, every material is selected for its architectural capability and haptic resonance.</p>
                          <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 sm:gap-8">
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
              <div className="container mx-auto mb-24 px-4 sm:px-6 sm:mb-32">
                 <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-dark/30 mb-6 block text-center">Behind the Design</span>
                    <h2 className="mb-10 font-serif text-3xl uppercase tracking-tight text-brand-dark sm:mb-12 sm:text-5xl">Experimental Prototype {collection.id.split('-')[0].toUpperCase()}.01</h2>
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
      <section className="bg-brand-dark py-28 text-center text-white sm:py-48">
        <div className="container mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="mb-6 font-serif text-3xl italic sm:mb-8 sm:text-4xl">Stay inspired.</h2>
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
