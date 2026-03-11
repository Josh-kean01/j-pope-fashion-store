import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-brand-bg px-6 py-32 animate-fadeIn">
      <div className="container mx-auto max-w-4xl space-y-16">
        <header className="space-y-6">
          <span className="block text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent">Legal</span>
          <h1 className="text-5xl uppercase tracking-tight text-brand-dark md:text-7xl font-serif">Privacy Policy</h1>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-gray-600">
            This policy explains how J-Pope collects, stores, and uses customer information across this website.
          </p>
        </header>

        <section className="space-y-10 rounded-[2rem] bg-white p-10 shadow-soft">
          <div className="space-y-3">
            <h2 className="text-xl text-brand-dark font-serif">Information We Collect</h2>
            <p className="font-light leading-relaxed text-gray-600">
              We may collect contact details, account data, order details, and analytics information needed to improve the shopping experience.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl text-brand-dark font-serif">How We Use It</h2>
            <p className="font-light leading-relaxed text-gray-600">
              Information is used to support customer service, fulfill orders, improve site performance, and communicate important updates.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl text-brand-dark font-serif">Your Rights</h2>
            <p className="font-light leading-relaxed text-gray-600">
              Customers can request access, correction, or deletion of personal information by contacting the atelier directly.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
