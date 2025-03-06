import React from 'react'
import worker from '../assets/worker.svg'
import { Link } from 'react-router-dom'
import SidenavLinks from '../components/SideNavLinks'
import '../components/Scroll.css'
import { IoSettingsSharp } from "react-icons/io5";

const SideBar = () => {
  return (
    <>
    <section className='w-full bg-white select-none h-[calc(100vh-8rem)] pb-11 scrollbar-hide top-0 overflow-y-auto'>
        <div className='w-[80%] m-auto '>
                <div className='bg-[#F6F6F6] flex flex-col items-center rounded-lg m-auto w-[100%] py-2'>
                   <div className='flex ml-9 items-center gap-4 w-[90%]'>
                   <div className='w-[20%]'>
                        <img src={worker} alt="" />
                    </div>
                    <div className='leading-tight'>
                        <h1 className='font-Inter font-bold'>John Joe</h1>
                        <p className='font-Inter text-[#798387] text-sm'>Plumber, Welder</p>
                    </div>
                   </div>

                   <div className='w-[70%] pt-2'>
                    <Link className='font-Inter text-[#006FA3] text-[13px] decoration-underline'>Complete your profile</Link>
                    <div className='flex items-center justify-between'>
                        <div className='w-[80%] bg-white h-2 rounded'>
                            <div className='w-[60%] bg-[#006FA3] h-2 rounded'></div>
                        </div>

                            <h2>70%</h2>
                    </div>
                   </div>
                </div>

                <div className='w-full pb-5'>
                    <SidenavLinks/>
                </div>
        </div>

        <div className='relative top-3 left-12 h-[50px] w-[50px] flex items-center justify-center rounded-full bg-[#F6F6F6]'>
        <IoSettingsSharp className='text-[30px]'/>
        </div>
    </section>
    </>
  )
}

export default SideBar