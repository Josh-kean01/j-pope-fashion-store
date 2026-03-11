import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] bg-brand-bg px-6 py-32 animate-fadeIn">
      <Seo
        title="Page Not Found"
        description="The page you requested could not be found."
        noindex={true}
      />
      <div className="container mx-auto flex max-w-3xl flex-col items-center justify-center space-y-8 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent">404</span>
        <h1 className="text-5xl uppercase tracking-tight text-brand-dark md:text-7xl font-serif">Page Not Found</h1>
        <p className="max-w-xl font-light leading-relaxed text-gray-600">
          The page you were looking for does not exist or may have been moved.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link to="/" className="rounded-full bg-brand-dark px-10 py-4 text-[10px] font-bold uppercase tracking-[0.4em] text-white transition-all hover:bg-brand-accent">
            Back to Home
          </Link>
          <Link to="/shop" className="rounded-full border border-brand-dark px-10 py-4 text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark transition-all hover:bg-brand-dark hover:text-white">
            Explore Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
