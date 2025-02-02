import React from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import GigsOptions from '../../User/userSidebar/GigsOptions'
import googleLogo from "../../../../assets/images/google-logo.png"

const UserNotification = () => {
    const { isDarkMode } = useDarkMode();
    const Data = [
        {
            image: googleLogo,
            title: "Google",
            content: "A competetnt UI designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, Illustrator and front end toools HTML, CSS , JavaScript, designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, Illustrator and front end toools HTML, CSS , JavaScript,designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, Illustrator and front end toools HTML, CSS , JavaScript,designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, Illustrator and front end toools HTML, CSS , JavaScript,"
        },
        {
            image: googleLogo,
            title: "Google",
            content: "A competetnt UI designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, Illustrator and front end toools HTML, CSS , JavaScript, designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, Illustrator and front end toools HTML, CSS , JavaScript,designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, Illustrator and front end toools HTML, CSS , JavaScript,designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, Illustrator and front end toools HTML, CSS , JavaScript,"
        },
    ]

    return (
        <div className={`${isDarkMode ? "dark" : ""}`}>
            <GigsOptions />
            <div className='flex-1 px-5  pl-[26%]'>
                <div className=' p-5 pt-2'>
                    {Data.map((data, index) => (
                        <div className='w-full flex items-center justify-between bg-[#f6f6f6] rounded-xl mb-4 px-4 py-4 dark:bg-[#414141]' key={index}>
                            <div className='flex items-center justify-center  p-5'>
                                <img src={data.image} alt="" className='w-[500px]' />
                            </div>
                            <div>
                                <h1 className='font-medium text-lg dark:text-[#f6f6f6]'>{data.title}</h1>
                                <p className='font-normal text-[15px] leading-5 dark:text-[#f6f6f6]'>{data.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserNotification