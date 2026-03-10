import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-16 bg-white text-brand-dark border-t border-gray-100 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-serif font-bold tracking-tight text-brand-dark text-2xl mb-6 block" style={{ fontVariant: 'small-caps' }}>
              J-Pope
            </Link>
            <p className="text-gray-500 text-sm max-w-sm font-light leading-relaxed">
              Curating timeless elegance for the modern minimalist. High-end craft meets contemporary silhouette for every occasion.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm text-gray-600 hover:text-brand-accent transition-colors">Shop All</Link></li>
              <li><Link to="/lookbook" className="text-sm text-gray-600 hover:text-brand-accent transition-colors">Lookbook</Link></li>
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-brand-accent transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-600 hover:text-brand-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-brand-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-[10px] text-gray-400 uppercase tracking-widest">
          <p>© 2024 J-POPE. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a aria-label="Instagram" className="hover:text-brand-accent transition-colors" href="#">Instagram</a>
            <a aria-label="X" className="hover:text-brand-accent transition-colors" href="#">X / Twitter</a>
            <a aria-label="TikTok" className="hover:text-brand-accent transition-colors" href="#">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
