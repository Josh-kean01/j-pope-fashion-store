import React, { useState } from 'react';

const Moodboard = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full aspect-[21/9] rounded-[4rem] overflow-hidden bg-gray-50 group shadow-2xl">
      {/* Background Layer */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        <img 
          src={images[activeIndex]} 
          alt="Moodboard Active" 
          className="w-full h-full object-cover grayscale opacity-20 blur-md scale-110"
        />
      </div>

      {/* Main Image Grid / Interaction */}
      <div className="relative z-10 w-full h-full flex items-center justify-center gap-8 px-12">
        {images.map((img, idx) => (
          <div 
            key={idx}
            onMouseEnter={() => setActiveIndex(idx)}
            className={`cursor-pointer transition-all duration-700 ease-out border shadow-2xl relative overflow-hidden ${activeIndex === idx ? 'w-1/2 aspect-video rounded-[3rem] border-white/40 scale-100 z-20' : 'w-1/6 aspect-[3/4] rounded-[2rem] border-white/10 scale-90 opacity-40 hover:opacity-100 z-10 grayscale hover:grayscale-0'}`}
          >
            <img src={img} alt={`Mood ${idx}`} className="w-full h-full object-cover" />
            {activeIndex === idx && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                 <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white animate-fadeIn">Visual Inspiration {idx + 1}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1 transition-all duration-500 rounded-full ${activeIndex === idx ? 'w-12 bg-brand-accent' : 'w-4 bg-white/20'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Moodboard;
