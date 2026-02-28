import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper to close menu after navigation
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="main-header">
      {/* Hamburger menu button (only visible on mobile) */}
      <button 
        className="menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation links */}
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link>
        <Link to="/products" className="nav-link" onClick={closeMenu}>Products</Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
