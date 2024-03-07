import React from 'react';
import { Link } from 'react-router-dom';
import Homepage from '../pages/Homepage';

import Login from '../pages/Login.js'

const NavigationBar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center">
      
        <img src="./logo.png" alt="Logo" className="h-16 mr-4" />
        
      </div>
      <div className="flex justify-center items-center">
        <a href="/faq" className="text-lg relative mr-8 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
          Frequently Asked
        </a>
        <a href="/reviews" className="text-lg relative mr-8 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
          Reviews
        </a>
        <a href="/support" className="text-lg relative mr-8 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
          Support
        </a>
      </div>
      <div>
        <a href="/login" className="text-lg relative mr-4 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
          Login
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
