import React from 'react'
import { Link } from 'react-router-dom'

const ProfileForm = () => {
    return (
        <section className='relative w-full px-4 pb-10'>
            <section className='flex gap-[10%] w-full py-9'>
                <form action='' className='w-full flex items-center flex-wrap gap-x-[2%] gap-y-[2%]'>
                    <div className='w-full sm:w-[49%] flex flex-col relative'>
                        <label htmlFor="" className='font-Inter font-bold text-sm pb-1'>First name</label>
                        <input type="text" placeholder='Jane' className='border-[#006FA3] outline-none focus:active:transparent border rounded-md text-sm font-semibold mb-5 px-4 py-2' />
                        <Link className='absolute bottom-0  right-0 text-sm underline decoration-dashed text-[#006FA3] font-semibold'>Edit</Link>
                    </div>

                    <div className='w-full sm:w-[49%] flex flex-col relative'>
                        <label htmlFor="" className='font-Inter font-bold text-sm pb-1'>Email</label>
                        <input type="email" placeholder='xyz@gmail.com' className='border-[#006FA3] text-sm font-semibold font-Inter outline-none focus:active:transparent border rounded-md mb-4 px-4 py-2' />
                        <Link className='absolute bottom-0  right-0 text-sm underline decoration-dashed text-[#006FA3] font-semibold'>Edit</Link>
                    </div>

                    <div className='w-full sm:w-[49%] flex flex-col relative'>
                        <label htmlFor="" className='font-Inter font-bold text-sm pb-1'>Address</label>
                        <input type="text" placeholder='No 2 Paul Obelley Street' className='border-[#006FA3] outline-none focus:active:transparent border rounded-md mb-4 px-4 py-2 font-semibold text-sm font-Inter text-black' />
                        <Link className='absolute bottom-0  right-0 text-sm underline decoration-dashed text-[#006FA3] font-semibold'>Edit</Link>
                    </div>

                    <div className='w-full sm:w-[49%] flex flex-col relative'>
                        <label htmlFor="" className='font-Inter font-bold text-sm pb-1'>Last name</label>
                        <input type="text" placeholder='Joe' className='border-[#006FA3] outline-none focus:active:transparent border rounded-md mb-4 px-4 py-2 font-semibold text-sm font-Inter text-black' />
                        <Link className='absolute bottom-0  right-0 text-sm underline decoration-dashed text-[#006FA3] font-semibold'>Edit</Link>
                    </div>

                    <div className='w-full sm:w-[49%] flex flex-col relative'>
                        <label htmlFor="" className='font-Inter font-bold text-sm pb-1'>Date of Birth</label>
                        <input type="text" placeholder='02-04-2005' className='border-[#006FA3] outline-none focus:active:transparent border rounded-md mb-4 px-4 py-2 font-semibold text-sm font-Inter text-black' />
                        <Link className='absolute bottom-0  right-0 text-sm underline decoration-dashed text-[#006FA3] font-semibold'>Edit</Link>
                    </div>

                </form>

            </section>

            <Link className='bg-[#0A66C2] block w-[50%] sm:w-[30%] mx-auto lg:mx-0 text-center text-white font-semibold py-2 px-5  rounded-md mb-3'>Save Changes</Link>

            <div className='bg-[#006FA3] text-white w-full rounded-md mt-20 pl-5 font-semibold py-1.5 mb-2'>
                <h1>WORKSPACE INFORMATION</h1>
            </div>

            <section className='flex gap-[10%] w-full py-9'>
                <form action='' className='w-full flex flex-wrap gap-x-[2%] gap-y-[2%]'>
                    <div className='w-full sm:w-[49%] flex flex-col relative'>
                        <label htmlFor="" className='font-Inter font-bold text-sm pb-1'>Portfolio Link</label>
                        <input type="text" placeholder='Jane' className='border-[#006FA3] outline-none focus:active:transparent border rounded-md text-sm font-semibold mb-5 px-4 py-2' />
                        <Link className='absolute bottom-0  right-0 text-sm underline decoration-dashed text-[#006FA3] font-semibold'>Edit</Link>
                    </div>

                    <div className='w-full sm:w-[49%] flex flex-col relative'>
                        <label htmlFor="" className='font-Inter font-bold text-sm pb-1'>Services</label>
                        <input type="email" placeholder='xyz@gmail.com' className='border-[#006FA3] text-sm font-semibold font-Inter outline-none focus:active:transparent border rounded-md mb-4 px-4 py-2' />
                        <Link className='absolute bottom-0  right-0 text-sm underline decoration-dashed text-[#006FA3] font-semibold'>Edit</Link>
                    </div>

                    <div className='w-full sm:w-[49%] flex flex-col relative'>
                        <label htmlFor="" className='font-Inter font-bold text-sm pb-1'>Resume/CV</label>
                        <input type="text" placeholder='Joe' className='border-[#006FA3] outline-none focus:active:transparent border rounded-md mb-4 px-4 py-2 font-semibold text-sm font-Inter text-black' />
                        <Link className='absolute bottom-0  right-0 text-sm underline decoration-dashed text-[#006FA3] font-semibold'>Edit</Link>
                    </div>

                    <div className='w-full sm:w-[49%] flex flex-col relative'>
                        <label htmlFor="" className='font-Inter font-bold text-sm pb-1'>Location</label>
                        <input type="text" placeholder='Nigeria' className='border-[#006FA3] outline-none focus:active:transparent border rounded-md mb-4 px-4 py-2 font-semibold text-sm font-Inter text-black' />
                        <Link className='absolute bottom-0  right-0 text-sm underline decoration-dashed text-[#006FA3] font-semibold'>Edit</Link>
                    </div>

                </form>

            </section>

            <Link className='bg-[#0A66C2] block w-[50%] sm:w-[30%] mx-auto lg:mx-0 text-center relative text-white font-semibold py-2 px-5 rounded-md mb-20'>Save Changes</Link>
        </section>
    )
}

export default ProfileForm