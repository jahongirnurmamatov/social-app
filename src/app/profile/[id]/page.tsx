import Feed from '@/components/Feed'
import LeftMenu from '@/components/LeftMenu'
import RightMenu from '@/components/RightMenu'
import Image from 'next/image'
import React from 'react'

export default function ProfilePage() {
  return (
    <div className='flex gap-6 pt-6'>
    <div className="hidden xl:block w-[20%]"><LeftMenu type='profile' /></div>
    <div className="w-full lg:w-[70%] xl:w-[50%]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-64 relative">
            <Image src={'https://images.pexels.com/photos/11379609/pexels-photo-11379609.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
             alt='' fill className='object-cover rounded-lg'/>
            <Image src={'https://images.pexels.com/photos/26699373/pexels-photo-26699373/free-photo-of-a-pelican-stands-on-a-post-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
             alt='' height={128} width={128} className='h-32 absolute w-32 object-cover left-0 right-0 -bottom-16 ring-4 ring-white rounded-full m-auto  '/>
          </div>
          <h1 className='mt-20 mb-4 text-2xl font-medium'>Maurice Benjamin</h1>
          <div className="flex items-center justify-center gap-12 mb-4">
            <div className="flex flex-col">
              <span className='font-medium'>123</span>
              <span className='text-sm'>Posts</span>
            </div>
            <div className="flex flex-col">
              <span className='font-medium'>21K</span>
              <span className='text-sm'>Followers</span>
            </div>
            <div className="flex flex-col">
              <span className='font-medium'>1.2K</span>
              <span className='text-sm'>Following</span>
            </div>
          </div>
        </div>
        <Feed />
      </div>
    </div>
    <div className="hidden lg:block w-[30%]"><RightMenu  userId='test'/></div>
    
  </div>
  )
}
