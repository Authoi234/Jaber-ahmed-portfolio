import React from 'react';
import { FaBezierCurve, FaCode, FaStream } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa6';
import { IoRocketOutline } from "react-icons/io5";

const Services = () => {
    return (
        <div id='services' className='mt-40 mb-40'>
            <div className='text-start ml-3 pl-6 mt-5'>
                <div className='pl-6'>
                    <span className='border my-3 px-3 py-1 rounded-full inline-flex items-center' data-aos="fade-up"> <FaStream className='mr-2'></FaStream> SERVICES</span>
                </div>

                <div className="pl-6" data-aos="fade-up">
                    <h1 className="text-7xl text-white my-10">My <span className="text-green-400">Specializations</span></h1>
                </div>
                <div className="pl-6 my-5 card card-side bg-base-100 shadow-xl transition-all border-gray-400 border-2 hover:border-green-400 group">
                    <div className="flex justify-between p-8">
                        <div>
                            <h2 className="text-3xl text-white py-3">Website Design</h2>
                            <p className='text-md'>I created digital products with unique ideas use Figma & Framer</p>
                            <p className="text-white py-4 group-hover:underline decoration-gray-50">24 Projects</p>
                        </div>
                        <div className='lg:ml-40'>
                            <FaBezierCurve className='text-green-400 text-3xl'></FaBezierCurve>
                        </div>
                    </div>
                </div>
                <div className="pl-6 my-5 card card-side bg-base-100 shadow-xl transition-all border-gray-400 border-2 hover:border-green-400 group">
                    <div className="flex justify-between p-8">
                        <div>
                            <h2 className="text-3xl text-white py-3">Development</h2>
                            <p className='text-md'>I build website go live with Framer, Webflow or WordPress</p>
                            <p className="text-white py-4 group-hover:underline decoration-gray-50">126 Projects</p>
                        </div>
                        <div className='lg:ml-40'>
                            <FaCode className='text-green-400 text-3xl'></FaCode>
                        </div>
                    </div>
                </div>
                <div className="pl-6 my-5 card card-side bg-base-100 shadow-xl transition-all border-gray-400 border-2 hover:border-green-400 group">
                    <div className="flex justify-between p-8">
                        <div>
                            <h2 className="text-3xl text-white py-3">Ethical Hacking</h2>
                            <p className='text-md'>I am in cyber71. I hack to keep companies and people safe.</p>
                            <p className="text-white py-4 group-hover:underline decoration-gray-50">8 Projects</p>
                        </div>
                        <div className='lg:ml-40'>
                            <IoRocketOutline className='text-green-400 text-3xl'></IoRocketOutline>
                        </div>
                    </div>
                </div>
                <div className="pl-6 my-5 card card-side bg-base-100 shadow-xl transition-all border-gray-400 border-2 hover:border-green-400 group">
                    <div className="flex justify-between p-8">
                        <div>
                            <h2 className="text-3xl text-white py-3">Website Building</h2>
                            <p className='text-md'>I build many websites by Go, Js, React js, Python, Node, Express, Redux, Nuclei, Linux, Html, Css, Mongodb etc.</p>
                            <p className="text-white py-4 group-hover:underline decoration-gray-50">538 Projects</p>
                        </div>
                        <div className='lg:ml-40'>
                            <FaLaptopCode className='text-green-400 text-3xl'></FaLaptopCode>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;