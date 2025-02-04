/* eslint-disable react/prop-types */
import { useState } from "react"
import validator from "validator"




const StepOne = ({ nextStep, handleFormData, values}) => {
    const [error, setError] = useState()

    const submitFormData = (e) => {
        e.preventDefault()

        if(validator.isEmpty(values.city) || validator.isEmpty(values.country)){
            setError(true)
        }else{
            nextStep()
        }
    }

    return (
        <form onSubmit={submitFormData}>
            <div>
                <p className="text-3xl">Lets get you <span className="text-sky-500">started</span>,</p>
                <p className="text-3xl">Where are you <span className="text-sky-500">located</span></p>
            </div>

            <div className="mt-[5rem] flex gap-4">
                <div className="w-1/2">
                    <label htmlFor="">City, State *</label>
                    <input placeholder="Portharcourt"
                        // required
                        name="city"
                        value={values.city}
                        onChange={handleFormData("city")}
                        onFocus={() => setError(false)}
                        className={`mt-1 w-full py-2 px-4 bg-white rounded-lg border-2 ${error ? "border-red-700" : "border-sky-700"} focus:outline-blue-500 border-solid`}/>
                </div>
                <div className="w-1/2">
                    <label htmlFor="">Country</label>
                    <input placeholder="Nigeria"
                        // required
                        name="country"
                        value={values.country}
                        onFocus={() => setError(false)}
                        onChange={handleFormData("country")}
                        className={`mt-1 w-full py-2 px-4 bg-white rounded-lg border-2 ${error ? "border-red-700" : "border-sky-700"} focus:outline-blue-500 border-solid`}/>
                </div>
            </div>
            {error && <p className="text-center pt-3 text-sm text-red-600">Empty fields not allowed</p>}

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

export default StepOne