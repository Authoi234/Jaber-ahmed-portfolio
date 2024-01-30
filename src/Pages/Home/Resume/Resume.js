import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Resume = () => {
    return (
        <div id='resume' className='mt-52 mb-52'>
            <div className='text-start ml-3 pl-6 mt-5'>
                <div className='pl-6'>
                    <span className='border px-3 py-1 rounded-full inline-flex items-center' data-aos="fade-up"> <FaBriefcase className='mr-2'></FaBriefcase> Resume</span>
                </div>

                <div className="pl-6" data-aos="fade-up-right">
                    <h1 className="text-7xl text-white my-12">Education & <span className="text-green-400">Experience</span></h1>
                    <p className='text-lg' data-aos="fade-up-right">I am a Scholarship holder student. I go to Romania from Bangladesh for study. I am a Volunteer from Bangladesh</p>
                </div>
                <div className='mt-6' data-aos="fade-down-left">
                    <ul className="steps steps-vertical group">
                        <li data-content="" className="py-10 step step-neutral my-3 hover:text-green-400 hover:step-primary transition-all mt-10 cursor-none"><div>
                            <div>
                                <p className='text-lg pb-3 text-start'>2024 - Present</p>
                                <h2 className='text-3xl text-white text-start'>Ethical Hacker</h2>
                                <h5 className=' text-gray-400 text-sm text-start'>B. Baria cyber squad</h5>
                                <h2 className='text-3xl text-white pt-5 text-start'>Front-End Full Stack Web Developer</h2>
                                <h5 className=" text-gray-400 text-sm  text-start">Programming Hero. Level 1, Level 2, ACC</h5>
                                <h2 className='text-3xl text-white pt-5 text-start'>Scolarship holder to Romania</h2>
                                <h5 className=" text-gray-400 text-sm  text-start">Scolarship holder from Bangladesh to Romania</h5>
                            </div>
                        </div></li>
                        <li data-content="" className="step step-neutral my-3 hover:text-green-400 hover:step-accent transition-all cursor-none"><div>
                            <div>
                                <p className='text-lg pb-3 text-start'>2019-2024</p>
                                <h2 className='text-3xl text-white text-start'>Web Developer & Blood Donner</h2>
                                <h5 className=' text-gray-400 text-sm text-start'>Blood Donate  & Programming Hero</h5>
                                <h2 className='text-3xl text-white pt-5 text-start'>Leader Of Marketing</h2>
                                <h5 className=" text-gray-400 text-sm  text-start">Market</h5>
                            </div>
                        </div></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resume;