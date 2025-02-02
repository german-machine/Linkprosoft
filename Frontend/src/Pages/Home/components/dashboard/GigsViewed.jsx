import React from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import GigsOptions from '../../User/userSidebar/GigsOptions'


const GigsViewed = () => {
    const { isDarkMode } = useDarkMode();
    const Data = [
        {
            title: "Architect",
            content: "A competetnt UI designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, Illustrator and front end toools HTML, CSS , JavaScript, designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, Illustrator and front end toools HTML, CSS , JavaScript,designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, Illustrator and front end toools HTML, CSS , JavaScript,designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, Illustrator and front end toools HTML, CSS , JavaScript,"
        },
    ]
    return (
        <div className={`${isDarkMode ? "dark" : ""}`}>
            <GigsOptions />
            <div className='flex-1 px-5 pl-[26%]'>
                <div className=' p-5 pt-2'>
                    {Data.map((data, index) => (
                        <div className={`w-full bg-[#f6f6f6] rounded-xl mb-4 px-4 py-4 ${isDarkMode ? "dark:bg-lightblack" : ""}`} key={index}>
                            <h1 className='font-medium text-lg dark:text-[#f6f6f6]'>{data.title}</h1>
                            <p className='font-normal text-[15px] leading-5 dark:text-[#f6f6f6]'>{data.content}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default GigsViewed