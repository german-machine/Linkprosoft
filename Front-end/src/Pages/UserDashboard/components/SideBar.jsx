import React, { useEffect, useState, useRef } from 'react'
import worker from '../assets/worker.svg'
import { Link } from 'react-router-dom'
import '../components/Scroll.css'
import { IoIosSettings } from 'react-icons/io'


const SideBar = ({ isToggled, location, isActive, setIsActive, setIsToggled }) => {
    const [rangeValue, setRangeValue] = useState(70);
    const menuRef = useRef(null);

    useEffect(() => {
        const percent = (rangeValue / 100) * 100;
        const slider = document.querySelector(".styled-range");
        slider.style.background = `linear-gradient(to right, #006FA3 ${percent}%, #ccc ${percent}%)`;
      }, [rangeValue]);


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
    
    {<aside ref={menuRef} className={`${isToggled ? "right-0 duration-1000" : "-right-[100%] lg:right-0 duration-1000"} fixed top-0 lg:top-auto lg:left-0 lg:bottom0 w-[80%] md:w-[60%] lg:w-[30%] xl:w-[25%] bg-white lg:bg-transparent drop-shadow-lg lg:drop-shadow-none rounded-md lg:rounded-none z-[9999] overflow-x-hidden min-h-screen`}>
        <div className="w-[90%] mx-auto flex flex-col gap-5 py-5 lg:py-0">
            <div className='py-3 bg-[#F6F6F6] rounded-xl'>
                <div className='flex justify- gap-4 items-center px-4'>
                    <div>
                        <img src={worker} alt=""  className='lg:w-[60%]' />
                    </div>
                    <div>
                        <h2 className='font-Inter font-bold text-xs lg:text-base'>John Doe</h2>
                        <p className='font-Inter font-normal text-xs lg:text-base'>Plumber, Welder</p>
                    </div>
                </div>
                <div className='px-4 mt-4'>
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
                </div>
            </div>
            
            <div className='flex flex-col gap-3 flex-1'>
                <Link onClick={() => setIsToggled(!isToggled)} to="dashboard" className={`${isActive === "dashboard" ? "bg-black text-white" : "bg-[#F6F6F6] text-black"} rounded-md px-2 py-3 lg:py-2 text-center w-full text-xs lg:text-base font-semibold`}>Dashboard</Link>
                <Link onClick={() => setIsToggled(!isToggled)} to="gigs-options" className={`${isActive === "gigs-options" ? "bg-black text-white" : "bg-[#F6F6F6] text-black"} rounded-md px-2 py-3 lg:py-2 text-center w-full text-xs lg:text-base font-semibold`}>Gigs Options</Link>
                <Link onClick={() => setIsToggled(!isToggled)} to="messages" className={`${isActive === "messages" ? "bg-black text-white" : "bg-[#F6F6F6] text-black"} rounded-md px-2 py-3 lg:py-2 text-center w-full text-xs lg:text-base font-semibold`}>Messages</Link>
                <Link onClick={() => setIsToggled(!isToggled)} to="projects" className={`${isActive === "projects" ? "bg-black text-white" : "bg-[#F6F6F6] text-black"} rounded-md px-2 py-3 lg:py-2 text-center w-full text-xs lg:text-base font-semibold`}>Projects</Link>
                <Link onClick={() => setIsToggled(!isToggled)} to="accounts" className={`${isActive === "accounts" ? "bg-black text-white" : "bg-[#F6F6F6] text-black"} rounded-md px-2 py-3 lg:py-2 text-center w-full text-xs lg:text-base font-semibold`}>Accounts</Link>
                <Link onClick={() => setIsToggled(!isToggled)} to="certifications" className={`${isActive === "certifications" ? "bg-black text-white" : "bg-[#F6F6F6] text-black"} rounded-md px-2 py-3 lg:py-2 text-center w-full text-xs lg:text-base font-semibold`}>Certifications</Link>
            </div>

            <div className='w-full flex justify-start'>
                <Link onClick={() => setIsToggled(!isToggled)} to="settings" className='bg-[#F6F6F6] rounded-full py-2 px-2 flex items-center justify-center'>
                    <IoIosSettings className='text-2xl'  />
                </Link>
            </div>
        </div>
    </aside>}
    </>
  )
}

export default SideBar