import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Seo from '../components/Seo';

const OrderSuccess = ({ onCompleteOrder }) => {
  const location = useLocation();
  const hasProcessedOrder = useRef(false);

  useEffect(() => {
    if (hasProcessedOrder.current) return;
    hasProcessedOrder.current = true;

    const purchasedItemIds = location.state?.purchasedItemIds ?? [];

    if (onCompleteOrder) {
      onCompleteOrder(purchasedItemIds);
      return;
    }

    localStorage.removeItem('cart');
  }, [location.state, onCompleteOrder]);

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
      <Seo
        title="Order Confirmed"
        description="Your J-Pope order has been confirmed."
        noindex={true}
      />
      <div className="max-w-md w-full bg-white p-12 rounded-[3rem] shadow-2xl space-y-8 relative overflow-hidden">
        {/* Premium Badge */}
        <div className="w-20 h-20 bg-brand-dark text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </div>

        <div className="space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent">Confirmed</span>
          <h1 className="text-4xl font-serif text-brand-dark uppercase">The Anthology Continues</h1>
          <p className="text-gray-500 font-light leading-relaxed">
            Your order has been received at the Atelier. We are currently preparing your pieces with the utmost care. A confirmation has been sent to your email.
          </p>
        </div>

        <div className="pt-8 space-y-4">
          <Link 
            to="/shop" 
            className="block w-full py-5 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-brand-accent transition-all rounded-full shadow-lg"
          >
            Continue Exploring
          </Link>
          <Link 
            to="/" 
            className="block w-full py-5 bg-transparent text-brand-dark text-[10px] font-bold uppercase tracking-[0.4em] border border-gray-100 hover:border-brand-dark transition-all rounded-full"
          >
            Back to Home
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default OrderSuccess;
