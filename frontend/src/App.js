import { useEffect } from 'react';
import { Routes, Route, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { setNavigate } from './utils/navigation';

// Public Pages
import Home from './components/Home';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import Blog from './pages/Blog';
import Download from './pages/Download';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsCondition from './pages/TermsCondition';
import Faq from './pages/Faq';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';

// Protected Pages
import Cart from './pages/cart/Cart';
import WishList from './pages/wishlist/WishList';
import CheckOut from './pages/checkout/Checkout';

// Product Pages
import Edius11 from './pages/Edius11';
import AlbumSense from './pages/AlbumSense';
import CutSense from './pages/CutSense';
import VideoEditing from './pages/VideoEditing';

// Components
import ProductQuickviewModal from './components/ProductQuickView';

// ProtectedRoute
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/downloads" element={<Download />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-condition" element={<TermsCondition />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/About-us" element={<AboutUs />} />
      <Route path="/gallery" element={<Gallery />} />

      {/* Product Pages */}
      <Route path="/edius11" element={<Edius11 />} />
      <Route path="/albumsense" element={<AlbumSense />} />
      <Route path="/cutsense" element={<CutSense />} />
      <Route path="/video-editing" element={<VideoEditing />} />
      <Route path="/quickview" element={<ProductQuickviewModal />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
