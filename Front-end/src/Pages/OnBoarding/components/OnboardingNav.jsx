import React from 'react'
import { Link } from 'react-router-dom'
import search from '../../JobDetails/assets/images/search.png'
import profile from '../../JobDetails/assets/images/profile.png'


const OnboardingNav = () => {
  return (
   <>
   <header className='w-[100%] select-none  border-b-[#006FA3] border-b-4'>
      <nav className='flex align-center w-[90%] justify-between m-auto pt-9 pb-4' >
        <div className="text-3xl font-bold text-bluecolor font-Inter w-[15%] cursor-pointer"   >
                      <Link to='/'>Linkprosoft.</Link>
        </div>
  
     
  
        <div className='flex w-[22%] align-center justify-between'>
          <a href="/" className='bg-[#03AEFF] font-Inter text-white justify py-2 px-5 rounded-md'>Post Gigs</a>
          <a href="/" className='bg-[#006FA3] font-Inter text-white justify py-2 px-5 rounded-md '>Sign In</a>
          <div className='w-[16%] h-[40px] flex rounded-full align-center justify-center '>
          <img src={profile} alt="" className='rounded-full'/>
          </div>
        </div>
        </nav>
      </header>
   </>
  )
}

export default OnboardingNav