import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const menu = [
  { name: "Profile", path: "/UserDashboard/profile" },
  { name: "Gigs Options", path: "/UserDashboard/gigs-options" },
  { name: "Messages", path: "/UserDashboard/messages" },
  { name: "Projects", path: "/UserDashboard/projects" },
  { name: "Accounts", path: "/UserDashboard/accounts" },
  { name: "Certifications", path: "/UserDashboard/certifications" }
]

const SideNavLinks = () => {
  const location = useLocation()
  const [active, setActive] = useState(location.pathname)

  useEffect(() => {
    if (location.pathname === '/UserDashboard') {
      setActive('/UserDashboard/profile')
    } else {
      setActive(location.pathname)
    }
  }, [location.pathname])

  return (
    <>
      <ul className='mt-5'>
        {menu.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-3 md:gap-2 cursor-pointer transition-colors duration-300 py-4 pl-4 rounded-xl mb-5 group ${
              active.startsWith(item.path) ? 'bg-black text-white' : 'bg-[#F6F6F6] text-black hover:bg-black hover:text-white'
            }`}
          >
            <Link 
              to={item.path} 
              className='w-full h-full flex items-center'
              onClick={() => setActive(item.path)}
            >
              <h2
                className={`font-semibold transition-colors text-[15px] duration-300 ${
                  active.startsWith(item.path) ? 'text-white' : 'text-black group-hover:text-white'
                }`}
              >
                {item.name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SideNavLinks