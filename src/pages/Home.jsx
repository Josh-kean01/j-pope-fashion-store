import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import heroImage from '../assets/images/hero.png';

const Home = ({ addToCart, toggleWishlist, wishlistItems }) => {
  const trendingProducts = products.slice(0, 4);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section with Cinematic Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              poster={heroImage}
              className="w-full h-full object-cover scale-105"
            >
              <source src="https://videos.pexels.com/video-files/5532765/5532765-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl">
          <h1 className="text-6xl md:text-[5.5rem] font-serif mb-10 tracking-widest uppercase leading-tight animate-slideDown font-medium">
            ELEVATE YOUR ESSENCE
          </h1>
          <button className="bg-white text-brand-dark px-12 py-4 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] shadow-2xl hover:bg-brand-dark hover:text-white transition-all transform hover:scale-105 active:scale-95">
            SHOP NOW
          </button>
        </div>

        <div 
          onClick={() => document.getElementById('manifesto').scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-12 left-0 w-full flex flex-col items-center text-white/40 animate-bounce cursor-pointer z-10"
        >
            <span className="text-[8px] uppercase tracking-[0.5em] mb-4 font-bold opacity-60">Explore</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/40 via-white/10 to-transparent"></div>
        </div>
      </section>
      
      {/* Brand Statement Parallax */}
      <section id="manifesto" className="relative h-[60vh] flex items-center justify-center bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-brand-dark opacity-30 block">The J-Pope Manifesto</span>
            <p className="text-4xl md:text-6xl font-serif text-brand-dark italic leading-tight">
              "We believe in the power of subtraction. In the quiet strength of a single seam. In the resonance of pure material."
            </p>
            <div className="w-16 h-px bg-brand-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="font-serif text-center text-brand-dark mb-20 text-3xl uppercase tracking-[0.4em] font-light">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "The Minimalist Edit", id: "minimalist-edit", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop" },
            { title: "Evening Noir", id: "evening-noir", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop" },
            { title: "Urban Sanctuary", id: "urban-sanctuary", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop" }
          ].map((col, idx) => (
            <Link key={idx} to={`/collections#${col.id}`} className="relative group cursor-pointer overflow-hidden rounded-[2rem] aspect-[4/5] shadow-soft">
              <img src={col.image} alt={col.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-3xl mb-3">{col.title}</h3>
                <p className="text-[9px] font-bold opacity-0 group-hover:opacity-80 uppercase tracking-[0.4em] transition-opacity duration-700">Explore Collection</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* The Atelier Section (Atmospheric) */}
      <section className="relative h-screen bg-brand-dark flex flex-col justify-center overflow-hidden py-32">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop" 
            alt="Atelier" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent">Behind the Seam</span>
              <h2 className="text-6xl font-serif text-white uppercase tracking-tighter leading-none">The <br/>Atelier</h2>
              <p className="text-white/40 font-light leading-relaxed text-lg max-w-md">
                Our workshop is where architecture meets anatomy. Each piece is drafted by hand, following the natural cadence of the body. We don't just make clothes; we build sanctuary.
              </p>
              <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-white border-b border-brand-accent pb-2 hover:text-brand-accent transition-colors">Observe the Process</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transform translate-y-12">
                  <img src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=800&auto=format&fit=crop" alt="Detail 1" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop" alt="Detail 2" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-serif text-brand-dark text-4xl tracking-tight italic">Trending Now</h2>
            <button className="text-[10px] font-bold uppercase tracking-[0.3em] border-b-2 border-brand-accent pb-2 hover:text-brand-accent transition-colors">View All Works</button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {trendingProducts.map(p => (
              <ProductCard key={p.id} product={p} onAddToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Archive Masonry */}
      <section className="py-32 container mx-auto px-6 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="space-y-8">
             <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-soft">
                <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop" alt="Archive 1" className="w-full h-full object-cover" />
             </div>
             <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40 italic">Series 0.1 — Nocturnal Noir</p>
          </div>
          <div className="space-y-8 md:pt-32">
             <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-soft">
                <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop" alt="Archive 2" className="w-full h-full object-cover" />
             </div>
             <h3 className="font-serif text-3xl text-brand-dark text-center uppercase tracking-tighter">The Anthology</h3>
          </div>
          <div className="space-y-8">
             <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-soft">
                <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000&auto=format&fit=crop" alt="Archive 3" className="w-full h-full object-cover" />
             </div>
             <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40 italic text-right">Series 0.2 — Minimalist Edit</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
