import React from 'react'
import profile from '../../JobDetails/assets/images/profile.png'
import { Link } from 'react-router-dom';

const HeaderBanner = ({ bgColor, logoColor, btnColor, btnTextColor }) => {
    return (
        <header className={`w-full bg-[${bgColor}] `}>
            <nav className="w-[90%] mx-auto py-5 flex items-center justify-between">
                <div className={`text-3xl md:text-4xl lg:text-4xl font-bold text-[${logoColor}] font-Inter cursor-pointer`}>
                    <Link to='/'>Linkprosoft.</Link>
                </div>

                <div className='flex items-center justify-end gap-4'>
                    <div className={`text-center bg-[${btnColor}] px-4 py-2 rounded-md`}>
                        <Link href="/" className={`text-[${btnTextColor}] font-Inter font-bold text-base `}>Sign In</Link>
                    </div>
                    <div className='w-[15%] lg:w-[12%] hidden md:block'>
                        <img src={profile} alt="" className='rounded-full' />
                    </div>
                </div>
            </nav>
            <hr className={`bg-[${btnColor}] py-[2px]`}/>
        </header>
    )
}

export default HeaderBanner

