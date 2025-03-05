import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../assets/profile.svg'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <>
        <nav className='bg-[#006FA3] sticky top-0 z-9 w-full'> 
            <div className='w-[93%] m-auto flex justify-between items-center pt-3 '>
                <Link to="/" className='flex flex-col items-center cursor-pointer justify-center'>
                    <img src={logo} alt="" />
                    <h2 className='font-Inter font-bold text-white  text-xl'>LINKPROSOFT</h2>
                </Link>
    
      
    
                <div className='w-[4%]'>

                        <img src={profile} alt="" className='w-[100%]'/>
                    </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar