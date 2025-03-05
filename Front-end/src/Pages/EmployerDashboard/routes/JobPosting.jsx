import React, { useState } from 'react'
import { FaSearch, FaPlus, FaClock, FaTag, FaPaperclip } from 'react-icons/fa'
import { RiPencilFill } from "react-icons/ri";

const JobPosting = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleNext = () => {
    if (currentPage < 7) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option)
  }

  return (
    <div className="w-[90%] ">
      <div className="mb-8">
        {currentPage === 1 && (
          <div>
            <div>
              <h1 className='font-Inter font-bold text-3xl'>Choose a strong <br /> title.</h1>
              <p className='font-Inter text-sm'>The right title helps your Gigs post to stand out to the right <br /> candidates, its the first thing that they'll see</p>
            </div>

            <div className='mt-12 flex justify-between font-Inter'>
              <div>
                <p className='text-sm'>write a title for your Gigs post</p>
                <input type="text" name="" id="" className='border-b-2 border-[#D9D9D9] outline-none focus:outline-none mt-11 pr-20' />
              </div>

              <div className=' '>
                <p className='pb-3  text-lg'>Example titles</p>
                <ul className='list-disc'>
                  <li className='pb-5 leading-tight' > Build a user friendly e-commerce <br />site using Framer</li>
                  <li>SEO specialist needed</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {currentPage === 2 && (
          <div>
            <div>
              <h1 className='font-Inter font-bold text-4xl'>Skills required for the proper <br /> execution of the project</h1>
              <p className='font-Inter '>This explains the proper skillset that must be considered to the smooth running of the project</p>
            </div>

            <div className='mt-11 font-Inter'>
              <p className='text-sm'>Search skills and you can add your own</p>
              <div className='relative w-[40%] mt-4'>
                <FaSearch className='absolute right-3 top-2 text-gray-500' />
                <input type="text" name="" id="" placeholder='Search skills' className='border border-[#798387B2] pl-3 pr py-1 rounded-lg w-full outline-none focus:outline-none' />
              </div>

              <div className='mt-4 flex flex-wrap w-[60%] gap-2'>
                <button className='flex items-center gap-3 mb-2 border border-[#00000080] text-gray-500 px-3 py-1 rounded-full'>
                  JavaScript
                  <FaPlus className='text-[11px]'/> 
                </button>
                <button className='flex items-center gap-3 border border-[#00000080] text-gray-500 px-4 py-1 rounded-full'>
                  React
                  <FaPlus className='text-[11px]'/> 
                </button>
                <button className='flex items-center gap-5 border border-[#00000080] text-gray-500 px-4 py-1 rounded-full'>
                  NodeJs
                  <FaPlus className='text-[11px]'/> 
                </button>
                <button className='flex items-center gap-3 border border-[#00000080] text-gray-500 px-4 py-1 rounded-full'>
                  CSS
                  <FaPlus className='text-[11px]'/> 
                </button>
                <button className='flex items-center gap-3 border border-[#00000080] text-gray-500 px-4 py-1 rounded-full'>
                  Html
                  <FaPlus className='text-[11px]'/> 
                </button>
                <button className='flex items-center gap-3 border border-[#00000080] text-gray-500 px-4 py-1 rounded-full'>
                  Web Development
                  <FaPlus className='text-[11px]'/> 
                </button>
                <button className='flex items-center gap-3 border border-[#00000080] text-gray-500 px-4 py-1 rounded-full'>
                  UIUX Design
                  <FaPlus className='text-[11px]'/> 
                </button>
                <button className='flex items-center gap-3 border border-[#00000080] text-gray-500 px-4 py-1 rounded-full'>
                  Mobile App Development
                  <FaPlus className='text-[11px]'/> 
                </button>
                <button className='flex items-center gap-3 border border-[#00000080] text-gray-500 px-4 py-1 mt-2 rounded-full'>
                 Catering
                  <FaPlus className='text-[11px]'/> 
                </button>
              </div>
            </div>
          </div>
        )}

        {currentPage === 3 && (
          <div>
            <div>
              <h1 className='font-Inter font-bold pb-2 text-3xl'>Scope of your work</h1>
              <p className='font-Inter '>Consider the size and time it will take to complete your project</p>
            </div>

            <div className='mt-20 w-[60%] flex justify-between font-Inter'>
              <div className='flex flex-col gap-4 w-[48%]'>
                <div>
                  <p className='font-Inter text-sm font-bold'>Duration</p>
                  <input type="text" placeholder='eg. One time, 3 Months, 6 Months' className='border-2 placeholder:text-sm border-gray-300 pl-4 pr-4 py-1.5 rounded-lg w-full outline-none focus:outline-none' />
                </div>
                <div>
                  <p className='text-sm font-bold font-Inter'>Scale</p>
                  <input type="text" placeholder='eg.  Large, Medium, Small' className='border-2 border-gray-300 pl-4 pr-4 py-1.5 rounded-lg w-full outline-none focus:outline-none' />
                </div>
              </div>

              <div className='flex flex-col gap-4 w-[48%]'>
                <div>
              
                <p className='text-sm font-bold font-Inter'>Level</p>
                  <input type="text" placeholder='eg. Entry, Professional, Expert level' className='border-2 palaceholder:text-sm text-sm border-gray-300 pl-4 pr-4 py-1.5 rounded-lg w-full outline-none focus:outline-none' />
                </div>
              </div>
            </div>
          </div>
        )}

        {currentPage === 4 && (
          <div>
            <div>
              <h1 className='font-Inter font-bold text-3xl pb-3'>Budget</h1>
              <p className='font-Inter text-sm'>This helps us to match you with professionals within your range as well <br /> as talents get to know your budget</p>
            </div>

            <div className='mt-9 flex gap-4 font-Inter'>
              <div
                className={`border-2 ${selectedOption === 'hourly' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'} p-4 rounded-lg w-[25%]  cursor-pointer`}
                onClick={() => handleOptionClick('hourly')}
              >
                <div className='flex justify-between pb-7'>
                  <FaClock className='text-gray-500' />
                  <div className={`w-4 h-4 border-2 ${selectedOption === 'hourly' ? 'bg-blue-500' : 'border-blue-500'} rounded-full`}></div>
                </div>
                <p className='font-bold mt-4'>Hourly Rate</p>
              </div>

              <div
                className={`border-2 ${selectedOption === 'fixed' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'} p-4 rounded-lg w-[25%] cursor-pointer`}
                onClick={() => handleOptionClick('fixed')}
              >
                <div className='flex justify-between gap-4 pb-7'>
                  <FaTag className='text-gray-500' />
                  <div className={`w-4 h-4 border-2 ${selectedOption === 'fixed' ? 'bg-blue-500' : 'border-blue-500'} rounded-full`}></div>
                </div>
                <p className='font-bold mt-4'>Fixed Price</p>
              </div>
            </div>

            {selectedOption === 'hourly' && (
              <div className='mt-4 flex gap-[13%] w-[50%] font-Inter'>
                <div className='flex flex-col gap-4 w-[50%]'>
                  <div>
                    <p className='text-sm font-bold'>From</p>
                    <div className='flex  items-center'>
                      <input type="text" placeholder='$12.00' className='border-2 border-gray-300 pl-4 placeholder:text-right pr-4 py-1.5 rounded-lg w-full outline-none focus:outline-none ' />
                      <span className='ml-2 '>hr*</span>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col gap-4 w-[48%]'>
                  <div>
                    <p className='font-bold text-sm'>To</p>
                    <div className='flex items-center'>
                      <input type="text" placeholder='£29.00' className='border-2 border-gray-300 pl-4 pr-4 py-2 rounded-lg w-full outline-none placeholder:text-right focus:outline-none' />
                      <span className='ml-2'>hr*</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedOption === 'fixed' && (
              <div className='mt-9 font-Inter w-[40%]'>
                <p className='font-bold'>Price</p>
                <p>This can be negotiated to create a milestone when you chat with your freelancer</p>
                <input type="text" placeholder='£29.00' className='border border-gray-300 pl-4 pr-4 py-2 rounded-lg w-[60%] placeholder:text-right outline-none focus:outline-none mt-4' />
              </div>
            )}

            <p className='mt-2 text-gray-500'>Professionals tend to charge £12 - £29 for similar projects per hour</p>
          </div>
        )}

        {currentPage === 5 && (
          <div>
            <div>
              <h1 className='font-Inter font-bold text-3xl'>Start the Gig conversation</h1>
              <p className='font-Inter pt-6'>Professionals are looking for:</p>
            </div>

            <div className='mt-9 flex gap-8 font-Inter'>
              <div className='w-[48%]'>
                <ul className='list-disc pl-5'>
                  <li>Clear expectations about your task</li>
                  <li>Skill set Required for your work</li>
                  <li>Good communication</li>
                  <li>Details of how you or your team like to work</li>
                </ul>
              </div>

              <div className='w-[45%]'>
                <p className='font-bold '>Describe what you need</p>
                <textarea className='border-2 border-[#FC8E08] p-6 rounded-lg w-full h-[200px] outline-none focus:outline-none'></textarea>
                <p className='text-sm text-[#006FA3]'>Minimum of 100 characters</p>
                <button className='flex items-center gap-2 border-2 border-[#006FA3] text-[#006FA3] px-3 py-1 rounded-lg mt-4 '>
                  <FaPaperclip /> Attach a file
                </button>
                <p className='text-blue-500 text-sm'>Max file size 100 mb</p>
              </div>
            </div>
          </div>
        )}

        {currentPage === 6 && (
          <div className='w-[70%]'>
            <div className='flex justify-between items-center'>
              <h1 className='font-Inter font-bold text-4xl'>Gig details</h1>
              <button className='px-4 py-2 mt-7 bg-blue-500 text-white rounded'>Post this Gig</button>
            </div>

            <div className='mt-9 b-black'>
              <table className='w-[100%] border-2 border-[#00000080] rounded-lg'>
                <tbody className='rounded-lg'>
                  <tr className='rounded-lg'>
                    <td className='flex justify-between items-center py-2 px-8 border-b'>
                      <span className='font-Inter text-lg font-bold'>UI/UX Design</span>
                      <RiPencilFill className='text-blue-500 text-3xl border border-blue-500 rounded-full p-1' />
                    </td>
                  </tr>

                  <tr className='rounded-lg'>
                    <td className='flex justify-between items-center py-3 px-8 border-b'>
                      <span className='font-Inter text-sm'>Hello World</span>
                      <RiPencilFill className='text-blue-500 text-3xl border border-blue-500 rounded-full p-1' />
                    </td>
                  </tr>

                  <tr className='rounded-lg'>
                    <td className='flex justify-between items-center py-3 px-8 '>
                      <span className='font-Inter text-lg font-bold leading-tight'>Category
                        <p className='font-normal text-[12px] text-[#000000B2]'>UiUx Design</p>
                      </span>
                      <RiPencilFill className='text-blue-500 text-3xl border border-blue-500 rounded-full p-1' />
                    </td>
                  </tr>

                  <tr className='rounded-lg'>
                    <td className='flex justify-between items-center py-2 px-8 '>
                      <span className='font-Inter text-lg font-bold leading-tight'>Skills
                        <p className='font-normal text-[12px] text-[#000000B2]'>Mobile App design, Wireframing, Responsive design</p>
                      </span>
                      <RiPencilFill className='text-blue-500 text-3xl border border-blue-500 rounded-full p-1' />
                    </td>
                  </tr>

                  <tr className='rounded-lg'>
                    <td className='flex justify-between items-center py-2 px-8 '>
                      <span className='font-Inter text-lg font-bold leading-tight'>Scope
                        <p className='font-normal text-[12px] text-[#000000B2]'>Small, 1-3 months, Entry Level</p>
                      </span>
                      <RiPencilFill className='text-blue-500 text-3xl border border-blue-500 rounded-full p-1' />
                    </td>
                  </tr>

                  <tr className='rounded-lg border-b '>
                    <td className='flex pb-9 justify-between items-center py-4 px-8 '>
                      <span className='font-Inter text-lg font-bold leading-tight'>Budget
                        <p className='font-normal text-[12px] text-[#000000B2]'>$12</p>
                      </span>
                      <RiPencilFill className='text-blue-500 text-3xl border border-blue-500 rounded-full p-1' />
                    </td>
                  </tr>

                  <div className='m-auto flex w-[90%] mb-2 justify-between pt-3'>
                    <button onClick={handleBack} className='px-9 py-2 bg-blue-500 text-white rounded'>Back</button>
                    <div className='flex gap-4'>
                      <button className='px-4 py-2 border border-gray-300 rounded'>Save as Draft</button>
                      <button className='px-4 py-2 bg-blue-500 text-white rounded'>Post this Gig</button>
                    </div>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {currentPage === 7 && <div>Page 7 Content</div>}
      </div>

      {currentPage < 6 && (
        <div className="flex relative top-[40px] justify-between">
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-300 rounded"
            disabled={currentPage === 1}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded"
            disabled={currentPage === 7}
          >
            Next
          </button>
        </div>
      )}

      {currentPage < 6 && (
        <div className="w-full bg-gray-200 relative top-[80px] h-2 mb-8">
          <div
            className="bg-blue-500 h-2"
            style={{ width: `${(currentPage / 7) * 100}%` }}
          ></div>
        </div>
      )}
    </div>
  )
}

export default JobPosting