// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../styles/HomePage.css';

// Import your custom icons (update paths as needed)
import SaleIcon from '../assets/sale-icon.png';
import PlanningIcon from '../assets/planning-icon.png';
import ProjectIcon from '../assets/project-icon.png';
import ServicesIcon from '../assets/services-icon.png';
import SupportIcon from '../assets/support-icon.png';

const icons = [
  { label: 'Sales', icon: SaleIcon, path: '/sales' },
  { label: 'Planning', icon: PlanningIcon },
  { label: 'Project Execution', icon: ProjectIcon },
  { label: 'Services', icon: ServicesIcon, path: '/Menu' },
  { label: 'Customer Support', icon: SupportIcon, path: '/Contact' },
];

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Welcome section */}
      <div className="overlay">
        <h1 className="main-title">Welcome to N Security Tech Solutions!</h1>
      </div>

      {/* Icons section */}
      <div className="icon-section">
        <div className="icon-row">
          {icons.map(({ label, icon, path }) => (
            <Link to={path || '#'} className="icon-item" key={label}>
              <img src={icon} alt={label} className="custom-icon" />
              <div className="icon-label">{label}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Introduction section */}
      <div className="intro-section">
        <h2 className="intro-title">N Security Tech Solutions – Introduction</h2>
        <p>
          N Security Tech Solutions is a reliable and quality-driven technology service provider 
          specializing in CCTV Surveillance Systems, Smart Biometric Security, Access Control Systems, 
          Wi-Fi Access Point Setup, Laptops, Desktops and Networking Solutions.
        </p>
        <p>
          With a strong focus on planning, execution, and coordination, every project is handled with 
          precision, professionalism, and timely delivery. Our expertise spans across residential, 
          commercial, and industrial sectors, offering complete support — from system design and 
          configuration to installation and final commissioning.
        </p>
        <p>
          At N Security Tech Solutions, we combine technical knowledge with practical execution to 
          provide cost-effective, reliable, and future-ready solutions tailored to our clients’ 
          requirements.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
