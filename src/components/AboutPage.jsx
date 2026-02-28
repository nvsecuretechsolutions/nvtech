import React from 'react';
import '../styles/AboutPage.css';        // Make sure the path is correct
import AboutImage from '../assets/aboutimage.jpg';  
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About Us - N Security Tech Solutions</title>
        <meta name="description" content="N Security Tech Solutions provides enterprise-grade CCTV surveillance, biometric access, door control, networking, and IT services. We deliver peace of mind through secure, reliable technology." />
        <meta name="keywords" content="About N Security Tech Solutions, CCTV surveillance, biometric devices, door access control, networking, IT services" />
      </Helmet>
      {/* Image at the top */}
      <img src={AboutImage} alt="About NV Secure Tech Solutions" className="about-image" />

      {/* Title */}
      <h1 className="about-title">About Us</h1>

      {/* Single paragraph (no spacing between lines) */}
      <div className="about-content">
        <p>
           In a world where business continuity and data integrity are paramount, N Security Tech Solutions offers more than just security; we deliver peace of mind. Our expertly engineered systems—from enterprise-grade IP surveillance that monitors every detail, to intelligent biometric and door access controls that secure your critical spaces, and high-performance networking and PA systems that foster seamless communication—are all built to protect your people, assets, and future. We don't just install technology; we build a resilient foundation that empowers your business to thrive in any environment.        </p>
      </div>
    </div>
  );
};

export default AboutPage;
