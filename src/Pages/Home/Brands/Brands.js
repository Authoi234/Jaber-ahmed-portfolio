import React from 'react';
import client1 from '../../../assets/client-1.png';
import client2 from '../../../assets/client-2.png';
import client3 from '../../../assets/client-3.png';
import client4 from '../../../assets/client-4.png';
import client5 from '../../../assets/client-5.png';
import client6 from '../../../assets/client-6.png';
import client7 from '../../../assets/client-7.png';
import client8 from '../../../assets/client-8.png';

const Brands = () => {
    const brandData = [
        {
            img: client1
        },
        {
            img: client2
        },
        {
            img: client3
        },
        {
            img: client4
        },
        {
            img: client5
        },
        {
            img: client6
        },
        {
            img: client7
        },
        {
            img: client8
        },
    ]
    return (
        <div className='my-16 mx-20'> 
            <h3 className="text-xl text-white">WORK WITH 60+ BRANDS WORLDWIDE</h3>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-10 mt-10 mx-10'>
                {
                    brandData.map(data => <div className='mx-4 my-4 opacity-60 hover:opacity-100 transition-all w-full'>
                        <img className='w-3/4' src={data.img} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Brands;