// MenuPage.js
import React from 'react';
import '../styles/MenuPage.css';

// Import images (replace with your actual image paths)
import SurveillanceImg from '../assets/surveillance.jpg';
import BiometricImg from '../assets/biometric.jpg';
import DoorAccessImg from '../assets/door-access.jpg';
import NetworkingImg from '../assets/networking.jpg';
import WifiImg from '../assets/wifi.jpg';
import SwitchesImg from '../assets/switches.jpg';
import SettingsImg from '../assets/settings.jpg';
import SeamlessNetworkingImg from '../assets/seamless-networking.jpg';

const services = [
  {
    title: 'Professional IP Surveillance System Installation for Complete Security',
    image: SurveillanceImg,
    description: `We provide complete CCTV installation services with high-quality cameras ranging from 2MP basic models to 8MP Ultra HD systems. Our solutions are designed for offices, homes, shops, and industrial spaces, ensuring clear and reliable surveillance. From site survey and smart camera placement to neat cabling, DVR/NVR setup, and mobile app integration, our team manages the entire process with professionalism. With clean installation, the latest technology, and competitive pricing, we deliver reliable security solutions that keep your property safe and give you total peace of mind.`,
  },
  {
    title: 'Smart Biometric Security. Simple Access.',
    image: BiometricImg,
    description: `At NS TECH SOLUTIONS, our biometric devices deliver the highest level of security and convenience by using unique human features such as fingerprints, facial recognition, or iris patterns for identification. Unlike traditional methods, biometrics eliminates the risks of lost keys, forgotten passwords, or unauthorized access, ensuring only the right people can enter restricted areas. Designed for accuracy, speed, and reliability, our solutions are ideal for businesses that value safety, efficiency, and control. With seamless integration and user-friendly operation, NS TECH SOLUTIONS provides a modern approach to access management and workforce tracking.`,
  },
  {
    title: 'Smart Door Access Control for Total Security',
    image: DoorAccessImg,
    description: `At NS TECH SOLUTIONS, our door access control systems combine biometrics, smart locks, RIM locks, EM locks, and access cards to secure every entry point. Designed for accuracy and ease, they allow only authorized users while tracking every access event. It’s a smart, simple, and reliable way to protect your spaces with complete control.`,
  },
  {
    title: 'Reliable Networking Infrastructure at the Best Price',
    image: SeamlessNetworkingImg,
    description: `We provide complete office networking solutions from start to finish. Our team begins with measuring the site and planning cable routes. Cables are pulled and laid neatly in conduits or ducts to maintain a clean and safe setup. Proper crimping and labeling are done for all connections to ensure reliability. We install and configure network switches, arrange rack dressing for a professional look, and complete the setup with organized racks and patch panels. Every step is carried out by skilled professionals, ensuring high-quality output at the best price.`,
  },
  {
    title: 'Seamless Networking Solutions for Modern Workspaces',
    image: NetworkingImg,
    description: `We deliver complete networking solutions tailored for modern offices. From site survey and precise cable measurement to professional cable laying in conduits or ducts, every step is handled with care. Our experts ensure smooth cable pulling, accurate crimping, and secure terminations, followed by neat rack dressing, patch panel integration, and switch installation. Each connection is tested, labeled, and documented to guarantee performance and reliability. With a focus on quality, professionalism, and competitive pricing, we create corporate-grade networking setups that are clean, future-ready, and built to support your business growth.`,
  },
  {
    title: 'The Power of Complete Networking',
    description: `Networking is the foundation of smooth communication in any office, linking computers, devices, and systems into one seamless flow of information. A well-structured network ensures fast data transfer, secure connections, and uninterrupted access to resources. With clear pathways for communication, it enables teams to share files, collaborate in real-time, and connect effortlessly — creating a strong backbone for business growth and efficiency.`,
  },
  {
    title: 'Seamless Wi-Fi Access Point Setup for Smarter Connectivity',
    image: WifiImg,
    description: `Stay connected without interruptions! At NS TECH SOLUTIONS, we provide professional Wi-Fi Access Point installation and configuration services that deliver strong, reliable wireless coverage for every corner of your space. Whether it’s an office, hotel, school, or warehouse, our team ensures your network runs fast, secure, and smooth — with no dead zones or dropouts. We configure your access points with optimized settings for speed, coverage, and security, including channel tuning, bandwidth control, and device management. From single AP setups to enterprise-level mesh and managed Wi-Fi systems, we make your wireless network powerful, scalable, and easy to use. ✅ Fast. Secure. Always Connected.Upgrade your Wi-Fi experience with NS TECH SOLUTIONS — because your network deserves expert care.`,
  },
  {
    title: 'Managed & Unmanaged Switches — Power Your Network Everywhere',
    image: SwitchesImg,
    description: `Keep your network fast, reliable, and secure with our managed and unmanaged switches. At NS TECH SOLUTIONS, we provide professional setup and configuration for homes, offices, and industrial environments, ensuring seamless connectivity for every device. Managed switches give you full control, monitoring, and security for complex networks, while unmanaged switches provide plug-and-play simplicity for smaller setups. Whether it’s a smart home, modern office, or large industrial facility, our solutions ensure your network is stable, scalable, and always ready to support your growing digital needs. ✅ Reliable Connectivity. Full Control. Seamless Performance.`,
  },
  {
    title: 'Our Installation Promise',
    image: SettingsImg,
    description: `At NS TECH SOLUTIONS, every installation is carried out with precision, safety, and a flawless finish.
• Neat Cable Management – Cables laid in straight lines, secured with clips, conduits, and casing for a clean, professional look.
• Expert Device Installation – Every device fitted with accuracy for reliable performance and a premium finish.
• Smart Software Setup – Software and mobile apps configured for easy control, with full customer guidance.
• Safety First – Strict precautions ensure the protection of both property and people.
• Customer Satisfaction – Final system testing and walkthroughs guarantee complete peace of mind.
👉 With NS TECH SOLUTIONS, you get more than installation – you get quality, reliability, and lasting security.`,
  },
];

const MenuPage = () => {
  return (
    <div className="menu-container">
      {/* Top heading */}
      <h1 className="page-title">Our Services</h1>

      {services.map((service, index) => (
        <div className="service-item" key={index}>
          <h2 className="service-title">{service.title}</h2>
          <img src={service.image} alt={service.title} className="service-image" />
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
