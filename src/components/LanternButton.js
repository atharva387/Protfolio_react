// src/components/LanternButton.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './LanternButton.css'; // Ensure you have this CSS file

const LanternButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.button 
        className="lantern-button"
        onClick={togglePopup}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 360 : 0 }} // Rotate the button
      >
        <div className="lantern-icon"></div>
      </motion.button>

      {isOpen && <Popup closePopup={togglePopup} />}
    </>
  );
};

const Popup = ({ closePopup }) => {
  return (
    <motion.div 
      className="popup"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <button className="close-btn" onClick={closePopup}>✖</button>
      <h2>My Other Portfolios</h2>
      <div className="popup-content">
        {portfolioLinks.map((link, index) => (
          <div key={index} className="card">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const portfolioLinks = [
  { title: 'Portfolio 1', url: 'https://example.com/portfolio1', description: 'This is my first portfolio.' },
  { title: 'Portfolio 2', url: 'https://example.com/portfolio2', description: 'This is my second portfolio.' },
  { title: 'Portfolio 3', url: 'https://example.com/portfolio3', description: 'This is my third portfolio.' },
  { title: 'Portfolio 4', url: 'https://example.com/portfolio4', description: 'This is my fourth portfolio.' },
];

export default LanternButton;
