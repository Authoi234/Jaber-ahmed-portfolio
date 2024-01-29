import React from 'react';
import { FaRegUser } from 'react-icons/fa6';

const About = () => {
    return (
        <div id='about' className='mt-40 mb-40'>
            <div className='text-start ml-3 pl-6 mt-5'>
                <div className='pl-6'>
                    <span className='border px-3 py-1 rounded-full inline-flex items-center' data-aos="fade-up"> <FaRegUser className='mr-2'></FaRegUser> ABOUT</span>
                </div>

                <div className="pl-6" data-aos="fade-up">
                    <h1 className="text-7xl font-semibold text-white my-10">Every great design begin with an even <span className="text-green-400">better story</span></h1>
                </div>
                <p className="text-lg pl-6 mb-10" data-aos="fade-up">Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
            </div>
        </div>
    );
};

export default About;