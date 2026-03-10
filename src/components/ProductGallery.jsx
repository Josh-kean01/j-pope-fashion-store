import React, { useState, useEffect } from 'react';
import SkeletonLoader from './SkeletonLoader';

const ProductGallery = ({ product }) => {
  if (!product) return null;
  const [mainImage, setMainImage] = useState(product.image);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [mainImage]);

  return (
    <div className="lg:col-span-7 space-y-4" data-purpose="product-gallery">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-soft relative">
        {!isLoaded && <SkeletonLoader className="absolute inset-0 z-10" />}
        <img 
          alt={product.name} 
          className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          src={mainImage} 
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="grid grid-cols-4 gap-4 pb-4">
        {product.thumbnails?.map((thumb, index) => (
          <button 
            key={index}
            onClick={() => setMainImage(thumb)}
            className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
              mainImage === thumb ? 'border-brand-accent shadow-md' : 'border-transparent hover:border-gray-300'
            }`}
          >
            <img alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" src={thumb} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
