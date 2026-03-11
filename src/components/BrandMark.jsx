import React from 'react';

const BrandMark = ({ theme = 'light', compact = false, className = '' }) => {
  const isDark = theme === 'dark';
  const toneClass = isDark ? 'text-white' : 'text-brand-dark';

  return (
    <span className={`inline-flex leading-none ${className}`}>
      <span className={`font-brand font-bold uppercase ${toneClass} ${compact ? 'text-[1.1rem] tracking-[0.24em]' : 'text-[1.35rem] tracking-[0.3em]'}`}>
        J-POPE
      </span>
    </span>
  );
};

export default BrandMark;
