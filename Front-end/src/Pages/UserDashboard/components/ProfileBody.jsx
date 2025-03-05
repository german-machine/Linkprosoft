import React from 'react'
import { Link } from 'react-router-dom'
import profile2 from "../assets/profile2.svg"


const ProfileBody = () => {
  return (
   <>
        <section>
            <h1 className='font-Inter text-4xl mb-6 font-bold'>Profile</h1>

            <div className='bg-[#006FA3] text-white rounded-md pl-5 font-semibold py-1.5 mb-5'>
                <h1>PERSONAL INFORMATION</h1>
            </div>
            
            <div className='flex flex-col justify-left text-center w-[15%] '> 
                <img src={profile2} alt="" className='w-[100%] pb-2'/>
                <Link className='text-[#006FA3] underline underline-[#006FA3] decoration-dashed'>Upload Image</Link>
            </div>
         
        </section>
   </>
  )
}

export default ProfileBody