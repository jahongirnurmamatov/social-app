import Image from 'next/image'
import React from 'react'

export default function ProfileCard() {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
            <div className="h-20 relative">
                <Image
                    src={'https://images.pexels.com/photos/26572408/pexels-photo-26572408/free-photo-of-silhouette-of-man-by-the-sea-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
                    fill className='rounded-md object-cover' alt='' />
                <Image src={'https://images.pexels.com/photos/19305502/pexels-photo-19305502/free-photo-of-woman-walking-with-umbrella-in-alley-with-colorful-stripes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
                    width={48} height={48} className='rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10' alt='' />
            </div>
            <div className="h-20 flex flex-col gap-2 items-center">
                <span className='font-semibold'>Jason White</span>
                <div className="flex items-center gap-4">
                    <div className="flex gap-0">
                        <Image width={12} height={12} alt='' className='rounded-full object-cover h-3 w-3'
                            src={'https://images.pexels.com/photos/26572408/pexels-photo-26572408/free-photo-of-silhouette-of-man-by-the-sea-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} />
                        <Image width={12} height={12} alt='' className='rounded-full'
                            src={'https://images.pexels.com/photos/26572408/pexels-photo-26572408/free-photo-of-silhouette-of-man-by-the-sea-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} />
                        <Image width={12} height={12} alt='' className='rounded-full'
                            src={'https://images.pexels.com/photos/26572408/pexels-photo-26572408/free-photo-of-silhouette-of-man-by-the-sea-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} />
                    </div>
                    <span className='text-xs text-gray-500'>500 Followers</span>
                </div>
                <button className='bg-blue-500 text-white text-xs p-2 rounded-md'>My Profile</button>
            </div>

        </div>
    )
}
