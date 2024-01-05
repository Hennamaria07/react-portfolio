
import React from 'react'
import { projects } from '../../data/data'
import { Link } from 'react-router-dom'
const Cards = () => {
  return (
    <>
  <div className="flex flex-wrap justify-evenly">
  { projects && projects.map((item, index) => (
         <div key={index} className="max-w-sm m-4 bg-cyan-950 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to={'/'}>
        <img className="rounded-t-lg" src={item.img} alt="image" />
    </Link>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-200 dark:text-white">{item.title}</h5>
        </a>
        <p className="mb-3 font-normal align-text text-zinc-200 dark:text-gray-400">{item.about}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
   ))
   }
  </div>

    </>
  )
}

export default Cards
export const Web = () => {
  const Webprojects = projects.filter((project) => project.type === 'web');
    return (
      <div className="flex flex-wrap justify-evenly">
      { Webprojects && Webprojects.map((item, index) => (
             <div key={index} className="max-w-sm m-4 bg-cyan-950 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={'/'}>
            <img className="rounded-t-lg" src={item.img} alt="image" />
        </Link>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-200 dark:text-white">{item.title}</h5>
            </a>
            <p className="mb-3 font-normal align-text text-zinc-200 dark:text-gray-400">{item.about}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
       ))
       }
      </div>
    );
  }
export const Game = () => {
  const gameProjects = projects.filter((project) => project.type === 'game');
    return (
      <div className="flex flex-wrap justify-evenly">
      { gameProjects && gameProjects.map((item, index) => (
             <div key={index} className="max-w-sm m-4 bg-cyan-950 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={'/'}>
            <img className="rounded-t-lg" src={item.img} alt="image" />
        </Link>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-200 dark:text-white">{item.title}</h5>
            </a>
            <p className="mb-3 font-normal align-text text-zinc-200 dark:text-gray-400">{item.about}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
       ))
       }
      </div>
    );
  }
export const Others = () => {
  const othersProjects = projects.filter((project) => project.type === 'others');
    return (
      <div className="flex flex-wrap justify-evenly">
      { othersProjects && othersProjects.map((item, index) => (
             <div key={index} className="max-w-sm m-4 bg-cyan-950 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={'/'}>
            <img className="rounded-t-lg" src={item.img} alt="image" />
        </Link>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-200 dark:text-white">{item.title}</h5>
            </a>
            <p className="mb-3 font-normal align-text text-zinc-200 dark:text-gray-400">{item.about}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
       ))
       }
      </div>
    );
  }