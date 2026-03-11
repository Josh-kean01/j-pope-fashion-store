import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHidden, setIsHidden] = useState(true);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
        setIsHidden(false);
      });
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

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block transition-opacity duration-200 ${isHidden ? 'opacity-0' : 'opacity-100'}`}
      style={{
        width: '32px',
        height: '32px',
        transform: `translate(${pos.x - 16}px, ${pos.y - 16}px)`,
        border: '1.5px solid white',
        borderRadius: '999px',
        mixBlendMode: 'difference',
        transition: 'transform 80ms linear, opacity 200ms ease',
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 h-1 w-1 rounded-full bg-white"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
};

export default CustomCursor;
