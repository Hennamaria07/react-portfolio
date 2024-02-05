import React, { useState } from 'react'
import { useEffect} from "react";
import Typed from 'typed.js';
import './home.css';
import { Link } from 'react-router-dom';
import { BD, FD, ML, Others } from './Cards.jsx';

const Home = () => {
    useEffect(() => {
        const typedElement = document.querySelector('.text');

        if (typedElement) {
            var typed = new Typed(typedElement, {
                strings: ["CODER", "WEB DEVELOPER"],
                typeSpeed: 100,
                backSpeed: 100,
                loop: true
            });

            return () => {
                // Cleanup code if needed
                typed.destroy();
            };
        }
    }, []); 

    const [DisplayPage, setDisplayPage] = useState(0);
    const renderProjects = () => {
        switch (DisplayPage) {
            case 0:
                // Display all projects
                return <FD />;
            case 1:
                // Display web projects
                return <BD />;
            case 2:
                return <ML />;
            case 3:
                return <Others />;
            default:
                return null;
        }
    };
    return (
        <>
            <div className='w-screen mt-16 md:mt-0 overflow-hidden home-wrapper bg-cyan-950'>
                
                <div className="flex flex-row container-padding h-full md:px-10 items-center">
          <div className="md:w-1/2 md:pt-0">
            
    <p className='text-zinc-300 sm:pt-14 pt-14 md:pt-32'>__________<span className='sm:inline hidden'>_______</span>_________What is she?</p>
            <div className='heading-height'>
            <h1 className="text-5xl md:text-6xl text-center text-sky-300 font-bold">
              I'M A <span className="text text-sky-500"></span>
            </h1>
            </div>
            <p className="paragraph mt-2 align-text text-gray-200 lg:mt-4 md:pt-4">
            She is a recent Computer Science Engineering graduate embarking on the intersection of creativity and technology. Currently, she is refining her Full Stack Development skills with a focus on the MERN stack through Entri Elevate. She aspires to be a software developer who crafts elegant websites and applications. Her unique blend of technical expertise and managerial skills sets her apart.
             </p>
            <div className='pt-5'>
           <Link to="/about"> <button type="button" className="text-white me-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">Know More</button>
            </Link>
           <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Download Cv</button>
            </div>

          </div>
          <div className="md:w-1/2 pt-10 hidden md:flex md:pl-10">
            <img src="https://space-portfolio-theta.vercel.app/mainIconsdark.svg" alt="icons" />
          </div>
          <div>
          <svg className="arrows-home md:flex hidden">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </div>
        </div>
        <div className="container-padding md:px-10 bg-cyan-950 w-screen min:h-screen overflow-hidden" style={{ paddingTop: "72px" }}>
                <div className="row">
                    <div className="col">
                        <p className='text-red-100 md:text-lg text-md'>__________<span className='sm:inline hidden'>_______</span>_________What she has built?</p>
                        <h1 className='pt-4 text-center lg:text-6xl md:text-5xl sm:text-4xl text-2xl text-gray-200 font-bold'>Her skill set spans across full-stack development</h1>
                        <p className="paragraph text-md md:text-lg mt-1 text-center text-gray-200 lg:mt-4 md:pt-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate ut, ullam perferendis cupiditate incidunt, voluptatem cumque tempore rerum laboriosam maxime! Cum aperiam nemo culpa modi ipsam rem mollitia eligendi.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col buttons flex justify-center py-4">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 active:from-pink-500 active:to-orange-400" onClick={(e) => setDisplayPage(0)}>
                            <span className="relative px-5 py-2.5 transition-all text-zinc-100 ease-in duration-75 bg-cyan-950 rounded-md group-hover:bg-opacity-0">
                                FRONTEND
                            </span>
                        </button>
                        <button className="relative inline-flex mx-5 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 active:from-pink-500 active:to-orange-400" onClick={(e) => setDisplayPage(1)}>
                            <span className="relative px-5 py-2.5 transition-all text-zinc-100 ease-in duration-75 bg-cyan-950 rounded-md group-hover:bg-opacity-0">
                                BACKEND
                            </span>
                        </button>
                        <button className="relative inline-flex mx-5 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 active:from-pink-500 active:to-orange-400">
                            <span className="relative px-5 py-2.5 transition-all text-zinc-100 ease-in duration-75 bg-cyan-950 rounded-md group-hover:bg-opacity-0" onClick={(e) => setDisplayPage(2)}>
                                ML
                            </span>
                        </button>
                        <button className="relative inline-flex mx-5 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 active:from-pink-500 active:to-orange-400">
                            <span className="relative px-5 py-2.5 transition-all text-zinc-100 ease-in duration-75 bg-cyan-950 rounded-md group-hover:bg-opacity-0" onClick={(e) => setDisplayPage(3)}>
                                OTHERS
                            </span>
                        </button>
                    </div>
                </div>
                <div className="row">
                {renderProjects()}
                </div>
            </div>

            </div>
            {/* <About /> */}
        </>
    )
}

export default Home