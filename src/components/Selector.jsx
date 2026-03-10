import React from 'react';

const Selector = ({ label, value, options, type, selected, onChange }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <span className="block text-sm font-semibold text-gray-900 uppercase tracking-wide">
          {label}: <span className="font-normal text-gray-600">{value}</span>
        </span>
        {label === 'Size' && (
          <a className="text-xs text-gray-500 underline hover:text-brand-dark transition-colors" href="#">SIZE GUIDE</a>
        )}
      </div>
      
      <div className={type === 'color' ? "flex space-x-3" : "grid grid-cols-5 gap-2"}>
        {options.map((option, index) => (
          <button
            key={index}
            aria-label={`Select ${type === 'color' ? option.label : option}`}
            onClick={() => onChange(option)}
            className={
              type === 'color' 
                ? `w-8 h-8 rounded-full border-2 focus:outline-none transition-all ${
                    selected.label === option.label ? 'ring-2 ring-offset-2 ring-gray-800' : 'border-gray-100'
                  }` 
                : `w-10 h-10 flex items-center justify-center border rounded-md transition-all ${
                    selected === option 
                      ? 'bg-black text-white border-black shadow-md' 
                      : 'bg-white text-black border-gray-300 hover:border-black'
                  }`
            }
            style={type === 'color' ? { backgroundColor: option.value } : {}}
          >
            {type === 'text' && option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Selector;
