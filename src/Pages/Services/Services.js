import React from 'react';
import { FaStream } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='mt-40 mb-40'>
            <div className='text-start ml-3 pl-6 mt-5'>
                <div className='pl-6'>
                    <span className='border my-3 px-3 py-1 rounded-full inline-flex items-center' data-aos="fade-up"> <FaStream className='mr-2'></FaStream> SERVICES</span>
                </div>

                <div className="pl-6" data-aos="fade-up">
                    <h1 className="text-7xl text-white my-10">My <span className="text-green-400">Specializations</span></h1>
                </div>
               <div className="group group-hover:border group-hover:border-green-400 transition-all">

               </div>
               <div className="group group-hover:border group-hover:border-green-400 transition-all">

               </div>
            </div>
        </div>
    );
};

export default Services;