import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const predefinedSkills = [
    "UI/UX Design",
    "Mobile App dev",
    "Figma",
    "Web Dev",
    "web design",
    "House wiring",
    "Catering",
    "Bricklaying",
    "Painting",
];

export default function SkillsRequired() {
    const [skills, setSkills] = useState(predefinedSkills);
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const addSkill = () => {
        if (input && !skills.includes(input)) {
            setSkills([...skills, input]);
            setInput("");
        }
    };

    const removeSkill = (skillToRemove) => {
        setSkills(skills.filter((skill) => skill !== skillToRemove));
    };


    function handleNavigate() {
        console.log('i am clicked');
        navigate(-1)
    }
    return (
        <div className="w-full lg:w-[75%] xl:w-[75%] min-h-screen flex justify-center p-4 py-8 lg:py-10 lg:place-self-end relative z-[10]">
            <div className="w-full lg:w-[90%] mx-auto">
                <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-900">
                    Skills required for the proper execution of the project
                </h1>
                <p className="text-gray-600 mb-6">
                    This explains the proper skillset that must be considered to the smooth running of the project
                </p>

                <div className="mb-4">
                    <div className="flex flex-col sm:flex-row gap-2 mb-2">
                        <input
                            type="text"
                            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                            placeholder="Search skills and you can add your own"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addSkill()}
                        />
                        <button
                            onClick={addSkill}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Add
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-gray-100 text-sm px-3 py-1 rounded-full text-gray-800 hover:bg-gray-200 cursor-pointer"
                                onClick={() => removeSkill(skill)}
                            >
                                {skill} <span className="ml-2">&times;</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row justify-between items-center mt-[5rem] gap-4">
                    <button  onClick={handleNavigate} className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 w-auto">
                        Back
                    </button>
                    <Link className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-auto">
                        Next Scope
                    </Link>
                </div>

                <div className="w-full bg-gray-200 h-1 rounded mt-6">
                    <div className="bg-blue-500 h-full rounded" style={{ width: "30%" }}></div>
                </div>
            </div>
        </div>
    );
}
