import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Birthdays() {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      {/* top */}
      <div className=' font-medium'>
            <span className='text-gray-500 '>Birthdays</span>
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
                <button className='bg-blue-500 text-white text-xs px-2 py-1 rounded-md'>Celebrate</button>
            </div>
        </div>
        {/* upcoming */}
        <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image
                width={24} height={24}
                 src={'/gift.png'}
                 alt=''/>
        <Link href={'/'} className='flex flex-col gap-1 text-xs'>
        <span className='text-gray-700'>Upcoming Birthdays</span>
        <span className='text-gray-500'>See the other birthdays</span>
        </Link>
        </div>
    </div>
  )
}
