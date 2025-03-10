import React from 'react'
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';
const Newsletter = () => {
  return (
   <>
   
   <section className='bg-[#267BB4] flex items-center'>
    <div className='flex items-center flex-col pt-4 pb-9 w-[50%] m-auto'>
            {/* <img src={mail} alt="" /> */}
            <IoIosMail className='text-white text-7xl'/>
            
            <h2 className='font-Inter text-3xl text-white leading-normal font-bold'>Subscribe Newsletter</h2>
            <p className='font-Inter text-white font-semibold text-center mb-4 text-[13px]'>You will never miss an update, new release and latest news, Our newsletter will  be <br /> delivered once a week.</p>

            <div className='flex bg-white w-full rounded-full  mb-2 justify-between'>
            <input className=" focus:border-transparent outline-none font-Inter bg-transparent pl-8 w-[60%] text-[14px]   flex-wrap" type="text" placeholder="Enter your email" />

                <Link className='bg-[#03AEFF] py-3 text-white font-bold font-Inter text-lg  px-6 rounded-r-full'>
                    Subscribe
                </Link>

            </div>

            <p className='font-Inter text-white font-bold text-[13px]'>We promise not to SPAM you</p>
    </div>
   </section>
   </>
  )
}

export default Newsletter