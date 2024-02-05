import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            {/* <Navbar fluid  className='bg-cyan-950 shadow-md fixed z-10 top-0 w-full h-14'>
                <Navbar.Brand as={Link} href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Logo</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="md:bg-transparent bg-cyan-950">
                    <Link to="/" className={`block py-2 px-3 text-white rounded md:hover:bg-transparent hover:bg-cyan-600 md:border-0 md:hover:text-gray-300 hover:text-black md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Home</Link>
                    <Link to="/about" className={`block py-2 px-3 text-white rounded md:hover:bg-transparent hover:bg-cyan-600 md:border-0 hover:text-black md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>About</Link>
                    <Link to="/services" className={`block py-2 px-3 text-white rounded md:hover:bg-transparent hover:bg-cyan-600 md:border-0 hover:text-black md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Services</Link>
                    <Link to="/projects" className={`block py-2 px-3 text-white rounded md:hover:bg-transparent hover:bg-cyan-600 md:border-0 hover:text-black md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Projects</Link>
                    <Link to="/contact" className={`block py-2 px-3 text-white rounded md:hover:bg-transparent hover:bg-cyan-600 md:border-0 hover:text-black md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Contact</Link>
                </Navbar.Collapse>
            </Navbar> */}
            <Navbar fluid className='bg-cyan-950 px-5 shadow-md fixed z-10 top-0 w-full h-16'>
<Link to="/"   className="flex items-center cursor-pointer space-x-3 rtl:space-x-reverse">
<span className="self-center whitespace-nowrap text-xl font-semibold text-white">Logo</span>
  </Link>
        <Navbar.Toggle />
      <Navbar.Collapse className='md:bg-transparent bg-cyan-950'>
      <Link to="/" className={`block py-2 px-3 lg:text-lg md:text-xs text-sm md:p-0 cursor-pointer text-white rounded md:hover:bg-transparent hover:bg-teal-600 md:hover:text-teal-400 md:dark:hover:text-gray-900 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 `}>Home</Link>
        <Link to="about" className={`block py-2 lg:text-lg md:text-xs text-sm px-3 md:p-0 cursor-pointer text-white rounded md:hover:bg-transparent hover:bg-teal-600 md:hover:text-teal-400 md:dark:hover:text-gray-900 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 `}>About</Link>
        <Link to="services" 
      className={`block py-2 px-3 md:p-0 lg:text-lg md:text-xs text-sm text-white cursor-pointer rounded md:hover:bg-transparent hover:bg-teal-600 md:hover:text-teal-400 md:dark:hover:text-gray-900 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-white dark:border-gray-700 `}>Services</Link>
        <Link to="/projects" className={`block py-2 lg:text-lg md:text-xs text-sm px-3 md:p-0 cursor-pointer text-white rounded md:hover:bg-transparent hover:bg-teal-600 md:hover:text-teal-400 md:dark:hover:text-gray-900 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 `}>Projects</Link>
        <Link to="/contact" className={`block py-2 lg:text-lg md:text-xs text-sm px-3 md:p-0 cursor-pointer text-white rounded md:hover:bg-transparent hover:bg-teal-600 md:hover:text-teal-400 md:dark:hover:text-gray-900 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 `}>Contact</Link>
      </Navbar.Collapse>
    </Navbar>
        </>
    )
}

export default NavBar
