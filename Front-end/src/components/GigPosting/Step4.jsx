/* eslint-disable react/prop-types */
import { TbClockHour9Filled } from "react-icons/tb"


const Step4 = ({nextStep, prevStep}) => {

    const submitFormData = (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={submitFormData}>

        <div className='w-[65%] space-y-6'>
            <h1 className='text-5xl w-[70%]'>
                Budget
            </h1>
            <div className="flex gap-6">
                <div className="border-2 border-blue-600 w-2/5 p-3 rounded-lg bg-gray-200">
                    <div className="mb-10 text-blue-500 flex justify-between items-center">
                        <TbClockHour9Filled size={50}/>
                        <div className="w-6 h-6  rounded-full bg-blue-500 border-4 border-blue-600"/>
                    </div>
                    <h3>Hourly Rate</h3>
                </div>
                <div className="w-2/5 p-3 border-2 border-transparent bg-gray-400 rounded-lg">
                    <div className="mb-10 text-blue-500 flex justify-between items-center">
                        <TbClockHour9Filled size={50}/>
                        <div className="w-6 h-6  rounded-full bg-transparent border-4 border-blue-600"/>
                    </div>
                    <h3>Fixed Price</h3>
                </div>
            </div>
        </div>

        <div className='mt-12'>
            <div className='w-[60%] flex gap-7'>
                <div className='w-9/12 '>
                    <label htmlFor="" className="w-full">From</label>
                    <div className="flex items-center gap-1 w-11/12">
                        <input type="text" className="w-full px-3 py-2 border-2 rounded-lg" dir="rtl" placeholder="$12.00"/>
                        <span>/hr</span>
                    </div>
                </div>
                <div className='w-11/12'>
                    <label htmlFor="">To</label>
                    <div className="flex items-center gap-1 w-9/12">
                        <input type="text" className="w-full px-3 py-2 border-2 rounded-lg" dir="rtl" placeholder="$29.00"/>
                        <span>/hr</span>
                    </div>
                </div>
            </div>

            <div className="py-1 text-2xl w-[60%]">
                <p>Professionals tend to charge $12 - $29 for similar projects per hour</p>
            </div>
            <div className='flex w-full justify-between'>
                <button className='bg-white mt-16 border-blue-500 border rounded-md py-2 px-5 hover:scale-105 text-blue-500'
                    onClick={prevStep}
                >Back</button>
                <button className='bg-blue-500 mt-16 rounded-md py-2 px-5 hover:scale-105 text-white'
                    onClick={nextStep}
                >Next Description</button>
            </div>
        </div>
    </form>
  )
}

export default Step4