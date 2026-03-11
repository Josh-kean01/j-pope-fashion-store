import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove }) => {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((acc, item) => {
    const price = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^\d.]/g, '')) : item.price;
    return acc + price * item.quantity;
  }, 0);

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
      ></div>

      <div className={`fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-700 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex h-full flex-col bg-brand-bg">
          <div className="flex items-center justify-between border-b border-gray-100 bg-white p-8">
            <h2 className="text-2xl uppercase tracking-tight text-brand-dark font-serif">Shopping Bag</h2>
            <button onClick={onClose} className="text-gray-400 transition-colors hover:text-brand-dark">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
            </button>
          </div>

          <div className="no-scrollbar flex-grow space-y-8 overflow-y-auto p-8">
            {cartItems.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center space-y-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-50">
                  <svg className="h-8 w-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-lg text-brand-dark font-serif">Your bag is empty.</p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-gray-400">Find your next essential piece.</p>
                </div>
                <button onClick={onClose} className="rounded-full border border-brand-dark px-10 py-3 text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-brand-dark hover:text-white">
                  Keep Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.cartId || item.id} className="group flex gap-6 animate-slideIn">
                  <div className="w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 shadow-soft aspect-[3/4]">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-grow flex-col justify-between py-1">
                    <div>
                      <div className="mb-1 flex items-start justify-between">
                        <h3 className="text-brand-dark font-serif">{item.name}</h3>
                        <p className="text-sm font-medium">{item.price}</p>
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400">{item.category}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-gray-100 bg-white px-3 py-1">
                        <button onClick={() => onUpdateQuantity(item.cartId || item.id, item.quantity - 1)} className="p-1 text-gray-400 hover:text-brand-dark">
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 12H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        </button>
                        <span className="mx-4 w-4 text-center text-xs font-bold">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.cartId || item.id, item.quantity + 1)} className="p-1 text-gray-400 hover:text-brand-dark">
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        </button>
                      </div>
                      <button onClick={() => onRemove(item.cartId || item.id)} className="text-[10px] uppercase tracking-widest text-gray-400 transition-colors hover:text-red-500">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="space-y-6 border-t border-gray-100 bg-white p-8">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subtotal</span>
                  <span className="text-xl text-brand-dark font-serif">€{subtotal.toFixed(2)}</span>
                </div>
                <p className="text-[9px] italic text-gray-400">Shipping and taxes calculated at checkout.</p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  navigate('/checkout');
                }}
                className="w-full rounded-full bg-brand-dark py-5 text-[10px] font-bold uppercase tracking-[0.4em] text-white shadow-2xl shadow-brand-dark/20 transition-all hover:bg-brand-accent"
              >
                Proceed to Checkout
              </button>
              <p className="text-center text-[8px] uppercase tracking-widest text-gray-300">Complimentary worldwide shipping on all orders.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
