import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import worker from '../assets/profile2.svg'

const Sidebar = () => {
  const [isGigsOpen, setIsGigsOpen] = useState(false)

  const toggleGigsDropdown = () => {
    setIsGigsOpen(!isGigsOpen)
  }

  return (
    <>
      <section className='w-full select-none h-[calc(100vh-4rem)] pb-11 scrollbar-hide top-0 overflow-y-auto'>
        <div className='w-[70%] m-auto '>
          <div className='bg-[#F6F6F6] flex flex-col items-center rounded-lg m-auto w-[100%] py-2'>
            <div className='flex items-center gap-4 w-[70%]'>
              <div className='w-[25%]'>
                <img src={worker} alt="" />
              </div>
              <div className='leading-tight'>
                <h1 className='font-Inter font-bold'>John Joe</h1>
                <p className='font-Inter text-[#798387] text-sm'>Plumber, Welder</p>
              </div>
            </div>

            <div className='w-[70%] pt-2'>
              <NavLink className='font-Inter text-[#006FA3] text-[13px] decoration-underline'>Complete your profile</NavLink>
              <div className='flex items-center justify-between'>
                <div className='w-[80%] bg-white h-2 rounded'>
                  <div className='w-[60%] bg-[#006FA3] h-2 rounded'></div>
                </div>
                <h2>70%</h2>
              </div>
            </div>
          </div>
        </div>

        <section className='w-[70%] m-auto mt-4 rounded-lg'>
          <div className='w-full bg-[#006FA3] pt-2 pb-16 px-4 rounded-lg m-auto mt-4'>
            <nav className='flex flex-col font-Inter gap-4'>
              <div className='flex items-center justify-between cursor-pointer' onClick={toggleGigsDropdown}>
                <NavLink to="#" className='font-Inter text-white font-bold text-[15px]'>Gigs</NavLink>
                <span className='text-white'>{isGigsOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
              </div>
              {isGigsOpen && (
                <div className='flex flex-col gap-2 pl-4'>
                  <NavLink to="/EmployerDashboard/dashboard" className={({ isActive }) => isActive ? 'font-Inter text-white text-[11px] font-bold' : 'font-Inter text-white text-[11px]'}>Dashboard</NavLink>
                  <NavLink to="/EmployerDashboard/all-gigs-post" className={({ isActive }) => isActive ? 'font-Inter text-white text-[11px] font-bold' : 'font-Inter text-white text-[11px]'}>All Gigs Post</NavLink>
                  <NavLink to="/EmployerDashboard/all-contracts" className={({ isActive }) => isActive ? 'font-Inter text-white text-[11px] font-bold' : 'font-Inter text-white text-[11px]'}>All Contracts</NavLink>
                  <NavLink to="/EmployerDashboard/any-hire" className={({ isActive }) => isActive ? 'font-Inter text-white text-[11px] font-bold' : 'font-Inter text-white text-[11px]'}>Any Hire</NavLink>
                </div>
              )}
              <NavLink to="/EmployerDashboard/messages" className={({ isActive }) => isActive ? 'font-Inter text-white font-bold text-[15px]' : 'font-Inter text-white text-[15px]'}>Messages</NavLink>
              <NavLink to="/EmployerDashboard/talent" className={({ isActive }) => isActive ? 'font-Inter text-white font-bold text-[15px]' : 'font-Inter text-white text-[15px]'}>Talent</NavLink>
              <NavLink to="/EmployerDashboard/notifications" className={({ isActive }) => isActive ? 'font-Inter text-white font-bold text-[15px]' : 'font-Inter text-white text-[15px]'}>Notifications</NavLink>
              <NavLink to="/EmployerDashboard/reports" className={({ isActive }) => isActive ? 'font-Inter text-white font-bold text-[15px]' : 'font-Inter text-white text-[15px]'}>Reports</NavLink>
              <NavLink to="/EmployerDashboard/saved-lists" className={({ isActive }) => isActive ? 'font-Inter text-white font-bold text-[15px]' : 'font-Inter text-white text-[15px]'}>Saved Lists</NavLink>
              <NavLink to="/EmployerDashboard/payment-method" className={({ isActive }) => isActive ? 'font-Inter text-white font-bold text-[15px]' : 'font-Inter text-white text-[15px]'}>Payment Method</NavLink>
              <NavLink to="/EmployerDashboard/help" className={({ isActive }) => isActive ? 'font-Inter text-white font-bold text-[15px]' : 'font-Inter text-white text-[15px]'}>Help</NavLink>
            </nav>
          </div>
        </section>
      </section>
    </>
  )
}

export default Sidebar