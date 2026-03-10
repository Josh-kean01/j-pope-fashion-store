import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const Recommendations = ({ addToCart, toggleWishlist, wishlistItems, currentProduct }) => {
  // Exclude current product, prioritize same category, take 4
  const recommendedProducts = products
    .filter(p => p.id !== currentProduct?.id)
    .sort((a, b) => {
      const aMatch = a.category === currentProduct?.category ? -1 : 1;
      const bMatch = b.category === currentProduct?.category ? -1 : 1;
      return aMatch - bMatch;
    })
    .slice(0, 4);

  return (
    <section className="bg-white py-16 border-t border-gray-100 mt-20">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-center text-brand-dark mb-12 text-4xl">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart}
              toggleWishlist={toggleWishlist}
              wishlistItems={wishlistItems}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
