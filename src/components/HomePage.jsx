import React from 'react';
import '../styles/HomePage.css';

// Import your custom icons (update paths as needed)
import SaleIcon from '../assets/sale-icon.png';
import PlanningIcon from '../assets/planning-icon.png';
import ProjectIcon from '../assets/project-icon.png';
import ServicesIcon from '../assets/services-icon.png';
import SupportIcon from '../assets/support-icon.png';

const icons = [
  { label: 'Sales', icon: <img src={SaleIcon} alt="Sales" className="custom-icon" /> },
  { label: 'Planning', icon: <img src={PlanningIcon} alt="Planning" className="custom-icon" /> },
  { label: 'Project Execution', icon: <img src={ProjectIcon} alt="Project Execution" className="custom-icon" /> },
  { label: 'Services', icon: <img src={ServicesIcon} alt="Services" className="custom-icon" /> },
  { label: 'Customer Support', icon: <img src={SupportIcon} alt="Customer Support" className="custom-icon" /> },
];

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Welcome section */}
      <div className="overlay">
        <h1 className="main-title">Welcome to NV Secure Tech Solutions!</h1>
      </div>

      {/* Icons section */}
      <div className="icon-section">
        <div className="icon-row">
          {icons.map(({ label, icon }) => (
            <div className="icon-item" key={label}>
              {icon}
              <div className="icon-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
