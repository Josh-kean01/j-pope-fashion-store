import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, cartCount }) => {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((acc, item) => {
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace(/[^\d.]/g, '')) 
      : item.price;
    return acc + (price * item.quantity);
  }, 0);
  const shipping = 0; // Free shipping for luxury brand
  const total = subtotal + shipping;

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: 'United Kingdom',
    postalCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would process the payment
    alert('Order placed successfully! (Demo)');
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
        <h2 className="text-4xl font-serif text-brand-dark mb-6">Your bag is empty.</h2>
        <p className="text-gray-500 mb-12 max-w-sm">Explore our collections to find your next quintessential piece.</p>
        <Link to="/shop" className="px-12 py-4 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-brand-accent transition-all">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-24 mb-32 animate-fadeIn">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-24">
        {/* Left: Forms */}
        <div className="lg:col-span-7 space-y-16">
          <section>
            <div className="flex justify-between items-end mb-10 border-b border-gray-100 pb-4">
              <h1 className="text-4xl font-serif text-brand-dark uppercase tracking-tight">Checkout</h1>
              <Link to="/shop" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-brand-dark transition-colors">Return to Bag</Link>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent">Contact Information</h2>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-brand-dark transition-colors placeholder:text-gray-300 font-light"
                  onChange={handleInputChange}
                />
              </div>

              {/* Shipping Address */}
              <div className="space-y-6">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-8">
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    placeholder="First Name" 
                    className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-brand-dark transition-colors placeholder:text-gray-300 font-light"
                    onChange={handleInputChange}
                  />
                  <input 
                    type="text" 
                    name="lastName"
                    required
                    placeholder="Last Name" 
                    className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-brand-dark transition-colors placeholder:text-gray-300 font-light"
                    onChange={handleInputChange}
                  />
                </div>
                <input 
                  type="text" 
                  name="address"
                  required
                  placeholder="Address" 
                  className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-brand-dark transition-colors placeholder:text-gray-300 font-light"
                  onChange={handleInputChange}
                />
                <div className="grid grid-cols-2 gap-8">
                  <input 
                    type="text" 
                    name="city"
                    required
                    placeholder="City" 
                    className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-brand-dark transition-colors placeholder:text-gray-300 font-light"
                    onChange={handleInputChange}
                  />
                  <input 
                    type="text" 
                    name="postalCode"
                    required
                    placeholder="Postal Code" 
                    className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-brand-dark transition-colors placeholder:text-gray-300 font-light"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-6 bg-brand-dark text-white text-[10px] font-bold uppercase tracking-[0.5em] rounded-full hover:bg-brand-accent transition-all transform hover:scale-[1.02] shadow-xl"
              >
                Complete Purchase
              </button>
            </form>
          </section>
        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-5">
          <div className="sticky top-32 bg-gray-50 rounded-[3rem] p-10 space-y-10">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent">Order Summary ({cartCount})</h2>
            
            <div className="space-y-6 max-h-[40vh] overflow-y-auto pr-4 subtle-scroll">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 items-center">
                  <div className="w-20 aspect-square rounded-2xl overflow-hidden bg-white border border-gray-100 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-serif text-brand-dark leading-tight">{item.name}</h3>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-serif text-brand-dark">${(item.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-8 border-t border-gray-200">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-light">Subtotal</span>
                <span className="text-brand-dark font-serif">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-light">Shipping</span>
                <span className="text-brand-dark font-serif">Complimentary</span>
              </div>
              <div className="flex justify-between items-end pt-4">
                <span className="text-brand-dark font-bold uppercase tracking-widest text-xs">Total</span>
                <span className="text-3xl font-serif text-brand-dark leading-none">${total.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-6">
               <div className="flex gap-4 items-center p-4 bg-white/50 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-brand-dark/5 flex items-center justify-center">
                     <svg className="w-5 h-5 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                     </svg>
                  </div>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 leading-tight">Secure encrypted <br/>check-out</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
