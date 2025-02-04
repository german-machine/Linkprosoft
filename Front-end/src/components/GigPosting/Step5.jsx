/* eslint-disable react/prop-types */
import { TbClockHour9Filled } from "react-icons/tb"


const Step5 = ({nextStep, prevStep}) => {

    const submitFormData = (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={submitFormData}>

        <div className='w-[65%] space-y-5'>
            <h1 className='text-4xl w-[70%] font-semibold'>
                Budget
            </h1>
            <p className="text-2xl">
                This helps us to match you with Professionals within your range as well as talents gets
                to know your budget
            </p>

            <div className="flex gap-6">
                <div className="border-2 w-2/5 p-3 rounded-lg bg-gray-200">
                    <div className="mb-10 text-blue-500 flex justify-between items-center">
                        <TbClockHour9Filled size={50}/>
                        <div className="w-6 h-6  rounded-full bg-blue-500 border-4 border-blue-600"/>
                    </div>
                    <h3>Hourly Rate</h3>
                </div>
                <div className="w-2/5 p-3 bg-gray-400 rounded-lg border-2 border-blue-600">
                    <div className="mb-10 text-blue-500 flex justify-between items-center ">
                        <TbClockHour9Filled size={50}/>
                        <div className="w-6 h-6  rounded-full bg-transparent border-4 border-blue-600"/>
                    </div>
                    <h3>Fixed Price</h3>
                </div>
            </div>
        </div>

        <div className='mt-5'>
            <div className="py-1 w-[60%] space-y-2">
                <h3 className="text-2xl font-semibold">Price</h3>
                <p className="text-xl w-5/6">
                    This can be negotiated to create a milestone when you chat with your freelancer
                </p>
                <div className="w-1/2">
                    <input type="text" className="w-full border-2 py-2 px-5 rounded-lg" dir="rtl" placeholder="$12.00"/>
                </div>
            </div>


            <div className='flex w-full justify-between'>
                <button className='bg-white mt-10 border-blue-500 border rounded-md py-2 px-5 hover:scale-105 text-blue-500'
                    onClick={prevStep}
                >Back</button>
                <button className='bg-blue-500 mt-10 rounded-md py-2 px-5 hover:scale-105 text-white'
                    onClick={nextStep}
                >Next Description</button>
            </div>
        </div>
    </form>
  )
}

export default Step5