import React from 'react';
import BrandMark from './BrandMark';

const Preloader = ({ isVisible }) => {
  return (
    <div
      aria-hidden={!isVisible}
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-brand-dark px-6 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <BrandMark theme="dark" className="scale-125 origin-center" />
        <div className="h-px w-28 overflow-hidden bg-white/15">
          <div className="preloader-sweep h-full w-1/2 bg-brand-accent" />
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-white/45">
          Preparing the anthology
        </p>
      </div>
    </div>
  );
};

export default Preloader;
