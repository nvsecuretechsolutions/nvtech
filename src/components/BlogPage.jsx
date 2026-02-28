import React from "react";
import "../styles/BlogPage.css";
import bSurveillanceImage from '../assets/bSurveillance.jpg'; 
import networkingSolutionsImage from '../assets/networkingSolutions.jpg';
import biometricdevicesImage from '../assets/biometricdevices.jpg';
import doorlockImage from '../assets/doorlock.jpg';
import wifiAccessImage from '../assets/wifiAccess.jpg';
import ManagedswitchesImage from '../assets/Managedswitches.jpg';
import laptopdesktopImage from '../assets/laptop-desktop.jpg';
import laptopServicesImage from '../assets/laptopServices.jpg';
import ourDesktopImage from '../assets/ourDesktop.jpg';
import { Helmet } from 'react-helmet';

const BlogPage = () => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - Security & IT Solutions | N Security Tech Solutions</title>
        <meta name="description" content="Read our blog to learn about CCTV surveillance, biometric devices, networking solutions, smart door locks, Wi-Fi access points, switches, and IT services." />
        <meta name="keywords" content="CCTV blog, surveillance systems, networking solutions, biometric devices, smart door locks, Wi-Fi access points, managed switches, laptop desktop services" />
      </Helmet>
      <header className="blog-header">
        <h1>N Security Tech Solutions — Protect. Connect. Simplify.</h1>
      </header>

      <p>At N Security Tech Solutions, We believe security and smart technology go hand in hand. We provide cutting-edge systems that make your business, office, and home more secure, connected, and efficient. From advanced surveillance to intelligent access control and networking solutions — we bring everything under one roof.</p>

      <section className="blog-section">
        <h2>IP Surveillance Systems</h2>
        <img src={bSurveillanceImage} alt="Surveillance" className="surveillance-img" />
        <p>Stay one step ahead with smart monitoring.</p>
        <p>Our IP surveillance cameras deliver crystal-clear video, day and night. With features like motion detection, remote viewing, and cloud backup, you can monitor your property from anywhere, anytime.</p>
        <p>Why choose our surveillance systems:</p>
        <ul>
          <li>High-definition clarity</li>
          <li>Night vision support</li>
          <li>Mobile app monitoring</li>
          <li>Data backup and playback options</li>
        </ul>
      </section>

      <section className="blog-section">
        <h2>Networking Solutions</h2>
        <img src={networkingSolutionsImage} alt="Networking Solutions" className="section-img" />
        <p>Strong networks for stronger performance.</p>
        <p>We design and install structured networking systems to keep your operations running smoothly. Whether you’re connecting multiple departments or extending coverage across your premises — we ensure fast, reliable connectivity.</p>
        <p>We offer:</p>
        <ul>
          <li>LAN & WAN setup</li>
          <li>Network troubleshooting</li>
          <li>Fiber and Cat6 cabling</li>
          <li>Router and switch configuration</li>
        </ul>
      </section>

      <section className="blog-section">
        <h2>Biometric Devices & Software Integration</h2>
        <img src={biometricdevicesImage} alt="Biometric Devices" className="section-img" />
        <p>Smart access starts with your fingerprint.</p>
        <p>Our biometric systems provide a secure and efficient way to manage attendance and access. Integrated with advanced software, they help you monitor employee entry, timing, and reporting — all in one place.</p>
        <p>Features include:</p>
        <ul>
          <li>Fingerprint & face recognition</li>
          <li>Attendance reports</li>
          <li>Integration with EM locks</li>
          <li>Cloud-based access control</li>
        </ul>
      </section>

      <section className="blog-section">
        <h2>Smart Door Locks & Access Control</h2>
        <img src={doorlockImage} alt="Smart Door Locks" className="section-img" />
        <p>Control your doors with intelligence and security.</p>
        <p>We install and integrate smart door locks including RIM locks and EM locks that work seamlessly with biometric systems and access cards. Get complete control over who enters your premises.</p>
        <p>Benefits:</p>
        <ul>
          <li>Remote access control</li>
          <li>Integration with mobile apps or biometric devices</li>
          <li>Emergency release functions</li>
          <li>Enhanced safety for offices and homes</li>
        </ul>
      </section>

      <section className="blog-section">
        <h2>Wi-Fi Access Points</h2>
        <img src={wifiAccessImage} alt="Wi-Fi Access Points" className="section-img" />
        <p>We deploy Wi‑Fi access points to ensure strong, stable connectivity in every area — perfect for offices, hotels, institutions, and warehouses. Our configurations eliminate dead zones and balance network loads efficiently.</p>
        <p>Solutions include:</p>
        <ul>
          <li>Indoor & outdoor Wi-Fi access points</li>
          <li>Secure guest networks</li>
          <li>Device bandwidth control</li>
          <li>Long-range signal optimization</li>
        </ul>
      </section>

      <section className="blog-section">
        <h2>Managed & Unmanaged Switches</h2>
        <img src={ManagedswitchesImage} alt="Network Switches" className="section-img" />
        <p>We offer both managed and unmanaged switches to fit your networking needs. Managed switches provide flexibility, monitoring, and control, while unmanaged ones offer plug-and-play convenience.</p>
        <p>Choose based on your requirement:</p>
        <ul>
          <li>Managed switches – Ideal for enterprise networks with VLAN, QoS, and security control</li>
          <li>Unmanaged switches – Perfect for small setups with easy connectivity</li>
        </ul>
      </section>

      <h4>Why Choose N Security Tech Solutions?</h4>
      <ul>
        <li>Professional installation & configuration</li>
        <li>Trusted hardware brands</li>
        <li>On-site & remote support</li>
        <li>Long-term reliability and maintenance</li>
      </ul>

      <p>We don’t just sell systems — we create secure environments that protect your people, assets, and data.</p>

      <h4>Get in Touch</h4>
      <p>Contact us today for a free consultation and discover how we can secure and simplify your world.</p>

      <section className="blog-section">
        <h2>Professional Laptop & Desktop Services – Sales, Repair & AMC Support</h2>
        <img src={laptopdesktopImage} alt="Laptop and Desktop Services" className="section-img" />
        <p>In today’s digital world, laptops and desktops are the backbone of businesses, offices, educational institutions, and homes. Whether it’s daily operations, data management, or online connectivity, a properly functioning system is essential. At N Security Tech Solutions, we provide complete laptop and desktop sales, installation, repair, networking support, and Annual Maintenance Contract (AMC) services to ensure your business never stops.</p>
      </section>
      
      <h4>Why Professional Laptop & Desktop Services Matter</h4>

      <p>Many businesses face frequent system slowdowns, hardware failures, virus attacks, and networking issues. Unprofessional handling can result in:</p>
      <ul>
          <li>Data loss</li>
          <li>Security breaches</li>
          <li>Performance issues</li>
          <li>Increased downtime</li>
          <li>Repeated repair costs</li>
      </ul>
      <p>Our certified technicians diagnose problems accurately and provide long-term solutions instead of temporary fixes.</p>

      <section className="blog-section">
        <h2>Our Laptop Services</h2>
        <img src={laptopServicesImage} alt="Laptop Services" className="section-img" />
      </section>

      <h4>Laptop Sales</h4>
      <p>We supply branded and custom-configured laptops for business use, educational institutions, personal use, gaming, and high-performance needs.</p>
      
      <h4>Laptop Repair & Troubleshooting</h4>
      <ul>
          <li>Motherboard repair</li>
          <li>Screen replacement</li>
          <li>Keyboard replacement</li>
          <li>Battery & charging issues</li>
          <li>Overheating problems</li>
          <li>Software installation & OS upgrade</li>
      </ul>

      <h4>Data Recovery & Backup</h4>
      <p>Accidental deletion or hard disk crash? We provide secure data recovery and backup solutions.</p>

      <h4>Need Immediate Laptop Support?</h4>
      <p>Visit us now:{" "}<a href="https://nsecuritytechsolutions.com" target="_blank" rel="noreferrer">https://nsecuritytechsolutions.com</a></p>

      <section className="blog-section">
        <h2>Our Desktop Services</h2>
        <img src={ourDesktopImage} alt="Desktop" className="desktop-img" />
      </section>

      <h4>Desktop Sales & Custom Builds</h4>
      <p>We provide branded desktops, custom-built systems, workstations, and server-based desktop solutions for offices and commercial environments.</p>
      
      <h4>Desktop Repair & Upgrades</h4>
      <ul>
          <li>RAM upgrade</li>
          <li>SSD installation</li>
          <li>Power supply replacement</li>
          <li>Motherboard repair</li>
          <li>Graphics card installation</li>
          <li>Performance optimization</li>
      </ul>

      <h4>Virus Removal & Security Protection</h4>
      <p>We install genuine antivirus software and implement cybersecurity measures to protect your valuable data.</p>

      <h4>Annual Maintenance Contract (AMC) Services</h4>
      <p>Regular maintenance prevents major breakdowns and increases system life. Our AMC services include:</p>
      <ul>
        <li>Monthly health checkups</li>
        <li>Hardware inspection</li>
        <li>Software updates</li>
        <li>Network troubleshooting</li>
        <li>Priority service support</li>
      </ul>
      
      <h4>Boost Your System Performance Today!</h4>
      <p>Don’t wait for system failure. Upgrade, repair, or maintain your laptops and desktops with experts.</p>
      <p>Visit our official website:{" "}<a href="https://nsecuritytechsolutions.com" target="_blank" rel="noreferrer">https://nsecuritytechsolutions.com</a></p>

      <h4>Why Choose N Security Tech Solutions?</h4>
      <ul>
        <li>Experienced IT Professionals</li>
        <li>Quick Response Time</li>
        <li>Affordable Pricing</li>
        <li>Genuine Spare Parts</li>
        <li>Complete IT & Security Solutions</li>
        <li>Customer-Focused Service</li>
      </ul>
      
      <h4>Final Thoughts</h4>
      <p>Technology problems can slow down your growth, but the right support can accelerate it. Whether you need a new laptop, desktop upgrade, networking setup, or AMC service, N Security Tech Solutions is here to help.</p>

      <footer className="blog-footer">
        <p>
          Contact us today for a free consultation and discover how we can secure
          and simplify your world.
        </p>
      </footer>
    </div>
  );
};

export default BlogPage;
