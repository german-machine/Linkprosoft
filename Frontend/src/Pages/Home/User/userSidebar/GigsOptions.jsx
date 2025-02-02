import React, { useEffect, useState } from 'react'
import { useDarkMode } from '../../components/context/DarkModeContext';
import DashboardNav from '../../components/dashboard/DashboardNav'
import UserSidebar from '../../components/dashboard/UserSidebar'
import HeroSlider from "../../components/dashboard/HeroSlider"
import { IoIosNotifications } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

const GigsOptions = () => {
    const { isDarkMode } = useDarkMode();
    const location = useLocation()
    const [selectedKey, setSelectedKey] = useState(location.pathname);
    const gignavigator = [
        { label: "Recommended", key: `/recommendedgigs` },
        { label: "Recent Viewed Gigs", key: "/viewedgigs" },
        { label: "Saved Gigs", key: "/savedgigs" },
        { label: "Notifications", key: "/notification" },

    ]

    useEffect(() => {
        setSelectedKey(location.pathname);
    }, [location.pathname])
    return (
        <div className={`${isDarkMode ? "dark" : ""}`}>
            <DashboardNav />
            <div className='flex'>
                <UserSidebar />


                {/* Main Content */}
                <div className="flex-1 px-5 pt-4 ml-[26%] ">
                    <div className=' p-5 pt-2'>
                        <HeroSlider />
                        <div>
                            <nav aria-label="Gig navigation">
                                <ul className="flex flex-wrap items-center justify-between gap-3 px-5">
                                    {gignavigator.map((item, index) => (
                                        <li
                                            key={item.key}
                                            className={`text-black text-[16px] font-medium flex items-center dark:text-[#f6f6f6] ${selectedKey === item.key && isDarkMode ? "text-lightblue font-bold border-b-2 border-b-lightblue dark:text-lightblue" : ""
                                                }`}
                                        >
                                            <Link
                                                to={item.key}
                                                aria-current={selectedKey === item.key ? "page" : undefined}
                                            >
                                                {item.label}
                                            </Link>
                                            {index === gignavigator.length - 1 && (
                                                <IoIosNotifications className="text-[25px]" />
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <div className='w-full rounded-full h-2 bg-[#f6f6f6]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GigsOptions