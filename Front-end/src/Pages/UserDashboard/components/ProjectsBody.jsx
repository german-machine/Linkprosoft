import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const ProjectsBody = () => {
  const location = useLocation()

  return (
    <section className="w-full mt-5 lg:mt-0 min-h-screen">
      <div className="w-full lg:w-[90% mx-auto py- px-4 lg:rounded-r-md flex flex-col justify-around">
        <h1 className='font-Inter text-4xl mb-6 font-bold'>Projects</h1>
        <div className='flex gap-14 font-Inter'>
          <Link
            to="pending"
            className={`transition-colors duration-300 ${location.pathname.endsWith('pending') || location.pathname === '/UserDashboard/projects' ? 'text-black' : 'text-[#00000099]'
              }`}
          >
            Pending
          </Link>
          <Link
            to="completed"
            className={`transition-colors duration-300 ${location.pathname.endsWith('completed') ? 'text-black' : 'text-[#00000099]'
              }`}
          >
            Completed
          </Link>
          <Link
            to="rejected"
            className={`transition-colors duration-300 ${location.pathname.endsWith('rejected') ? 'text-black' : 'text-[#00000099]'
              }`}
          >
            Rejected
          </Link>
        </div>
      </div>
      <Outlet />
    </section>
  )
}

export default ProjectsBody