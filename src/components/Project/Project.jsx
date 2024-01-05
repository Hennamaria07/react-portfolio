import React, { useState } from 'react'
import Cards, { Game, Web, Others } from './Cards'

const Project = () => {
    const [DisplayPage, setDisplayPage] = useState(0);
    const renderProjects = () => {
        switch (DisplayPage) {
            case 0:
                // Display all projects
                return <Cards />;
            case 1:
                // Display web projects
                return <Web />;
            case 2:
                return <Game />;
            case 3:
                return <Others />;
            default:
                return null;
        }
    };
    return (
        <>
            <div className="container-padding md:px-10 bg-cyan-950 w-screen min:h-screen overflow-hidden" style={{ paddingTop: "72px" }}>
                <div className="row">
                    <div className="col">
                        <p className='text-red-100 md:text-lg text-md'>__________<span className='sm:inline hidden'>_______</span>_________What she has built?</p>
                        <h1 className='pt-4 text-center lg:text-6xl md:text-5xl sm:text-4xl text-2xl text-gray-200 font-bold'>Projects that reflect her skills</h1>
                        <p className="paragraph text-md md:text-lg mt-1 text-center text-gray-200 lg:mt-4 md:pt-1">
                            These projects reflect her commitment to maintaining clean code and staying current with industry trends.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col buttons flex justify-center py-4">
                        <button onClick={(e) => setDisplayPage(0)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 active:from-pink-500 active:to-orange-400">
                            <span className="relative px-5 py-2.5 transition-all text-zinc-100 ease-in duration-75 bg-cyan-950 rounded-md group-hover:bg-opacity-0">
                                ALL
                            </span>
                        </button>
                        <button onClick={(e) => setDisplayPage(1)} className="relative inline-flex mx-5 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 active:from-pink-500 active:to-orange-400">
                            <span className="relative px-5 py-2.5 transition-all text-zinc-100 ease-in duration-75 bg-cyan-950 rounded-md group-hover:bg-opacity-0">
                                WEB
                            </span>
                        </button>
                        <button onClick={(e) => setDisplayPage(2)} className="relative inline-flex mx-5 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 active:from-pink-500 active:to-orange-400">
                            <span className="relative px-5 py-2.5 transition-all text-zinc-100 ease-in duration-75 bg-cyan-950 rounded-md group-hover:bg-opacity-0">
                                GAME
                            </span>
                        </button>
                        <button onClick={(e) => setDisplayPage(3)} className="relative inline-flex mx-5 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 active:from-pink-500 active:to-orange-400">
                            <span className="relative px-5 py-2.5 transition-all text-zinc-100 ease-in duration-75 bg-cyan-950 rounded-md group-hover:bg-opacity-0">
                                OTHERS
                            </span>
                        </button>
                    </div>
                </div>
                <div className="row">
                {renderProjects()}
                </div>
            </div>
        </>
    )
}

export default Project
