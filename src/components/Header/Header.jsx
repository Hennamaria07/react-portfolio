import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolling) {
        setScrolling(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling]);
  return (
    <>
      <nav className={`fixed z-10 top-0 w-full h-14 bg-cyan-950 border-gray-200 ${
          scrolling ? 'shadow-md' : ''}`}>
        <div className="max-w-screen-xl bg-cyan-950 flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">logo</span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
                <Link to="/" className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:bg-cyan-600 md:border-0 md:hover:text-gray-300 hover:text-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Home</Link>
              </li>
              <li>
                <Link to="/about" className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:bg-cyan-600 md:border-0 hover:text-black md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>About</Link>
              </li>
              <li>
                <Link to="/services" className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:bg-cyan-600 md:border-0 hover:text-black md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Services</Link>
              </li>
              <li>
                <Link to="/projects" className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:bg-cyan-600 md:border-0 hover:text-black md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Projects</Link>
              </li>
              <li>
                <Link to="/contact" className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:bg-cyan-600 md:border-0 hover:text-black md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;