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

import Ezviz2mpImg from '../assets/ezviz-2mp.jpg';
import Ezviz4mpImg from '../assets/ezviz-4mp.jpg';
import EzvizH9cImg from '../assets/ezviz-h9c.jpg';
import CpPlusWirelessImg from '../assets/cpplus-wireless.jpg';

// Grouped packages by category
const groupedPackages = {
  "IP Camera Combo Packages": [
    {
      brand: 'Hikvision',
      price: '₹60,000',
      details: [
        '8 Channel NVR',
        '2MP IP Cameras (8 Nos)',
        '8ch POE Switch',
        '1TB HDD',
        '305m Cat6 Cable',
      ],
      image: HikvisionIpImg,
    },
    {
      brand: 'CP PLUS',
      price: '₹58,999',
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
      price: '₹56,999',
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
      price: '₹52,999',
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
      price: '₹58,999',
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
      price: '₹36,999',
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
      price: '₹35,999',
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
      price: '₹30,999',
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
      brand: 'EZVIZ',
      price: '₹2,499',
      details: [
        'Model: C6N',
        '2MP',
        'Lens: 4mm@F2.4',
        '64GB Memory Card',
        'Two Ways Audio',
      ],
      image: Ezviz2mpImg,
    },
    {
      brand: 'EZVIZ',
      price: '₹6,499',
      details: [
        'Model: C6N',
        '4MP',
        'Lens: 4mm@F1.6',
        '64GB Memory Card',
        'Two Ways Audio',
      ],
      image: Ezviz4mpImg,
    },
    {
      brand: 'EZVIZ',
      price: '₹9,499',
      details: [
        'Model: H9C',
        '5MP+5MP 4K',
        'Pan: 350°, Tilt: 80°',
        '64GB Memory Card',
        'Two Ways Audio',
      ],
      image: EzvizH9cImg,
    },
    {
      brand: 'CP Plus',
      price: '₹6,499',
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
      <h1 className="page-title">Sales Page</h1>
      {Object.entries(groupedPackages).map(([category, items], idx) => (
        <div key={idx} className="sales-category">
          <h2 className="category-title">{category}</h2>
          {items.map((pkg, index) => (
            <div className="sales-section" key={index}>
              <div className="sales-content">
                <h3>{pkg.brand} – {pkg.price}</h3>
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
