import React from 'react';

const SkeletonLoader = ({ className = "" }) => {
  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
    </div>
  );
};

export default SkeletonLoader;
