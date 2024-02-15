import React from 'react';
import { FaHome, FaStream } from 'react-icons/fa';
import { FaBriefcase, FaEnvelope, FaFacebook, FaGripVertical, FaLinkedin, FaRegUser, FaShapes, FaYoutube } from 'react-icons/fa6';
import { MdOutlineInsertComment } from "react-icons/md";

const RightSideNav = ({ isDrawer }) => {
    return (
        <div className='w-1/6'>
            {isDrawer && <h1 className='text-3xl'>Menu</h1>}
            <a href="#introduce"><FaHome className={isDrawer ? 'text-6xl py-4' : 'text-4xl py-2'}></FaHome></a>
            <a href="#about"><FaRegUser className={isDrawer ? 'text-5xl py-4' : 'text-4xl py-2'}></FaRegUser></a>
            <a href="#resume"><FaBriefcase className={isDrawer ? 'text-6xl py-4' : 'text-4xl py-2'}></FaBriefcase></a>
            <a href="#services"><FaStream className={isDrawer ? 'text-6xl py-4' : 'text-4xl py-2'}></FaStream></a>
            <a href="#skills"><FaShapes className={isDrawer ? 'text-6xl py-4' : 'text-4xl py-2'}></FaShapes></a>
            <a href="#portfolio"><FaGripVertical className={isDrawer ? 'text-6xl py-4' : 'text-4xl py-2'}></FaGripVertical></a>
            <a href="#testimonial"><MdOutlineInsertComment className={isDrawer ? 'text-6xl py-4' : 'text-4xl py-2'}></MdOutlineInsertComment></a>
            <a href="#contact-us"><FaEnvelope className={isDrawer ? 'text-6xl py-4' : 'text-4xl py-2'}></FaEnvelope></a>
            {isDrawer && <h1 className='text-2xl'>Social</h1>}
            {isDrawer && <div className='flex justify-center items-center'>
                <a href="https://www.facebook.com/Jaber.Ahmed4770" className='text-blue-500 bg-white rounded-full mx-2 mt-3'><FaFacebook></FaFacebook></a>
                <a href="https://www.youtube.com/@Jack_Sargey" className='text-red-500 bg-white mask mask-squircle mx-2'><FaYoutube></FaYoutube></a>
                <a href="https://www.linkedin.com/in/jaber-ahmed-7175a11b0/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-blue-500 bg-white mask mask-squircle mx-2'><FaLinkedin></FaLinkedin></a>
            </div>}

        </div>
    );
};

export default RightSideNav;