import React from 'react'
import { useDarkMode } from '../context/DarkModeContext';
import { MdDelete, } from "react-icons/md";

const Modal = ({ isOpen, title, onConfirm, onCancel }) => {
    const { isDarkMode } = useDarkMode();
    if (!isOpen) return null; // Don't render if modal is not open

    return (
        <div className={`${isDarkMode ? "dark" : ""}`}>
            <div className={`bg-orangecolor fixed inset-0 flex items-center justify-center mx-5 bg-opacity-20 z-20 ${isDarkMode ? "dark:bg-greycolor" : ""}`}>
                <div className={`bg-white p-6 shadow-xl w-[25%] flex flex-col justify-center items-center`}>
                    <MdDelete className='text-[60px]' />
                    <p className='text-2xl flex text-center  font-semibold mb-10'>{title}
                    </p>
                    <button className='bg-lightblue w-[70%] px-3 py-2 flex items-center rounded-md justify-center font-medium text-lg mb-3' onClick={onCancel}>Cancel</button>
                    <button className='bg-redcolor w-[70%] px-3 py-2 flex items-center rounded-md justify-center font-medium text-lg mb-5' onClick={onConfirm}>Delete</button>
                </div>


            </div>
        </div>
    )
}

export default Modal