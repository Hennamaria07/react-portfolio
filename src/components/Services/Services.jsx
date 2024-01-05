import React from 'react'
import '../About/about.css'
const Services = () => {
  return (
    <>
    <div className="container-fluid container-padding md:px-10 bg-cyan-950 w-screen min:h-screen overflow-hidden" style={{paddingTop: "72px"}}>
      <div className="row">
        <div className="col">
    <p className='text-red-100 md:text-lg text-md'>__________<span className='sm:inline hidden'>_______</span>_________What services does she offer?</p>
      <h1 className='py-4 text-center lg:text-6xl md:text-5xl sm:text-4xl text-2xl text-gray-200 font-bold'>Services she loves to provide</h1>
        </div>
      </div>
                <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 border-red-300 absolute h-full border"
              style={{ right: "50%", border: "2px solid #FB7185", borderRadius: "1%" }}></div>
            <div className="border-2-2 border-red-300 absolute h-full border"
              style={{left:"50%", border: "2px solid #FB7185", borderRadius: "1%"}}></div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <h4 className="mb-3 font-bold text-red-300 text-lg md:text-2xl">Frontend Development</h4>
                <p className="text-sm md:text-base align-text leading-snug text-gray-50 text-opacity-100">
                She specializes in creating visually stunning and responsive websites using Tailwind CSS, Bootstrap, HTML, CSS, React, and JavaScript. She turns ideas into engaging online experiences, ensuring that your digital presence stands out with creativity and functionality.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1  w-5/12 px-1 py-4 text-left">
                <h4 className="mb-3 font-bold text-red-300 text-lg md:text-2xl">Backend Development</h4>
                <p className="text-sm md:text-base align-text leading-snug text-gray-50 text-opacity-100">
                Expert Backend Developer skilled in MongoDB, Express.js, and Node.js, specializing in the MERN stack. She crafts powerful, scalable server-side solutions to drive dynamic and responsive web applications. Let's build something amazing together.
                </p>
              </div>
            </div>
            <div className="mb-8 flex lg:pb-10 pb-16 justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <h4 className="mb-3 font-bold text-red-300 text-lg md:text-2xl">Full Stack Development</h4>
                <p className="text-sm md:text-base align-text leading-snug text-gray-50 text-opacity-100">
                She is a MERN stack developer skilled in HTML, CSS, Tailwind CSS, Bootstrap, and JavaScript. Her expertise in MongoDB, Express.js, Node.js, and React enables her to create dynamic and visually appealing web applications. With a focus on clean code and staying current with industry trends, she delivers high-quality, scalable, and modern solutions.
                </p>
              </div>
            </div>
          </div>
          <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
        </div>
    </div>
    </>
  )
}

export default Services
