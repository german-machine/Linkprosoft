import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OnboardingNav from './components/OnboardingNav'

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const navigate = useNavigate()

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleSkip = () => {
    navigate('/UserDashboard')
  }

  const handleLoadOpenings = () => {
    navigate('/JobSearch')
  }

  return (
    <>
      <OnboardingNav />
      <div className="flex flex-col relative top-24 bg-white">
        <Link
          onClick={handleSkip}
          className='relative w-[5%] bottom-[20px] font-bold text-lg text-blue-500 font-Inter left-[1100px] cursor-pointer'
        >
          Skip
        </Link>
        <div className="flex gap-8 mb-[80px] relative left-[350px] w-[40%]">
          <div className={`w-[35%] h-2 ${currentStep >= 1 ? 'bg-blue-500' : 'bg-[#D9D9D92B]'}`}></div>
          <div className={`w-[35%] h-2 ${currentStep >= 2 ? 'bg-blue-500' : 'bg-[#D9D9D92B]'}`}></div>
          <div className={`w-[35%] h-2 ${currentStep >= 3 ? 'bg-blue-500' : 'bg-[#D9D9D92B]'}`}></div>
        </div>
        <div className='w-[50%] m-auto flex justify-start'>
          {currentStep === 1 && (
            <div>
              <div className='font-Inter text-4xl leading-none font-semibold'>
                <p>Let's get you <span className='text-blue-500'>started</span></p>
                <p>Where are you <span className='text-blue-500'>located</span></p>
              </div>
              <div className='mt-[70px] flex gap-8'>
                <form action="#" className='font-Inter'>
                  <h1>City State *</h1>
                  <input type="text" placeholder='Port Harcourt' className='border  outline-none py-1 px-3 border-blue-500 rounded-lg mt-1'/>
                </form>
                <form action="#" className='font-Inter'>
                  <h1>City State *</h1>
                  <input type="text" placeholder='Port Harcourt' className='border outline-none py-1 px-3 border-blue-500 rounded-lg mt-1'/>
                </form>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <div>
                <p className='font-Inter text-4xl leading-none font-semibold'>State your minimum base offer</p>
                <p className='font-Inter text-lg'>This is a minimum pay a client pays for your service</p>
              </div>
              <div className='mt-[70px] flex gap-8'>
                <form action="#" className='font-Inter'>
                  <h1>Minimum base pay</h1>
                  <input type="text" placeholder='$100k' className='border outline-none py-1 px-3 border-blue-500 rounded-lg mt-1'/>
                </form>
                <form action="#" className='font-Inter'>
                  <h1>Duration</h1>
                  <input type="text" placeholder='Per Hour' className='border outline-none py-1 px-3 border-blue-500 rounded-lg mt-1'/>
                </form>
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <div>
                <p className='font-Inter text-4xl leading-none font-semibold'>What skill can you offer</p>
                <p className='font-Inter text-lg'>This lets our algorithm show you offers based on what you can do, this can be changed.</p>
              </div>
              <div className='mt-[70px] flex gap-8'>
                <form action="#" className='font-Inter'>
                  <h1>Minimum base pay</h1>
                  <input type="text" placeholder='$100k' className='border outline-none py-1 px-3 border-blue-500 rounded-lg mt-1'/>
                </form>
                <form action="#" className='font-Inter'>
                  <h1>Duration</h1>
                  <input type="text" placeholder='Per Hour' className='border outline-none py-1 px-3 border-blue-500 rounded-lg mt-1'/>
                </form>
              </div>
            </div>
          )}
        </div>
        {currentStep < 3 ? (
          <button
            onClick={handleNext}
            className="mt-8 px-4 w-[7%] py-2 bg-blue-500 relative font-Inter left-[1100px] text-white rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleLoadOpenings}
            className="mt-8 px-2 w-[11%] py-2 bg-blue-500 relative font-Inter left-[1100px] text-white rounded"
          >
            Load Openings
          </button>
        )}
      </div>
    </>
  )
}

export default Onboarding