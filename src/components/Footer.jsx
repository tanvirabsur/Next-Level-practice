import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col items-center bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-10'>
            <div>
                <Image alt='logo' height={70} width={70} src={'/ryven_co_logo 1.png'}></Image>
            </div>
            <div>
                <Image alt='logo' height={300} width={300} src={'/text-cooked-chip.png'}></Image>
              
            </div>
            <p className='text-center text-sm text-gray-500 my-4'>© 2025 Ryven Co. All rights reserved.</p>
        </div>
    );
};

export default Footer;