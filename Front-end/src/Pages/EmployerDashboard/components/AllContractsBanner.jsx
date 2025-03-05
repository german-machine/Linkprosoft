import React from 'react'
import { Link } from 'react-router-dom'

const AllContractsBanner = () => {
  return (
    <>
       <div className='flex  w-full  justify-between'>
        <section className='bg-[#03AEFF] w-[85%] relative py-16 px-10 rounded-md '>
            <div className='relative left-3 font-Inter top-[-8px] font-bold text-white text-2xl leading-tight'>
              <h2>Linkprosoft the bridge to linking up skilled <br /> professionals to paying clients</h2>
            </div>
    
            <div className='flex absolute bottom-3 left-96 gap-2'>
              <div className='bg-white w-[15px] h-[15px] rounded-full'></div>
              <div className='bg-white w-[15px] h-[15px] rounded-full'></div>
              <div className='bg-white w-[15px] h-[15px] rounded-full'></div>
            </div>
    
          </section>
    
    
          <div className=' '>
                <Link className='bg-[#03AEFF] relative  text-white font-bold text-[15px] py-2 px-3 rounded-[7px] font-Inter'>Post Gigs</Link>
            
                </div>
        </div>
    
    </>
  )
}

export default AllContractsBanner