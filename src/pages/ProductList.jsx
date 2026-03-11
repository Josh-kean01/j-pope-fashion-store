import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Seo from '../components/Seo';

const ProductList = ({ addToCart, toggleWishlist, wishlistItems }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';

  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSort, setActiveSort] = useState('Featured');
  
  const categories = ['All', 'Outerwear', 'Knitwear', 'Trousers', 'Footwear', 'Accessories'];
  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low'];

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by Search Query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        (p.keywords && p.keywords.some(k => k.toLowerCase().includes(lowerQuery)))
      );
    }

    // Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Sorting logic
    if (activeSort === 'Price: Low to High') {
      result = [...result].sort((a, b) => {
        const priceA = typeof a.price === 'string' ? parseFloat(a.price.replace(/[^\d.]/g, '')) : a.price;
        const priceB = typeof b.price === 'string' ? parseFloat(b.price.replace(/[^\d.]/g, '')) : b.price;
        return priceA - priceB;
      });
    } else if (activeSort === 'Price: High to Low') {
      result = [...result].sort((a, b) => {
        const priceA = typeof a.price === 'string' ? parseFloat(a.price.replace(/[^\d.]/g, '')) : a.price;
        const priceB = typeof b.price === 'string' ? parseFloat(b.price.replace(/[^\d.]/g, '')) : b.price;
        return priceB - priceA;
      });
    }

    return result;
  }, [searchQuery, activeCategory, activeSort]);

  return (
    <div className="container mx-auto px-4 py-10 sm:px-6 sm:py-16 animate-fadeIn">
      <Seo
        title={searchQuery ? `Search: ${searchQuery}` : 'Shop'}
        description={searchQuery
          ? `Browse J-Pope search results for ${searchQuery}. Explore curated luxury fashion pieces, outerwear, knitwear, footwear, and accessories.`
          : 'Shop the J-Pope anthology of luxury essentials, including outerwear, knitwear, trousers, footwear, and accessories.'}
      />
      {/* Editorial Header */}
      <header className="mb-12 flex flex-col gap-8 text-center lg:mb-20 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:text-left">
        <div className="max-w-2xl">
          <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.38em] text-brand-accent sm:mb-4 sm:text-[10px] sm:tracking-[0.5em]">
            {searchQuery ? `Search Results` : `Seasonal Edition`}
          </span>
          <h1 className="mb-4 font-serif text-4xl uppercase leading-none tracking-tight text-brand-dark sm:mb-6 sm:text-5xl lg:text-6xl">
            {searchQuery ? `"${searchQuery}"` : `The New Essentials`}
          </h1>
          {searchQuery ? (
            <button 
              onClick={() => navigate('/shop')}
              className="border-b border-brand-dark pb-1 text-[10px] font-bold uppercase tracking-widest text-brand-dark transition-colors hover:border-brand-accent hover:text-brand-accent"
            >
              Clear Search
            </button>
          ) : (
            <p className="text-sm font-light leading-relaxed text-gray-500 sm:text-base lg:text-lg">
              Our curated selection of timeless pieces designed to transition seamlessly from morning to night. Quality craftsmanship meets contemporary silhouette in our most ambitious collection yet.
            </p>
          )}
        </div>
        
        {/* Filter & Sort Bar */}
        <div className="w-full py-2">
          <div className="flex flex-col gap-4 border-b border-gray-100 pb-5 sm:pb-6 lg:items-end">
            <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:hidden">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="min-w-0 appearance-none rounded-full border border-gray-200 bg-white px-4 py-2.5 pr-9 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600 outline-none transition-colors hover:border-brand-dark"
                aria-label="Filter by type of wear"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <select
                value={activeSort}
                onChange={(e) => setActiveSort(e.target.value)}
                className="min-w-0 appearance-none rounded-full border border-gray-200 bg-white px-4 py-2.5 pr-9 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600 outline-none transition-colors hover:border-brand-dark"
                aria-label="Sort products"
              >
                {sortOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="hidden w-full flex-wrap gap-3 lg:flex">
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${activeCategory === cat ? 'bg-brand-dark text-white border-brand-dark' : 'bg-white border-gray-200 text-gray-400 hover:border-brand-dark hover:text-brand-dark'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <select
              value={activeSort}
              onChange={(e) => setActiveSort(e.target.value)}
              className="hidden min-w-[200px] cursor-pointer appearance-none rounded-full border border-gray-200 bg-white px-6 py-3 pr-10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 outline-none transition-colors hover:border-brand-dark lg:block"
              aria-label="Sort products"
            >
              {sortOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid min-h-[40vh] grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16 xl:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(p => (
            <ProductCard 
              key={p.id} 
              product={p} 
              onAddToCart={addToCart} 
              toggleWishlist={toggleWishlist} 
              wishlistItems={wishlistItems} 
            />
          ))
        ) : (
          <div className="col-span-full py-16 text-center sm:py-20">
            <p className="font-serif text-xl italic text-gray-400 sm:text-2xl">No pieces found in this category.</p>
          </div>
        )}
      </div>
      
      {/* Discover More - resets filters */}
      <div className="mt-20 text-center sm:mt-24 lg:mt-32">
        {activeCategory !== 'All' || activeSort !== 'Featured' ? (
          <button 
            onClick={() => { setActiveCategory('All'); setActiveSort('Featured'); }}
            className="rounded-full bg-brand-dark px-10 py-4 text-[10px] font-bold uppercase tracking-[0.28em] text-white transition-all hover:bg-brand-accent sm:px-16 sm:py-5 sm:tracking-[0.4em]"
          >
            View All Pieces
          </button>
        ) : (
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gray-300 sm:tracking-[0.4em]">The Complete Anthology</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
