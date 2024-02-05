
import React from 'react'
import { skills } from '../../data/data.js';

export const FD = () => {
  const data = skills.filter((skill) => skill.type === 'fd');
    return (
      <div className="flex flex-wrap justify-evenly">
      {data &&data.map((item, index) => (
             <div className="md:px-20 px-10 py-5 flex flex-wrap justify-between">
                <h6 className='text-white bg-cyan-600 px-4 py-2 rounded-md cursor-pointer shadow-inner'>{item.name}</h6>
             </div>
       ))
       }
      </div>
    );
  }
export const BD = () => {
  const data = skills.filter((skill) => skill.type === 'bd');
    return (
      <div className="flex flex-wrap justify-evenly">
      {data &&data.map((item, index) => (
             <div className="md:px-20 px-10 py-5 flex flex-wrap justify-between">
             <h6 className='text-white bg-cyan-600 px-4 py-2 rounded-md cursor-pointer shadow-inner'>{item.name}</h6>
          </div>
       ))
       }
      </div>
    );
  }
export const ML = () => {
  const data = skills.filter((skill) => skill.type === 'ml');
    return (
      <div className="flex flex-wrap justify-evenly">
      {data &&data.map((item, index) => (
             <div className="md:px-20 px-10 py-5 flex flex-wrap justify-between">
             <h6 className='text-white bg-cyan-600 px-4 py-2 rounded-md cursor-pointer shadow-inner'>{item.name}</h6>
          </div>
       ))
       }
      </div>
    );
  }
export const Others = () => {
  const data = skills.filter((skill) => skill.type === 'others');
    return (
      <div className="flex flex-wrap justify-evenly">
      {data &&data.map((item, index) => (
             <div className="md:px-20 px-10 py-5 flex flex-wrap justify-between">
             <h6 className='text-white bg-cyan-600 px-4 py-2 rounded-md cursor-pointer shadow-inner'>{item.name}</h6>
          </div>
       ))
       }
      </div>
    );
  }
  