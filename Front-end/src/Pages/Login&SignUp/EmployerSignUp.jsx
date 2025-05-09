import React, { useState } from 'react'
import HeaderBanner from './components/HeaderBanner'
import SignupForm from './components/SignUpForm'
import OurLogo from '../../assets/images/linkprosoft-logo.png'
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const EmployerSignup = () => {

    return (
        <>
            <HeaderBanner
                bgColor='#000000'
                logoColor='#ffffff'
                btnColor='#ffffff'
                btnTextColor='#006FA3'
            />

            <section className="w-full lg:bg-[#F6F6F6]">
                <div className="w-[85%] lg:w-[85%] mx-auto flex justify-between items-center py-5 2xl:h-dvh ">
                    <div className='w-[80%] xl:w-[60%] mx-auto hidden lg:block px-4 lg:mr-[10%]'>
                        <img src={OurLogo} alt="" className='w-full xl:w-[60%] mx-auto' />
                        <p className='w-full opacity-50 text-center mt-3'>Linkprosoft bridging the gap between employers and employees</p>
                    </div>

                    <div className='w-full lg:w-[100%] xl:w-[50%] mx-auto bg-transparent lg:bg-white rounded-none lg:rounded-lg shadow-none lg:shadow-lg lg:p-3 lg:px-16 lg:py-3'>
                        <h2 className='hidden md:inline-block text-[30px] font-Inter font-[800] leading-[40px] mb-3 text-center w-full md:mb-3 xl:max-w-[85%] text-bluecolor'>Sign Up</h2>

                        <form action="">
                            <div className='md:flex gap-4'>
                                <div className='w-full'>
                                    <label htmlFor="" className='block text-gray-700 font-medium mb-1 md:text-[22px] lg:text-[16px]'>First Name</label>
                                    <input type="text" name="" id="" className='w-full px-2 py-1.5 mb-3 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2] bg-[#f6f6f6]' />
                                </div>

                                <div className='w-full'>
                                    <label htmlFor="" className='block text-gray-700 font-medium mb-1 md:text-[22px] lg:text-[16px]'>Last Name</label>
                                    <input type="text" name="" id="" className='w-full px-2 py-1.5 mb-3 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2] bg-[#f6f6f6]' />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="" className='block text-gray-700 font-medium mb-1 md:text-[22px] lg:text-[16px]'>Email</label>
                                <input type="email" name="" id="" className='w-full px-2 py-1.5 mb-3 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2] bg-[#f6f6f6]' />
                            </div>

                            <div>
                                <label htmlFor="" className='block text-gray-700 font-medium mb-1 md:text-[22px] lg:text-[16px]'>Password</label>
                                <input type="password" name="" id="" className='w-full px-2 py-1.5 mb-3 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2] bg-[#f6f6f6]' />
                            </div>

                            <div>
                                <label htmlFor="" className='block text-gray-700 font-medium mb-1 md:text-[22px] lg:text-[16px]'>Company Name</label>
                                <input type="text" name="" id="" className='w-full px-2 py-1.5 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2] bg-[#f6f6f6]' />
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mt-1">
                                <div className='flex items-center gap-2'>
                                    <input type="checkbox" name="" id="" />
                                    <p className='font-[400] font-Inter text-xs md:text-base lg:text-xs text-black'>Keep me logged in.</p>
                                </div>

                                <div className="hidden sm:block lg:flex-col flex-nowrap justify-between items-center lg:items-start sm:gap-[1%] font-Inter my-2">
                                    <p className=' text-xs md:text-base lg:text-xs'>Already have an account?
                                        <Link className='text-blue-500 underline hover:text-blue-700'> Sign In</Link>
                                    </p>
                                </div>
                            </div>

                            <div className='w-full sm:w-[50%]lg:w-full mx-auto'>
                                <button className="px-4 py-2 w-full bg-[#006FA3] text-xl font-medium rounded-md hover:bg-[#0A66C2] transition mt-6 mb-3 text-[#ffffff]">Sign Up</button>
                            </div>


                            <div className='w-full font-Inter flex flex-col sm:flex-row lg:flex-col xl:flex-ro justify-center items-center gap-y-4 lg:gap-y-4 md:gap-[2%] my-3 sm:gap-[2%]'>
                                <Link className='bg-[#006FA3] flex justify-center items-center rounded-md py-3 px-1 gap-2 ' style={{ width: "clamp(70%, 90vw, 100%)" }}
                                >
                                    <FaLinkedin className='text-white text-lg' />
                                    <p className='font-[600] font-Inter sm:text-sm text-white'>Continue with LinkedIn</p>
                                </Link>

                                <Link className='bg-[#F6F6F6] flex justify-center items-center rounded-md py-3 px-1 gap-2' style={{ width: "clamp(70%, 90vw, 100%)" }}
                                >
                                    <FcGoogle className='text-white text-lg' />
                                    <p className='font-[600] font-Inter sm:text-sm text-black'>Continue with Google</p>
                                </Link>
                            </div>

                        </form>
                    </div>
                    </div>
            </section>
        </>

    )
}

export default EmployerSignup
