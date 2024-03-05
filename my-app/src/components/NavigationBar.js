import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="bg-marigold p-4 flex justify-between items-center">
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
        <a href="#" className="text-2xl relative hover:text-marigold belanosima-regular mr-4">
          <button className="bg-white text-black px-6 py-3 rounded-md shadow-md hover:shadow-lg">Login</button>  
        </a>
        <a href="#" className="text-2xl relative hover:text-marigold belanosima-regular">
          <button className="bg-white text-black px-6 py-3 rounded-md shadow-md hover:shadow-lg">Register</button>
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;






