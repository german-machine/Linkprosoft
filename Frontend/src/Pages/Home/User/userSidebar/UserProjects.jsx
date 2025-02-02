import React, { useEffect, useState } from 'react'
import { useDarkMode } from '../../components/context/DarkModeContext'
import DashboardNav from '../../components/dashboard/DashboardNav'
import UserSidebar from '../../components/dashboard/UserSidebar'
import { Link, useLocation } from 'react-router-dom'

const UserProjects = () => {
    const { isDarkMode } = useDarkMode();
    const location = useLocation()
    const [selectedKey, setSelectedKey] = useState(location.pathname);
    const projectNav = [
        {
            name: "Pending",
            path: `/pending`
        },
        {
            name: "Completed",
            path: "#"
        },
        {
            name: "Rejected",
            path: "#"
        },


    ]

    useEffect(() => {
        setSelectedKey(location.pathname);
    }, [location.pathname])
    return (
        <div className={`${isDarkMode ? "dark" : ""}`}>
            <DashboardNav />
            <div className='flex'>
                <UserSidebar />

                <div className="flex-1  px-5 py-5 ml-[26%]">
                    <div className='bg-[#ffffff] p-5 pt-2 rounded-lg'>
                        <h1 className="text-3xl font-medium">Projects</h1>
                    </div>

                    <div>
                        <nav aria-label="Project navigation">
                            <ul className="flex flex-wrap items-center justify-between gap-[23%] px-5 mt-5">

                                {projectNav.map((item) => (
                                    <li
                                        key={item.path}
                                        className={`text-[16px] font-medium flex items-center 
                                        ${isDarkMode ? (selectedKey === item.path ?
                                                `font-bold border-b-2 border-b-[#03aeff] dark:text-[#03aeff] hover:text-[16px]` : "text-white hover:text-[17px]"
                                            ) : ""}`}
                                    >
                                        <Link
                                            to={item.path}
                                            aria-current={selectedKey === item.path ? "page" : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className='w-full rounded-full h-2 bg-[#f6f6f6]'></div>
                </div >
            </div >


        </div >
    )
}

export default UserProjects



//  ${ isDarkMode ? "dark:text-[#f6f6f6]" : "" } 