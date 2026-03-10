import React, { useState } from 'react';

const sizeGuideData = {
  clothing: [
    { size: 'XS', chest: '82–86', waist: '62–66', hips: '86–90' },
    { size: 'S',  chest: '87–91', waist: '67–71', hips: '91–95' },
    { size: 'M',  chest: '92–96', waist: '72–76', hips: '96–100' },
    { size: 'L',  chest: '97–101', waist: '77–81', hips: '101–105' },
    { size: 'XL', chest: '102–108', waist: '82–88', hips: '106–112' },
  ],
  trousers: [
    { size: '34', waist: '85–87', hips: '95–97', inseam: '81' },
    { size: '36', waist: '90–92', hips: '100–102', inseam: '82' },
    { size: '38', waist: '95–97', hips: '105–107', inseam: '83' },
    { size: '40', waist: '100–102', hips: '110–112', inseam: '83' },
    { size: '42', waist: '105–107', hips: '115–117', inseam: '84' },
  ],
  footwear: [
    { size: '36', uk: '3', us: '5.5', cm: '22.5' },
    { size: '37', uk: '4', us: '6.5', cm: '23.5' },
    { size: '38', uk: '5', us: '7.5', cm: '24.5' },
    { size: '39', uk: '6', us: '8.5', cm: '25' },
    { size: '40', uk: '7', us: '9.5', cm: '25.5' },
    { size: '41', uk: '7.5', us: '10', cm: '26' },
  ],
};

const Selector = ({ label, value, options, type, selected, onChange }) => {
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  // Determine which size guide table to show
  const isTrousers = options?.some(o => ['34','36','38','40','42'].includes(o));
  const isFootwear = options?.some(o => ['36','37','38','39','40','41'].includes(o));
  const guideData = isFootwear ? sizeGuideData.footwear : isTrousers ? sizeGuideData.trousers : sizeGuideData.clothing;
  const guideHeaders = isFootwear
    ? ['EU', 'UK', 'US', 'CM']
    : isTrousers
    ? ['Size', 'Waist (cm)', 'Hips (cm)', 'Inseam (cm)']
    : ['Size', 'Chest (cm)', 'Waist (cm)', 'Hips (cm)'];

  return (
    <>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="block text-sm font-semibold text-gray-900 uppercase tracking-wide">
            {label}: <span className="font-normal text-gray-600">{value}</span>
          </span>
          {label === 'Size' && (
            <button
              type="button"
              onClick={() => setSizeGuideOpen(true)}
              className="text-xs text-gray-500 underline hover:text-brand-dark transition-colors uppercase tracking-widest"
            >
              Size Guide
            </button>
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

      {/* Size Guide Modal */}
      {sizeGuideOpen && (
        <div
          className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSizeGuideOpen(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-10 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSizeGuideOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-brand-dark transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent block mb-2">Measurements</span>
              <h3 className="text-2xl font-serif text-brand-dark">Size Guide</h3>
              <p className="text-xs text-gray-400 mt-2 font-light">All measurements are in centimetres. For the best fit, measure against your skin with minimal clothing.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    {guideHeaders.map(h => (
                      <th key={h} className="text-left py-3 text-[10px] font-bold uppercase tracking-widest text-brand-accent pr-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {guideData.map((row, i) => {
                    const values = Object.values(row);
                    return (
                      <tr key={i} className={`border-b border-gray-50 ${selected === row.size ? 'bg-brand-accent/5' : ''}`}>
                        {values.map((v, j) => (
                          <td key={j} className={`py-3 pr-4 font-light text-gray-700 ${j === 0 ? 'font-semibold text-brand-dark' : ''}`}>{v}</td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="text-[10px] text-gray-400 mt-6 leading-relaxed">
              If you are between sizes, we recommend sizing up for a more comfortable, relaxed fit — consistent with the J-Pope silhouette.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Selector;
