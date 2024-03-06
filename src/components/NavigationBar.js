import React from 'react';

import Login from '../pages/Login.js'

const NavigationBar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="./logo.png" alt="Logo" className="h-16 mr-4" />
      </div>
      <div className="flex justify-center items-center">
        <a href="#" className="text-lg relative mr-8 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
          Frequently Asked
        </a>
        <a href="#" className="text-lg relative mr-8 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
          Reviews
        </a>
        <a href="#" className="text-lg relative mr-8 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
          Support
        </a>
      </div>
      <div>
        <a href="/pages/Login" className="text-lg relative mr-4 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
          Login
        </a>
        <a href="#" className="text-lg relative hover:text-midnight hover:font-bold transition-colors duration-300">
          Sign up
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
