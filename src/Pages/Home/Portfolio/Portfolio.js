import React from 'react';
import { FaGripVertical } from 'react-icons/fa6';

const Portfolio = () => {
    return (
        <div id='portfolio' className='text-start ml-3 pl-6 my-40'>
            <div data-aos="fade-up" className='my-5'>
                <span className='border px-3 py-1 rounded-full inline-flex items-center'> <FaGripVertical className='mr-2'></FaGripVertical>PORTFOLIO</span>
                <h1 className="text-7xl font-semibold text-white my-10">Featured <span className='text-green-400'>Projects</span></h1>
            </div>
        </div>
    );
};

export default Portfolio;