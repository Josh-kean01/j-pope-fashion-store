import React from 'react';
import Seo from '../components/Seo';

const About = () => {
  return (
    <div className="min-h-screen bg-brand-bg animate-fadeIn">
      <Seo
        title="About"
        description="Learn about J-Pope, a minimalist luxury fashion concept rooted in craftsmanship, material integrity, and timeless design."
      />
      <section className="relative flex h-[80vh] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000&auto=format&fit=crop"
            alt="J-Pope Studio"
            className="h-full w-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/0 via-brand-bg/20 to-brand-bg"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent">The Philosophy</span>
            <h1 className="mb-8 font-serif text-4xl uppercase leading-[0.92] tracking-tight text-brand-dark sm:mb-12 sm:text-6xl md:text-8xl md:tracking-tighter">
              Quiet Luxury.
              <br />
              <span className="ml-8 italic sm:ml-12 md:ml-24">Vocal Quality.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 sm:px-6 sm:py-32">
        <div className="grid grid-cols-1 items-start gap-12 sm:gap-24 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-5">
            <h2 className="font-serif text-3xl italic leading-tight text-brand-dark sm:text-4xl">
              Founded on the belief that true elegance doesn&apos;t demand attention - it commands it.
            </h2>
            <p className="text-base font-light leading-relaxed text-gray-600 lg:text-lg">
              J-Pope was born in the pursuit of the perfect silhouette. Our journey began in a small atelier with a single bolt of Loro Piana wool and a commitment to subtraction. We believe that by removing the unnecessary, we reveal the essential.
            </p>
            <div className="border-t border-gray-100 pt-8 text-sm italic text-gray-400">
              Est. 2024 - Minimalist by Nature, Artisanal by Choice.
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop"
                alt="Craftsmanship"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center sm:mb-24">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent">The Process</span>
            <h2 className="font-serif text-3xl uppercase tracking-tight text-brand-dark sm:text-5xl">Artisanal Integrity</h2>
          </div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            <div className="group space-y-8">
              <div className="aspect-square overflow-hidden rounded-full grayscale shadow-soft transition-all duration-700 hover:grayscale-0">
                <img src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=1000&auto=format&fit=crop" alt="Material" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="text-center">
                <h3 className="mb-4 text-2xl italic font-serif">Material First</h3>
                <p className="text-sm font-light leading-relaxed text-gray-500">
                  We source exclusively from heritage mills in Italy and Japan. From regenerative cashmere to organic silk, the fiber dictates the form.
                </p>
              </div>
            </div>

            <div className="group space-y-8 pt-16">
              <div className="aspect-square overflow-hidden rounded-full grayscale shadow-soft transition-all duration-700 hover:grayscale-0">
                <img src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=1000&auto=format&fit=crop" alt="Construction" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="text-center">
                <h3 className="mb-4 text-2xl italic font-serif">Radical Cut</h3>
                <p className="text-sm font-light leading-relaxed text-gray-500">
                  Our pattern makers treat fabric like architecture. Every seam is intentional, every hem is calculated to provide effortless movement.
                </p>
              </div>
            </div>

            <div className="group space-y-8">
              <div className="aspect-square overflow-hidden rounded-full grayscale shadow-soft transition-all duration-700 hover:grayscale-0">
                <img src="https://unsplash.com/photos/x19mK3HcG7M/download?force=true&w=1000" alt="Finished" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="text-center">
                <h3 className="mb-4 text-2xl italic font-serif">Infinite Life</h3>
                <p className="text-sm font-light leading-relaxed text-gray-500">
                  We don&apos;t design for seasons; we design for generations. Our pieces are crafted to age beautifully, becoming a part of your own personal anthology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-24 lg:grid-cols-3">
              <div className="space-y-6">
                <h3 className="mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark">Rationality</h3>
                <p className="font-light leading-relaxed text-gray-500">We reject the cyclical nature of trend-based fashion. Architecture is built to last; we believe clothing should be approached with the same structural integrity. Every garment is a solution to a problem of comfort and form.</p>
              </div>
              <div className="space-y-6">
                <h3 className="mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark">Humanity</h3>
                <p className="font-light leading-relaxed text-gray-500">Our designs start with the body in motion. We calculate the drape based on the ergonomic reality of the contemporary nomad. The luxury is not in the appearance, but in the effortless utility of the piece.</p>
              </div>
              <div className="space-y-6">
                <h3 className="mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark">Sustainability</h3>
                <p className="font-light leading-relaxed text-gray-500">Longevity is the ultimate form of sustainability. By using the highest quality natural fibers and artisanal construction methods, we ensure that a J-Pope piece remains in your wardrobe for decades, not months.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center overflow-hidden border-t border-gray-100 py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-12 opacity-30 grayscale transition-all duration-1000 hover:opacity-100 hover:grayscale-0">
            <span className="text-2xl font-bold uppercase tracking-tighter font-serif">VOGUE</span>
            <span className="text-2xl font-bold uppercase tracking-tighter text-gray-400 font-serif">Hypebeast</span>
            <span className="text-2xl font-bold uppercase tracking-tighter italic font-serif">Highsnobiety</span>
            <span className="text-2xl font-bold uppercase tracking-tighter font-serif">WWD</span>
            <span className="text-2xl font-bold uppercase tracking-tighter italic text-gray-300 font-serif">Antithesis</span>
          </div>
        </div>
      </section>

      <section className="bg-brand-bg px-4 py-28 text-center sm:px-6 sm:py-48">
        <div className="mx-auto max-w-4xl">
          <p className="mb-10 font-serif text-2xl italic leading-tight text-brand-dark sm:mb-12 sm:text-3xl md:text-5xl">
            &quot;We believe that the most powerful statement is made in the silence between the trends.&quot;
          </p>
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-dark">- THE J-POPE MANIFESTO</span>
        </div>
      </section>
    </div>
  );
};

export default About;
