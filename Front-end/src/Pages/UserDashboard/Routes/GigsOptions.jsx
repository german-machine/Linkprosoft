import React from 'react'
import { Outlet } from 'react-router-dom'

const GigsOptions = () => {
  return (
    <section className='w-full lg:w-[70%] xl:w-[75%]'>

      <Outlet />
    </section>
  )
}

export default GigsOptions