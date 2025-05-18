import React, { useState } from 'react'
import { X } from "lucide-react";

const Step3 = () => {
    const [skills, setSkills] = useState(["Plumber", "Welder"]);

    const handleChange = (index, value) => {
        const newSkills = [...skills];
        newSkills[index] = value;
        setSkills(newSkills);
    };

    const handleAddSkill = () => {
        setSkills([...skills, ""]);
    };

    const handleRemoveSkill = (index) => {
        const newSkills = skills.filter((_, i) => i !== index);
        setSkills(newSkills);
    };
    return (
        <section className='w-full'>
            <div className='w-full mx-auto py-10'>
                <div>
                    <p className='font-Inter text-[25px] md:text-4xl font-medium'>What skill can you offer</p>
                    <p className='font-Inter text-base text-[#000000BA]'>This lets our algorithm show you offers based on what you can do, this can be changed.</p>
                </div>

                <form className='w-full sm:w-[80%] mx-auto flex flex-col gap-4 mt-6 md:mt-10 font-Inter'>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Skill set
                    </label>
                    <div className="flex flex-col sm:flex-ro flex-wrap sm:gap-[2%] sm:gap-y-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="w-full sm:w-[49% flex items-center gap-1 mb-2">
                                <input
                                    type="text"
                                    value={skill}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    className="w-full flex-1 border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 font-Inter"
                                />
                                {skills.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveSkill(index)}
                                        className="text-red-500 hover:text-red-700"
                                        title="Remove"
                                    >
                                        <X size={16} />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                <button
                    type="button"
                    onClick={handleAddSkill}
                    className="text-blue-600 text-sm font-medium hover:underline flex place-self-start"
                >
                    Add more +
                </button>
                </form>
            </div>
        </section>
    )
}

export default Step3
