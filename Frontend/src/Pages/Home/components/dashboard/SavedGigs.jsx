import React from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import GigsOptions from '../../User/userSidebar/GigsOptions'

const SavedGigs = () => {
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`${isDarkMode ? "dark" : ""}`}>
            <GigsOptions />
            <div className='flex-1 px-5  pl-[26%]'>
                <div className=' p-5 pt-2'>
                    <div className='w-full bg-[#f6f6f6] h-64 flex flex-col items-center justify-center rounded-xl mb-4 px-4 py-4'>
                        <h1 className='font-medium text-lg'>No Saved Gigs</h1>
                        <p className='font-normal text-[15px] leading-5'>Contents will appear when gigs are saved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavedGigs