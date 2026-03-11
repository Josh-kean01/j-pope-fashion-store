import React, { useState } from 'react';
import Selector from './Selector';
import ProductAccordion from './ProductAccordion';

const ProductInfo = ({ product, onAddToCart, toggleWishlist, wishlistItems = [] }) => {
  const defaultColor = product?.colors?.[0] || { label: 'Default', value: '#000' };
  const defaultSize = product?.sizes?.[Math.floor((product?.sizes?.length || 1) / 2)] || 'M';
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const isWishlisted = product ? wishlistItems.some(item => item.id === product.id) : false;

  if (!product) return null;

  return (
    <div className="lg:sticky lg:top-24 lg:col-span-5" data-purpose="product-info-card">
      <div className="rounded-3xl border border-gray-100 bg-white p-10 shadow-lg">
        <div className="mb-6 border-b border-gray-100 pb-6">
          <div className="mb-2 flex items-start justify-between">
            <h1 className="text-5xl font-serif leading-tight text-brand-dark">{product.name}</h1>
            <button
              onClick={() => toggleWishlist(product)}
              aria-label="Add to Wishlist"
              className={`rounded-full p-2 transition-all duration-300 ${isWishlisted ? 'bg-red-50 text-red-500' : 'text-gray-400 hover:bg-gray-50 hover:text-brand-dark'}`}
            >
              <svg
                className={`h-6 w-6 ${isWishlisted ? 'fill-current' : ''}`}
                fill={isWishlisted ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xl font-light text-gray-600">{product.price}</p>
            {product.stock <= 5 && (
              <span className="rounded-full bg-red-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-red-500 animate-pulse">
                {product.stock <= 3 ? `Limited: Only ${product.stock} left` : 'Few pieces remaining'}
              </span>
            )}
          </div>
        </div>

        <p className="mb-8 font-light leading-relaxed text-gray-600">{product.description}</p>

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

        <button
          className="mb-8 w-full rounded-lg bg-brand-accent py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-brand-accent/20 transition-all active:scale-[0.99] hover:bg-brand-accentHover"
          onClick={() =>
            onAddToCart({
              ...product,
              selectedSize,
              selectedColor: selectedColor.label,
              cartId: `${product.id}-${selectedSize}-${selectedColor.label}`,
            })
          }
        >
          Add to Bag
        </button>

        <div className="border-t border-gray-100">
          <ProductAccordion title="Details" isOpen={true}>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600">
              {product.details?.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </ProductAccordion>

          <ProductAccordion title="Shipping & Returns">
            <p className="text-sm leading-relaxed text-gray-600">
              Free standard shipping on orders over €300. We accept returns within 14 days of delivery. Items must be unworn and tags attached.
            </p>
          </ProductAccordion>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
