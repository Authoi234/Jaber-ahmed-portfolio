import React from 'react';
import LeftSideNav from './../../Pages/Navbar/LeftSideNav';
import { Outlet } from 'react-router-dom';
import RightSideNav from './../../Pages/Navbar/RightSideNav';
import { GiHamburgerMenu } from 'react-icons/gi';

const Main = () => {
    return (
        <div className='lg:flex items-center block'>
            <div className='mx-1 justify-end lg:fixed lg:top-0'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='mx-1 lg:mt-0 lg:ml-96 lg:mr-14 flex-wrap break-words'>
                <Outlet></Outlet>
            </div>
            <div className='mx-1'>
                <div className='absolute top-32 right-[43px]'>
                    <GiHamburgerMenu className='text-5xl border p-2 rounded-full cursor-pointer'></GiHamburgerMenu>
                </div>
                <div className='hidden lg:flex border py-3 border-gray-600 px-2 rounded-full' style={{ left: '93%', top: '20%', position: 'fixed' }}>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Main;