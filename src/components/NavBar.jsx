import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div className='rounded-3xl flex gap-3 items-center w-1/2 mx-auto justify-between p-1 sticky top-0'>
        <div>
            <Image height={40} width={40} alt='logo' src={'/ryven_co_logo 1.png'}></Image>
        </div>
        <div className='flex gap-5'>
            <Link href={'/services'}>Services</Link>
            <Link href={'/experiences'}>Experiences</Link>
            <Link href={'/works'}>Works</Link>
        </div>
        <div>
            <button className=''>Linkedin</button>
        </div>
    </div>
  )
}
