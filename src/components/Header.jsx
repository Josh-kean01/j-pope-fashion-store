import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount, onCartClick, onSearchClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100" data-purpose="navigation">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0 w-32">
          <Link to="/" className="font-serif font-bold tracking-tight text-brand-dark text-3xl" style={{ fontVariant: 'small-caps' }}>
            J-Pope
          </Link>
        </div>
        
        {/* Central Navigation */}
        <nav className="hidden md:flex space-x-10">
          <Link to="/shop" className="text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">SHOP</Link>
          <Link to="/collections" className="text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">COLLECTIONS</Link>
          <Link to="/lookbook" className="text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">LOOKBOOK</Link>
          <Link to="/about" className="text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">ABOUT</Link>
        </nav>
        
        {/* Right Icons */}
        <div className="flex items-center space-x-6 w-32 justify-end">
          <button 
            aria-label="Search" 
            className="text-brand-dark hover:text-brand-accent transition-colors"
            onClick={onSearchClick}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>

          <button aria-label="User Account" className="text-brand-dark hover:text-brand-accent transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
          
          <button 
            aria-label="Shopping Cart" 
            className="text-brand-dark hover:text-brand-accent transition-colors relative"
            onClick={onCartClick}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-accent text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full animate-fadeIn">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
