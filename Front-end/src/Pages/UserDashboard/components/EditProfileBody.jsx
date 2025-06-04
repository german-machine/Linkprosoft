import React from 'react'
import { Link } from 'react-router-dom'
import profile2 from "../assets/profile2.svg"


const EditProfileBody = () => {
    return (
        <section className="w-full mt-10 lg:mt-0">
            <div className="w-full lg:w-[90% mx-auto py- px-4 lg:rounded-r-md flex flex-col justify-around items-center">

                <div className='w-full bg-[#006FA3] text-white rounded-md pl-5 font-semibold py-1.5 mb-5'>
                    <h1>PERSONAL INFORMATION</h1>
                </div>

                <div className='flex flex-col justify-left text-center w-[50%] sm:w-[20%] lg:w-[15%]'>
                    <img src={profile2} alt="" className='w-[100%] pb-2' />
                    <Link className='text-[#006FA3] underline underline-[#006FA3] decoration-dashed'>Upload Image</Link>
                </div>
            </div>

        </section>
    )
}

export default EditProfileBody