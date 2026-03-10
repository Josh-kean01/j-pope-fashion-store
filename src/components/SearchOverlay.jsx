import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?q=${query.trim()}`);
      onClose();
      setQuery('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`fixed inset-0 z-[100] bg-white transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
      <div className="h-full flex flex-col container mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex justify-end mb-24">
          <button onClick={onClose} className="group p-4 flex items-center gap-4 text-brand-dark">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          </button>
        </div>

        {/* Search Input */}
        <div className="max-w-4xl mx-auto w-full flex-grow flex flex-col justify-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent mb-8 block">Find your essence</span>
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Search the anthology..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus={isOpen}
              className="w-full bg-transparent border-b-2 border-brand-dark/10 py-8 text-4xl md:text-6xl font-serif text-brand-dark outline-none focus:border-brand-dark transition-colors placeholder:text-gray-200"
            />
            <button 
              onClick={handleSearch}
              className="absolute right-0 bottom-8 p-2 text-brand-dark hover:text-brand-accent transition-colors"
            >
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
               </svg>
            </button>
          </div>
          {/* ... suggestions unchanged ... */}

          {/* Search Suggestions */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark mb-8">Popular Stories</h3>
              <ul className="space-y-4">
                {['The Minimalist Edit', 'Autumn Winter 2024', 'Quiet Luxury Rituals'].map(s => (
                  <li 
                    key={s} 
                    onClick={() => { navigate(`/shop?q=${s}`); onClose(); }}
                    className="text-gray-400 hover:text-brand-dark cursor-pointer transition-colors font-light italic"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark mb-8">Quick Links</h3>
              <ul className="space-y-4">
                {['Outerwear', 'Knitwear', 'Trousers', 'Accessories'].map(s => (
                  <li 
                    key={s} 
                    onClick={() => { navigate(`/shop?q=${s}`); onClose(); }}
                    className="text-gray-400 hover:text-brand-dark cursor-pointer transition-colors font-light"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
