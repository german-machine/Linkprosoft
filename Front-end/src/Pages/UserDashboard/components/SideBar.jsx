import React, { useEffect, useState, useRef } from 'react'
import worker from '../assets/worker.svg'
import { Link } from 'react-router-dom'
import '../components/Scroll.css'
import { IoIosSettings } from 'react-icons/io'
import messageImg1 from "../assets/team-1.png";
import messageImg2 from "../assets/team-3.png";


const SideBar = ({ isToggled, location, isActive, setIsActive, setIsToggled }) => {
    const [rangeValue, setRangeValue] = useState(70);
    const menuRef = useRef(null);

    // useEffect(() => {
    //     const percent = (rangeValue / 100) * 100;
    //     const slider = document.querySelector(".styled-range");
    //     slider.style.background = `linear-gradient(to right, #006FA3 ${percent}%, #ccc ${percent}%)`;
    // }, [rangeValue]);


    useEffect(() => {
        // Sync the state with the URL path on component mount
        const path = location.pathname.split("/")[2]; // Get the current path
        setIsActive(path || "dashboard"); // Default to 'dashboard'
    }, [location.pathname]);


    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsToggled(false);
            }
        }

        if (isToggled) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isToggled]);


    return (
        <>

            {<aside ref={menuRef} className={`${isToggled ? "right-0 duration-300" : "-right-[100%] lg:right-0 duration-300"} fixed top-0 lg:top-[9vh] lg:left-0 bottom-0 w-[80%] md:w-[60%] lg:w-[26%] xl:w-[25%] bg-[#F6F6F6] lg:bg-transparent drop-shadow-lg lg:drop-shadow-none z-[9999] lg:z-[999] overflow-x-hidden scrollbar-hide min-h-screen`}>
                <div className="w-[90%] mx-auto flex flex-col gap-5 py-5 min-h-screen">
                    <div className='py-8 lg:py-8 bg-white shadow-lg rounded-xl'>
                        <div className='flex gap-4 items-center px-4'>
                            <div className='lg:w-max'>
                                <img src={worker} alt="" className='lg:w-[100%]' />
                            </div>
                            <div className='w-full'>
                                <h2 className='font-Inter font-bold text-base lg:text-lg'>John, Doe</h2>
                                <p className='font-Inter font-normal text-sm lg:text-base'>Service Provider</p>
                            </div>
                        </div>
                        {/* <div className='px-4 mt-4'>
                            <Link className='underline text-xs lg:text-base font-Inter font-normal text-[#006FA3]'>Complete your profile</Link>
                            <div className='flex gap-3 items-center'>
                                <input
                                    type="range"
                                    name=""
                                    id=""
                                    value={rangeValue}
                                    min="0"
                                    max="100"
                                    className='styled-range'
                                    onChange={(e) => setRangeValue(e.target.value)}
                                />
                                <output>{rangeValue}%</output>
                            </div>
                        </div> */}
                    </div>

                    <div className='flex flex-col gap-3 flex-1'>
                        <Link onClick={() => setIsToggled(!isToggled)} to="dashboard" className={`${isActive === "dashboard" ? "bg-black text-white" : "bg-white text-black"} rounded-md shadow-lg px-2 py-3 lg:py-2 text-center w-full text-xs lg:text-sm font-semibold`}>Dashboard</Link>

                        <Link onClick={() => setIsToggled(!isToggled)} to="certifications" className={`${isActive === "certifications" ? "bg-black text-white" : "bg-white text-black"} rounded-md shadow-lg px-2 py-3 lg:py-2 text-center w-full text-xs lg:text-sm font-semibold`}>Certifications</Link>

                        <Link onClick={() => setIsToggled(!isToggled)} to="post" className={`${isActive === "post" ? "bg-black text-white" : "bg-white text-black"} rounded-md shadow-lg px-2 py-3 lg:py-2 text-center w-full text-xs lg:text-sm font-semibold`}>Post</Link>

                        <Link onClick={() => setIsToggled(!isToggled)} to="projects" className={`${isActive === "projects" ? "bg-black text-white" : "bg-white text-black"} rounded-md shadow-lg px-2 py-3 lg:py-2 text-center w-full text-xs lg:text-sm font-semibold`}>Project</Link>

                        <Link onClick={() => setIsToggled(!isToggled)} to="billing" className={`${isActive === "billing" ? "bg-black text-white" : "bg-white text-black"} rounded-md shadow-lg px-2 py-3 lg:py-2 text-center w-full text-xs lg:text-sm font-semibold`}>Billing</Link>

                        <Link onClick={() => setIsToggled(!isToggled)} to="notifications" className={`${isActive === "notifications" ? "bg-black text-white" : "bg-white text-black"} rounded-md shadow-lg px-2 py-3 lg:py-2 text-center w-full text-xs lg:text-sm font-semibold`}>Notifications</Link>

                        <Link onClick={() => setIsToggled(!isToggled)} to="report" className={`${isActive === "report" ? "bg-black text-white" : "bg-white text-black"} rounded-md shadow-lg px-2 py-3 lg:py-2 text-center w-full text-xs lg:text-sm font-semibold`}>Report/Feedback</Link>

                        <div className={`bg-white text-black rounded-md shadow-lg px-2 py-3 lg:py-2 w-full text-xs lg:text-sm font-semibold`}>
                            <h3>Messages</h3>

                            <div className='px-3'>
                                <div className='flex items-center gap-3 mt-3'>
                                    <div className='w-[10%]'>
                                        <img src={messageImg2} alt="" className='w-full' />
                                    </div>
                                    <div>
                                        <h3 className='text-black font-normal'>Vladmir Putin</h3>
                                    </div>
                                </div>

                                <div className='flex items-center gap-3 mt-3'>
                                    <div className='w-[10%]'>
                                        <img src={messageImg1} alt="" className='w-full' />
                                    </div>
                                    <div>
                                        <h3 className='text-black font-normal'>Stella Effron</h3>
                                    </div>
                                </div>

                                <div className='flex items-center gap-3 mt-3'>
                                    <div className='w-[10%]'>
                                        <img src={messageImg2} alt="" className='w-full' />
                                    </div>
                                    <div>
                                        <h3 className='text-black font-normal'>Effron Putin</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <h2>Help</h2> */}
                    <div className='w-full flex items-center justify-between lg:gap-2'>
                        <Link onClick={() => setIsToggled(!isToggled)} to="settings" className='bg-[#F6F6F6] rounded-full py-2 px-2 flex items-center justify-center shadow-lg'>
                            <IoIosSettings className='text-2xl' />
                        </Link>

                        <Link className='text-bluecolor underline w-auto flex'>Licence</Link>
                    </div>
                    <div className='h-10'></div>

                </div>
            </aside>}
        </>
    )
}

export default SideBar