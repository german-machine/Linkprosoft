import React from 'react'

const Banner = () => {
  return (
    <section className='w-[90%] lg:w-full mx-auto rounded-2xl lg:rounded-none mt-10 lg:mt-0'>
      <div className='w-full lg:w-[90%] mx-auto bg-[#03AEFF] h-[15rem] py-5 px-4 lg:rounded-md flex flex-col justify-around items-center '>
        <div className=''>
          <h2 className='font-Inter font-semibold text-white text-2xl leading-tight'>Linkprosoft the bridge to linking up skilled <br /> professionals to paying clients</h2>
        </div>

        <div className='flex  gap-2'>
          <div className='bg-white w-[.6rem] h-[.6rem] rounded-full'></div>
          <div className='bg-white w-[.6rem] h-[.6rem] rounded-full'></div>
          <div className='bg-white w-[.6rem] h-[.6rem] rounded-full'></div>
        </div>
      </div>
    </section>
  )
}

export default Banner