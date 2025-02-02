import React from 'react'
import HeaderBanner from './components/HeaderBanner'
import { Link } from 'react-router-dom'


const SignUpAs = () => {
    return (
        <>
            <HeaderBanner />

            <div className='bg-[#f6f6f6] h-screen py-10'>
                <div className="container mx-auto my-[5%] px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-center mb-6 ">Create Your Account</h1>
                    <div className="flex flex-cols  md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
                        <div className="w-80 bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center text-center">
                            <h2 className="text-2xl font-semibold mb-4 mt-12">Professional</h2>
                            <p className="text-black text-[18px] font-medium mb-6 w-60 ">
                                Looking for your next gigs? Be part of Linkprosoft and leverage its opportunities
                            </p>
                            <button className="w-full px-4 py-2 bg-[#006FA3] text-white font-medium rounded-md hover:bg-[#0A66C2] transition">
                                <Link to="/userSignup">
                                    Sign Up as a finder
                                </Link>
                            </button>
                        </div>
                        <div className="w-80 bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center text-center">
                            <h2 className="text-2xl font-semibold mb-4 mt-12">Employer</h2>
                            <p className="text-black text-[18px] mb-6 w-70 font-medium">
                                Are you an employer or business owner? Advertise your business with linkprosoft
                            </p>
                            <button className="w-full px-4 py-2 bg-[#0A66C2] text-white font-medium rounded-md hover:bg-[#006FA3] transition">
                                <Link to="/employerSignup">
                                    Sign Up as Professional
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUpAs
