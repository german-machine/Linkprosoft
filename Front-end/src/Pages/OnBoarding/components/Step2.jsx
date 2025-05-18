import React from 'react'

const Step2 = () => {
    return (
        <section className='w-full'>
            <div className='w-full mx-auto py-10'>
                <div>
                    <p className='font-Inter text-[25px] md:text-4xl font-medium'>State your minimum base offer</p>
                    <p className='font-Inter text-base text-[#000000BA]'>This is a minimum pay a client pays for your service</p>
                </div>

                <form className='flex flex-col sm:flex-row gap-4 mt-6 md:mt-10'>
                    <div className='font-Inter'>
                        <label
                            htmlFor='minimumBasePay'
                            className='text-[#1C2B33] md:text-xl font-bold'
                        >
                            Minimum base pay
                        </label>
                        <input
                            type="text"
                            placeholder='$100k'
                            id='minimunBasePay'
                            name='minimumBasePay'
                            className='w-full border outline-none py-2 px-3 border-blue-500 rounded-md md:rounded-sm mt-1 placeholder-gray-400'
                        />
                    </div>
                    <div className='font-Inter'>
                        <label
                            htmlFor='duration'
                            className='text-[#1C2B33] md:text-xl font-bold'
                        >
                            Duration
                        </label>
                        <input
                            type="text"
                            placeholder='Per Hour'
                            id='duration'
                            name='duration'
                            className='w-full border outline-none py-2 px-3 border-blue-500 rounded-md md:rounded-sm mt-1 placeholder-gray-400'
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Step2
