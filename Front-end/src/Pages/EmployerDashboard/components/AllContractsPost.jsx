import React from 'react'
import { Link } from 'react-router-dom'
import box from '../assets/box.svg'

const AllContractsPost = () => {
  return (
    <>
    <section>
    <div className='font-Inter text-xl mt-6 font-semibold'>
        <h2>All Contracts <span className='pl-3'>(0)</span></h2>
      </div>

      <div className='w-[100%] mt-12 m-auto'>
        <Link className='text-center flex flex-col m-auto w-[20%]'>
            <img src={box} alt="" />
            <span className='font-Inter text-lg font-bold'>No contract</span>
        </Link>
      </div>

    </section>
    </>
  )
}

export default AllContractsPost