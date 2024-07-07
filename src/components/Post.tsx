import Image from 'next/image'
import React from 'react'
import Comments from './Comments'

export default function Post() {
    return (
        <div className='flex flex-col gap-4'>
            {/* user */}
            <div className="flex items-center justify-between">
                <div className='flex items-center gap-4'>
                    <Image
                        height={40} width={40}
                        src='https://images.pexels.com/photos/26691032/pexels-photo-26691032/free-photo-of-beautiful-woman-in-beige-jacket-posing-by-love-padlocks-on-fence.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt=''
                        className='w-10 h-10 rounded-full object-cover' />
                    <span className='font-medium'>Janice Maurice</span>
                </div>
                <Image
                        height={16} width={16}
                        src='/more.png'
                        alt=''
                        className='' />
            </div>
            {/* descrpton */}
            <div className="flex flex-col gap-4">
                <div className='w-full min-h-96 relative'>
                <Image 
                        src='https://images.pexels.com/photos/17131269/pexels-photo-17131269/free-photo-of-rocks-in-antelope-canyon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        fill
                        className='object-cover rounded-md' alt='' />
                        
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consectetur quis et incidunt veritatis nesciunt, harum ullam earum, at nulla asperiores dicta libero maxime officia dignissimos! Numquam odio exercitationem reiciendis?</p>
            </div>
            {/* interaction */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8 ">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image  src='/like.png' alt='' width={16} height={16}  className='cursor-pointer'/>
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>123 <span className='hidden md:inline'>Likes</span></span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image  src='/comment.png' alt='' width={16} height={16}  className='cursor-pointer'/>
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>123 <span className='hidden md:inline'>Comments</span></span>
                    </div>
                </div>
                <div className="">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image  src='/share.png' alt='' width={16} height={16}  className='cursor-pointer'/>
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>123 <span className='hidden md:inline'>Shares</span></span>
                    </div>
                </div>
            </div>
            <Comments/>
        </div>
    )
}
