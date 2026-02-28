// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage'; 
import MenuPage from './components/MenuPage'; 
import SalesPage from './components/SalesPage';
import BlogPage from './components/BlogPage';
import './App.css';

// Redirect handler component
function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      navigate(redirect);
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <Router basename="/nvtech"> {/* remove basename if deployed at root */}
      <RedirectHandler />
      <div className="app-container">
        <Header />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<MenuPage />} />
            <Route path="/products" element={<SalesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<HomePage />} /> {/* fallback */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
