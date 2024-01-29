import React from 'react';
import { FaHome, FaStream } from 'react-icons/fa';
import { FaBriefcase, FaEnvelope, FaGripVertical, FaRegUser, FaShapes } from 'react-icons/fa6';
import { MdOutlineInsertComment } from "react-icons/md";

const RightSideNav = () => {
    return (
        <div className='w-1/6'>
                <a href="#introduce"><FaHome className='text-4xl py-2'></FaHome></a>
                <a href="#about"><FaRegUser className='text-4xl py-2'></FaRegUser></a>
                <a href="#resume"><FaBriefcase className='text-4xl py-2'></FaBriefcase></a>
                <a href="#"><FaStream className='text-4xl py-2'></FaStream></a>
                <a href="#"><FaShapes className='text-4xl py-2'></FaShapes></a>
                <a href="#"><FaGripVertical className='text-4xl py-2'></FaGripVertical></a>
                <a href="#"><MdOutlineInsertComment className='text-4xl py-2'></MdOutlineInsertComment></a>
                <a href="#"><FaEnvelope className='text-4xl py-2'></FaEnvelope></a>
        </div>
    );
};

export default RightSideNav;