/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import validator from "validator"



// eslint-disable-next-line react-refresh/only-export-components
const StepTwo = ({ nextStep, handleFormData, values}) => {
    const [error, setError] = useState(false)

    const submitFormData = (e) => {
        e.preventDefault()

        if(validator.isEmpty(values.basePay) || validator.isEmpty(values.duration)){
            setError(true)
        }else{
            nextStep()
        }
    }

    return (
        <form onSubmit={submitFormData}>
            <div>
                <p className="text-[2.67rem]">State your minimum base offer</p>
                <p className="text-2xl text-gray-600">This is the minimum pay a client can offer for your service</p>
            </div>

            <div className="mt-[5rem] flex gap-4">
                <div className="w-1/2">
                    <label htmlFor="" className="font-semibold">Minimum base pay, State </label>
                    <input placeholder="100K"
                        // required
                        name="basePay"
                        value={values.basePay}
                        onChange={handleFormData("basePay")}
                        onFocus={() => setError(false)}
                        className='mt-1 w-full py-2 px-4 bg-white rounded-sm border-2 border-sky-700 focus:outline-red-700 border-solid'/>
                </div>
                <div className="w-1/2">
                    <label htmlFor="" className="font-semibold">Duration</label>
                    <input placeholder="Per hour"
                        // required
                        name="duration"
                        value={values.duration}
                        onFocus={() => setError(false)}
                        onChange={handleFormData("duration")}
                        className='mt-1 w-full py-2 px-4 bg-white rounded-sm border-2 border-sky-700 focus:outline-red-700 border-solid'/>
                </div>
            </div>
            {error && <p className="text-center pt-3 text-sm text-red-600">Empty fields not allowed at these stage</p>}

            <div className="flex mt-[1rem] justify-end">
                    <button
                        type="submit"
                        className="bg-blue-600 px-6 py-2 rounded-md hover:scale-105 text-white"
                    >
                        Next
                    </button>
                </div>
        </form>
    )
}

export default StepTwo