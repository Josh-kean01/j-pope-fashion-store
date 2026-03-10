import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart, toggleWishlist, wishlistItems = [] }) => {
  const isWishlisted = wishlistItems.some(item => item.id === product.id);

  return (
    <div className="group cursor-pointer relative">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-4 relative">
          <img 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            src={product.image} 
          />
          {/* Quick Add Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/40 backdrop-blur-md">
            <button 
              className="w-full py-3 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg hover:bg-brand-accent transition-all duration-300"
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
        className={`absolute top-4 right-4 z-10 p-3 rounded-full backdrop-blur-md transition-all duration-500 scale-90 group-hover:scale-100 ${isWishlisted ? 'bg-white text-red-500 shadow-lg' : 'bg-white/20 text-white hover:bg-white hover:text-brand-dark'}`}
      >
        <svg 
          className={`w-4 h-4 transition-transform duration-500 ${isWishlisted ? 'scale-110 fill-current' : ''}`} 
          fill={isWishlisted ? "currentColor" : "none"} 
          stroke="currentColor" 
          strokeWidth="1.5" 
          viewBox="0 0 24 24"
        >
          <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </button>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-serif text-lg text-brand-dark mb-1 group-hover:text-brand-accent transition-colors">{product.name}</h3>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{product.price}</p>
        </div>
        {product.stock <= 3 && (
          <span className="text-[8px] font-bold text-red-500 uppercase tracking-widest bg-red-50 px-2 py-1 rounded">Last {product.stock}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
