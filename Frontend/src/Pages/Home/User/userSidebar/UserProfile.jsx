import React from 'react'
import { useDarkMode } from "../../components/context/DarkModeContext";
import DashboardNav from '../../components/dashboard/DashboardNav'
import UserSidebar from '../../components/dashboard/UserSidebar'
import profileImage from "../../../../assets/images/profile-image2.png"
import { Link } from 'react-router-dom'


const UserProfile = () => {
    const { isDarkMode } = useDarkMode();
    return (
        <div className={`${isDarkMode ? "dark" : ""}`}>
            <DashboardNav />
            <div className='flex'>
                <UserSidebar />


                {/* Main Content */}
                <div className="flex-1 px-5 py-5 ml-[26%]">
                    <div className=' p-5 pt-2 rounded-lg'>
                        <h1 className="text-3xl font-medium ">Profile</h1>
                        <div className='bg-bluecolor mt-4 px-5 py-3 rounded-lg'>
                            <p className='text-whitebg font-medium text-[20px]'>PERSONAL INFORMATION</p>
                        </div>
                        <div>
                            <form className=' py-5 px-4'>
                                <div className=' flex flex-col mb-4'>
                                    <div className='w-36 h-36 flex rounded-full items-center justify-center'>
                                        <img src={profileImage} alt="" className='w-32 rounded-full' />
                                    </div>
                                    <Link to="#" className='text-bluecolor underline text-[16px] font-medium px-6'>
                                        Upload Image
                                    </Link>
                                </div>
                                <div className=' px-4 py-4'>
                                    <div className='flex gap-5 my-2'>
                                        <div className='w-[40%]'>
                                            <label className='font-medium text-[18px] dark:text-bluecolor'>First name</label><br />
                                            <input type="text" placeholder='John' className={`w-full px-3 py-2 text-[16px] border-bluecolor border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0A66C2] bg-greybg  ${isDarkMode ? "dark:bg-black dark:text-whitebg  dark:border-whitebg " : ""}`} />
                                            <p className={`text-bluecolor underline font-medium flex items-center justify-end ${isDarkMode ? "dark:text-whitebg " : ""}`}>
                                                <Link>
                                                    Edit
                                                </Link>
                                            </p>
                                        </div>
                                        <div className='w-[40%]'>
                                            <label className='font-medium text-[18px] dark:text-bluecolor'>Last name</label><br />
                                            <input type="text" placeholder='Doe' className={`w-full px-3 py-2 text-[16px] border-bluecolor border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0A66C2] bg-greybg  ${isDarkMode ? "dark:bg-black dark:text-whitebg  dark:border-whitebg " : ""}`} />
                                            <p className={`text-bluecolor underline font-medium flex items-center justify-end ${isDarkMode ? "dark:text-whitebg " : ""}`}>
                                                <Link>
                                                    Edit
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex gap-5 my-2'>
                                        <div className='w-[40%]'>
                                            <label className='font-medium text-[18px] dark:text-bluecolor'>Email</label><br />
                                            <input type="email" placeholder='John' className={`w-full px-3 py-2 text-[16px] border-bluecolor border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0A66C2] bg-greybg  ${isDarkMode ? "dark:bg-black dark:text-whitebg  dark:border-whitebg " : ""}`} />
                                            <p className={`text-bluecolor underline font-medium flex items-center justify-end ${isDarkMode ? "dark:text-whitebg " : ""}`}>
                                                <Link>
                                                    Edit
                                                </Link>
                                            </p>
                                        </div>
                                        <div className='w-[40%]'>
                                            <label className='font-medium text-[18px] dark:text-bluecolor'>Date of birth</label><br />
                                            <input type="number" placeholder='12-27-2024' className={`w-full px-3 py-2 text-[16px] border-bluecolor border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0A66C2] bg-greybg  ${isDarkMode ? "dark:bg-black dark:text-whitebg  dark:border-whitebg " : ""}`} />
                                            <p className='text-[#006fa3] underline font-medium flex items-center justify-end'>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='w-[40%] my-2'>
                                        <label className='font-medium text-[18px] dark:text-bluecolor'>Address</label><br />
                                        <input type="text" placeholder='Delhi, 023 shakuntala' className={`w-full px-3 py-2 text-[16px] border-bluecolor border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0A66C2] bg-greybg  ${isDarkMode ? "dark:bg-black dark:text-whitebg  dark:border-whitebg " : ""}`} />
                                        <p className={`text-bluecolor underline font-medium flex items-center justify-end ${isDarkMode ? "dark:text-whitebg " : ""}`}>
                                            <Link>
                                                Edit
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </form>

                            <div className='flex items-center justify-end w-[80%] '>
                                <button className='bg-[#0a66c2] px-4 py-2 font-medium text-[#ffffff] rounded-lg'>Save Changes</button>
                            </div>
                        </div>
                    </div>

                    <div className=' p-5 pt-2 rounded-lg'>
                        <div className='bg-[#006fa3] mt-4 px-5 py-3 rounded-lg'>
                            <p className='text-[#ffffff] font-medium text-[20px]'>WORKSPACE INFORMATION</p>
                        </div>
                        <form className=' py-5 px-4'>
                            <div className=' px-4 py-4'>
                                <div className='flex gap-5 my-2'>
                                    <div className='w-[40%]'>
                                        <label className='font-medium text-[18px]'>Portfolio Link</label><br />
                                        <input type="text" placeholder='https://www.figma.com/design/Ij2aikT7xcdJJP9' className={`w-full px-3 py-2 text-[16px] border-bluecolor border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0A66C2] bg-greybg  ${isDarkMode ? "dark:bg-black dark:text-whitebg  dark:border-whitebg " : ""}`} />
                                        <p className='text-[#006fa3] font-medium flex items-center justify-end'>
                                            <Link>
                                                Add more {""}
                                            </Link>
                                            +
                                        </p>
                                    </div>
                                    <div className='w-[40%]'>
                                        <label className='font-medium text-[18px]'>Resume/CV</label><br />
                                        <input type="text" placeholder='Drag and drop' className={`w-full px-3 py-2 text-[16px] border-bluecolor border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0A66C2] bg-greybg  ${isDarkMode ? "dark:bg-black dark:text-whitebg  dark:border-whitebg " : ""}`} />
                                    </div>
                                </div>
                                <div className='flex gap-5 my-2'>
                                    <div className='w-[40%]'>
                                        <label className='font-medium text-[18px]'>Services</label><br />
                                        <input type="email" placeholder='Grraphic Designs, dance instructor, yoga' className={`w-full px-3 py-2 text-[16px] border-bluecolor border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0A66C2] bg-greybg  ${isDarkMode ? "dark:bg-black dark:text-whitebg  dark:border-whitebg " : ""}`} />
                                    </div>
                                    <div className='w-[40%]'>
                                        <label className='font-medium text-[18px]'>Location</label><br />
                                        <input type="text" placeholder='India' className={`w-full px-3 py-2 text-[16px] border-bluecolor border-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0A66C2] bg-greybg  ${isDarkMode ? "dark:bg-black dark:text-whitebg  dark:border-whitebg " : ""}`} />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className='flex items-center justify-end w-[80%] '>
                            <button className='bg-[#0a66c2] px-4 py-2 font-medium text-[#ffffff] rounded-lg'>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile