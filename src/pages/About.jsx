import React from 'react';

const About = () => {
  return (
    <div className="bg-brand-bg min-h-screen animate-fadeIn">
      {/* Editorial Hero */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000&auto=format&fit=crop" 
            alt="J-Pope Studio" 
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/0 via-brand-bg/20 to-brand-bg"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent mb-6 block">The Philosophy</span>
            <h1 className="text-6xl md:text-8xl font-serif text-brand-dark mb-12 uppercase tracking-tighter leading-[0.9]">
              Quiet Luxury.<br/>
              <span className="italic ml-12 md:ml-24">Vocal Quality.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5 space-y-12">
            <h2 className="text-4xl font-serif text-brand-dark italic leading-tight">
              Founded on the belief that true elegance doesn't demand attention—it commands it.
            </h2>
            <p className="text-gray-600 font-light leading-relaxed text-lg">
              J-Pope was born in the pursuit of the perfect silhouette. Our journey began in a small atelier with a single bolt of Loro Piana wool and a commitment to subtraction. We believe that by removing the unnecessary, we reveal the essential.
            </p>
            <div className="pt-8 border-t border-gray-100 italic text-sm text-gray-400">
              Est. 2024 — Minimalist by Nature, Artisanal by Choice.
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Craftsmanship Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent block mb-4">The Process</span>
            <h2 className="text-5xl font-serif text-brand-dark uppercase tracking-tight">Artisanal Integrity</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-8 group">
              <div className="aspect-square rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-soft">
                <img src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=1000&auto=format&fit=crop" alt="Material" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl mb-4 italic">Material First</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  We source exclusively from heritage mills in Italy and Japan. From regenerative cashmere to organic silk, the fiber dictates the form.
                </p>
              </div>
            </div>

            <div className="space-y-8 group pt-16">
              <div className="aspect-square rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-soft">
                <img src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=1000&auto=format&fit=crop" alt="Construction" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl mb-4 italic">Radical Cut</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  Our pattern makers treat fabric like architecture. Every seam is intentional, every hem is calculated to provide effortless movement.
                </p>
              </div>
            </div>

            <div className="space-y-8 group">
              <div className="aspect-square rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-soft">
                <img src="https://images.unsplash.com/photo-1620783770629-1225728a6c32?q=80&w=1000&auto=format&fit=crop" alt="Finished" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl mb-4 italic">Infinite Life</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  We don't design for seasons; we design for generations. Our pieces are crafted to age beautifully, becoming a part of your own personal anthology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Manifesto */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark mb-8">Rationality</h3>
                <p className="text-gray-500 font-light leading-relaxed">We reject the cyclical nature of trend-based fashion. Architecture is built to last; we believe clothing should be approached with the same structural integrity. Every garment is a solution to a problem of comfort and form.</p>
              </div>
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark mb-8">Humanity</h3>
                <p className="text-gray-500 font-light leading-relaxed">Our designs start with the body in motion. We calculate the drape based on the ergonomic reality of the contemporary nomad. The luxury is not in the appearance, but in the effortless utility of the piece.</p>
              </div>
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark mb-8">Sustainability</h3>
                <p className="text-gray-500 font-light leading-relaxed">Longevity is the ultimate form of sustainability. By using the highest quality natural fibers and artisanal construction methods, we ensure that a J-Pope piece remains in your wardrobe for decades, not months.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press / Accolades */}
      <section className="py-32 border-t border-gray-100 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex flex-wrap justify-between items-center gap-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
              <span className="font-serif text-2xl tracking-tighter uppercase font-bold">VOGUE</span>
              <span className="font-serif text-2xl tracking-tighter uppercase font-bold text-gray-400">Hypebeast</span>
              <span className="font-serif text-2xl tracking-tighter uppercase font-bold italic">Highsnobiety</span>
              <span className="font-serif text-2xl tracking-tighter uppercase font-bold">WWD</span>
              <span className="font-serif text-2xl tracking-tighter uppercase font-bold text-gray-300 italic">Antithesis</span>
           </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-48 px-6 text-center bg-brand-bg">
        <div className="max-w-4xl mx-auto">
          <p className="text-3xl md:text-5xl font-serif text-brand-dark italic leading-tight mb-12">
            "We believe that the most powerful statement is made in the silence between the trends."
          </p>
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-dark">— THE J-POPE MANIFESTO</span>
        </div>
      </section>
    </div>
  );
};

export default About;
