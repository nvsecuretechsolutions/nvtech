// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage'; 
import MenuPage from './components/MenuPage'; 
import SalesPage from './components/SalesPage';
import './App.css';

function App() {
  return (
    <Router basename="/nvtech">
      <div className="app-container">
        <Header />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
