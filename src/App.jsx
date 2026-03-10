import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Lookbook from './pages/Lookbook';
import ProductDetail from './pages/ProductDetail';
import Collections from './pages/Collections';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import CartDrawer from './components/CartDrawer';
import SearchOverlay from './components/SearchOverlay';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Journal from './pages/Journal';
import Toast from './components/Toast';
import CustomCursor from './components/CustomCursor';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });

  // Persistence
  React.useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedWishlist) setWishlistItems(JSON.parse(savedWishlist));
  }, []);

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  React.useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const showToast = (message) => {
    setToast({ show: true, message });
  };

  React.useEffect(() => {
    if (window.Lenis) {
      const lenis = new window.Lenis();
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }, []);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`${product.name} added to bag`);
    setIsCartOpen(true);
  };

  const toggleWishlist = (product) => {
    setWishlistItems(prev => {
      const isWishlisted = prev.find(item => item.id === product.id);
      if (isWishlisted) {
        showToast(`${product.name} removed from wishlist`);
        return prev.filter(item => item.id !== product.id);
      }
      showToast(`${product.name} added to wishlist`);
      return [...prev, product];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return removeItems(id);
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItems = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItems}
      />
      <div className="bg-brand-bg font-sans text-brand-dark antialiased min-h-screen flex flex-col">
        <Header 
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
          onCartClick={() => setIsCartOpen(true)}
          onSearchClick={() => setIsSearchOpen(true)}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} />
            <Route path="/shop" element={<ProductList addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} />
            <Route path="/collections" element={<Collections addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} />
            <Route path="/lookbook" element={<Lookbook addToCart={addToCart} />} />
             <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} />
            <Route path="/product" element={<ProductDetail addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Routes>
        </main>
        
        <Footer />
        <Toast 
          message={toast.message} 
          isVisible={toast.show} 
          onClose={() => setToast({ ...toast, show: false })} 
        />
      </div>
    </Router>
  );
}

export default App;
