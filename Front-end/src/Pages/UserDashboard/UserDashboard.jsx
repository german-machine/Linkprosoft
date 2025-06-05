import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/SideBar'
import Main from './components/Main'

const UserDashboard = () => {
  const location = useLocation();
  const [isToggled, setIsToggled] = useState(false);
  const [isActive, setIsActive] = useState("dashboard");

  
  const handleMenu = () => {
    setIsToggled(prevState => !prevState);
  }

  return (
    <>
      <Navbar handleMenu={handleMenu} isToggled={isToggled} />
      <div className="w-full bg-[#F0F0F0] min-h-screen py-0 lg:py-2 xl:py-8 relative overflow-x-hidden">
        <div className='w-full flex justify-end lg:justify-normal'>
          <Sidebar isToggled={isToggled} setIsToggled={setIsToggled} location={location} isActive={isActive} setIsActive={setIsActive} />
          <Main isActive={isActive} />
        </div>
      </div>
    </>
  )
}

export default UserDashboard