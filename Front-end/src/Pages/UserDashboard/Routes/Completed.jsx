import React from 'react'
import { FcAdvertising } from 'react-icons/fc'

const Completed = () => {
  return (
    <section className="w-full">
      <div className='w-full lg:w-[90%] mx-auto py-8'>
        <div className='flex gap-3 bg-[#D9D9D94D] py-2 px-5 mb-4 font-Inter text-sm rounded-md'>
          <div className='flex items-center'>
            <FcAdvertising className='text-[4rem] lg:text-[8rem]' />
          </div>

          <div className='font-Inter text-sm'>
            <p className='text-2xl font-bold'>Campaign</p>
            <p>A competetnt UI designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, Illustrator</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Completed