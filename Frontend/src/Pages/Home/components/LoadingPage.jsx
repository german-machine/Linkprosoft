import React, { useState, useEffect } from "react";
import OurLogo from '../../assets/images/linkprosoft-logo.png'
const LoadingPage = ({ userLoading = true }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return oldProgress + 10; // Adjust step size for speed
            });
        }, 300); // Adjust interval for speed

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {userLoading ?
                (<div className="flex justify-center items-center h-screen bg-[#006FA3]">
                    <div className="text-center">
                        {/* Logo */}
                        <img
                            src={OurLogo}
                            alt="Logo"
                            className="w-16 h-16 mx-auto mb-4"
                        />

                        {/* Brand Name */}
                        <h1 className="text-2xl font-bold text-white mb-6">LINKPROSOFT</h1>

                        {/* Progress Bar */}
                        <div className="w-[537px] h-2 bg-[#D9D9D9] overflow-hidden mx-auto">
                            <div
                                className="h-full bg-blue-400 transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>


                        {/* Loading Text */}
                        {/* <p className="text-white mt-4 text-lg">
                    {progress < 100 ? `Loading... ${progress}%` : "Welcome!"}
                </p> */}
                    </div>
                </div>) :
                (<div className="flex justify-center items-center h-screen bg-[#000000]">
                    <div className="text-center">
                        {/* Logo */}
                        <img
                            src={OurLogo}
                            alt="Logo"
                            className="w-16 h-16 mx-auto mb-4"
                        />

                        {/* Brand Name */}
                        <h1 className="text-2xl font-bold text-white mb-6">LINKPROSOFT</h1>

                        {/* Progress Bar */}
                        <div className="w-[537px] h-2 bg-[#D9D9D9] overflow-hidden mx-auto">
                            <div
                                className="h-full bg-[#006FA3] transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>


                        {/* Loading Text */}
                        {/* <p className="text-white mt-4 text-lg">
                    {progress < 100 ? `Loading... ${progress}%` : "Welcome!"}
                </p> */}
                    </div>
                </div>)
            }
        </>

    );
};

export default LoadingPage;
