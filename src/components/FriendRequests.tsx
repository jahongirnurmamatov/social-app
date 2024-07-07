import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FriendRequests() {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/* top */}
        <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500 '>Friend Requests</span>
            <Link href={'/'} className='text-blue-500 text-xs'>See all</Link>
        </div>
        {/* bottom */}
        <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <Image
                width={40} height={40}
                className='w-10 h-10 rounded-full object-cover'
                 src={'https://images.pexels.com/photos/25972597/pexels-photo-25972597/free-photo-of-photographer-shadow-on-arid-barren-rocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
                 alt=''/>
                 <span>Wayne Bruce</span>
            </div>
            <div className="flex items-center gap-3 justify-end">
                <Image 
                className='cursor-pointer'
                alt='' height={20} width={20}
                src={'/accept.png'} />
                <Image 
                className='cursor-pointer'
                alt='' height={20} width={20}
                src={'/reject.png'} />
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <Image
                width={40} height={40}
                className='w-10 h-10 rounded-full object-cover'
                 src={'https://images.pexels.com/photos/25972597/pexels-photo-25972597/free-photo-of-photographer-shadow-on-arid-barren-rocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
                 alt=''/>
                 <span>Wayne Bruce</span>
            </div>
            <div className="flex items-center gap-3 justify-end">
                <Image 
                className='cursor-pointer'
                alt='' height={20} width={20}
                src={'/accept.png'} />
                <Image 
                className='cursor-pointer'
                alt='' height={20} width={20}
                src={'/reject.png'} />
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <Image
                width={40} height={40}
                className='w-10 h-10 rounded-full object-cover'
                 src={'https://images.pexels.com/photos/25972597/pexels-photo-25972597/free-photo-of-photographer-shadow-on-arid-barren-rocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
                 alt=''/>
                 <span>Wayne Bruce</span>
            </div>
            <div className="flex items-center gap-3 justify-end">
                <Image 
                className='cursor-pointer'
                alt='' height={20} width={20}
                src={'/accept.png'} />
                <Image 
                className='cursor-pointer'
                alt='' height={20} width={20}
                src={'/reject.png'} />
            </div>
        </div>
    </div>
  )
}
