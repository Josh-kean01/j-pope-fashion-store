import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove }) => {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((acc, item) => {
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace(/[^\d.]/g, '')) 
      : item.price;
    return acc + (price * item.quantity);
  }, 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-700 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full bg-brand-bg">
          {/* Header */}
          <div className="p-8 flex justify-between items-center border-b border-gray-100 bg-white">
            <h2 className="font-serif text-2xl text-brand-dark uppercase tracking-tight">Shopping Bag</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-brand-dark transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
            </button>
          </div>

          {/* Items List */}
          <div className="flex-grow overflow-y-auto p-8 space-y-8 no-scrollbar">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-lg text-brand-dark">Your bag is empty.</p>
                  <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">Find your next essential piece.</p>
                </div>
                <button onClick={onClose} className="px-10 py-3 border border-brand-dark text-[10px] font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all rounded-full">
                  Keep Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 group animate-slideIn">
                  <div className="w-24 aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 shadow-soft">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-between py-1 flex-grow">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-serif text-brand-dark">{item.name}</h3>
                        <p className="text-sm font-medium">{item.price}</p>
                      </div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">{item.category}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-gray-100 rounded-full px-3 py-1 bg-white">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="text-gray-400 hover:text-brand-dark p-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 12H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        </button>
                        <span className="mx-4 text-xs font-bold w-4 text-center">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="text-gray-400 hover:text-brand-dark p-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        </button>
                      </div>
                      <button onClick={() => onRemove(item.id)} className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-red-500 transition-colors">Remove</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-8 bg-white border-t border-gray-100 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subtotal</span>
                  <span className="font-serif text-xl text-brand-dark">€{subtotal.toFixed(2)}</span>
                </div>
                <p className="text-[9px] text-gray-400 italic">Shipping and taxes calculated at checkout.</p>
              </div>
              <button 
                onClick={() => { onClose(); navigate('/checkout'); }}
                className="w-full py-5 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-brand-accent transition-all rounded-full shadow-2xl shadow-brand-dark/20"
              >
                PROCEED TO CHECKOUT
              </button>
              <p className="text-center text-[8px] text-gray-300 uppercase tracking-widest">Complimentary worldwide shipping on all orders.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
