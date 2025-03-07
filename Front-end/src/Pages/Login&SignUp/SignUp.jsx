import React from 'react'
import { Link } from 'react-router-dom'
import HeaderBanner from './components/HeaderBanner'

const SignUp = () => {
  return (
    <>
    <HeaderBanner/>
    
      <section>
        <div>
          <div className='flex justify-center items-center relative top-20'>
            <p className='font-Inter text-3xl font-bold'>Create Your Account</p>
          </div>
          <div className="flex justify-center gap-9 text-center items-center h-2/3 relative top-24">
            <Link to="/ProffesionalSignUp" className="bg-white p-10 rounded-lg shadow-lg w-[25%] border">
              <h2 className="text-2xl font-bold font-Inter mb-6">Professional</h2>
              <p className='font-Inter text-[16px] pb-8'>Looking for your next gig? Be a part of Linkprosoft and leverage its opportunities.</p>
              <button type="button" className="bg-blue-500 font-bold font-Inter text-white px-14 py-2.5 rounded w-full mb-4">Sign Up as Finder</button>
            </Link>

            <Link to="/EmployerSignUp" className="bg-white p-10 rounded-lg shadow-lg w-[25%] border">
              <h2 className="text-2xl font-bold font-Inter mb-6">Employer</h2>
              <p className='font-Inter text-[16px] pb-8'>Are you an employer or business owner? Advertise your business with Linkprosoft.</p>
              <button type="button" className="bg-blue-500 font-Inter text-sm font-bold text-white px-14 py-2.5 rounded w-full mb-4">Sign Up as Employer</button>
            </Link>
          </div>
        </div>
      </section>

      
    </>
  )
}

export default SignUp