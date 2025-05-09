import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Notifications = () => {
  return (
    <section className="w-full">
      <div className='w-full lg:w-[90%] mx-auto py-8'>
        <div className='flex bg-[#D9D9D94D] py-2 px-5 mb-4 font-Inter text-sm rounded-md'>
        <div className=''>
        <FcGoogle className='text-[8rem]' />
        </div>

        <div className='font-Inter text-sm'>
          <p className='text-2xl font-bold'>Google</p>
          <p>A competetnt UI designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, Illustrator and front end toools HTML, CSS , JavaScript</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Notifications