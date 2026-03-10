import React, { useState, useEffect } from 'react';
import SkeletonLoader from './SkeletonLoader';

const ProductGallery = ({ product }) => {
  if (!product) return null;
  const [mainImage, setMainImage] = useState(product.image);
  const [isLoaded, setIsLoaded] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [mainImage]);

  // Lock body scroll when zoomed
  useEffect(() => {
    document.body.style.overflow = zoomed ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [zoomed]);

  return (
    <>
      <div className="lg:col-span-7 space-y-4" data-purpose="product-gallery">
        {/* Main Image - clickable to zoom */}
        <div
          className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-soft relative cursor-zoom-in group"
          onClick={() => setZoomed(true)}
        >
          {!isLoaded && <SkeletonLoader className="absolute inset-0 z-10" />}
          <img
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            src={mainImage}
            onLoad={() => setIsLoaded(true)}
          />
          {/* Zoom hint */}
          <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
            <svg className="w-4 h-4 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Thumbnails */}
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

      {/* Lightbox */}
      {zoomed && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center animate-fadeIn"
          onClick={() => setZoomed(false)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            onClick={() => setZoomed(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Prev / Next in lightbox */}
          {product.thumbnails?.length > 1 && (
            <>
              <button
                className="absolute left-6 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  const idx = product.thumbnails.indexOf(mainImage);
                  const prev = product.thumbnails[(idx - 1 + product.thumbnails.length) % product.thumbnails.length];
                  setMainImage(prev);
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M15.75 19.5L8.25 12l7.5-7.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="absolute right-20 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  const idx = product.thumbnails.indexOf(mainImage);
                  const next = product.thumbnails[(idx + 1) % product.thumbnails.length];
                  setMainImage(next);
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          )}

          <img
            src={mainImage}
            alt={product.name}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ProductGallery;
