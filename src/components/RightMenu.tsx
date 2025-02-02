import React from 'react'
import FriendRequests from './FriendRequests'
import Birthdays from './Birthdays'
import Advertisemnt from './Advertisemnt'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'

export default function RightMenu({userId}:{userId?:string}) {
  return (
    <div className='flex flex-col gap-6 '>
      {userId ? (<>
      <UserInfoCard userId={userId}/>
      <UserMediaCard userId={userId} /> 
      </>) : null}
      <FriendRequests />
      <Birthdays />
      <Advertisemnt  size='md'/>
    </div>
  )
}
