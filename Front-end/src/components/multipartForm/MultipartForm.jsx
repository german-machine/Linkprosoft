import { useState } from "react"
import { Link } from "react-router-dom"
import StepOne from "./Step1"
import StepTwo from "./Step2"
import StepThree from "./Step3"

const MultipartForm = () => {

    const [count, setCount] = useState(0)


    const [form, setForm] = useState({
        city: "",
        country: "",
        basePay: "",
        duration: "",
        skill: ""
    })

    const nextStep = () => {
        setCount(count + 1)
    }

    const handleChange = input => (e) => {

        const {value} = e.target

        setForm((prevState) => ({
            ...prevState, [input]: value
        }))
    }


  return (
    <div className="flex shadow flex-col mt-[8rem] justify-center mx-auto w-1/2  p-5 overflow-hidden">
        <div className="flex flex-col">
            <div className="flex items-center justify-end w-full text-blue-500">
                <Link to={"/post-gig"}>Skip</Link>
            </div>
            <div className="w-5/6 mt-6 space-x-2 flex items-start">
            {
                [...Array(4)].map((_, index) =>
                <div key={index} className={`h-2 w-1/4 ${index <= count ? "bg-red-900" : "bg-gray-400"}`} />
                )
            }
            </div>
        </div>


        <div className="mt-[5rem]">

            {
                count === 0 ? (
                    <StepOne
                        nextStep={nextStep} handleFormData={handleChange} values={form}
                    />
                ): null
            }


            {
                count === 1 ? (
                    <StepTwo
                        handleFormData={handleChange} values={form} nextStep={nextStep}
                    />
                ): null
            }


             {
                count === 2 &&
                    <StepThree
                        handleFormData={handleChange} values={form}
                    />
            }

        </div>
    </div>

  )
}

export default MultipartForm