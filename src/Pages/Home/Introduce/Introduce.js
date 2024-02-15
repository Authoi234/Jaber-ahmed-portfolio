import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

const Introduce = () => {
    return (
        <div id='introduce' className='text-start ml-3 pl-6 mt-5'>
            <div data-aos="fade-up">
                <span className='border px-3 py-1 rounded-full inline-flex items-center'> <FaHome className='mr-2'></FaHome> INTRODUCE</span>
                <div className="pl-6">
                    <h1 className="text-7xl font-semibold text-white my-10">Say Hi from <span className='text-green-400'>Jaber</span>, Ethical Hacker and Developer </h1>
                </div>
                <p className="text-lg pl-6 mb-10">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                <a className='flex justify-end mb-10 no-underline' href='#portfolio'>
                    <button className='btn btn-circle w-40 h-40 p-2 overflow-hidden mr-32'><img className='animate-spin transition-all' src="https://i.ibb.co/Sntx4fg/download.png" alt="" /><FaArrowDown className='border rounded-full text-6xl -mt-40 animate-pulse'></FaArrowDown></button>
                </a>
            </div>
            <div className='flex justify-evenly pt-10'>
                <div data-aos="fade-right">
                    <h1 className='text-6xl text-green-400 font-bold'>10+</h1>
                    <p className='text-lg font-semibold'>YEARS OF <br /> EXPERIENCE</p>
                </div>
                <div data-aos="fade-left">
                    <h1 className='text-6xl text-green-400 font-bold'>182+</h1>
                    <p className='text-lg font-semibold'>PROJECTS COMPLETED ON <br /> 15 COUNTRIES</p>
                </div>
            </div>
        </div>
    );
};

export default Introduce;