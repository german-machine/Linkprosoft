import React, { useState } from 'react'
import HeaderBanner from './components/HeaderBanner'
import OurLogo from '../../assets/images/linkprosoft-logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom'

const EmployerLogin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState({})


  const handleSubmit = (e) => {
    e.preventDefault()

    let formErrors = {}

    if(!email) {
        formErrors.email = "Please Enter Your Email Address"
    }else if (!/\S+@\S+\.\S+/.test(email)){
        formErrors.email = "Email is Invalid"
    }

    if(!password) {
        formErrors.password = "Please Enter Your Password"
    }else if(password.length < 6) {
        formErrors.password = "Password must be at least 7 seven characters"
    }

    

    setError(formErrors)

    if(Object.keys(formErrors).length === 0) {
      alert("Form Submitted")
      setEmail("")
      setPassword("")
    }else{
      alert("An error Occured please try again")
    }
}
  
  return (
    <>
      <HeaderBanner
        bgColor='#000000'
        logoColor='#ffffff'
        btnColor='#006FA3'
        btnTextColor='#ffffff'
        pageHeader={"Sign Up"}
        pageLink={"EmployerSignUp"}
      />

      <section className="w-full lg:bg-[#F6F6F6]">
        <div className="w-[85%] lg:w-[80%] mx-auto flex justify-between items-center py-10 lg:py-5 ">
          <div className='w-[50%] mx-auto hidden lg:block px-4 lg:mr-[10%]'>
            <img src={OurLogo} alt="" className='w-full mx-auto' />
            <p className='w-full opacity-50 text-center mt-3'>Linkprosoft bridging the gap between employers and employees</p>
          </div>

          <div className='w-full lg:w-[70%] xl:w-[50%] mx-auto bg-transparent lg:bg-white rounded-none lg:rounded-lg shadow-none lg:shadow-lg lg:p-3 lg:px-16 lg:py-10'>
            <h2 className='text-[36px] font-Inter font-[800] leading-[40px] mb-3 md:text-center lg:text-left inline-block md:w-full md:mb-3 xl:max-w-[85%]'>Log in, <br /> start <span className='text-[#4093BA]'>advertising</span> and get <span className='text-[#4093BA]'>working</span></h2>

            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="" className='block text-gray-700 font-medium mb-1 md:text-[22px] lg:text-[16px]'>Email</label>
              <input type="email" name="" id="" onChange={(e) => setEmail(e.target.value)} value={email} className='w-full px-2 py-1.5 mb-3 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2] bg-[#f6f6f6]' />

              <label htmlFor="" className='block text-gray-700 font-medium mb-1 md:text-[22px] lg:text-[16px]'>Password</label>
              <input type="password" name="" onChange={(e) => setPassword(e.target.value)} value={password} id="" className='w-full px-2 py-1.5 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2] bg-[#f6f6f6]' />

              <div className="flex items-center gap-2 mt-3">
                <input type="checkbox" name="" id="" />
                <p className='font-[400] font-Inter text-[12px] text-black'>Keep me logged in.</p>
              </div>

              <div>
                <button className="px-4 py-2 w-full bg-[#006FA3] text-xl font-medium rounded-md hover:bg-[#0A66C2] transition mt-6 mb-3 text-[#ffffff]">Sign In</button>
              </div>

              <div className="flex lg:flex-col flex-nowrap justify-between items-center lg:items-start sm:gap-[1%] font-Inter my-4">
                <p className=' text-xs'>Don&apos;t have an account?
                  <Link className='text-blue-500 underline hover:text-blue-700 ml-2 text-sm' to={"/EmployerSignUp"}> Sign Up</Link>
                </p>
                <Link to='/forget password' className='text-blue-500 underline hover:text-blue-700 text-xs'>Forgotten Password?</Link>
              </div>

              <div className='w-full font-Inter flex flex-col sm:flex-row lg:flex-col xl:flex-ro justify-center items-center gap-y-4 lg:gap-y-4 md:gap-[2%] my-3 sm:gap-[2%]'>
                <Link className='bg-[#006FA3] flex justify-center items-center rounded-md py-3 px-1 gap-2 ' style={{ width: "clamp(70%, 90vw, 100%)" }}
                >
                  <FaLinkedin className='text-white text-lg' />
                  <p className='font-[600] font-Inter text-lg sm:text-base text-white'>Continue with LinkedIn</p>
                </Link>

                <Link className='bg-[#F6F6F6] flex justify-center items-center rounded-md py-3 px-1 gap-2' style={{ width: "clamp(70%, 90vw, 100%)" }}
                >
                  <FcGoogle className='text-white text-lg' />
                  <p className='font-[600] font-Inter text-lg sm:text-base text-black'>Continue with Google</p>
                </Link>
              </div>

            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default EmployerLogin