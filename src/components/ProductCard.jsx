import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart, toggleWishlist, wishlistItems = [] }) => {
  const isWishlisted = wishlistItems.some(item => item.id === product.id);

  return (
    <div className="group cursor-pointer relative">
      <Link to={`/product/${product.id}`}>
        <div className="relative mb-3 aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 sm:mb-4">
          <img 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            src={product.image} 
          />
          {/* Quick Add Overlay */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-white/40 p-3 backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0 sm:p-4">
            <button 
              className="w-full rounded-full bg-brand-dark py-2.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white shadow-lg transition-all duration-300 hover:bg-brand-accent sm:py-3 sm:text-[10px] sm:tracking-[0.2em]"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAddToCart(product);
              }}
            >
              Add to Bag
            </button>
          </div>
        </div>
      </Link>
      
      {/* Wishlist Icon - Floating */}
      <button 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleWishlist(product);
        }}
        className={`absolute right-3 top-3 z-10 rounded-full p-2.5 backdrop-blur-md transition-all duration-500 scale-90 group-hover:scale-100 sm:right-4 sm:top-4 sm:p-3 ${isWishlisted ? 'bg-white text-red-500 shadow-lg' : 'bg-white/20 text-white hover:bg-white hover:text-brand-dark'}`}
      >
        <svg 
          className={`h-3.5 w-3.5 transition-transform duration-500 sm:h-4 sm:w-4 ${isWishlisted ? 'scale-110 fill-current' : ''}`} 
          fill={isWishlisted ? "currentColor" : "none"} 
          stroke="currentColor" 
          strokeWidth="1.5" 
          viewBox="0 0 24 24"
        >
          <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </button>

      <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between sm:gap-3">
        <div className="min-w-0">
          <h3 className="mb-1 font-serif text-base text-brand-dark transition-colors group-hover:text-brand-accent sm:text-lg">{product.name}</h3>
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400 sm:text-[10px] sm:tracking-widest">{product.price}</p>
        </div>
        {product.stock <= 3 && (
          <span className="shrink-0 rounded bg-red-50 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.14em] text-red-500 sm:tracking-widest">Last {product.stock}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
