import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/SideBar'

const UserDashboard = () => {
  return (
    <>
      <section className='fixed w-full top-0 z-10'>
        <Navbar />
      </section>

      <section className='w-full flex z-2 gap-2'>
        <div className='fixed top-28 overflow-y-auto scrollbar-hide w-[25%]'>
          <Sidebar />
        </div>
        <div className='ml-[30%] mt-28 h-[calc(100vh-4rem)] w-[67%]  px-2'>
          <Outlet />
        </div>
      </section>
    </>
  )
}

export default UserDashboard