import React from 'react'
import { FcAndroidOs } from 'react-icons/fc'

const Rejected = () => {
  return (
    <section className="w-full">
      <div className='w-full lg:w-[90%] mx-auto py-8'>
        <div className='flex gap-3 bg-[#D9D9D94D] py-2 px-5 mb-4 font-Inter text-sm rounded-md'>
          <div className='flex items-center'>
            <FcAndroidOs className='text-[4rem] lg:text-[8rem]' />
          </div>

          <div className='font-Inter text-sm'>
            <p className='text-2xl font-bold'>Android</p>
            <p>A competetnt UI designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, Illustrator</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rejected