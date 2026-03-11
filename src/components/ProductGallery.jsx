import React, { useEffect, useState } from 'react';
import SkeletonLoader from './SkeletonLoader';

const ProductGallery = ({ product }) => {
  const [mainImage, setMainImage] = useState(product?.image ?? '');
  const [isLoaded, setIsLoaded] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const thumbnails = product?.thumbnails ?? [];

  useEffect(() => {
    document.body.style.overflow = zoomed ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [zoomed]);

  if (!product) return null;

  return (
    <>
      <div className="lg:col-span-7 space-y-4" data-purpose="product-gallery">
        <div
          className="group relative w-full cursor-zoom-in overflow-hidden rounded-3xl bg-gray-100 shadow-soft aspect-[4/5]"
          onClick={() => setZoomed(true)}
        >
          {!isLoaded && <SkeletonLoader className="absolute inset-0 z-10" />}
          <img
            alt={product.name}
            className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            src={mainImage}
            onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute bottom-4 right-4 rounded-full bg-white/80 p-2.5 opacity-0 shadow-md backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <svg className="h-4 w-4 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 pb-4">
          {thumbnails.map((thumb, index) => (
            <button
              key={thumb || index}
              onClick={() => {
                setMainImage(thumb);
                setIsLoaded(false);
              }}
              className={`aspect-square overflow-hidden rounded-xl border-2 transition-all ${
                mainImage === thumb ? 'border-brand-accent shadow-md' : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img alt={`Thumbnail ${index + 1}`} className="h-full w-full object-cover" src={thumb} />
            </button>
          ))}
        </div>
      </div>

      {zoomed && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 animate-fadeIn"
          onClick={() => setZoomed(false)}
        >
          <button
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white/70 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
            onClick={() => setZoomed(false)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {thumbnails.length > 1 && (
            <>
              <button
                className="absolute left-6 rounded-full bg-white/10 p-3 text-white/70 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  const index = thumbnails.indexOf(mainImage);
                  const prev = thumbnails[(index - 1 + thumbnails.length) % thumbnails.length];
                  setMainImage(prev);
                  setIsLoaded(false);
                }}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M15.75 19.5L8.25 12l7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className="absolute right-20 rounded-full bg-white/10 p-3 text-white/70 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  const index = thumbnails.indexOf(mainImage);
                  const next = thumbnails[(index + 1) % thumbnails.length];
                  setMainImage(next);
                  setIsLoaded(false);
                }}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}

          <img
            src={mainImage}
            alt={product.name}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ProductGallery;
