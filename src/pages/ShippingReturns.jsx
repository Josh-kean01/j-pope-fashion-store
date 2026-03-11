import React from 'react';
import Seo from '../components/Seo';

const ShippingReturns = () => {
  return (
    <div className="min-h-screen bg-brand-bg px-6 py-32 animate-fadeIn">
      <Seo
        title="Shipping and Returns"
        description="Review J-Pope shipping timelines, return conditions, and customer support guidance."
      />
      <div className="container mx-auto max-w-4xl space-y-16">
        <header className="space-y-6">
          <span className="block text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent">Support</span>
          <h1 className="text-5xl uppercase tracking-tight text-brand-dark md:text-7xl font-serif">Shipping &amp; Returns</h1>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-gray-600">
            Delivery timelines, return expectations, and support guidance for orders placed through J-Pope.
          </p>
        </header>

        <section className="space-y-10 rounded-[2rem] bg-white p-10 shadow-soft">
          <div className="space-y-3">
            <h2 className="text-xl text-brand-dark font-serif">Shipping</h2>
            <p className="font-light leading-relaxed text-gray-600">
              Orders are typically dispatched within 2-4 business days. Delivery timing depends on destination and carrier service level.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl text-brand-dark font-serif">Returns</h2>
            <p className="font-light leading-relaxed text-gray-600">
              Returns are accepted within 14 days of delivery for unworn items in original condition with packaging and tags intact.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl text-brand-dark font-serif">Support</h2>
            <p className="font-light leading-relaxed text-gray-600">
              For exchanges, return requests, or shipping questions, contact the atelier before sending an item back.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShippingReturns;
