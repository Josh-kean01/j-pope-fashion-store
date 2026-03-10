import React, { useState } from 'react';
import Selector from './Selector';
import ProductAccordion from './ProductAccordion';

const ProductInfo = ({ product, onAddToCart, toggleWishlist, wishlistItems = [] }) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || { label: 'Default', value: '#000' });
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[Math.floor(product.sizes.length / 2)] || 'M');
  const isWishlisted = wishlistItems.some(item => item.id === product.id);

  return (
    <div className="lg:col-span-5 lg:sticky lg:top-24" data-purpose="product-info-card">
      <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
        {/* Title & Price */}
        <div className="mb-6 border-b border-gray-100 pb-6">
          <div className="flex justify-between items-start mb-2">
            <h1 className="font-serif text-brand-dark leading-tight text-5xl">{product.name}</h1>
            <button 
              onClick={() => toggleWishlist(product)}
              aria-label="Add to Wishlist" 
              className={`p-2 rounded-full transition-all duration-300 ${isWishlisted ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-brand-dark hover:bg-gray-50'}`}
            >
              <svg 
                className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} 
                fill={isWishlisted ? "currentColor" : "none"} 
                stroke="currentColor" 
                strokeWidth="1.5" 
                viewBox="0 0 24 24"
              >
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xl text-gray-600 font-light">{product.price}</p>
            {product.stock <= 5 && (
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full animate-pulse">
                {product.stock <= 3 ? `Limited: Only ${product.stock} left` : 'Few pieces remaining'}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8 font-light">
          {product.description}
        </p>

        {/* Selectors */}
        {product.colors && (
          <Selector 
            label="Color" 
            value={selectedColor.label} 
            options={product.colors} 
            type="color" 
            selected={selectedColor} 
            onChange={setSelectedColor} 
          />
        )}
        
        {product.sizes && (
          <Selector 
            label="Size" 
            value={selectedSize} 
            options={product.sizes} 
            type="text" 
            selected={selectedSize} 
            onChange={setSelectedSize} 
          />
        )}

        {/* Add to Cart Button */}
        <button 
          className="w-full bg-brand-accent hover:bg-brand-accentHover text-white font-bold py-4 rounded-lg shadow-lg shadow-brand-accent/20 transition-all transform active:scale-[0.99] mb-8 uppercase tracking-widest text-sm"
          onClick={() => onAddToCart({
            ...product,
            selectedSize,
            selectedColor: selectedColor.label,
            cartId: `${product.id}-${selectedSize}-${selectedColor.label}`
          })}
        >
          Add to Bag
        </button>

        {/* Accordions */}
        <div className="border-t border-gray-100">
          <ProductAccordion 
            title="Details" 
            isOpen={true}
          >
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              {product.details?.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </ProductAccordion>
          
          <ProductAccordion title="Shipping & Returns">
            <p className="text-sm text-gray-600 leading-relaxed">
              Free standard shipping on orders over €300. We accept returns within 14 days of delivery. Items must be unworn and tags attached.
            </p>
          </ProductAccordion>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
