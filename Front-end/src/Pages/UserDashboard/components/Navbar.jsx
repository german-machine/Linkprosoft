import React from 'react'
import logo from '../assets/logo.svg'
import Search from "../assets/search.svg"
import { Link } from 'react-router-dom'
import profile from '../assets/profile.svg'


const Navbar = () => {
  return (
    <>
    <nav className='bg-[#006FA3] sticky top-0 z-9 w-full'> 
        <div className='w-[93%] m-auto flex justify-between items-center pt-3 '>
            <Link to="/" className='flex flex-col items-center cursor-pointer justify-center'>
                <img src={logo} alt="" />
                <h2 className='font-Inter font-bold text-white  text-xl'>LINKPROSOFT</h2>
            </Link>

           <div className='flex align-center  w-[50%] pt-6 relative rounded-[10px]'>
                <div className=' w-full border py-2 rounded-[10px]' >
                <input type="text"  placeholder='What Skills are you looking for?' className='w-full bg-transparent focus:border-transparent font-Inter outline-none text-white placeholder-white pl-4'/>
                </div>
            <div className='bg-[#03AEFF] py-2.5  px-4 rounded-[10px] absolute right-0 ' >
                    <img src={Search} alt="" className='text-white'/>
            </div>
           </div>

            <div className="flex gap-5 items-center text-[15px] pt-6 w-[20%]">
                    <Link className='bg-[#03AEFF] text-white font-bold text-[15px] py-2 px-3 rounded-[7px] font-Inter'>Post Gigs</Link>
                    <Link className='bg-none text-white font-bold text-[15px] py-2 px-3 rounded-[7px] font-Inter'>Sign In</Link>
                    <img src={profile} alt="" className='w-[15%]'/>
                </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar