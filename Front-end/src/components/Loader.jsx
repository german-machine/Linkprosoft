import React, { useEffect, useState } from 'react'
import logo from '../assets/images/linkprosoft-logo.png'
import BarLoader from "react-spinners/BarLoader";

const Loader = () => {
    return (
        <div className='w-full min-h-screen bg-white g-gray-900 opacity-95'>
            <div className='w-[90%] min-h-screen h-full mx-auto flex flex-col gap-5 items-center justify-center'>
                <img src={logo} alt="" className='w-[30%] lg:w-[10%]' />
                <BarLoader color='#006fa3' />
            </div>
        </div>
    )
}

export default Loader