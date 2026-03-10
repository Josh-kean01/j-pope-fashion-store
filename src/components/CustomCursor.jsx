import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
      
      const target = e.target;
      const computedStyle = window.getComputedStyle(target);
      setIsPointer(
        computedStyle.cursor === 'pointer' || 
        target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a')
      );
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-300 ease-out hidden lg:block ${
        isHidden ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 2.5 : 1})`,
      }}
    >
      <div className="w-full h-full border border-white rounded-full flex items-center justify-center">
        <div className={`w-1 h-1 bg-white rounded-full transition-opacity duration-300 ${isPointer ? 'opacity-0' : 'opacity-100'}`}></div>
      </div>
    </div>
  );
};

export default CustomCursor;
