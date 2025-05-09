import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import profile from '../assets/profile.svg'
import { IoMdSearch } from 'react-icons/io'
import { IoCloseSharp } from 'react-icons/io5'
import { RiMenu5Fill } from 'react-icons/ri'

const Navbar = ({ handleMenu, isToggled }) => {

  return (
    <>
      <header className='bg-bluecolor sticky top-0 z-[1000]'>
        <div className="w-[95%] mx-auto flex items-center justify-between py-4 px-4 gap-[2%]">
          <div className="w-[20%] cursor-pointer">
            <Link to='/' className='text-4xl md:text-6xl lg:text-3xl font-bold text-white font-Inter'>Linkprosoft</Link>
          </div>

          <div className='w-[40%] mx-auto hidden lg:flex justify-between items-center bg-transparent text-white border border-white rounded-md'>
            <input type="text" placeholder='What skills are you looking for?' className='w-[90%] outline-none px-2 bg-transparent placeholder-white placeholder-opacity-50' />
            <div className="w-[10%] flex justify-center py-1 px-1 bg-[#03AEFF] rounded-md cursor-pointer">
              <IoMdSearch className='block text-3xl text-center' />
            </div>
          </div>

          <div className='w-[40%] mx-auto hidden lg:flex items-center justify-end'>
            <div className='lg:w-full xl:w-[90%] mx-auto px-[8%] flex gap-[4%] items-center justify-end'>
              <Link href="/" className='block bg-[#006FA3] font-Inter text-white text-sm rounded-md py-2 px-6'>Sign Out</Link>
            </div>
            <div className='w-[10%] mx-auto flex rounded-ful align-center justify-center'>
              <img src={profile} alt="" className='rounded-full' />
            </div>
          </div>

          <div className='block lg:hidden' onClick={handleMenu}>
            {isToggled ? <IoCloseSharp className="text-white text-2xl md:text-5xl" /> : <RiMenu5Fill className='text-white text-2xl md:text-5xl' />}
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar