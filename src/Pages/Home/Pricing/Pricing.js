import React from 'react';

const Pricing = () => {
    return (
        <div className='mt-40 mb-40'>
            <div className='text-start ml-3 pl-6 mt-5'>
                <div className='pl-6'>
                    <span className='border my-3 px-3 py-1 rounded-full inline-flex items-center' data-aos="fade-up"> $ PRICING</span>
                </div>

                <div className="pl-6" data-aos="fade-up">
                    <h1 className="text-7xl text-white my-10">My <span className="text-green-400">Pricing</span></h1>
                </div>
                <div className="md:flex md:justify-center md:items-center">
                    <div className='rounded-xl py-8 px-4'>
                        <div className="card bg-base-100 w-96 shadow-xl border border-gray-600 hover:border-2 hover:border-green-400 transition-all">
                            <div className="card-body">
                                <div className='flex justify-between'>
                                    <h2 className='font-thin text-xl text-white'>BASIC</h2>
                                    <h2>
                                        Have design ready to build? <br />
                                        or small budget
                                    </h2>
                                </div>
                                <div className='my-3 flex items-end'>
                                    <h1 className='text-6xl text-green-400'>$49 </h1>
                                    <span className='text-3xl'> / hours</span>
                                </div>
                                <div className="divider divider-success mb-8"></div>
                                <div>
                                    <ul className='list-none'>
                                        <li className='list-item my-3 text-white text-lg font-thin'>Need your wireframe</li>
                                        <li className='list-item my-3 text-white text-lg font-thin'>Design with Figma, Framer</li>
                                        <li className='list-item my-3 text-white text-lg font-thin'>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                                        <li className='list-item my-3 text-white text-lg font-thin'>Remote/Online</li>
                                        <li className='list-item my-3 text-white text-lg font-thin'>Work in business days, no weekend.</li>
                                        <li className='list-item my-3 text-white text-lg font-thin'>Support 6 months</li>
                                    </ul>
                                </div>
                                <div className="card-actions mt-16">
                                    <button className="btn border w-full rounded-full bg-green-400 text-white hover:border hover:border-green-400 hover:text-green-400 text-xl h-14"><a href="#contact-us">PICK THIS PACKAGE</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-xl py-8 px-4'>
                        <div className="card bg-base-100 w-96 shadow-xl border border-gray-600 hover:border-2 hover:border-green-400 transition-all">
                            <div className="card-body">
                                <div className='flex justify-between'>
                                    <h2 className='font-thin text-xl text-white'>PREMIUM</h2>
                                    <h2>
                                        Not have any design? <br />
                                        Leave its for me
                                    </h2>
                                </div>
                                <div className='my-3 flex items-end'>
                                    <h1 className='text-6xl text-green-400'>$99 </h1>
                                    <span className='text-3xl'> / hours</span>
                                </div>
                                <div className="divider divider-success mb-5"></div>
                                <div>
                                    <ul className='list-none'>
                                        <li className='list-item my-2 text-white text-lg font-thin'>Don't need wireframe or anything</li>
                                        <li className='list-item my-2 text-white text-lg font-thin'>Design with Figma, Framer from scratch</li>
                                        <li className='list-item my-2 text-white text-lg font-thin'>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                                        <li className='list-item my-2 text-white text-lg font-thin'>Remote/Online</li>
                                        <li className='list-item my-2 text-white text-lg font-thin'>Work with both weekend</li>
                                        <li className='list-item my-2 text-white text-lg font-thin'>Support 12 months</li>
                                        <li className='list-item my-2 text-white text-lg font-thin'>Your project alway be priority</li>
                                        <li className='list-item my-2 text-white text-lg font-thin'>Customer care gifts</li>
                                    </ul>
                                </div>
                                <div className="card-actions mt-8">
                                    <button className="btn border w-full rounded-full bg-green-400 text-white hover:border hover:border-green-400 hover:text-green-400 text-xl h-14"><a href="#contact-us">PICK THIS PACKAGE</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center"><p className='text-lg text-white'>Don't find any package match with your plan! Want to setup a new tailor-made package for only you?.<span className='underline decoration-green-400 text-green-400'><a href="#contact-us">ContactUs</a></span></p></div>
            </div>
        </div>
    );
};

export default Pricing;