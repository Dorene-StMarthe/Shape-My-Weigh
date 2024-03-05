import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="./logo.png" alt="Logo" className="h-16 mr-" />
      </div>
      <div className="flex justify-center items-center">
        <a href="#" className="text-2xl relative hover:text-white belanosima-regular mr-8">
          About
        </a>
        <a href="#" className="text-2xl relative hover:text-white belanosima-regular mr-8">
          Review
        </a>
        <a href="#" className="text-2xl relative hover:text-white belanosima-regular mr-8">
          Contact Us
        </a>
      </div>
      <div>
        <a href="#" className="text-2xl relative hover:text-white belanosima-regular mr-4">
          Login
        </a>
        <a href="#" className="text-2xl relative hover:text-white belanosima-regular">Register
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;






