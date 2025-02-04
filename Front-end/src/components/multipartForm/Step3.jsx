/* eslint-disable react/prop-types */
import { useState } from "react"
import validator from "validator"
import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { X, Plus } from 'lucide-react'


const StepThree = ({ handleFormData, values }) => {
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const [inputFields, setInputFields] = useState([{
        OtherSkill: ""
    }])

    const submitFormData = (e) => {
        e.preventDefault()

        let formData = [...inputFields, values]

        if(validator.isEmpty(values.skill)){
            setError(true)
        }else{
            console.log(formData);
            navigate("/post-gig")
        }
    }

    const removeFields = (currentIndex) => {
        let data = [...inputFields]
        data.splice(currentIndex, 1)
        setInputFields(data)
    }

    const addFields = () => {
        let newfield = { OtherSkill: ""}

        if(inputFields.length <= 3){
            setInputFields([...inputFields, newfield])
        }
    }

    const handleFormChange = (index, e) => {
        let data = [...inputFields]
        data[index][e.target.name] = e.target.value
        setInputFields(data)
    }




    return (
        <form onSubmit={submitFormData}>
            <div className="space-y-2">
                <p className="text-5xl">What skill can you offer ?</p>
                <p className="text-xl text-gray-500">This lets our algorithm show you offers based on what you
                    can do, this can be changed
                </p>
            </div>

            <div className="mt-[3rem] flex gap-4 flex-col w-[80%] mx-auto">
                <div className="w-full">
                    <label htmlFor="">Skill Set</label>
                    <input placeholder="Plumber" required
                        name="skill"
                        value={values.skill}
                        onFocus={() => setError(false)}
                        onChange={handleFormData("skill")}
                        className='mt-1 w-full py-2 px-4 bg-white rounded-lg border-2 border-sky-700 focus:outline-red-700 border-solid'/>
                </div>

                {
                    inputFields.map((input, index) =>
                        <div className={`w-full relative `} key={index}>
                            <input placeholder="Welder"
                                name={"OtherSkill"}
                                value={input.name}
                                onFocus={() => setError(false)}
                                onChange={(e) => handleFormChange(index, e)}
                                className='mt-1 w-full py-2 px-4 bg-white rounded-lg border-2 border-sky-700 focus:outline-red-700 border-solid'/>
                                <X className={`absolute top-4 -right-8 text-red-500 ${inputFields.length <= 3 ? "" : ""}`} onClick={() => removeFields(index)}/>
                        </div>
                    )
                }
                {error && <p className="text-xs text-red-600">Empty field not allowed</p>}
                <p className={`text-blue-400 flex gap-2 items-center`}>Add more
                    <Plus size={20} onClick={addFields}/>
                </p>
            </div>

            <div className="flex mt-[2rem] justify-end">
                <Button className="px-4">Load Openings</Button>
            </div>
        </form>
    )
}

export default StepThree