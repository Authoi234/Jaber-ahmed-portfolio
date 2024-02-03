import React from 'react';
import { MdOutlineInsertComment } from "react-icons/md";

const testimonialData = [
    {
        authorImg: 'https://i.ibb.co/pX7KtPP/Fujiko-Fujio.jpg',
        name: 'Fujiko & Fojio',
        prev: 3,
        id: 1,
        next: 2,
        paragraph: `"Jaber - A Developer with the creativity, professional and master of code. Much more than what i'm expect. High quality product & flexiable price. Recommended!"`
    },
    {
        authorImg: 'https://i.ibb.co/vzCmSV1/Notch-receives-the-Pioneer-Award-at-GDC-2016-cropped.jpg',
        name: 'Markus Alexej Persson',
        prev: 1,
        id: 2,
        next: 3,
        paragraph: `"Jaber was a real pleasure to work with and we look 
        forward to working with him again. He's definitely the kind of 
        designer that you can trust with any project from A-Z."`
    },
    {
        authorImg: 'https://i.ibb.co/w6c0fjt/Jens-Bergensten-Minecon.jpg',
        name: 'Jens Bergensten',
        prev: 2,
        id: 3,
        next: 1,
        paragraph: `"Extremely profressional and fast service!. Jaber is a master
        of code and he also very creative. We done 5 projects with
        him and certain will continue."`
    }
];

const Testimonial = () => {
    return (
        <div className='text-start mt-5'>
            <div data-aos="fade-up" className=' ml-3 pl-4'>
                <span className='border px-3 py-1 rounded-full inline-flex items-center'> <MdOutlineInsertComment className='mr-2'></MdOutlineInsertComment> TESTIMONIAL</span>
                <div className="pl-6">
                    <h1 className="text-6xl font-semibold text-white my-10">Trusted By <span className='text-green-400'>Hundered Clients</span></h1>
                </div>
            </div>
            <div className="carousel w-full my-5 p-2">
                {
                    testimonialData.map(slide => <div id={`slide${slide.id}`} className="carousel-item w-full p-8">
                        <div className="mx-5 pl-5">
                            <div className="border-2 border-gray-700 px-5 py-4 group">
                                <div className='flex'>
                                    <img src={slide.authorImg} className='avatar w-24 rounded-full' alt="" />
                                    <div className="pl-3">
                                        <h1 className='text-white group-hover:text-green-400 transition-all text-lg'>{slide.name}</h1>
                                    </div>
                                </div>
                                <div className='break-words px-4 py-3 text-xl text-white'>{slide.paragraph}</div>
                            </div>
                            <div className='mx-4 my-3'>
                                <a href={`#slide${slide.prev}`} className="btn btn-circle mx-2 btn-info text-white">❮</a>
                                <a href={`#slide${slide.next}`} className="btn btn-circle mx-2 btn-info text-white">❯</a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Testimonial;