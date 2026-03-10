import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Link to={`/product/${product.id}`} className="group cursor-pointer">
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-4 relative">
        <img 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={product.image} 
        />
        {/* Quick Add Overlay (MVP) */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm">
          <button 
            className="w-full py-2 bg-white text-brand-dark text-xs font-bold uppercase tracking-widest rounded shadow-sm hover:bg-brand-dark hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAddToCart(product);
            }}
          >
            Quick Add
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-serif text-lg text-brand-dark mb-1">{product.name}</h3>
          <p className="text-gray-500 text-sm">{product.price}</p>
        </div>
        {/* Wishlist Icon */}
        <button className="text-gray-400 hover:text-red-500 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
