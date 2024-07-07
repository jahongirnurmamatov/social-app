import Image from 'next/image'
import React from 'react'

export default function AddPost() {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      {/* avatar */}
      <Image
        width={48}
        height={48}
        src='https://images.pexels.com/photos/19082533/pexels-photo-19082533/free-photo-of-view-of-a-sunrise-from-a-flying-airplane.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        alt=''
        className='w-12 h-12  object-cover rounded-full' />
      {/* post */}
      <div className=" flex-1 ">
        {/* text input */}
        <div className="flex gap-4  ">
          <textarea name="" id="" placeholder='What is on your mind?' className='p-2 w-full bg-slate-100 rounded-lg'></textarea>
          <Image
            width={20}
            height={20}
            src='/emoji.png'
            alt=''
            className='w-5 h-5 cursor-pointer self-end' />
        </div>
        {/* post options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
          <Image
            width={20}
            height={20}
            src='/addImage.png'
            alt=''
            className='w-5 h-5 cursor-pointer self-end' />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
          <Image
            width={20}
            height={20}
            src='/addVideo.png'
            alt=''
            className='w-5 h-5 cursor-pointer self-end' />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
          <Image
            width={20}
            height={20}
            src='/addEvent.png'
            alt=''
            className='w-5 h-5 cursor-pointer self-end' />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
          <Image
            width={20}
            height={20}
            src='/poll.png'
            alt=''
            className='w-5 h-5 cursor-pointer self-end' />
            Poll
          </div>
        </div>
      </div>
    </div>
  )
}
