import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const Recommendations = ({ addToCart, toggleWishlist, wishlistItems }) => {
  // Use a subset of products for recommendations
  const recommendedProducts = products.slice(1, 5);

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
