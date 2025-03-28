import React from 'react'
import profile from '../../JobDetails/assets/images/profile.png'
import { Link } from 'react-router-dom';

const HeaderBanner = ({ bgColor, logoColor, btnColor, btnTextColor }) => {
    return (
        <header className={`w-full border-b-[3px]`} style={{ backgroundColor: bgColor, border: btnColor }} >
            <nav className="w-full">
                <div className="w-[90%] mx-auto py-4 lg:py-3 flex items-center justify-between">
                    <div className={`text-3xl md:text-4xl lg:text-4xl font-bold font-Inter cursor-pointer`} style={{ color: logoColor}}>
                        <Link to='/'>Linkprosoft.</Link>
                    </div>

                    <div className='flex items-center justify-end gap-4'>
                        <div className={`text-center px-6 py-2 rounded-md`} style={{ backgroundColor: btnColor }}>
                            <Link href="/" className={`font-Inter font-bold text-base `} style={{ color: btnTextColor }}>Sign In</Link>
                        </div>
                        <div className='w-[15%] lg:w-[12%] hidden md:block'>
                            <img src={profile} alt="" className='rounded-full' />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderBanner

