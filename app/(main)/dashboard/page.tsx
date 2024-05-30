import React from 'react'
import Maindashboard from '../_components/Maindashboard'

function page() {
  return (
    <div className='flex flex-col justify-center bg-card flex-1  py-8 px-8 h-full w-11/12  '>
        <div className='flex-1 px-10'>
        <Maindashboard/>

        </div>
    </div>
  )
}

export default page
