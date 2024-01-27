import React from 'react'
import { useEffect} from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
import Typed from 'typed.js';
import './home.css';
import { About } from '../About/About';
import { Link } from 'react-router-dom';

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


    // const [init, setInit] = useState(false);

    // // this should be run only once per application lifetime
    // useEffect(() => {
    //     initParticlesEngine(async (engine) => {
    //         // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    //         // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //         // starting from v2 you can add only the features you need reducing the bundle size
    //         await loadSlim(engine);
    //     }).then(() => {
    //         setInit(true);
    //     });
    // }, []);

    // const particlesLoaded = (container) => {
    //     console.log(container);
    // };
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
           <Link to="/about"> <button type="button" className="text-white me-5 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Know More</button>
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
            </div>
            <About />
        </>
    )
}

export default Home
