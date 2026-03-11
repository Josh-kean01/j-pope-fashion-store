import React, { useState } from 'react';

const Contact = () => {
  const [, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const socialLabels = ['Instagram', 'X', 'TikTok'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full border-b border-gray-200 bg-transparent py-4 font-light text-brand-dark outline-none transition-colors placeholder:text-gray-300 focus:border-brand-dark';

  return (
    <div className="animate-fadeIn bg-white">
      <div className="relative flex h-[45vh] items-end overflow-hidden bg-brand-dark">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1600&auto=format&fit=crop")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <div className="relative container mx-auto px-6 pb-16">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent">Reach Out</span>
          <h1 className="text-6xl uppercase leading-[0.9] tracking-tighter text-white md:text-8xl font-serif">
            The <span className="italic">Atelier.</span>
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-12">
          <div className="space-y-16 lg:col-span-4">
            <div>
              <h2 className="mb-6 text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent">Atelier Address</h2>
              <address className="not-italic text-sm font-light leading-loose text-gray-600">
                J-Pope Atelier
                <br />
                14 Rue du Faubourg Saint-Honore
                <br />
                75008 Paris, France
              </address>
            </div>

            <div>
              <h2 className="mb-6 text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent">Opening Hours</h2>
              <div className="space-y-2 text-sm font-light leading-loose text-gray-600">
                <p>
                  <span className="font-semibold text-brand-dark">Monday - Friday</span>
                  <br />
                  10:00 - 18:00
                </p>
                <p>
                  <span className="font-semibold text-brand-dark">Saturday</span>
                  <br />
                  11:00 - 17:00
                </p>
                <p className="italic text-gray-400">Closed Sundays &amp; Public Holidays</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent">Direct Contact</h2>
              <div className="space-y-3 text-sm font-light">
                <a href="mailto:atelier@j-pope.com" className="block text-gray-600 transition-colors hover:text-brand-dark">
                  atelier@j-pope.com
                </a>
                <a href="tel:+33123456789" className="block text-gray-600 transition-colors hover:text-brand-dark">
                  +33 (0)1 23 45 67 89
                </a>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent">Follow Us</h2>
              <div className="flex gap-6">
                {socialLabels.map((label) => (
                  <span key={label} className="border-b border-transparent pb-0.5 text-sm font-bold uppercase tracking-widest text-gray-400">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center space-y-6 py-24 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-dark">
                  <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent">Message Received</span>
                <h2 className="text-4xl font-serif text-brand-dark">We&apos;ll be in touch.</h2>
                <p className="max-w-sm font-light text-gray-500">Our team at the Atelier will respond within 48 hours during working days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div>
                  <h2 className="mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent">Send a Message</h2>
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <input type="text" name="name" required placeholder="Full Name" className={inputClass} onChange={handleChange} />
                      <input type="email" name="email" required placeholder="Email Address" className={inputClass} onChange={handleChange} />
                    </div>
                    <div>
                      <select
                        name="subject"
                        required
                        className={`${inputClass} cursor-pointer appearance-none`}
                        onChange={handleChange}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Subject
                        </option>
                        <option>Order Enquiry</option>
                        <option>Shipping & Returns</option>
                        <option>Bespoke & Tailoring</option>
                        <option>Press & Editorial</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                    <textarea
                      name="message"
                      required
                      placeholder="Your message..."
                      rows={6}
                      className={`${inputClass} resize-none`}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <button
                    type="submit"
                    className="rounded-full bg-brand-dark px-16 py-5 text-[10px] font-bold uppercase tracking-[0.4em] text-white shadow-xl transition-all hover:bg-brand-accent"
                  >
                    Send Message
                  </button>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400">We reply within 48 hours.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
