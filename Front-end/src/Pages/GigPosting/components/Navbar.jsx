import logo from '../../../assets/images/linkprosoft-logo.png'
import avatar from '../../../assets/images/avatar.png'
import { TbMenu4 } from 'react-icons/tb'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'

function Navbar({ menuActive, setMenuActive }) {

     const handleMenuToggle = () => {
        setMenuActive(() => !menuActive);
    }

    return (
        <section className="w-full flex place-self-end bg-[#000000] sticky top-0">
            <div className="w-[90%] lg:w-[80%] mx-auto py-3 flex items-center justify-between">
                <div className='w-[10%] sm:w-[6%] lg:w-[6%] '>
                    <img src={logo} alt="" />
                </div>

                <div>
                    {!menuActive && <TbMenu4 className='block lg:hidden text-white text-3xl' onClick={handleMenuToggle} />}

                    <img src={avatar} alt="" className='hidden lg:block' />
                </div>
            </div>
        </section>
    )
}

export default Navbar;

