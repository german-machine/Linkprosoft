import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OnboardingNav from './components/OnboardingNav'
import ButtonNext from './components/ButtonNext'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import ButtonHandleOpenings from './components/ButtonHandleOpenings'

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const navigate = useNavigate()

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(prevVal => prevVal + 1)
    }
  }

  const handleSkip = () => {
    navigate('/user-dashboard')
  }

  const handleLoadOpenings = () => {
    navigate('/job-details')
  }

  return (
    <>
      <OnboardingNav />
      <section className="w-full flex place-items-center">
        <div className='w-[90%] sm:w-[80%] lg:w-[50%] mx-auto py-10'>

          <Link
            onClick={handleSkip}
            className='font-semibold lg:font-bold text-lg md:text-xl text-blue-500 mb-5 font-Inter cursor-pointer flex justify-end'
          >
            Skip
          </Link>

          <div className="flex gap-8 w-[80%] lg:w-[60%]">
            <div className={`w-[35%] h-1 md:h-2 ${currentStep >= 1 ? 'bg-blue-500' : 'bg-[#D9D9D92B]'}`}></div>
            <div className={`w-[35%] h-1 md:h-2 ${currentStep >= 2 ? 'bg-blue-500' : 'bg-[#D9D9D92B]'}`}></div>
            <div className={`w-[35%] h-1 md:h-2 ${currentStep >= 3 ? 'bg-blue-500' : 'bg-[#D9D9D92B]'}`}></div>
          </div>

          {
            currentStep == 1 ? <Step1 />
              : currentStep == 2 ? <Step2 />
                : currentStep == 3 ? <Step3 />
                  : 'there is no such step'
          }


          {
            currentStep < 3 ? <ButtonNext text='Next' handleNext={handleNext} />
              : <ButtonHandleOpenings text='Load openings' handleLoadOpenings={handleLoadOpenings} />
          }
        </div>
      </section>
    </>
  )
}

export default Onboarding