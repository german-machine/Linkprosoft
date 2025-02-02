import React from 'react'
import profileImage from "../../../../assets/images/Profile-image.jpeg"
import OurLogo from "../../../../assets/images/linkprosoft-logo.png"
import Search from "../../../../assets/images/search.svg"

const DashboardNav = () => {
    return (
        <header className='bg-[#006fa3] w-full border-b-4 sticky z-[1000] top-0 rounded-t-lg dark:border-b-transparent' >
            <div className='container mx-auto '>
                <div className='flex items-center justify-between py-2'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={OurLogo} alt="" className='w-9' />
                        <h1 className='text-[#fff] font-bold text-2xl h-8 w-auto'>LINKPROSOFT</h1>
                    </div>
                    <form className='w-[40%]'>
                        <div className='flex  rounded-lg border-2 border-white'>
                            <input type="text" placeholder='What Skills are you looking for ' className='w-[90%] bg-transparent px-3 py-2 outline-none text-white' />
                            <div className='bg-[#03aeff] w-[10%] flex items-center justify-center rounded-md'>
                                <button className='w-full h-full rounded-md  flex items-center justify-center'>
                                    <img src={Search} alt="" className='text-white' />
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className='flex items-center justify-between w-[20%]'>
                        <button className='w-[40%] bg-[#03aeff] px-3 py-2 rounded-lg text-center text-[#fff] font-medium' >Post Gigs</button>
                        <button className='text-[#fff] font-medium'>LogOut</button>
                        <div className="relative rounded-full">
                            <img src={profileImage} alt="" className='w-10 rounded-full' />
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default DashboardNav