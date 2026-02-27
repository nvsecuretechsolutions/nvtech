// SalesPage.js
import React from 'react';
import '../styles/SalesPage.css';

// Import images (replace with your actual image paths)
import HikvisionIpImg from '../assets/hikvision-ip.jpg';
import CpPlusIpImg from '../assets/cpplus-ip.jpg';
import UniviewIpImg from '../assets/uniview-ip.jpg';
import PrizorIpImg from '../assets/prizor-ip.jpg';

import HikvisionHdImg from '../assets/hikvision-hd.jpg';
import CpPlusHdImg from '../assets/cpplus-hd.jpg';
import UniviewHdImg from '../assets/uniview-hd.jpg';
import PrizorHdImg from '../assets/prizor-hd.jpg';

import CpPlusWirelessImg from '../assets/cpplus-wireless.jpg';

// Grouped packages by category
const groupedPackages = {
  "IP Camera Combo Packages": [
    {
      brand: 'Hikvision',
      details: [
        'DVR',
        'Cameras',
        'Hdd',
        'Power supply',
        '3+1 Cable',
        'Accessories'
      ],
      image: HikvisionIpImg,
    },
    {
      brand: 'CP PLUS',
      details: [
        '8 Channel NVR',
        '2MP IP Cameras (8 Nos)',
        '8ch POE Switch',
        '1TB HDD',
        '305m Cat6 Cable',
      ],
      image: CpPlusIpImg,
    },
    {
      brand: 'Uniview',
      details: [
        '16 Channel NVR',
        '2MP IP Cameras (16 Nos)',
        'POE Switch',
        '1TB HDD',
        '305m Cat6 Cable',
      ],
      image: UniviewIpImg,
    },
    {
      brand: 'Prizor',
      details: [
        '16 Channel NVR',
        '2MP IP Cameras (16 Nos)',
        'POE Switch',
        '1TB HDD',
        '305m Cat6 Cable',
      ],
      image: PrizorIpImg,
    },
  ],
  "HD / Analog Camera Combo Packages": [
    {
      brand: 'Hikvision',
      details: [
        '16 Channel DVR',
        '2MP HD/Analog Cameras (16 Nos)',
        '16ch SMPS',
        '1TB HDD',
        '3+1 Cable 90m Coil (2 Nos)',
      ],
      image: HikvisionHdImg,
    },
    {
      brand: 'CP PLUS',
      details: [
        '16 Channel DVR',
        '2MP HD/Analog Cameras (16 Nos)',
        '16ch SMPS',
        '1TB HDD',
        '3+1 Cable 90m Coil (2 Nos)',
      ],
      image: CpPlusHdImg,
    },
    {
      brand: 'Uniview',
      details: [
        '8 Channel DVR',
        '2MP HD/Analog Cameras (8 Nos)',
        '8ch SMPS',
        '1TB HDD',
        '3+1 Cable 90m Coil (2 Nos)',
      ],
      image: UniviewHdImg,
    },
    {
      brand: 'Prizor',
      details: [
        '8 Channel DVR',
        '2MP HD/Analog Cameras (8 Nos)',
        '8ch SMPS',
        '1TB HDD',
        '3+1 Cable 90m Coil (2 Nos)',
      ],
      image: PrizorHdImg,
    },
  ],
  "Wireless Cameras": [
    {
      brand: 'CP Plus',
      details: [
        'Model: CP-E31Q',
        '3MP Smart Motion detection',
        'Lens: 4mm',
        '64GB Memory Card',
        'Two Ways Audio',
      ],
      image: CpPlusWirelessImg,
    },
  ],
};

const SalesPage = () => {
  return (
    <div className="sales-container">
      <h1 className="page-title">Products Page</h1>
      {Object.entries(groupedPackages).map(([category, items], idx) => (
        <div key={idx} className="sales-category">
          <h2 className="category-title">{category}</h2>
          {items.map((pkg, index) => (
            <div className="sales-section" key={index}>
              <div className="sales-content">
                <h3>{pkg.brand}</h3>
                <ul>
                  {pkg.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="sales-image">
                <img src={pkg.image} alt={`${pkg.brand} package`} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SalesPage;
