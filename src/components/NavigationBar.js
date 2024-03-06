import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="./logo.png" alt="Logo" className="h-16 mr-4" />
      </div>
      <div className="flex justify-center items-center">
        <a href="#" className="text-lg relative mr-8 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
          About
        </a>
        <a href="#" className="text-lg relative mr-8 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
          Review
        </a>
        <a href="#" className="text-lg relative mr-8 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
          Contact Us
        </a>
      </div>
      <div>
        <a href="#" className="text-lg relative mr-4 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
          Login
        </a>
        <a href="#" className="text-lg relative hover:text-midnight hover:font-bold transition-colors duration-300">
          Register
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
