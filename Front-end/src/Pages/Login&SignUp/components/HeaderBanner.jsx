import React from 'react'

import { HiOutlineUserCircle } from "react-icons/hi2";
import { Link } from 'react-router-dom';


const HeaderBanner = ({ showSignInButton = true, navColor = "bg-[#f6f6f6]", border = "border-[#006FA3]" }) => {
    return (
        <header className={`${navColor} w-full border-b-4 ${border} sticky z-[1000] top-0 rounded-t-lg`}>
            <div className="container mx-auto  sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {navColor === "bg-[#f6f6f6]" ?
                        <div className='flex-shrink-0'>
                            <h1 className='text-[#006FA3] font-bold text-[25px] h-8 w-auto'>LINKPROSOFT</h1>
                        </div> :

                        <div className='flex-shrink-0'>
                            <h1 className='text-[#FFFFFF] font-bold text-[25px] h-8 w-auto'>LINKPROSOFT</h1>
                        </div>
                    }

                    <div className="flex items-center space-x-4" >
                        {showSignInButton && (
                            <button className='px-4 py-2 bg-[#006FA3] font-medium rounded-md hover:bg-[#0A66C2] transition text-[20px] text-[#ffffff]'>
                                <Link to="/signupAs">
                                    Sign Up
                                </Link>
                            </button>
                        )}
                        {navColor === "bg-[#f6f6f6]" ?
                            <div className="relative ">
                                <HiOutlineUserCircle className='text-[35px]' />
                            </div> :
                            <div className="relative ">
                                <HiOutlineUserCircle className='text-[35px] text-white' />
                            </div>
                        }

                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderBanner

