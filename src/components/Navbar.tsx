import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className='flex h-24 items-center justify-between'>
            {/* left */}
            <div className='md:hidden lg:block w-[20%]'>
                <Link href={'/'} className='font-semibold text-xl text-blue-500'>Uz<span className='font-bold text-blue-800'>BOOK</span></Link>
            </div>
            {/* center */}
            <div className="hidden md:flex w-[50%] text-sm">
                {/* Links */}
                <div className="flex gap-6 text-gray-600">
                    <Link href={'/'} className='flex gap-2 items-center'>
                        <Image src='/home.png' alt='Homepage' width={16} height={16} className='w-4 h-4'/>
                        <span>Homepage</span>
                    </Link>
                    <Link href={'/'} className='flex gap-2 items-center'>
                        <Image src='/friends.png' alt='Friends' width={16} height={16} className='w-4 h-4'/>
                        <span>Friends</span>
                    </Link>
                    <Link href={'/'} className='flex gap-2 items-center'>
                        <Image src='/stories.png' alt='Stories' width={16} height={16} className='w-4 h-4'/>
                        <span>Stories</span>
                    </Link>

                </div>
            </div>
            {/* right */}
            <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
                <MobileMenu />
            </div>
        </div>
    )
}
