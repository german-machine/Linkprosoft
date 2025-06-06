import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Notifications = () => {
  return (
    <section className="w-full">
      <div className='w-full lg:w-[95%] py-8'>
        <div className='flex gap-3 bg-[#D9D9D94D] py-2 px-5 mb-4 font-Inter text-sm rounded-md'>
          <div className='flex items-center'>
            <FcGoogle className='text-[4rem] lg:text-[5rem]' />
          </div>

          <div className='font-Inter text-sm'>
            <p className='text-2xl font-bold'>Google</p>
            <p>A competetnt UI designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, Illustrator</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notifications