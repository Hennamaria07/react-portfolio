'use client';

// import Link from 'next/link';
import { Navbar } from 'flowbite-react';
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

  }, [scrolling]);
  return (
    <>
       <Navbar fluid rounded className={`fixed h-14 z-10 top-0 lg:px-10 w-full bg-cyan-950 border-gray-200 ${
          scrolling ? 'shadow-md' : ''}`}>
     <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">logo</span>
          </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className='bg-cyan-950' >
      <Link to="/" className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:bg-cyan-500 md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Home</Link>
      <Link to="/about" className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:bg-cyan-500 md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>About</Link>
      <Link to="/services" className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:bg-cyan-500 md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Services</Link>
      <Link to="/projects" className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:bg-cyan-500 md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Projects</Link>
      <Link to="/contact" className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:bg-cyan-500 md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Contact</Link>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
};

export default Header;
