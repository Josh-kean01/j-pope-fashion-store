import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BrandMark from './BrandMark';

const Header = ({ cartCount, onCartClick, onSearchClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/lookbook', label: 'Lookbook' },
    { to: '/journal', label: 'Journal' },
    { to: '/about', label: 'About' },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100" data-purpose="navigation">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 w-40">
            <Link to="/" onClick={closeMobile} aria-label="J-Pope home" className="inline-flex transition-opacity hover:opacity-80">
              <BrandMark compact />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${location.pathname === to ? 'text-brand-accent' : 'hover:text-brand-accent'}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-5 w-32 justify-end">
            <button aria-label="Search" className="text-brand-dark hover:text-brand-accent transition-colors" onClick={onSearchClick}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <Link to="/profile" aria-label="Account" className="hidden md:block text-brand-dark hover:text-brand-accent transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            <button aria-label="Cart" className="text-brand-dark hover:text-brand-accent transition-colors relative" onClick={onCartClick}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-accent text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full animate-fadeIn">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger - mobile only */}
            <button
              aria-label="Menu"
              className="md:hidden text-brand-dark hover:text-brand-accent transition-colors"
              onClick={() => setMobileOpen(prev => !prev)}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm transition-opacity duration-500 md:hidden ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMobile}
      />

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 z-[90] h-full w-[80vw] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-700 ease-out md:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex justify-between items-center border-b border-gray-100">
          <Link to="/" onClick={closeMobile} aria-label="J-Pope home" className="inline-flex transition-opacity hover:opacity-80">
            <BrandMark compact className="scale-95 origin-left" />
          </Link>
          <button onClick={closeMobile} className="text-gray-400 hover:text-brand-dark transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-8 py-12 space-y-2">
          {navLinks.map(({ to, label }, idx) => (
            <Link
              key={to}
              to={to}
              onClick={closeMobile}
              className={`block py-5 text-4xl font-serif text-brand-dark border-b border-gray-100 hover:text-brand-accent hover:italic transition-all duration-300`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="p-8 border-t border-gray-100 flex items-center gap-6">
          <Link to="/profile" onClick={closeMobile} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-brand-dark transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Account
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
