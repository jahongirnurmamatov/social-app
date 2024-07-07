import Image from 'next/image'
import React from 'react'

export default function Advertisemnt({ size }: { size: 'sm' | 'md' | 'lg' }) {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
      {/* top */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src={'/more.png'} alt='' width={16} height={16} />
      </div>
      {/* bottom */}
      <div className={`flex flex-col mt-4 ${size === 'sm' ? 'gap-2' : 'gap-4'}`}>
        <div className={`relative w-full ${size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'}`}>
          <Image className='object-cover'
            src={'https://images.pexels.com/photos/26316180/pexels-photo-26316180/free-photo-of-woman-holding-brown-leather-bag.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} alt='' fill />
        </div>
        <div className="flex items-center gap-4 ">
          <Image className='rounded-full object-cover w-6 h-6'
            height={24} width={24}
            src={'https://images.pexels.com/photos/26316180/pexels-photo-26316180/free-photo-of-woman-holding-brown-leather-bag.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} alt='' />
          <span className='text-blue-500 font-medium'>New Arrivals</span>
        </div>
        <p className={size==='sm'?'text-xs' : 'text-sm'}>
          {size==='sm' ? 'Lorem ipsum sadasdkqw pasodkasdqw xpodsaodqw casxczx cxzcsad.' :
           size === 'md' ? 'Lorem ipsum sadasdkqw pasodkasdqw xpodsaodqw casxczx cxzcsad.Lorem ipsum sadasdkqw pasodkasdqw xpodsaodqw casxczx cxzcsad.' : 
           'Lorem ipsum sadasdkqw pasodkasdqw xpodsaodqw casxczx cxzcsad. Lorem ipsum sadasdkqw pasodkasdqw xpodsaodqw casxczx cxzcsad. Lorem ipsum sadasdkqw pasodkasdqw xpodsaodqw casxczx cxzcsad.'}
        </p>
        <button className='p-2 bg-gray-200 text-gray-500 text-xs rounded-lg '>Learn more</button>
      </div>
    </div>
  )
}
