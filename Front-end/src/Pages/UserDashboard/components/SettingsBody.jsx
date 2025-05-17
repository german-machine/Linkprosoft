import React, { useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoMoon } from "react-icons/io5";
import { WiMoonAltNew } from "react-icons/wi";
import { IoIosLock } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { TbHelpCircleFilled } from "react-icons/tb";
import { AiFillCustomerService } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const SettingsBody = () => {
    const dialogRef = useRef(null);

    const handleDeleteClick = () => {
        dialogRef.current.showModal();
    };

    const handleConfirmDelete = () => {
        toast('Account deletion confirmed');
        dialogRef.current.close();
    };

    const handleCancelDelete = () => {
        dialogRef.current.close();
    };

    return (
        <section className="w-full">
            <div className='w-full lg:w-[90%] py-3 px-2 lg:px-0 '>
                <h1 className='font-Inter text-[30px] lg:text-[40px] font-bold mb-5'>Settings</h1>

                <div className="flex flex-col gap-4">
                    <div className={`w-full sm:w-[90%] md:w-full lg:mx-0 bg-[#F6F6F6] rounded-md flex justify-between items-center cursor-pointer px-3 py-4 lg:py-3`}>
                        <div className='font-medium font-Inter text-[15px] lg:text-[20px]'>Dark mode</div>
                        <div className='flex items-center gap-2 icon-toggle rounded-full p-1 cursor-pointer'>
                            <WiMoonAltNew className='text-[#03AEFF] text-[20px]' />
                            <IoMoon />
                        </div>
                    </div>

                    <Link to='password-reset' className='w-full sm:w-[90%] md:w-full lg:mx-0 bg-[#F6F6F6] rounded-md flex justify-between items-center px-3 py-4 lg:py-3'>
                        <div className='font-medium font-Inter text-[15px] lg:text-[20px]'>Password Reset</div>
                        <div className=''>
                            <IoIosLock className="text-[22px]" />
                        </div>
                    </Link>

                    <div onClick={handleDeleteClick} className='w-full sm:w-[90%] md:w-full lg:mx-0 bg-[#F6F6F6] rounded-md cursor-pointer flex justify-between items-center px-3 py-4 lg:py-3'>
                        <div className='font-medium font-Inter text-[15px] lg:text-[20px]'>Delete Account</div>
                        <div className=''>
                            <MdDelete className="text-[22px]" />
                        </div>
                    </div>

                    <dialog ref={dialogRef} className="border-[1px_solid_#ccc] max-w-[90%] sm:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%] rounded-[8px] p-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
                        <MdDelete className="text-[60px] text-center w-full block" />
                        <h2 className='text-[20px] lg:text-[30px] font-Inter font-semibold text-center px-10 mb-10'>Delete Account Permanently</h2>

                        <div className="dialog-button flex flex-col gap-2">
                            <button
                                className="w-[80%] mx-auto py-2 cursor-pointer border border-[1px_solid_#ccc] rounded-[4px] bg-[#f5f5f5]"
                                onClick={handleCancelDelete}
                            >
                                Cancel
                            </button>
                            <button
                                className="w-[80%] mx-auto py-2 cursor-pointer border-none bg-[#d32f2f] text-white rounded-[4px]"
                                onClick={handleConfirmDelete}
                            >
                                Delete Permanently
                            </button>
                        </div>
                    </dialog>


                    <Link to='help' className='w-full sm:w-[90%] md:w-full lg:mx-0 bg-[#F6F6F6] rounded-md flex justify-between items-center px-3 py-4 lg:py-3'>
                        <div className='font-medium font-Inter text-[15px] lg:text-[20px]'>Help</div>
                        <div className=''>
                            <TbHelpCircleFilled className="text-[22px]" />
                        </div>
                    </Link>

                    <Link to='customers-support' className='w-full sm:w-[90%] md:w-full lg:mx-0 bg-[#F6F6F6] rounded-md flex justify-between items-center px-3 py-4 lg:py-3'>
                        <div className='font-medium font-Inter text-[15px] lg:text-[20px]'>Customer Support</div>
                        <div className=''>
                            <AiFillCustomerService className="text-[22px]" />
                        </div>
                    </Link>
                </div>
            </div>
            <ToastContainer />

            <Outlet />
        </section>
    )
}

export default SettingsBody
