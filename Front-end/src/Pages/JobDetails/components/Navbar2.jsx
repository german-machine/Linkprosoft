import React, { useState } from 'react'
import profile from '../assets/images/profile.png'
import { Link } from 'react-router-dom'
import { IoMdSearch } from 'react-icons/io'
import { IoCloseSharp } from 'react-icons/io5'
import { RiMenu5Fill } from 'react-icons/ri'
import PostGigsButton from '../../../constants/PostGigsButton'
import SignInButton from '../../../constants/SignInButton'

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  
    const handleMenu = () => {
      setIsToggled(() => !isToggled);
    }

  return (
    <nav className='w-full shadow-md'>
      <div className="w-[95%] mx-auto flex items-center justify-between py-4 px-4 gap-[2%]">
        <div className="w-[20%] text-4xl md:text-6xl lg:text-3xl font-bold text-bluecolor font-Inter cursor-pointer">
          <Link to='/'>Linkprosoft</Link>
        </div>

        <div className='w-[40%] mx-auto hidden lg:flex justify-between items-center bg-[#D9D9D933]'>
          <input type="text" placeholder='What skills are you looking for?' className='w-[90%] outline-none px-2 bg-transparent' />
          <div className="py-1 px-1 bg-[#03AEFF] rounded-md cursor-pointer">
            <IoMdSearch className='block text-3xl' />
          </div>
        </div>

        <div className='w-[40%] mx-auto hidden lg:flex items-center justify-end'>
          <div className='lg:w-full xl:w-[90%] mx-auto px-[8%] flex gap-[4%] items-center justify-end'>
            <SignInButton>
              Sign In
            </SignInButton>
          </div>

          {/* should show only when the user is logged in */}
          {/* <div className='w-[10%] mx-auto flex rounded-ful align-center justify-center'>
            <img src={profile} alt="" className='rounded-full' />
          </div> */}
        </div>

        <div className='block lg:hidden' onClick={handleMenu}>
          {isToggled ? <IoCloseSharp className="text-bluecolor text-2xl md:text-5xl" /> : <RiMenu5Fill className='text-bluecolor text-2xl md:text-5xl' />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar




























{/* <header className='w-[100%] select-none  border-b-[#006FA3] border-b-4'>
<nav className='flex align-center w-[90%] justify-between m-auto pt-9 pb-4' >
  <div className="text-3xl font-bold text-bluecolor font-Inter w-[15%] cursor-pointer"   >
                <Link to='/'>Linkprosoft.</Link>
  </div>

  <div className='flex  w-[45%] justify-between flex-wrap'>
    <input type="text" placeholder='What skills are you looking for?' className='w-[91%] outline-none bg-[#D9D9D933] pl-[25px]'/>
    <div className='w-[9%] bg-[#03AEFF] rounded-md'> 
    <img src={search} className=' w-[40%] m-auto relative top-[10px]'  alt="" />
    </div>
  </div>

  <div className=' w-[22%] flex align-center justify-between'>
    <a href="/" className='bg-[#03AEFF] font-Inter text-white justify py-2 px-5 rounded-md'>Post Gigs</a>
    <a href="/" className='bg-[#006FA3] font-Inter text-white justify py-2 px-5 rounded-md '>Sign In</a>
    <div className='w-[16%] h-[40px] flex rounded-full align-center justify-center '>
    <img src={profile} alt="" className='rounded-full'/>
    </div>
  </div>
  </nav>
</header> */}