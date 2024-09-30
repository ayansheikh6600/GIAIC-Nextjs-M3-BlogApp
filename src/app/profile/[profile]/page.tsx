import { ProfileCard } from '@/shared';
import React from 'react'

const page = ({params}:any) => {
    console.log(params);
    
  return (
    <div className='h-dvh flex justify-center items-center'>
    <ProfileCard/>
    </div>
  )
}

export default page