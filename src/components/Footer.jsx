// Footer.js
import React from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <h3 className="footer-title">Useful Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/sales">Sales</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="social-icons">
        <a href="https://www.instagram.com/nvsecuretech4all/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/nv-secure-tech-solutions-605531371" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://x.com/nvtechsolution?t=TuuY9gFkaGbCpHRuVleICg&s=09" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="https://www.facebook.com/share/1B9CzgjVWY/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://wa.me/+919292314020" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
