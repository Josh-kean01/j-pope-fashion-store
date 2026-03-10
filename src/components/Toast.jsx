import React, { useEffect } from 'react';

const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div 
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-brand-dark text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-4 border border-white/10 backdrop-blur-md">
        <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">{message}</p>
      </div>
    </div>
  );
};

export default Toast;
