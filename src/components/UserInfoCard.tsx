import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function UserInfoCard({ userId }: { userId: string }) {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* top */}
            <div className='flex justify-between items-center font-medium'>
                <span className='text-gray-500 '>User Information</span>
                <Link href={'/'} className='text-blue-500 text-xs'>See all</Link>
            </div>
            {/* bottom */}
            <div className="flex flex-col gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                    <span className='text-xl text-black'>Arnold Adams</span>
                    <span className='text-sm'>@arnoldad</span>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid numquam est corporis. </p>
                <div className="flex gap-2 items-center">
                    <Image src={'/map.png'} alt='' width={16} height={16}/>
                    <span>Living in <b>Navoi</b></span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image src={'/school.png'} alt='' width={16} height={16}/>
                    <span>Went to <b>Turin polytechnic University</b></span>
                </div>
                <div className="flex gap-2 items-center">
                    <Image src={'/work.png'} alt='' width={16} height={16}/>
                    <span>Works at <b>Google Co. Ltd.</b></span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                    <Image src={'/link.png'} alt='' width={16} height={16}/>
                    <Link className='text-blue-500 font-medium' href={'/kun.uz'}>kun.uz</Link>
                    </div>
                    <div className="flex gap-1 items-center">
                    <Image src={'/date.png'} alt='' width={16} height={16}/>
                    <span>Joined in November 2024</span>
                    </div>
                </div>
                <button className='bg-blue-500 text-white text-xs rounded-md p-2'>Follow</button>
                <span className='text-red-400 self-end text-xs cursor-pointer'>Block user</span>
            </div>
        </div >
    )
}
