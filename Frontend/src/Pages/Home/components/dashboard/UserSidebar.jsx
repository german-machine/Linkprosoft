import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profileImage from "../../../../assets/images/profile-image2.png"
import { IoIosSettings } from "react-icons/io";

const UserSidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedKey, setSelectedKey] = useState(location.pathname);
    const items = [
        { label: "Profile", key: "/profile" },
        {
            label: "Gig Options", key: "/gigs",
            onClick: () => {
                setSelectedKey("/recommendedgigs");
                navigate("/recommendedgigs"); // Redirect to /recommendedgigs
            }
        },
        { label: "Messages", key: "#" },
        {
            label: "Projects", key: "/projects", onClick: () => {
                setSelectedKey("/pending");
                navigate("/pending"); // Redirect to /recommendedgigs
            }
        },
        { label: "Accounts", key: "#" },
        { label: "Certifications", key: "#" },
    ]


    useEffect(() => {
        setSelectedKey(location.pathname);
    }, [location.pathname]);

    return (
        <>
            {/* Sidebar */}
            <div className={` fixed top-0 h-full gap-9 overflow-y-auto  p-5 pt-8 duration-300 w-[330px] sidebar`}>

                <div className="w-full bg-[#f6f6f6] flex flex-col px-5 py-8 mt-20 rounded-lg ">
                    <div className="flex items-center justify-evenly pb-3 ">
                        <div className="rounded-full">
                            <img src={profileImage} alt="" className="w-20 rounded-full" />
                        </div>
                        <div className="pt-1 ">
                            <h3 className="font-medium text-[#000000] text-[18px]">John Doe</h3>
                            <p className="text-[#798387] text-[16px]">plumber, welder</p>
                        </div>
                    </div>
                    <div className="flex items-center px-4">
                        <Link to='' className="text-[#006fa3] underline text-[16px] font-medium ">
                            Complete Your Profile
                        </Link>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="w-[80%] h-2 bg-[#ffffff] overflow-hidden mx-auto rounded-full">
                            <div
                                className="h-full bg-[#006fa3]  rounded-full"
                                style={{ width: `70%` }}
                            ></div>
                        </div>
                        <p>70%</p>
                    </div>
                </div><br />

                <ul className="flex flex-col gap-5">
                    {items.map((item) => (
                        <li className={`px-2 py-2 rounded-lg text-[18px] font-medium ${selectedKey === item.key
                            ? "bg-black text-[#f6f6f6] hover:bg-black dark:bg-lightblue"
                            : "bg-[#f6f6f6] text-black hover:bg-gray-200"
                            } `}>
                            <Link to={item.key}
                                onClick={() => {
                                    if (item.onClick) item.onClick(); // If it's the Gig Options link, handle click
                                    setSelectedKey(item.key); // Update the selected key
                                }}
                                aria-current={selectedKey === item.key ? "page" : undefined}                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className=" flex py-2 px-2 mt-2">
                    <button className=" flex items-center justify-center rounded-full w-10 h-10 bg-[#f6f6f6]">
                        <Link to={"/settings"}>
                            <IoIosSettings className="text-3xl" />
                        </Link>
                    </button>
                </div>
            </div >
        </>
    );

}

export default UserSidebar