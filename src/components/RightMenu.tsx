import React from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Advertisemnt from './Advertisemnt'

export default function RightMenu({userId}:{userId?:string}) {
  return (
    <div className='flex flex-col gap-6 '>
      <FriendRequests />
      <Birthdays />
      <Advertisemnt  size='md'/>
    </div>
  )
}
