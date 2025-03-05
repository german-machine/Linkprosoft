import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const GigsOptionsLinks = () => {
  const location = useLocation()

  return (
    <>
      <section className='w-full mt-5'>
        <div className='flex gap-14 font-Inter'>
          <Link 
            to="recommended" 
            className={`transition-colors duration-300 ${
              location.pathname.endsWith('recommended') || location.pathname === '/UserDashboard/gigs-options' ? 'text-black' : 'text-[#00000099]'
            }`}
          >
            Recommended
          </Link>
          <Link 
            to="recent-viewed" 
            className={`transition-colors duration-300 ${
              location.pathname.endsWith('recent-viewed') ? 'text-black' : 'text-[#00000099]'
            }`}
          >
            Recent Viewed Gigs
          </Link>
          <Link 
            to="saved-gigs" 
            className={`transition-colors duration-300 ${
              location.pathname.endsWith('saved-gigs') ? 'text-black' : 'text-[#00000099]'
            }`}
          >
            Saved Gigs
          </Link>
          <Link 
            to="notifications" 
            className={`transition-colors duration-300 ${
              location.pathname.endsWith('notifications') ? 'text-black' : 'text-[#00000099]'
            }`}
          >
            Notifications
          </Link>
        </div>
        <div className='w-full h-[5px] bg-[#F6F6F6]'></div>
      </section>
    </>
  )
}

export default GigsOptionsLinks