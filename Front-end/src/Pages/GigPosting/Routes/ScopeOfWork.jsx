import React, { useState } from "react";

export default function ScopeOfWork({ setIsActive }) {
    const [duration, setDuration] = useState("");
    const [level, setLevel] = useState("");
    const [scale, setScale] = useState("");

    function handleNavigateBack() {
        setIsActive(prev => prev = 'skill-required')
    }

    function handleNavigateForward() {
        setIsActive(prev => prev = 'budget')
    }

    return (
        <div className="w-full lg:w-[75%] xl:w-[75%] min-h-screen flex justify-center bg-white p-4 py-8 place-self-end">
            <div className="w-full lg:w-[90%] mx-auto">
                <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-900">
                    Scope of your work
                </h1>
                <p className="text-gray-600 mb-6">
                    Consider the size and time it will take to complete your project
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Duration
                        </label>
                        <input
                            type="text"
                            placeholder="eg. One time, 3 Months, 6 Months"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Level
                        </label>
                        <input
                            type="text"
                            placeholder="eg. Entry, Professional, Expert level"
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Scale
                    </label>
                    <input
                        type="text"
                        placeholder="eg. Large, Medium, Small"
                        value={scale}
                        onChange={(e) => setScale(e.target.value)}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-row justify-between items-center gap-4 mt-[5rem]">
                    <button onClick={handleNavigateBack} className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 w-auto">
                        Back
                    </button>
                    <button onClick={handleNavigateForward} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-auto">
                        Next Budget
                    </button>
                </div>

                <div className="w-full bg-gray-200 h-1 rounded mt-6">
                    <div className="bg-blue-500 h-full rounded" style={{ width: "60%" }}></div>
                </div>
            </div>
        </div>
    );
}
