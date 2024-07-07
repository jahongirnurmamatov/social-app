'use client'
import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

export default function Navbar() {
    return (
        <div className='flex h-24 items-center justify-between'>
            {/* left */}
            <div className='md:hidden lg:block w-[20%]'>
                <Link href={'/'} className='font-semibold text-xl text-blue-500'>Uz<span className='font-bold text-blue-800'>BOOK</span></Link>
            </div>
            {/* center */}
            <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
                {/* Links */}
                <div className="flex gap-6 text-gray-600">
                    <Link href={'/'} className='flex gap-2 items-center'>
                        <Image src='/home.png' alt='Homepage' width={16} height={16} className='w-4 h-4' />
                        <span>Homepage</span>
                    </Link>
                    <Link href={'/'} className='flex gap-2 items-center'>
                        <Image src='/friends.png' alt='Friends' width={16} height={16} className='w-4 h-4' />
                        <span>Friends</span>
                    </Link>
                    <Link href={'/'} className='flex gap-2 items-center'>
                        <Image src='/stories.png' alt='Stories' width={16} height={16} className='w-4 h-4' />
                        <span>Stories</span>
                    </Link>

                </div>
                <div className="hidden xl:flex p-2 items-center bg-slate-100 rounded-xl ">
                    <input type="text" placeholder='Search...' className='bg-transparent outline-none'/>
                    <Image src='/search.png' alt='' width={20} height={20} />
                </div>
            </div>
            {/* right */}
            <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
                <ClerkLoading>
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">   </div>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className='cursor-pointer'>
                            <Image alt='' src={'/people.png'} height={20} width={20}/>
                        </div>
                        <div className='cursor-pointer'>
                            <Image alt='' src={'/messages.png'} height={20} width={20}/>
                        </div>
                        <div className='cursor-pointer'>
                            <Image alt='' src={'/notifications.png'} height={20} width={20}/>
                        </div>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <div className='flex items-center gap-2 text-sm'>
                            <Image alt='' src='/login.png' width={20} height={20}/>
                            <Link href={'/sign-in'}>Login/Register
                            </Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>
                <MobileMenu />
            </div>
        </div>
    )
}
