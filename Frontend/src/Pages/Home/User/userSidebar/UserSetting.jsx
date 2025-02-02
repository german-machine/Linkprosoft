import React, { useEffect, useState } from 'react'
import { useDarkMode } from "../../components/context/DarkModeContext"
import { Link } from 'react-router-dom'
import { IoIosMoon, IoIosUnlock, IoIosHelpCircle, IoIosSunny } from "react-icons/io";
import { MdDelete, MdHeadset } from "react-icons/md";
import DashboardNav from '../../components/dashboard/DashboardNav'
import UserSidebar from '../../components/dashboard/UserSidebar'
import Modal from '../../components/dashboard/Modal';
const Settings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false) // State to control modal visibility
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    // Add or remove the 'dark' class on the root <html> element
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Handle modal open and close.
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleDeleteAccount = () => {
        console.log("Account deleted");
        closeModal();
    }
    // Handle toggle click
    // const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <div>
            <DashboardNav />
            <div className='flex'>
                <UserSidebar />
                <div className="flex-1 px-5 py-5 ml-[26%]">
                    <div className='bg-whitebg p-5 pt-2 rounded-lg mb-10'>
                        <h1 className="text-3xl font-medium">Settings</h1>
                    </div>
                    <div className='flex flex-col '>
                        {/* Dark Mode Toggle */}
                        <div className='flex bg-[#f6f6f6] w-[70%] px-4 py-3 justify-between items-center mb-4'>
                            <span className='text-lg font-bold'>Dark Mode</span>
                            <button className={`flex w-14 h-7 items-center rounded-full px-[2px] border-2 shadow-inner relative ${isDarkMode ? "dark:bg-black" : "bg-[#d9d9d9]"}`}>
                                <div className='flex items-center justify-between'>
                                    <IoIosSunny className={`text-2xl text-black absolute left-0 ${isDarkMode ? "translate-x-0 " : "translate-x-0"
                                        } dark:text-whitebg`}
                                    />
                                    <IoIosMoon className={`text-2xl text-black absolute right-0 ${isDarkMode ? "translate-x-0" : "translate-x-0"
                                        } dark:text-whitebg`}
                                    />
                                </div>

                                <div className={`bg-blue-600 z-10 rounded-full w-5 h-5 transform transition-transform duration-300 ${isDarkMode
                                    ? "bg-blue-600 translate-x-7 border-blue-600"
                                    : "bg-blue-600 translate-x-0 border-blue-600"
                                    }`}
                                    onClick={toggleDarkMode}
                                >
                                </div>

                            </button>
                        </div>
                        <div className='flex bg-[#f6f6f6]  w-[70%] px-4  mb-3 py-4 justify-between items-center'>
                            <Link to={"/passwordreset"} className='text-lg font-bold'>Password Reset</Link>
                            <IoIosUnlock className='text-[30px]' />
                        </div>

                        <div className='flex bg-[#f6f6f6] w-[70%] px-4 mb-3 py-4 justify-between items-center'>
                            <button
                                onClick={openModal}
                                className='text-lg font-bold text-red-500'
                            >
                                Delete Account
                            </button>
                            <MdDelete className='text-[30px]' />
                        </div>

                        <div className='flex bg-[#f6f6f6]  w-[70%] px-4  mb-3 py-4 justify-between items-center'>
                            <Link to={"#"} className='text-lg font-bold'>Help</Link>
                            <IoIosHelpCircle className='text-[30px]' />
                        </div>

                        <div className='flex bg-[#f6f6f6]  w-[70%] px-4  mb-3 py-4 justify-between items-center'>
                            <Link to={"#"} className='text-lg font-bold'>Customer Support</Link>
                            < MdHeadset className='text-[30px]' />
                        </div>
                    </div>
                </div>
            </div>
            {/* the Modal component */}
            <Modal
                isOpen={isModalOpen}
                title={`Delete Account permanently`}
                onConfirm={handleDeleteAccount}
                onCancel={closeModal}
            />

        </div>
    )
}

export default Settings