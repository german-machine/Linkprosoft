import React from 'react'
import ProjectsBody from '../components/ProjectsBody'
import { Outlet } from 'react-router-dom'

const Projects = () => {
  return (
    <section className='w-full lg:w-[70%] xl:w-[75%]'>
      
      <Outlet />
    </section>
  )
}

export default Projects