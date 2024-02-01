import React from 'react';
import { FaGripVertical } from 'react-icons/fa6';
import '../../../App.css';
import githubProfile from '../../../assets/githubProfile.png'
import githubProfileSongHalf from '../../../assets/examsongjavahalf.png'
import githubProfileSongHalf2 from '../../../assets/examsongjavahalf2.png'
import unknownProject from '../../../assets/unknownProject.jpg'
import emaJohnSimple from '../../../assets/ema-john-simple.png'
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
    return (
        <div id='portfolio' className='text-start ml-3 pl-6 my-40'>
            <div data-aos="fade-up" className='my-5'>
                <span className='border px-3 py-1 rounded-full inline-flex items-center'> <FaGripVertical className='mr-2'></FaGripVertical>PORTFOLIO</span>
                <h1 className="text-6xl font-semibold text-white my-10 flex">Featured <span className='text-green-400 mx-5'>Projects</span> <a href="https://github.com/Jaber4770" target="_blank" rel="noopener noreferrer"><FaGithub className='bg-white text-black hover:text-white hover:bg-black rounded-full transition-all'></FaGithub></a></h1>
            </div>
            <div className="rounded-lg group my-10" data-aos="fade-up">
                <div className='w-full rounded-2xl lg:flex lg:justify-end items-end' style={{ backgroundImage: `url(${githubProfile})`, width: '60vw', height: '70vh', backgroundSize: 'cover', }} >
                    <button className="btn group-hover:bg-white group-hover:text-black px-5 py-1 mx-4 my-4 transition-all hover">React</button>
                    <button className="btn group-hover:bg-white group-hover:text-black px-5 py-1 mx-4 my-4 transition-all hover">Javascript</button>
                    <button className="btn group-hover:bg-white group-hover:text-black px-5 py-1 mx-4 my-4 transition-all hover">Html</button>
                    <button className="btn group-hover:bg-white group-hover:text-black px-5 py-1 mx-4 my-4 transition-all hover">Css</button>
                </div>
                <a href='https://github.com/Jaber4770/Genius-Car-Mechanics' target="_blank" rel="noopener noreferrer" className='no-underline'><h1 className="text-4xl text-white group-hover:underline group-hover:decoration-white mt-5">Genius Car Mechanics - car repair website</h1></a>
            </div>
            <div data-aos="fade-up" className="my-10 split-image-container" style={{ clipPath: 'polygon(1% 0%, 99% 1%, 99% 89%, 93% 95%, 86% 99%, 81% 99%, 70% 100%, 26% 99%, 19% 96%, 15% 90%, 9% 88%, 4% 92%, 0% 96%)' }}>
                <div className=" w-1/4" style={{ border: '5px solid rgb(17 24 39)', height: '70vh' }}>
                    <img className='w-full h-full' src={require('../../../assets/project-view.png')} alt="" />
                </div>
            </div>
            <div data-aos="fade-up" className="rounded-lg group my-10">
                <div className='flex'>
                    <div className='w-full rounded-2xl lg:flex lg:justify-end items-end mx-2' style={{ backgroundImage: `url(${githubProfileSongHalf})`, width: '29.5vw', height: '70vh', backgroundSize: 'cover', }} >
                        <button className="btn group-hover:bg-white group-hover:text-black px-5 py-1 mx-4 my-4 transition-all hover">Java</button>
                    </div>
                    <div className='w-full rounded-2xl lg:flex lg:justify-end items-end mx-2' style={{ backgroundImage: `url(${githubProfileSongHalf2})`, width: '29.5vw', height: '70vh', backgroundSize: 'cover', }} >

                    </div>
                </div>
                <a href='https://github.com/Jaber4770/versity_exam_java_music' target="_blank" rel="noopener noreferrer" className='no-underline'><h1 className="text-4xl text-white group-hover:underline group-hover:decoration-white mt-5">versity_exam_java_music - This project was my exam on Versity.</h1></a>
            </div>
            <div className="rounded-lg group my-10" data-aos="fade-up">
                <div className='w-full rounded-2xl lg:flex lg:justify-end items-end' style={{ backgroundImage: `url(${unknownProject})`, width: '60vw', height: '70vh', backgroundSize: 'cover', }} >
                    <button className="btn group-hover:bg-white group-hover:text-black px-5 py-1 mx-4 my-4 transition-all hover">React</button>
                    <button className="btn group-hover:bg-white group-hover:text-black px-5 py-1 mx-4 my-4 transition-all hover">TS</button>
                    <button className="btn group-hover:bg-white group-hover:text-black px-5 py-1 mx-4 my-4 transition-all hover">Html</button>
                    <button className="btn group-hover:bg-white group-hover:text-black px-5 py-1 mx-4 my-4 transition-all hover">Css</button>
                </div>
             <h1 className="text-4xl text-white group-hover:underline group-hover:decoration-white mt-5">Hinterland</h1>
            </div>
            <div className="rounded-lg group my-10" data-aos="fade-up">
                <div className='w-full rounded-2xl lg:flex lg:justify-end items-end' style={{ backgroundImage: `url(${emaJohnSimple})`, width: '60vw', height: '70vh', backgroundSize: 'cover', }} >
                    <button className="btn group-hover:bg-white group-hover:text-black px-5 py-1 mx-4 my-4 transition-all hover">React</button>
                    <button className="btn group-hover:bg-white group-hover:text-black px-5 py-1 mx-4 my-4 transition-all hover">JS</button>
                    <button className="btn group-hover:bg-white group-hover:text-black px-5 py-1 mx-4 my-4 transition-all hover">Html</button>
                    <button className="btn group-hover:bg-white group-hover:text-black px-5 py-1 mx-4 my-4 transition-all hover">Css</button>
                </div>
                <a href='https://github.com/Jaber4770/Genius-Car-Mechanics' target="_blank" rel="noopener noreferrer" className='no-underline'><h1 className="text-4xl text-white group-hover:underline group-hover:decoration-white mt-5">Ema John Shopping Website - For Shopping online</h1></a>
            </div>
        </div>
    );
};

export default Portfolio;