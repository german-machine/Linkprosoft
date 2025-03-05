import React from 'react'
import { Link } from 'react-router-dom'

const ProfileForm = () => {
  return (
   <>
           <section className='relative w-[90%]  pb-14'>
           <section className='flex gap-[10%] w-[100%] pt-5 pb-10'>
           <div className='w-[50%] '>
                <form action="#" className='flex pb-1 flex-col relative'>
                    <h2 className='font-Inter font-bold text-sm pb-1'>First name</h2>
                    <input type="text" placeholder='Jane' className='border-[#006FA3] outline-none focus:active:transparent border rounded-md text-sm font-semibold mb-5 px-4 py-2'/>
                    <Link className='absolute bottom-0  right-0 text-sm underline decoration-dashed text-[#006FA3] font-semibold'>Edit</Link>
                </form>

                <form action="#" className='flex pb-2 flex-col relative'>
                    <h2 className='font-Inter font-bold text-sm pb-1'>Email</h2>
                    <input type="email" placeholder='xyz@gmail.com' className='border-[#006FA3] text-sm font-semibold font-Inter outline-none focus:active:transparent border rounded-md mb-4 px-4 py-2'/>
                    <Link className='absolute bottom-0  right-0 text-sm underline decoration-dashed text-[#006FA3] font-semibold'>Edit</Link>
                </form>

                <form action="#" className='flex pb-2 flex-col relative'>
                    <h2 className='font-Inter font-bold text-sm pb-1'>Address</h2>
                    <input type="text" placeholder='No 2 Paul Obelley Street' className='border-[#006FA3] outline-none focus:active:transparent border rounded-md mb-4 px-4 py-2 font-semibold text-sm font-Inter text-black'/>
                    <Link className='absolute bottom-0  right-0 text-sm underline decoration-dashed text-[#006FA3] font-semibold'>Edit</Link>
                </form>
            </div>


            <div className='w-[50%]'>
            <form action="#" className='flex pb-2 flex-col relative'>
                    <h2 className='font-Inter font-bold text-sm pb-1'>Last name</h2>
                    <input type="text" placeholder='Joe' className='border-[#006FA3] outline-none focus:active:transparent border rounded-md mb-4 px-4 py-2 font-semibold text-sm font-Inter text-black'/>
                    <Link className='absolute bottom-0  right-0 text-sm underline decoration-dashed text-[#006FA3] font-semibold'>Edit</Link>
                </form>

                <form action="#" className='flex pb-2 flex-col relative'>
                    <h2 className='font-Inter font-bold text-sm pb-1'>Date of Birth</h2>
                    <input type="text" placeholder='02-04-2005' className='border-[#006FA3] outline-none focus:active:transparent border rounded-md mb-4 px-4 py-2 font-semibold text-sm font-Inter text-black'/>
                    <Link className='absolute bottom-0  right-0 text-sm underline decoration-dashed text-[#006FA3] font-semibold'>Edit</Link>
                </form>

                
            </div>

            
           </section>

           <Link className='bg-[#0A66C2] relative text-white font-semibold py-2 px-5 right-0 left-[575px] rounded-md mb-3'>Save Changes</Link>

           <div className='bg-[#006FA3] text-white w-full rounded-md mt-20 pl-5 font-semibold py-1.5 mb-5'>
                <h1>WORKSPACE INFORMATION</h1>
            </div>

            <section className='flex gap-[10%] w-[100%] pt-5 pb-10'>
           <div className='w-[50%] '>
                <form action="#" className='flex pb-1 flex-col relative'>
                    <h2 className='font-Inter font-bold text-sm pb-1'>Port-Folio Link</h2>
                    <input type="text" placeholder='Jane' className='border-[#006FA3] outline-none focus:active:transparent border rounded-md text-sm font-semibold mb-5 px-4 py-2'/>
                    <Link className='absolute bottom-0  right-0 text-sm underline decoration-dashed text-[#006FA3] font-semibold'>Edit</Link>
                </form>

                <form action="#" className='flex pb-2 flex-col relative'>
                    <h2 className='font-Inter font-bold text-sm pb-1'>Services</h2>
                    <input type="email" placeholder='xyz@gmail.com' className='border-[#006FA3] text-sm font-semibold font-Inter outline-none focus:active:transparent border rounded-md mb-4 px-4 py-2'/>
                  
                </form>

               
            </div>


            <div className='w-[50%]'>
            <form action="#" className='flex pb-2 flex-col relative'>
                    <h2 className='font-Inter font-bold text-sm pb-1'>Resume/CV</h2>
                    <input type="text" placeholder='Joe' className='border-[#006FA3] outline-none focus:active:transparent border rounded-md mb-4 px-4 py-2 font-semibold text-sm font-Inter text-black'/>
               
                </form>

                <form action="#" className='flex pb-2 flex-col relative'>
                    <h2 className='font-Inter font-bold text-sm pb-1'>Location</h2>
                    <input type="text" placeholder='India' className='border-[#006FA3] outline-none focus:active:transparent border rounded-md mb-4 px-4 py-2 font-semibold text-sm font-Inter text-black'/>
                   
                </form>

                
            </div>

            
           </section>

           <Link className='bg-[#0A66C2] relative text-white font-semibold py-2 px-5 right-0 left-[575px] rounded-md mb-20'>Save Changes</Link>
           </section>
            
    </>
  )
}

export default ProfileForm