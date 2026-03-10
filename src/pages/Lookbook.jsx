import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Lookbook = ({ addToCart }) => {
  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Chapter 1: Structure & Form */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-32">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-brand-accent mb-8 block mb-4">Chapter I</span>
              <h1 className="text-7xl md:text-9xl font-serif text-brand-dark mb-10 leading-[0.8] uppercase tracking-tighter">
                Structure <br/>
                <span className="italic ml-8 md:ml-20 text-brand-accent">& Form</span>
              </h1>
              <p className="text-gray-500 font-light leading-relaxed text-lg max-w-sm mb-12">
                A study in architectural precision. We explore the dialogue between heavy wools and the human silhouette.
              </p>
              <div className="flex items-center gap-8">
                <div className="w-24 h-px bg-brand-dark/20"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40 italic">Autumn Winter 2024 Collection</span>
              </div>
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2000&auto=format&fit=crop" 
                    alt="Structure & Form Look" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-64 h-64 border border-brand-accent/30 rounded-full -z-0 animate-pulse"></div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-accent/5 rounded-full blur-3xl -z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interstitial Quote */}
      <section className="py-48 bg-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[20rem] font-serif uppercase tracking-tighter whitespace-nowrap">CRAFTMANSHIP</span>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-3xl md:text-5xl font-serif text-brand-dark italic leading-tight max-w-4xl mx-auto">
            "The most powerful statement is made in the silence between the trends."
          </p>
        </div>
      </section>

      {/* Chapter 2: The Modern Nomad */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-8">
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-soft mt-24">
                <img src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=1000&auto=format&fit=crop" alt="Look 2" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-soft">
                <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000&auto=format&fit=crop" alt="Look 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 sticky top-32">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-brand-accent mb-4 block">Chapter II</span>
            <h2 className="text-6xl font-serif text-brand-dark mb-8 uppercase tracking-tighter">The Modern <br/>Nomad</h2>
            <div className="space-y-6 text-gray-500 font-light leading-relaxed">
              <p>
                Navigating the concrete vastness with fluidity and ease. Our technical silk blends and seamless knits are designed for the individual who finds sanctuary in rotation.
              </p>
              <p>
                Movement is the ultimate luxury. We've removed every unnecessary seam to allow the fabric to breathe with you.
              </p>
            </div>
            <div className="mt-12 flex gap-4">
              <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-xs font-serif italic text-gray-400">02</div>
              <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-xs font-serif italic text-gray-400">03</div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed Atmospheric Section */}
      <section className="h-[80vh] relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop" 
          alt="Atmosphere" 
          className="w-full h-full object-cover fixed top-0 left-0 -z-20 opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-brand-bg/60 backdrop-blur-[2px]"></div>
        <div className="h-full flex items-center justify-center relative z-10 text-center px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-serif text-brand-dark italic mb-8">Atmospheric Purity</h2>
            <div className="w-32 h-px bg-brand-accent mx-auto mb-8"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.8em] text-brand-dark">A J-Pope Photographic Essay</p>
          </div>
        </div>
      </section>

      {/* Chapter 3: Nocturnal Noir */}
      <section className="py-32 bg-brand-dark text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-brand-accent mb-4 block">Chapter III</span>
              <h2 className="text-7xl md:text-[8rem] font-serif mb-8 uppercase leading-[0.8] tracking-tighter">Nocturnal<br/>Noir</h2>
              <p className="text-white/40 font-light leading-relaxed text-lg max-w-md">
                When the city dims, the silhouette sharpens. A collection of special edition evening essentials in deep shadows and rich textures.
              </p>
            </div>
            <div className="text-right pb-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Special Edition</p>
              <p className="font-serif italic text-xl">Winter '24</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="group space-y-8">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" alt="Noir 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <h3 className="font-serif text-2xl italic">Subtle Shift</h3>
            </div>
            <div className="group space-y-8 pt-24">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=1000&auto=format&fit=crop" alt="Noir 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <h3 className="font-serif text-2xl italic text-center">Evening Restraint</h3>
            </div>
            <div className="group space-y-8">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop" alt="Noir 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <h3 className="font-serif text-2xl italic text-right">Fluid Shadow</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items from Lookbook */}
      <section className="py-32 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent block mb-4">Curated Anthology</span>
            <h2 className="text-5xl font-serif text-brand-dark uppercase tracking-tight italic">Shop the Looks</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
          <div className="mt-24 text-center">
            <button className="px-16 py-5 border border-brand-dark text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-brand-dark hover:text-white transition-all rounded-full">
              View Full Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lookbook;
