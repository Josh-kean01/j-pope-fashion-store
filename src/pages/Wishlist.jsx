import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Wishlist = ({ wishlistItems, toggleWishlist, addToCart }) => {
  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-48 animate-fadeIn">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent block mb-6">Your Selection</span>
          <h1 className="text-6xl md:text-8xl font-serif text-brand-dark leading-[0.9] uppercase tracking-tighter">
            Personal <br/><span className="italic ml-24 md:ml-48 text-brand-accent">Wishlist.</span>
          </h1>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {wishlistItems.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                toggleWishlist={toggleWishlist} 
                wishlistItems={wishlistItems}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="max-w-2xl text-center mx-auto py-32 space-y-12">
             <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mx-auto shadow-sm">
                <svg className="w-8 h-8 text-gray-200" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path d="M21 8.25c0-2.485-2.094-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
             </div>
             <p className="font-serif text-3xl text-gray-400 italic">"The anthology is yet to be curated."</p>
             <Link 
              to="/shop" 
              className="inline-block px-12 py-4 bg-brand-dark text-white rounded-full text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-brand-accent transition-all shadow-xl"
             >
              Explore Collection
             </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
