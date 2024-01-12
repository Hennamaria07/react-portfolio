import React, { useEffect, useState } from 'react';
import "./about.css";
import { Link} from 'react-router-dom';


export const About = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/Hennamaria07')
    .then((response) => response.json())
    .then((data) => setData(data))
  }, [data])
  return (
    <>
    {data && <div className="container-fluid md:px-10 container-padding overflow-hidden bg-cyan-950">
    <div className="row about-wrapper  pb-5 md:flex  h-auto special-padding pb-20 items-center">
    <div className="col md:w-1/2">
    <p className='text-red-100'>__________<span className='sm:inline hidden'>_______</span>_________What does she do?</p>
        <p className="paragraph text-lg mt-2 align-text text-gray-200 lg:mt-4 md:pt-4">
        She creates elegant and logical web solutions, honing her skills in Full Stack Development with a focus on the MERN stack through Entri Elevate. In her free time, she enjoys playing games.
        </p>
        <h1 className='lg:text-6xl line-height text-6xl py-4 md:text-5xl text-slate-50 font-bold'>Think. <span className='text-red-300'>Code. <br/></span>Debug.</h1>
    </div>
    <div className="col md:w-1/2 md:flex hidden md:pt-0 pt-10 ">
        <img src='/assets/mern.png' alt="mern" />
    </div>
    </div>
    <div className="container-fluid overflow-hidden h-auto py-20 bg-cyan-950">
    <div className="row pb-10 md:flex">
    <div className="col md:w-1/2">
    <p className='text-red-100'>__________<span className='sm:inline hidden'>_______</span>_________What does she do?</p>
    <p className="paragraph text-lg mt-2 align-text text-gray-200 lg:mt-4 md:pt-4">
        She crafts captivating user interfaces and seamless experiences as a freelance</p>
        <h1 className='lg:text line-height-6xl text-6xl py-4 md:text-5xl text-slate-50 font-bold'>Frontend <br/>Developer</h1>
    </div>
    <div className="col md:w-1/2 md:flex hidden md:pt-0 pt-10">
        <img className='react-img pt-5' src='/assets/react-logo.png' alt="mern" />
    </div>
    </div>
    </div>
    <div className="container-fluid overflow-hidden h-auto  bg-cyan-950">
    <div className="row md:flex">
    <div className="col md:w-1/2">
    <p className='text-red-100'>__________<span className='sm:inline hidden'>_______</span>_________Meet and Greet!</p>
    <p className="paragraph mt-2 text-lg align-text text-gray-200 lg:mt-4 md:pt-4">Ready to make a lasting impression? Connect with her for a <span className='text-red-300'>meet-and-greet session</span>, and let's discuss how you can collaborate!</p>
        <h1 className='lg:text-6xl line-height text-6xl py-4 md:text-5xl text-slate-50 font-bold'> Let’s grab a <br />cup of coffee</h1>
        <div className='flex justify-center md:justify-start md:pt-0 p-1 pt-5 connect-btn'>
   <Link to={'/contact'}><button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-red-200 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-cyan-950 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Let's Connect! 🤝
</span>
</button>
</Link>
    </div>
    </div>
    <div className="col md:w-1/2 connect-img md:flex hidden md:pt-0 pt-10">
        <img src='https://harshgoel.me/images/vectors/contact.svg' width={'80%'} height={'60%'} alt="connect" />
    </div>
    </div>
  
    </div>
    <div className="container-fluid overflow-hidden h-auto py-20 bg-cyan-950">
    <div className="row pb-10 md:flex">
    <div className="col md:w-1/2">
    <p className='text-red-100'>__________<span className='sm:inline hidden'>_______</span>_________Impressed by this website?</p>
    <p className="paragraph text-lg mt-2 align-text text-gray-200 lg:mt-4 md:pt-4">
    Impressed by this portfolio? Discover more about what she does by</p>
        <h1 className='lg:text line-height-6xl text-6xl py-4 md:text-5xl text-slate-50 font-bold'>Visit Github <br/>Repository</h1>
<div className='md:hidden p-2 flex justify-center'>
<Link to={data.html_url}><button data-popover-target="popover-user-profile" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View profile</button></Link>

<div data-popover id="popover-user-profile" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
    <div className="p-3">
        <div className="flex items-center justify-between mb-2">
            <Link to={'/'}>
                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese Leos"/>
            </Link>
            <div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Follow</button>
            </div>
        </div>
        <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <Link to={'/'}>Jese Leos</Link>
        </p>
        <p className="mb-3 text-sm font-normal">
            <Link to={'/'} className="hover:underline">@jeseleos</Link>
        </p>
        <p className="mb-4 text-sm">Open-source contributor. Building <a to={'/'} className="text-blue-600 dark:text-blue-500 hover:underline">flowbite.com</a>.</p>
        <ul className="flex text-sm">
            <li className="me-2">
                <Link to={'/'} className="hover:underline">
                    <span className="font-semibold text-gray-900 dark:text-white">799</span>
                    <span>Following</span>
                </Link>
            </li>
            <li>
                <Link to={'/'} className="hover:underline">
                    <span className="font-semibold text-gray-900 dark:text-white">3,758</span>
                    <span>Followers</span>
                </Link>
            </li>
        </ul>
    </div>
    <div data-popper-arrow></div>
</div>

</div>
    </div>
    <div className="col md:w-1/2 md:flex hidden justify-center md:pt-0 lg:px-4 pt-10">
    <div className="card-container pb-5">
	<span className="pro">PRO</span>
  <div className='flex justify-center'>
	<img className="round" src={data.avatar_url} width={"50%"} alt="user" />
  </div>
	<h3>{data.name}</h3>
	<h6>{data.location}</h6>
	<p className='px-5 align-text'>{data.bio}</p>
	<div className="buttons pt-2">
  <Link to={data.html_url}><button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View Profile</button>
</Link>	
</div>
</div>


    </div>
    </div>
    </div>
    </div>}
    </>
  )
}
