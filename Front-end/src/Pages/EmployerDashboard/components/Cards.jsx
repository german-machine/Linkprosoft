import React from 'react'
import { Link } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import hand from '../assets/hand.svg'
import { FaPlus } from "react-icons/fa6";
import img10 from "../assets/img10.svg"
import img11 from "../assets/img11.svg"
import img12 from "../assets/img12.svg"
import img13 from "../assets/img13.svg"

const Cards = () => {
  return (
    <>
    <section className='pb-10'>
        <div className='relative '>
        <Link className='bg-[#03AEFF] relative left-[700px] text-white font-bold text-[15px] py-2 px-3 rounded-[7px] font-Inter'>Post Gigs</Link>
            <h2 className='font-Inter text-2xl font-bold'>Your Gigs</h2>
        </div>

        <section className='mt-6 w-[90%] flex-wrap flex gap-[2%] '>
        <div className='bg-[#006FA3] px-3 py-5 rounded-lg w-[32%]'>
                <div className=' flex items-center justify-between'>
                <h2 className='text-white font-bold font-Inter'>Tour</h2>
                <IoClose className='text-white font-bold text-2xl'/>
                </div>

                <div className='relative left-[40px]'>
                    <img src={hand} alt="" />
                </div>

                <div>
                    <p className='font-Inter text-l text-white font-semibold'>
                    Use this your dashboard to post , monitor Gigs and tasks .
                    </p>
                </div>
            </div>

            <div className='border border-[#000000] border-dashed px-3 py-5 rounded-lg w-[32%]'>
                    <div className='flex bg-[#D9D9D9] w-[40px] m-auto items-center justify-center rounded-full h-[40px]'>
                    <FaPlus className='text-3xl text-[#798387]'/>
                    </div>

                    <div className='mt-10  text-xl  flex flex-col align-center justify-center '>
                        <p className='font-Inter text-center text-2xl font-bold'>Post an Opening</p>
                        <p className='text-[#798387] text-center text-[14px] pt-3 mb-3 leading-tight font-bold'>Create a new Gigs post and get propositions from Gigs seekers</p>

                        <Link className='font-Inter m-auto text-bold text-lg font-bold py-1 w-[90%] border-2 align-center text-center rounded-md  border-[#03AEFF]'>Post a new Gig</Link>
                    </div>
            </div>

           

            <div className='bg-[#03AEFF] px-3 py-5 rounded-lg w-[32%]'>
                <div className=' flex items-center justify-between'>
                <h2 className='text-white font-bold text-lg font-Inter'>Quick Tip</h2>
          
                </div>

                <div className='text-white font-bold mt-5 mb-5'>
                   <p>Pay with CONFIDENCE</p>
                </div>

                <div>
                    <p className='font-Inter text-sm text-white font-semibold'>
                    Gigs seekers that take up tasks uploaded by the clients use a verified payment method , no cost on hire , payment after completed work, no hidden charge.
                    </p>
                </div>
            </div>
        </section>

        <div className='mt-7'>
            <h1 className='text-2xl font-Inter font-bold text'>Find Professionals by Specialty</h1>
            <p className='text-[#798387] font-Inter leading-tight'>Use this method to book a 1-on-1 consultation with a <br /> professional to review and plan your projects.</p>
        </div>

        <div className='flex gap-4 mt-12'>
            <div className='flex flex-col w-[20%] items-center shadow-lg'>
                    <img src={img10} alt="" />
                    <p className='bg-[#F6F6F6] text-center text-Inter font-semibold w-full rounded-b-xl'>IT</p>
            </div>

            <div className='flex flex-col w-[20%] items-center shadow-lg'>
                    <img src={img11} alt="" />
                    <p className='bg-[#F6F6F6] text-center text-Inter font-semibold w-full rounded-b-xl'>IT</p>
            </div>

            <div className='flex flex-col w-[20%] items-center shadow-lg'>
                    <img src={img12} alt="" />
                    <p className='bg-[#F6F6F6] text-center text-Inter font-semibold w-full rounded-b-xl'>IT</p>
            </div>

            <div className='flex flex-col w-[20%] items-center shadow-lg'>
                    <img src={img13} alt="" />
                    <p className='bg-[#F6F6F6] text-center text-Inter font-semibold w-full rounded-b-xl'>IT</p>
            </div>

            <div className='flex flex-col w-[20%] items-center shadow-lg'>
                    <img src={img12} alt="" />
                    <p className='bg-[#F6F6F6] text-center text-Inter font-semibold w-full rounded-b-xl'>IT</p>
            </div>
        </div>

        <div className='mt-4 underline decoration-dashed font-Inter font-bold flex justify-end'>
                <Link >View more</Link>
            </div>
    </section>
    </>
  )
}

export default Cards