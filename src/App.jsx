import React, { useEffect, useState } from 'react';
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
import JournalArticle from './pages/JournalArticle';
import Wishlist from './pages/Wishlist';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingReturns from './pages/ShippingReturns';
import NotFound from './pages/NotFound';
import Toast from './components/Toast';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import OverlayScrollbar from './components/OverlayScrollbar';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });
  const [showPreloader, setShowPreloader] = useState(true);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  useEffect(() => {
    const startedAt = performance.now();
    const minimumDuration = 900;
    let revealTimer;
    let removeTimer;

    const finishPreload = () => {
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(0, minimumDuration - elapsed);

      revealTimer = window.setTimeout(() => {
        setIsPreloaderVisible(false);
        removeTimer = window.setTimeout(() => {
          setShowPreloader(false);
        }, 500);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      finishPreload();
    } else {
      window.addEventListener('load', finishPreload, { once: true });
    }

    return () => {
      window.removeEventListener('load', finishPreload);
      window.clearTimeout(revealTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = showPreloader ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [showPreloader]);

  const showToast = (message) => {
    setToast({ show: true, message });
  };

  const addToCart = (product) => {
    const itemId = product.cartId || product.id;

    setCartItems(prev => {
      const existing = prev.find(item => (item.cartId || item.id) === itemId);
      if (existing) {
        return prev.map(item =>
          (item.cartId || item.id) === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
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

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) return removeItems(itemId);
    setCartItems(prev =>
      prev.map(item =>
        (item.cartId || item.id) === itemId ? { ...item, quantity } : item
      )
    );
  };

  const removeItems = (itemId) => {
    setCartItems(prev => prev.filter(item => (item.cartId || item.id) !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  const completeOrder = (purchasedItemIds = []) => {
    const purchasedIds = new Set(purchasedItemIds);

    setWishlistItems(prev => prev.filter(item => !purchasedIds.has(item.id)));
    clearCart();
  };

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <OverlayScrollbar />
      {showPreloader && <Preloader isVisible={isPreloaderVisible} />}
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
            <Route path="/lookbook" element={<Lookbook addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} />
             <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} />
            <Route path="/product" element={<ProductDetail addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:id" element={<JournalArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/shipping-returns" element={<ShippingReturns />} />
            <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} toggleWishlist={toggleWishlist} addToCart={addToCart} />} />
            <Route path="/profile" element={<Profile wishlistItems={wishlistItems} toggleWishlist={toggleWishlist} addToCart={addToCart} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />} />
            <Route path="/order-success" element={<OrderSuccess onCompleteOrder={completeOrder} />} />
            <Route path="*" element={<NotFound />} />
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
