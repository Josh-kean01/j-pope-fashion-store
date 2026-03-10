import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductList = ({ addToCart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';

  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSort, setActiveSort] = useState('Featured');
  
  const categories = ['All', 'Outerwear', 'Knitwear', 'Trousers', 'Accessories'];

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
    <div className="container mx-auto px-6 py-16 animate-fadeIn">
      {/* Editorial Header */}
      <header className="mb-20 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-12">
        <div className="max-w-2xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent mb-4 block">
            {searchQuery ? `Search Results` : `Seasonal Edition`}
          </span>
          <h1 className="text-6xl font-serif text-brand-dark mb-6 uppercase tracking-tighter leading-none">
            {searchQuery ? `"${searchQuery}"` : `The New Essentials`}
          </h1>
          {searchQuery ? (
            <button 
              onClick={() => navigate('/shop')}
              className="text-[10px] font-bold uppercase tracking-widest text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors"
            >
              Clear Search
            </button>
          ) : (
            <p className="text-gray-500 font-light leading-relaxed text-lg">
              Our curated selection of timeless pieces designed to transition seamlessly from morning to night. Quality craftsmanship meets contemporary silhouette in our most ambitious collection yet.
            </p>
          )}
        </div>
        
        {/* Filter Bar */}
        <div className="w-full lg:w-auto overflow-x-auto no-scrollbar py-2">
          <div className="flex space-x-6 border-b border-gray-100 pb-6">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${activeCategory === cat ? 'bg-brand-dark text-white border-brand-dark' : 'bg-white border-gray-200 text-gray-400 hover:border-brand-dark hover:text-brand-dark'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-16 min-h-[40vh]">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(p => (
            <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="font-serif text-2xl text-gray-400 italic">No pieces found in this category.</p>
          </div>
        )}
      </div>
      
      {/* Pagination - Premium Style */}
      <div className="mt-32 text-center">
        <button className="px-16 py-5 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-brand-accent transition-all rounded-full shadow-2xl shadow-brand-dark/20">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default ProductList;
