import React, { useState } from 'react';
import '../../../App.css'
import { FaShapes } from 'react-icons/fa';
import nodejsImg from '../../../assets/nodejs.png';
import JavaScriptImg from '../../../assets/JavaScript.png';
import ReactjsImg from '../../../assets/React.png';
import SQliImg from '../../../assets/SQLI.jpg';
import es6Img from '../../../assets/ES6.jpg';
import htmlImg from '../../../assets/Html5.png'
import cssImg from '../../../assets/css3.png';
import bootstrapImg from '../../../assets/Bootstrap.png';
import mongodbImg from '../../../assets/mongodb.png';
import tailwindImg from '../../../assets/tailwind.png';
import reduxImg from '../../../assets/redux.png';
import XSSImg from '../../../assets/XSS.png';
import csrfImg from '../../../assets/csrf.jpg';
import expressImg from '../../../assets/ExpressJs.png';
import lfiImg from '../../../assets/LFI.png';
import BrupsuitImg from '../../../assets/brupsuit.png';
import nessusImg from '../../../assets/nessus.png';
import ffufImg from '../../../assets/FFUF.jpg';
import necleiImg from '../../../assets/necleu.png';
import dirsearchImg from '../../../assets/dirsearch.jpg';
import wpscanImg from '../../../assets/wpscan.jpg';
import linuxImg from '../../../assets/linux.png';
import nmapImg from '../../../assets/nmap.png';
import osintImg from '../../../assets/osint.jpg';
import figmaImg from '../../../assets/figma.png';
import framerImg from '../../../assets/framer.png';
import goImg from '../../../assets/go.png';
const Skills = () => {
    const [filterPercent, setFilterPercent] = useState('95');
    const [hideVisible, setHideVisible] = useState('flex');
    const advantages = [
        {
            name: 'Node Js',
            percentage: '91%',
            img: nodejsImg
        },
        {
            name: 'Javascript',
            percentage: '98%',
            img: JavaScriptImg
        },
        {
            name: 'React Js',
            percentage: '99%',
            img: ReactjsImg
        },
        {
            name: 'SQLI',
            percentage: '100%',
            img: SQliImg
        },
        {
            name: 'ES6',
            percentage: '99%',
            img: es6Img
        },
        {
            name: ' HTML5',
            percentage: '97%',
            img: htmlImg
        },
        {
            name: 'CSS3',
            percentage: '95%',
            img: cssImg
        },
        {
            name: 'Bootstrap',
            percentage: '100%',
            img: bootstrapImg
        },
        {
            name: 'MongoDB',
            percentage: '92%',
            img: mongodbImg
        },
        {
            name: 'Tailwind CSS',
            percentage: '99%',
            img: tailwindImg
        },
        {
            name: 'Redux',
            percentage: '98%',
            img: reduxImg
        },
        {
            name: 'Express Js',
            percentage: '99%',
            img: expressImg
        },
        {
            name: 'XSS',
            percentage: '98%',
            img: XSSImg
        },
        {
            name: 'CSRF',
            percentage: '99%',
            img: csrfImg
        },
        {
            name: 'LFI',
            percentage: '91%',
            img: lfiImg
        },
        {
            name: 'BurpSuite',
            percentage: '99%',
            img: BrupsuitImg
        },
        {
            name: 'Nessus',
            percentage: '99%',
            img: nessusImg
        },
        {
            name: 'FFUF',
            percentage: '95%',
            img: ffufImg
        },
        {
            name: 'Dirsearch',
            percentage: '99%',
            img: dirsearchImg
        },
        {
            name: 'Nuclei',
            percentage: '99%',
            img: necleiImg
        },
        {
            name: 'WpScan',
            percentage: '100%',
            img: wpscanImg
        },
        {
            name: 'Linux',
            percentage: '100%',
            img: linuxImg
        },
        {
            name: 'Nmap',
            percentage: '100%',
            img: nmapImg
        },
        {
            name: 'OSINT',
            percentage: '100%',
            img: osintImg
        },
        {
            name: 'Figma',
            percentage: '91%',
            img: figmaImg
        },
        {
            name: 'Framer',
            percentage: '85%',
            img: framerImg
        },
        {
            name: 'Go',
            percentage: '80%',
            img: goImg
        },
    ];

    const handleSeeAllBtn = () => {
        setHideVisible('hidden');
        setFilterPercent('0');
    }

    return (
        <div id='skills' className='text-start ml-3 pl-6 my-40'>
            <div data-aos="fade-up" className='my-5'>
                <span className='border px-3 py-1 rounded-full inline-flex items-center'> <FaShapes className='mr-2'></FaShapes>MY SKILLS</span>
                <h1 className="text-7xl font-semibold text-white my-10">My <span className='text-green-400'>Advantages</span></h1>
            </div>
            <div className='text-center'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5' data-aos="zoom-in">
                    {
                        advantages.filter(advantage => advantage.percentage >= filterPercent).map(advantage => <div className='my-4 mx-4 group tooltip tooltip-top' data-tip={`Jaber is the master of ${advantage.name}`} style={{ animation: 'rotatation 0.5s linear infinite', transition: 'all 3s ease' }}>
                            <div className='shadow-2xl shadow-gray-600 border border-gray-700 rounded-full hover:shadow-gray-400 transition-all py-5 px-3 hover:translate-x-3 hover:scale-y-110 hover:rotate-3'>
                                <img className='w-full rounded-lg' src={advantage.img} alt="" />
                                <h1 className="text-3xl py-2  text-green-400 font-semibold">{advantage.percentage}</h1>
                            </div>
                            <h2 className="text-2xl text-white group-hover:underline group-hover:decoration-wavy group-hover:decoration-green-400">{advantage.name}</h2>
                        </div>)
                    }
                </div>
                <div className="flex justify-center items-center">
                    <button className={`btn btn-outline w-1/5 btn-primary ${hideVisible}`} onClick={handleSeeAllBtn}>See All</button>
                </div>
            </div>
        </div>
    );
};

export default Skills;