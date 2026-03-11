import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandMark from './BrandMark';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const socialLabels = ['Instagram', 'X / Twitter', 'TikTok'];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="mt-auto bg-brand-dark text-white/70">
      <div className="container mx-auto px-6 py-20">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-6 md:col-span-4">
            <Link to="/" aria-label="J-Pope home" className="inline-flex transition-opacity hover:opacity-80">
              <BrandMark theme="dark" />
            </Link>
            <p className="max-w-xs text-sm font-light leading-relaxed">
              Curating timeless elegance for the modern minimalist. High-end craft meets contemporary silhouette.
            </p>
            <div className="pt-4">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-white">The Private Edit</p>
              {subscribed ? (
                <p className="text-sm italic text-brand-accent font-serif">Welcome to the anthology.</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/60"
                  />
                  <button
                    type="submit"
                    className="whitespace-nowrap rounded-full bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-brand-dark transition-all hover:bg-brand-accent hover:text-white"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm transition-colors hover:text-white">Shop All</Link></li>
              <li><Link to="/collections" className="text-sm transition-colors hover:text-white">Collections</Link></li>
              <li><Link to="/lookbook" className="text-sm transition-colors hover:text-white">Lookbook</Link></li>
              <li><Link to="/journal" className="text-sm transition-colors hover:text-white">Journal</Link></li>
              <li><Link to="/about" className="text-sm transition-colors hover:text-white">About Us</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Account</h4>
            <ul className="space-y-4">
              <li><Link to="/profile" className="text-sm transition-colors hover:text-white">My Profile</Link></li>
              <li><Link to="/wishlist" className="text-sm transition-colors hover:text-white">Wishlist</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/shipping-returns" className="text-sm transition-colors hover:text-white">Shipping & Returns</Link></li>
              <li><Link to="/privacy-policy" className="text-sm transition-colors hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/contact" className="text-sm transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 text-[10px] uppercase tracking-widest text-white/30 md:flex-row">
          <p>© 2024 J-POPE. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            {socialLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
