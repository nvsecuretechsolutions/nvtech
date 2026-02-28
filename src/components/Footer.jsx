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
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </div>

      <div className="footer-address">
        <h3 className="footer-title">Our Address</h3>
        <a
          href="https://www.google.com/maps/search/?api=1&query=BHUMI+PLOT+NO+429,+ROAD+NO+9,+KAKATEEYA+HILLS,+Madhapur,+Hyderabad,+50008"
          target="_blank"
          rel="noopener noreferrer"
        >
           Bhumi Plot No: 429, Road No 9, Kakateeya Hills, Madhapur,<br />
           Hyderabad. Pincode 500081
        </a>
      </div>

      {/* Social icons row (centered at bottom) */}
      <div className="footer-bottom">
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
          <a href="https://wa.me/+919392314020" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
