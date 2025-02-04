/* eslint-disable react/prop-types */

import { useState } from "react"


const Step2 = ({nextStep, prevStep}) => {

    const submitFormData = (e) => {
        e.preventDefault()
    }

    const [skillList, setSkillList] = useState([])

  return (
    <form onSubmit={submitFormData} className="space-y-10">

        <div className='w-[55%] space-y-2'>
            <h1 className='text-4xl w-full'>
                Skills required for the proper execution of the project
            </h1>
            <p className='text-xl opacity-50'>
                This explains the proper skillset that must be considered to the smooth running of the project
            </p>
        </div>

        <div className=''>
            {/* <div className='w-[85%] flex'>
                <div className='w-full'>
                    <p>Write a title for your Gig post</p>
                    <input type="text" className='border-0 border-b-gray-400 border-b-2
                    w-2/3
                    outline-none mt-16 px-2'/>
                </div>

                <div className='w-full'>
                    <p>Example titles</p>
                    <ul className='list-disc px-8 space-y-5'>
                        <li>Build a user friendly e-commerce site using Framer</li>
                        <li>SEO specialist needed</li>
                    </ul>
                </div>
            </div> */}
            <div className="mt-14 flex flex-col">
                <label htmlFor="ui/ux" className="text-md mb-2">
                    Search skills and you can add your own
                </label>
                <div className="border-2 w-1/2 rounded-md flex justify-between mb-3">
                    <input type="text" readOnly className="w-full outline-none rounded-md p-2"
                    placeholder="UI/UX Design X" value={skillList}/>
                </div>

                <div className="flex flex-wrap w-2/3 gap-5  items-center text-gray-400">
                    <div className="flex w-fit items-center border-2 rounded-full  px-3 gap-5 text-2xl"
                        onClick={() => setSkillList((prev) => [prev, "UI/UX Design"])}
                    >
                        UI/UX Design
                        <span>+</span>
                    </div>
                    <div className="flex w-fit items-center border-2 rounded-full  px-3 gap-5 text-2xl">
                        Mobile App dev
                        <span>+</span>
                    </div>
                    <div className="flex w-fit items-center border-2 rounded-full  px-3 gap-5 text-2xl">
                       Figma
                        <span>+</span>
                    </div>
                    <div className="flex w-fit items-center border-2 rounded-full  px-3 gap-5 text-2xl">
                        Web Dev
                        <span>+</span>
                    </div>
                    <div className="flex w-fit items-center border-2 rounded-full  px-3 gap-5 text-2xl">
                        Web design
                        <span>+</span>
                    </div>
                    <div className="flex w-fit items-center border-2 rounded-full  px-3 gap-5 text-2xl">
                        House wiring
                        <span>+</span>
                    </div>
                    <div className="flex w-fit items-center border-2 rounded-full  px-3 gap-5 text-2xl">
                        Catering
                        <span>+</span>
                    </div>
                    <div className="flex w-fit items-center border-2 rounded-full  px-3 gap-5 text-2xl">
                        Bricklaying
                        <span>+</span>
                    </div>
                    <div className="flex w-fit items-center border-2 rounded-full  px-3 gap-5 text-2xl">
                        Painting
                        <span>+</span>
                    </div>
                </div>
            </div>

            <div className='flex w-full justify-between'>
                <button className='bg-white mt-16 border-blue-500 border rounded-md py-2 px-5 hover:scale-105 text-blue-500'
                    onClick={prevStep}
                >Back</button>
                <button className='bg-blue-500 mt-16 rounded-md py-2 px-5 hover:scale-105 text-white'
                    onClick={nextStep}
                >Next Scope</button>
            </div>
        </div>
    </form>
  )
}

export default Step2