import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-brand-dark text-white/70 mt-auto">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="font-serif font-bold tracking-tight text-white text-2xl block" style={{ fontVariant: 'small-caps' }}>
              J-Pope
            </Link>
            <p className="text-sm font-light leading-relaxed max-w-xs">
              Curating timeless elegance for the modern minimalist. High-end craft meets contemporary silhouette.
            </p>
            {/* Newsletter */}
            <div className="pt-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-4">The Private Edit</p>
              {subscribed ? (
                <p className="text-brand-accent font-serif italic text-sm">Welcome to the anthology.</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-xs text-white placeholder:text-white/30 outline-none focus:border-white/60 transition-colors"
                  />
                  <button type="submit" className="px-6 py-3 bg-white text-brand-dark text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-brand-accent hover:text-white transition-all whitespace-nowrap">
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-white">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm hover:text-white transition-colors">Shop All</Link></li>
              <li><Link to="/collections" className="text-sm hover:text-white transition-colors">Collections</Link></li>
              <li><Link to="/lookbook" className="text-sm hover:text-white transition-colors">Lookbook</Link></li>
              <li><Link to="/journal" className="text-sm hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-white">Account</h4>
            <ul className="space-y-4">
              <li><Link to="/profile" className="text-sm hover:text-white transition-colors">My Profile</Link></li>
              <li><Link to="/wishlist" className="text-sm hover:text-white transition-colors">Wishlist</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-white">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[10px] text-white/30 uppercase tracking-widest">
          <p>© 2024 J-POPE. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a aria-label="Instagram" className="hover:text-white transition-colors" href="#">Instagram</a>
            <a aria-label="X" className="hover:text-white transition-colors" href="#">X / Twitter</a>
            <a aria-label="TikTok" className="hover:text-white transition-colors" href="#">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
