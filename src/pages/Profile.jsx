import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const Profile = ({ wishlistItems, toggleWishlist, addToCart }) => {
  const [activeTab, setActiveTab] = useState('Wishlist');

  const tabs = ['Wishlist', 'Orders', 'Settings'];

  const mockOrders = [
    { id: '#JP-9921', date: 'March 08, 2024', status: 'Delivered', total: '$1,250.00' },
    { id: '#JP-9845', date: 'February 12, 2024', status: 'Processing', total: '$890.00' }
  ];

  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-48 animate-fadeIn">
      <Seo
        title="Account"
        description="Manage your J-Pope account, wishlist, settings, and order history."
        noindex={true}
      />
      <div className="container mx-auto px-6">
        {/* Profile Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24 border-b border-gray-100 pb-12">
          <div className="max-w-4xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent block mb-6">The Anthology</span>
            <h1 className="text-6xl md:text-8xl font-serif text-brand-dark leading-[0.9] uppercase tracking-tighter">
              My <br/><span className="italic ml-24 md:ml-48 text-brand-accent">Account.</span>
            </h1>
          </div>
          <div className="text-right flex items-center gap-6">
             <div className="text-right">
                <p className="font-serif text-2xl text-brand-dark italic">Vidal J. Pope</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Platinum Member</p>
             </div>
             <div className="w-20 h-20 rounded-full bg-brand-dark flex items-center justify-center text-white font-serif text-3xl">V</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-12 mb-20 border-b border-gray-100">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-6 text-[10px] font-bold uppercase tracking-[0.4em] transition-all relative ${activeTab === tab ? 'text-brand-dark' : 'text-gray-300 hover:text-brand-dark'}`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-px bg-brand-dark animate-slideIn"></div>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[40vh]">
          {activeTab === 'Wishlist' && (
            <div className="space-y-12">
              {wishlistItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                  {wishlistItems.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      toggleWishlist={toggleWishlist} 
                      wishlistItems={wishlistItems}
                      onAddToCart={addToCart}
                    />
                  ))}
                </div>
              ) : (
                <div className="max-w-xl text-center mx-auto py-20">
                  <p className="font-serif text-2xl text-gray-400 italic mb-12">"Your curated selection is empty."</p>
                  <Link to="/shop" className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark border-b border-brand-dark pb-2 hover:text-brand-accent transition-colors">Start Sourcing</Link>
                </div>
              )}
            </div>
          )}

          {activeTab === 'Orders' && (
            <div className="max-w-4xl space-y-8">
              {mockOrders.map(order => (
                <div key={order.id} className="bg-white p-10 rounded-[2rem] shadow-soft flex flex-col md:flex-row justify-between items-center gap-8 group hover:shadow-xl transition-all">
                   <div className="space-y-2">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Order ID</p>
                      <p className="font-serif text-2xl text-brand-dark">{order.id}</p>
                   </div>
                   <div className="space-y-2 text-center md:text-left">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date</p>
                      <p className="text-gray-600 font-light">{order.date}</p>
                   </div>
                   <div className="space-y-2 text-center md:text-left">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</p>
                      <span className={`inline-block px-4 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${order.status === 'Delivered' ? 'bg-green-50 text-green-600' : 'bg-brand-bg text-brand-accent'}`}>
                        {order.status}
                      </span>
                   </div>
                   <div className="space-y-2 text-center md:text-right">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total</p>
                      <p className="text-brand-dark font-bold">{order.total}</p>
                   </div>
                   <button className="text-[10px] font-bold uppercase tracking-widest p-4 border border-gray-100 rounded-full hover:bg-brand-dark hover:text-white transition-all">
                      View Details
                   </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Settings' && (
            <div className="max-w-2xl space-y-16">
               <div className="space-y-6">
                  <h3 className="font-serif text-3xl text-brand-dark italic">Personal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                     <div className="space-y-2 border-b border-gray-100 pb-2">
                        <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-300">Name</label>
                        <p className="text-sm font-light">Vidal J. Pope</p>
                     </div>
                     <div className="space-y-2 border-b border-gray-100 pb-2">
                        <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-300">Email</label>
                        <p className="text-sm font-light">vidal@j-pope.com</p>
                     </div>
                  </div>
               </div>
               <div className="space-y-6">
                  <h3 className="font-serif text-3xl text-brand-dark italic">Mailing Address</h3>
                  <div className="space-y-2 border-b border-gray-100 pb-2">
                     <p className="text-sm font-light text-gray-500">124 Anthology Street, Suite 402, New York, NY 10012</p>
                  </div>
               </div>
               <button className="px-12 py-4 bg-brand-dark text-white rounded-full text-[10px] font-bold uppercase tracking-[0.4em] shadow-lg">Save Editions</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
