import React from 'react'
import avatar from "../../../assets/images/avatar.png";
import { Link } from 'react-router-dom';

const HeaderBanner = () => {
    return (
        <header className='w-full bg-[#006FA3]'>
            <div className="w-[95%] lg:w-[90%] flex justify-between items-center mx-auto py-4 lg:py-2 px-2 lg:px-0">
                <div>
                    <h1 className='font-Inter font-[700] text-[24px] md:text-[30px] text-white'>LINKPROSOFT</h1>
                </div>
                <div className="flex justify-around items-center w-auto md:w-[20%]">
                    <Link className='lg:bg-transparent bg-white px-4 py-1 md:py-2 md:px-6 rounded-lg text-[#0A66C2] lg:text-white text-[16px] md:text-[20px] font-Inter font-[700]'>Sign In</Link>
                      <img src={avatar} alt="" className='hidden lg:block cursor-pointer' />
                </div>
            </div>
        </header>
    )
}

export default HeaderBanner

