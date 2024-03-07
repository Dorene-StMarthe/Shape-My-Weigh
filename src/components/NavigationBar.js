import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const location = useLocation();

  // Check if the current page is the login page
  const isLoginPage = location.pathname === '/login';

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
        {/* Render "Create an account" link if on the login page */}
        {isLoginPage ? (
          <Link to="/signup" className="text-lg relative mr-4 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
            Create an account
          </Link>
        ) : (
          // Otherwise, render the login link
          <Link to="/login" className="text-lg relative mr-4 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;

