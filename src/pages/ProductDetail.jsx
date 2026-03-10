import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import Recommendations from '../components/Recommendations';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];

  return (
    <div className="animate-fadeIn">
      <main className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <ProductGallery product={product} />
          <ProductInfo product={product} onAddToCart={addToCart} />
        </div>
      </main>
      
      <Recommendations />
    </div>
  );
};

export default ProductDetail;
