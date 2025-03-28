
import React from 'react'
import HeaderBanner from './components/HeaderBanner'
import LoginForm from './components/LoginForm'
import OurLogo from '../../assets/images/linkprosoft-logo.png'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const ProfesionalLogin = () => {
    const handleSubmit = (e) => {
        e.PreventDefault()

    }
    return (
        <>
            <HeaderBanner
                bgColor='#006FA3'
                logoColor='#ffffff'
                btnColor='#ffffff'
                btnTextColor='#006FA3'
            />

            <section className="w-full lg:bg-[#F6F6F6]">
                <div className="w-[85%] lg:w-[80%] mx-auto flex justify-between items-center py-10 lg:py-5 ">
                    <div className='w-[50%] mx-auto hidden lg:block px-4 lg:mr-[10%]'>
                        <img src={OurLogo} alt="" className='w-full mx-auto' />
                        <p className='w-full opacity-50 text-center mt-3'>Linkprosoft bridging the gap between employers and employees</p>
                    </div>

                    <div className='w-full lg:w-[70%] xl:w-[50%] mx-auto bg-transparent lg:bg-white rounded-none lg:rounded-lg shadow-none lg:shadow-lg lg:p-3 lg:px-16 lg:py-10'>
                        <h2 className='text-[36px] font-Inter font-[800] leading-[40px] mb-3 md:text-center lg:text-left inline-block md:w-full md:mb-3 xl:max-w-[85%]'>Log in, <br /> start <span className='text-[#4093BA]'>advertising</span> and get <span className='text-[#4093BA]'>working</span></h2>

                        <form action="">
                            <label htmlFor="" className='block text-gray-700 font-medium mb-1 md:text-[22px] lg:text-[16px]'>Email</label>
                            <input type="email" name="" id="" className='w-full px-2 py-1.5 mb-3 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2] bg-[#f6f6f6]' />

                            <label htmlFor="" className='block text-gray-700 font-medium mb-1 md:text-[22px] lg:text-[16px]'>Password</label>
                            <input type="password" name="" id="" className='w-full px-2 py-1.5 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2] bg-[#f6f6f6]' />

                            <div className="flex items-center gap-2 mt-3">
                                <input type="checkbox" name="" id="" />
                                <p className='font-[400] font-Inter text-[12px] text-black'>Keep me logged in.</p>
                            </div>

                            <div>
                                <button className="px-4 py-2 w-full bg-[#006FA3] text-[20px] font-medium rounded-md hover:bg-[#0A66C2] transition mt-6 mb-3 text-[#ffffff]">Sign In</button>
                            </div>

                            <div className="xl:flex justify-between items-center font-Inter mb-4">
                                <p className=' text-[12px]'>Don't have an account?
                                    <Link className='text-blue-500 underline hover:text-blue-700 text-[12px]'> Sign Up</Link>
                                </p>
                                <Link to='/forget password' className='text-blue-500 underline hover:text-blue-700 text-[12px]'>Forgotten Password?</Link>
                            </div>

                            <div className='w-full font-Inter flex flex-col md:flex-row lg:flex-col xl:flex-ro justify-center items-center gap-y-4 lg:gap-y-4 md:gap-[2%] mb-3'>
                                <Link className='bg-[#006FA3] flex justify-center items-center rounded-md py-3 px-1 gap-2 ' style={{ width: "clamp(70%, 90vw, 100%)" }}
                                >
                                    <FaLinkedin className='text-white' />
                                    <p className='font-[600] font-Inter text-[15px] text-white'>Continue with LinkedIn</p>
                                </Link>

                                <Link className='bg-[#F6F6F6] flex justify-center items-center rounded-md py-3 px-1 gap-2' style={{ width: "clamp(70%, 90vw, 100%)" }}
                                >
                                    <FcGoogle className='text-white' />
                                    <p className='font-[600] font-Inter text-[15px] text-black'>Continue with Google</p>
                                </Link>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfesionalLogin