import React, { useState } from "react";

export default function Budget({ setIsActive }) {
  const [budgetType, setBudgetType] = useState("hourly");
  const [fromRate, setFromRate] = useState("12.00");
  const [toRate, setToRate] = useState("29.00");

  const selectType = (type) => setBudgetType(type);

  function handleNavigateBack() {
        setIsActive(prev => prev = 'scope-of-work')
    }

    function handleNavigateForward() {
        setIsActive(prev => prev = 'scope-of-work')
    }

  return (
    <div className="w-full lg:w-[75%] xl:w-[75%] min-h-screen flex justify-center bg-white p-4 py-8 place-self-end">
      <div className="w-full lg:w-[90%] mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-900">
          Budget
        </h1>
        <p className="text-gray-600 mb-6">
          This helps us to match you with professionals within your range as well as talents get to know your budget
        </p>

        {/* Budget Type Toggle */}
        <div className="flex gap-4 mb-6">
          <div
            onClick={() => selectType("hourly")}
            className={`flex-1 border rounded-md p-4 cursor-pointer flex items-center gap-3 ${
              budgetType === "hourly"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 bg-gray-100"
            }`}
          >
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${budgetType === "hourly" ? "border-blue-500" : "border-gray-400"}`}>
              {budgetType === "hourly" && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
            </div>
            <span className="text-sm font-medium">Hourly Rate</span>
          </div>

          <div
            onClick={() => selectType("fixed")}
            className={`flex-1 border rounded-md p-4 cursor-pointer flex items-center gap-3 ${
              budgetType === "fixed"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 bg-gray-100"
            }`}
          >
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${budgetType === "fixed" ? "border-blue-500" : "border-gray-400"}`}>
              {budgetType === "fixed" && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
            </div>
            <span className="text-sm font-medium">Fixed Price</span>
          </div>
        </div>

        {/* Hourly Rate Range Inputs */}
        {budgetType === "hourly" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                <span className="text-gray-500 text-sm mr-1">£</span>
                <input
                  type="number"
                  value={fromRate}
                  onChange={(e) => setFromRate(e.target.value)}
                  className="w-full outline-none text-sm bg-transparent"
                />
                <span className="ml-1 text-gray-500 text-sm">/hr</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                <span className="text-gray-500 text-sm mr-1">£</span>
                <input
                  type="number"
                  value={toRate}
                  onChange={(e) => setToRate(e.target.value)}
                  className="w-full outline-none text-sm bg-transparent"
                />
                <span className="ml-1 text-gray-500 text-sm">/hr</span>
              </div>
            </div>
          </div>
        )}

        <p className="text-sm text-gray-500 mb-6">
          Professionals tend to charge £12 - £29 for similar projects per hour
        </p>

        <div className="flex flex-row justify-between items-center gap-4 mt-[6rem]">
          <button onClick={handleNavigateBack} className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 w-auto">
            Back
          </button>
          <button onClick={handleNavigateForward} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-auto">
            Next Description
          </button>
        </div>

        <div className="w-full bg-gray-200 h-1 rounded mt-6">
          <div className="bg-blue-500 h-full rounded" style={{ width: "80%" }}></div>
        </div>
      </div>
    </div>
  );
}
