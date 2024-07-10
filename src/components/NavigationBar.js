import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if the current page is the login page
  const isLoginPage = location.pathname === '/login';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <a href="/">
          <img src="./logo.png" alt="Logo" className="h-16 mr-4" />
        </a>
      </div>
      <div className="md:flex hidden justify-center items-center">
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
      <div className="hidden md:flex">
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
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="outline-none mobile-menu-button">
          {!isMenuOpen && (
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4">
          <a href="/faq" className="text-lg relative mb-4 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
            Frequently Asked
          </a>
          <a href="/reviews" className="text-lg relative mb-4 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
            Reviews
          </a>
          <a href="/support" className="text-lg relative mb-4 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
            Support
          </a>
          {/* Render "Create an account" link if on the login page */}
          {isLoginPage ? (
            <Link to="/signup" className="text-lg relative mb-4 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
              Create an account
            </Link>
          ) : (
            // Otherwise, render the login link
            <Link to="/login" className="text-lg relative mb-4 hover:text-midnight hover:font-bold transition-colors duration-300 ease-in-out">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;

