import Image from 'next/image'
import React from 'react'

export default function FrekworkSec() {
    return (
        <div className='flex flex-col  justify-around items-center gap-10 p-10 bg-gray-900'>
            <div className='overflow-auto'>
                <Image height={500} width={500} src={'/image 6344321.jpg'} alt='laptop img'></Image>
            </div>
            <div className='text-center '>
                <p className='text-5xl font-bold mb-3 text-white'>Open Source</p>
                <p className='text-gray-500'>This Portfolio is open source and powered by open source software.</p>
                <p className='text-gray-500'>The code is available on Github</p>
            </div>
        </div>
    )
}
