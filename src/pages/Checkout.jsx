import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';

const Checkout = ({ cartItems, cartCount }) => {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((acc, item) => {
    const price = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^\d.]/g, '')) : item.price;
    return acc + price * item.quantity;
  }, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/order-success', {
      state: { purchasedItemIds: cartItems.map(item => item.id) },
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
        <h2 className="mb-6 text-4xl text-brand-dark font-serif">Your bag is empty.</h2>
        <p className="mb-12 max-w-sm text-gray-500">Explore our collections to find your next quintessential piece.</p>
        <Link to="/shop" className="rounded-full bg-brand-dark px-12 py-4 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-brand-accent">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto mb-32 px-6 py-24 animate-fadeIn">
      <Seo
        title="Checkout"
        description="Complete your J-Pope order."
        noindex={true}
      />
      <div className="flex flex-col gap-24 lg:grid lg:grid-cols-12">
        <div className="space-y-16 lg:col-span-7">
          <section>
            <div className="mb-10 flex items-end justify-between border-b border-gray-100 pb-4">
              <h1 className="text-4xl uppercase tracking-tight text-brand-dark font-serif">Checkout</h1>
              <Link to="/shop" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-colors hover:text-brand-dark">
                Return to Bag
              </Link>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent">Contact Information</h2>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full border-b border-gray-200 bg-transparent py-4 font-light outline-none transition-colors placeholder:text-gray-300 focus:border-brand-dark"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-8">
                  <input type="text" name="firstName" required placeholder="First Name" className="w-full border-b border-gray-200 bg-transparent py-4 font-light outline-none transition-colors placeholder:text-gray-300 focus:border-brand-dark" />
                  <input type="text" name="lastName" required placeholder="Last Name" className="w-full border-b border-gray-200 bg-transparent py-4 font-light outline-none transition-colors placeholder:text-gray-300 focus:border-brand-dark" />
                </div>
                <input type="text" name="address" required placeholder="Address" className="w-full border-b border-gray-200 bg-transparent py-4 font-light outline-none transition-colors placeholder:text-gray-300 focus:border-brand-dark" />
                <div className="grid grid-cols-2 gap-8">
                  <input type="text" name="city" required placeholder="City" className="w-full border-b border-gray-200 bg-transparent py-4 font-light outline-none transition-colors placeholder:text-gray-300 focus:border-brand-dark" />
                  <input type="text" name="postalCode" required placeholder="Postal Code" className="w-full border-b border-gray-200 bg-transparent py-4 font-light outline-none transition-colors placeholder:text-gray-300 focus:border-brand-dark" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-brand-dark py-6 text-[10px] font-bold uppercase tracking-[0.5em] text-white shadow-xl transition-all hover:scale-[1.02] hover:bg-brand-accent"
              >
                Complete Purchase
              </button>
            </form>
          </section>
        </div>

        <div className="lg:col-span-5">
          <div className="sticky top-32 space-y-10 rounded-[3rem] bg-gray-50 p-10">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent">Order Summary ({cartCount})</h2>

            <div className="subtle-scroll max-h-[40vh] space-y-6 overflow-y-auto pr-4">
              {cartItems.map((item) => (
                <div key={item.cartId || item.id} className="flex items-center gap-6">
                  <div className="w-20 aspect-square flex-shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-white">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="leading-tight text-brand-dark font-serif">{item.name}</h3>
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-gray-400">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-brand-dark font-serif">€{(parseFloat(String(item.price).replace(/[^0-9.]/g, '')) * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t border-gray-200 pt-8">
              <div className="flex justify-between text-sm">
                <span className="font-light text-gray-500">Subtotal</span>
                <span className="text-brand-dark font-serif">€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-light text-gray-500">Shipping</span>
                <span className="text-brand-dark font-serif">Complimentary</span>
              </div>
              <div className="flex items-end justify-between pt-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-dark">Total</span>
                <span className="text-3xl leading-none text-brand-dark font-serif">€{total.toFixed(2)}</span>
              </div>
            </div>

            <div className="pt-6">
              <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white/50 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark/5">
                  <svg className="h-5 w-5 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm10-10V7a4 4 0 0 0-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-[9px] uppercase tracking-widest leading-tight text-gray-400">
                  Secure encrypted
                  <br />
                  check-out
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
