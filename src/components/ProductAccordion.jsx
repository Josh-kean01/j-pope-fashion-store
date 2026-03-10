import React from 'react';

const ProductAccordion = ({ title, children, isOpen = false }) => {
  return (
    <details className="group py-4 border-b border-gray-100" open={isOpen}>
      <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-brand-dark">
        <span className="uppercase text-sm tracking-wide">{title}</span>
        <span className="transition group-open:rotate-180">
          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <div className="text-gray-600 mt-3 group-open:animate-fadeIn">
        {children}
      </div>
    </details>
  );
};

export default ProductAccordion;
