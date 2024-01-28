import React from 'react';
import { FaInstagram, FaTwitter, FaDribbble, FaGithub } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

const LeftSideNav = () => {
    return (
        <div className='border border-neutral rounded-3xl h-[100vh] mr-3'>
            <div className="card w-auto md:w-96 bg-base-100 shadow-xl">
                <div className='flex items-center justify-between mx-7 mt-4'>
                    <div className="indicator">
                        <span className="indicator-item -mr-2 border border-gray-400 px-2 rounded-full ">J</span>
                        <h1 className='text-white text-4xl font-semibold'>Jack</h1>
                    </div>
                    <p className='text-white'>Ethical Hacker <br /> & Developer</p>
                </div>
                <figure className="px-10 pt-6 rounded-xl size-3/4 ml-10">
                    <img src="https://i.ibb.co/gVYmKZD/1681418117157.jpg" alt="" className="rounded-3xl avatar w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-2xl h-5 text-white font-bold">jaber.ahmed4770@gmail.com</h2>
                    <p className='text-2xl h-5 text-white font-bold'>Lives in Bucharest, Romania</p>
                    <p className="mt-4 text-lg text-gray-400">© 2024 Jaber Ahmed. All Rights Reserved</p>
                    <div className='my-4 flex items-center justify-center'>
                        <FaInstagram className='cursor-pointer mx-2 p-5 text-6xl border rounded-full text-gray-400 border-gray-400 hover:border-green-400 hover:border-2 hover:text-green-400 transition-all'></FaInstagram>
                        <FaTwitter className='cursor-pointer mx-2 p-5 text-6xl border rounded-full text-gray-400 border-gray-400 hover:border-green-400 hover:border-2 hover:text-green-400 transition-all'></FaTwitter>
                        <FaDribbble className='cursor-pointer mx-2 p-5 text-6xl border rounded-full text-gray-400 border-gray-400 hover:border-green-400 hover:border-2 hover:text-green-400 transition-all'></FaDribbble>
                        <FaGithub className='cursor-pointer mx-2 p-5 text-6xl border rounded-full text-gray-400 border-gray-400 hover:border-green-400 hover:border-2 hover:text-green-400 transition-all'></FaGithub>
                    </div>
                    <button className="w-full py-4 text-xl rounded-full border bg-green-400 text-white  hover:border-green-400 hover:bg-neutral hover:text-green-400 transition-all flex justify-center items-center"> <GoMail className='mr-2'></GoMail> HIRE ME!</button>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;