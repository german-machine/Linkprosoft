import React from 'react'
import DashboardNav from './DashboardNav'
import UserSidebar from './UserSidebar'
import { Link } from 'react-router-dom'

const PasswordReset = () => {

    return (
        <>
            <DashboardNav />
            <div className='flex'>
                <UserSidebar />
                <div className="flex-1 px-5 py-5 ml-[26%] dark">
                    <div className='bg-[#ffffff] p-5 pt-2 pr-[20%] rounded-lg mb-10 flex justify-between items-center dark:text-white dark:bg-bluecolor'>
                        <h1 className="text-3xl font-medium">Password Reset </h1>
                        <Link to={"/settings"}>
                            <p className='underline font-medium mt-5'>Back</p>
                        </Link>
                    </div>
                    <div className='p-2 w-full'>
                        <form className='flex flex-col gap-5 w-[90%]  justify-between items-center mb-10'>

                            <div className='resetpassword gap-6 mb-3'>
                                <div className='w-[45%]' >
                                    <label className='font-semibold'>Current Password</label>
                                    <input type="password" placeholder='Jane1234' className='w-full px-3 py-2 text-[16px] border-[#006fa3] border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0A66C2] bg-[#f6f6f6]' />
                                </div>
                                <div className='w-[45%]' >
                                    <label className='font-semibold'>Re-type Current Password</label>
                                    <input type="password" placeholder='Jane1234' className='w-full px-3 py-2 text-[16px] border-[#006fa3] border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0A66C2] bg-[#f6f6f6]' />
                                </div>
                                <div className='w-[45%]' >
                                    <label className='font-semibold'>New Password</label>
                                    <input type="password" placeholder='Jake***' className='w-[100%] px-3 py-2 text-[16px] border-[#006fa3] border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0A66C2] bg-[#f6f6f6]' />
                                </div>
                                <div className='w-[45%]' >
                                    <label className='font-semibold'>Re-type New Password</label>
                                    <input type="password" placeholder='Jake***' className='w-full px-3 py-2 text-[16px] border-[#006fa3] border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0A66C2] bg-[#f6f6f6]' />
                                </div>
                            </div>

                        </form>
                        <div className='flex items-center justify-end w-[83%] '>
                            <button className='bg-[#0a66c2] px-4 py-2 font-medium text-[#ffffff] rounded-lg'>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordReset