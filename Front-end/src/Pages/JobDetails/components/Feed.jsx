import React, { useRef } from 'react'
import { feedData } from "../../../data/feedData2" // Import the feedData from the data folder
import { IoIosArrowDown, IoMdClose } from 'react-icons/io';
import { FaRegBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Feed = () => {
    const jobRef = useRef(null);
    const closeRef = useRef(null);

    const showModal = () => {
        jobRef.current.showModal();
    }

    function closeModal() {
        if (jobRef.current) {
            jobRef.current.close();
        }
    }
    return (
        <>
            <section className="w-full">
                <div className="w-[90%] mx-auto pb-0">
                    <div>
                        <div className="w-full flex justify-end mb-1">
                            <div className="flex gap-1">
                                <p className="font-Inter font-medium text-sm">Sort by:</p>
                                <span className="flex items-center gap-1">
                                    <p className="font-Inter font-medium text-sm">Relevance</p>
                                    <IoIosArrowDown className="text-[#FC8E08]" />
                                </span>
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 py-6" onClick={showModal}>
                            {feedData.map((feed, index) => (
                                <div key={index} className="shadow-lg transition-shadow rounded-lg overflow-hidden cursor-pointer ">
                                    <div className="h-[10rem] relative scale-100 hover:scale-110 transition-all">
                                        <img src={feed.img} alt="" className="h-full object-cover rounded-lg" />
                                        <img src={feed.profile} alt="" className="rounded-full absolute w-[15%] bottom-3 right-4" />
                                    </div>

                                    <div className="px-2 py-2 mb-4">
                                        <h1 className="text-xl font-bold font-Inter">{feed.title}</h1>
                                        <p className="text-sm font-normal font-Inter line-clamp-4">{feed.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <dialog ref={jobRef} className="fixed right-[0%] lg:right-[15%] xl:right-[20%] left-[0%] lg:left-[15%] xl:left-[20%] top-[30%] bottom-[30%] rounded-md bg-white overflow-x-hidden">
                <div ref={closeRef} onClick={closeModal} className='bg-bluecolor cursor-pointer text-white rounded-full p-3 w-max absolute -right-2 -top-2 flex items-center '>
                    <IoMdClose className='text-lg text-white text-center' />
                </div>

                <div className="w-full py-5">
                    <div className=' shadow-md'>
                        <div className='w-[80%] mx-auto'>
                            <div className='mb-4'>
                                <h2 className='text-xl font-bold font-Inter'>UI/UX Designer for Booking Application</h2>
                            </div>

                            <div className=''>
                                <div className='w-max'>
                                    <p className='font-Inter text-base opacity-65 underline cursor-pointer'>Umarks Technologies</p>
                                    <p className='font-Inter text-base opacity-65 cursor-pointer'>Port Harcourt</p>
                                </div>

                                <div className='flex items-center gap-2 py-4'>
                                    <Link className='w-[45%] bg-black text-white text-center rounded-md py-1'>
                                        Hire me
                                    </Link>

                                    <div className='bg-bluecolor py-2 px-2 rounded-md cursor-pointer'>
                                        <FaRegBookmark className='text-white text-lg' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[80%] font-Inter py-3 mx-auto'>
                        <div className='mb-3'>
                            <h1 className="text-xl font-bold">Full Gigs Description</h1>
                            <p className="text-sm text-gray-700">
                                At Umarks, we help fast-growing companies by connecting them with global talent while supporting the careers of creative and tech professionals. At Umarks, we help fast-growing companies by connecting them with global talent while supporting the careers of creative and tech professionals.
                            </p>
                        </div>

                        <div className='mb-3'>
                            <h1 className="text-xl font-bold">The Role</h1>
                            <p className="text-sm text-gray-700">
                                Working Hours: Mondays-Fridays, <br />
                                6AM-3PM Central European Time <br />
                                1pm-10pm Asia/Manila <br />
                                11pm-8AM Central Standard Time
                            </p>
                        </div>
                    </div>

                </div>
            </dialog>

        </>
    )
}

export default Feed