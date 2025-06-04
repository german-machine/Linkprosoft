import React, { useEffect, useState } from 'react'
import { IoNotifications } from 'react-icons/io5'
import { Link, Outlet, useLocation } from 'react-router-dom'

const GigsOptionsLinks = () => {
  const location = useLocation();
    const [isActive, setIsActive] = useState('recommended');
  
  useEffect(() => {
    const path = location.pathname.split('/')[3];
    setIsActive(path || "recommended");
  }, [location.pathname])

  return (
      <section className='w-full mt-5 '>
        <div className='w-full lg:w-[95%] border-b-[5px] border-[#F6F6F6] flex flex-1 justify-around'>
          <Link 
            to="recommended"
            className={`transition-colors duration-300 ${
              isActive === "recommended" ? 'text-black' : 'text-[#00000099]'
            } font-semibold text-base lg:text-base`}
          >
            Recommended
          </Link>

          <Link 
            to="saved-gigs" 
            className={`transition-colors duration-300 ${
              isActive === "saved-gigs" ? 'text-black' : 'text-[#00000099]'
            } font-semibold text-base lg:text-base`}
          >
            Saved Gigs
          </Link>

          <Link 
            to="notifications" 
            className={`transition-colors duration-300 ${
              isActive === "notifications" ? 'text-black' : 'text-[#00000099]'
            } font-semibold flex gap-1 items-center text-base lg:text-base`}
          >
            Notifications <IoNotifications />
          </Link>
        </div>

        <Outlet />
      </section>
  )
}

export default GigsOptionsLinks