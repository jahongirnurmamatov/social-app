import Image from 'next/image'
import React from 'react'

export default function Comments() {
    return (
        <div>
            {/* write */}
            <div className="flex items-center gap-4">
                <Image src={'https://images.pexels.com/photos/26077583/pexels-photo-26077583/free-photo-of-a-lone-tree-stands-on-top-of-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
                    alt='' className='w-8 h-8 rounded-full' height={32} width={32} />
                <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input className='bg-transparent outline-none flex-1' type="text" placeholder='Write a comment...' />
                    <Image alt='' src={'/emoji.png'} width={16} height={16} className='cursor-pointer' />
                </div>
            </div>
            {/* commetns */}
            <div className="flex gap-4 justify-between mt-6">
                {/* avatar */}
                <Image src={'https://images.pexels.com/photos/26077583/pexels-photo-26077583/free-photo-of-a-lone-tree-stands-on-top-of-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
                    alt='' className='w-10 h-10 rounded-full' height={40} width={40} />
                {/* description */}
                <div className="flex flex-col gap-2 flex-1">
                    <span className='font-medium'>Sano Mani</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore asperiores nulla qui, ratione quisquam corporis consequuntur quia quibusdam fugiat! Est neque vel, sit optio voluptatibus nostrum tempora culpa excepturi voluptatem?</p>
                    <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                        <div className='flex gap-4 items-center'>
                            <Image src={'/like.png'} alt='' width={12} height={12} className='cursor-pointer w-3  h-3 ' />
                            <span className='text-gray-300'>|</span>
                            <span className='text-gray-500'>123</span>
                        </div>
                        <div className="">Reply</div>

                    </div>
                </div>
                {/* icon */}
                <Image src={'/more.png'} alt='' width={16} height={16} className='cursor-pointer w-4  h-4 ' />

            </div>
        </div>
    )
}
