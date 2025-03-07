import React, { useState } from 'react'
import linkedin from "../../../assets/images/Linkden.png"
import googleImage from "../../../assets/images/google-logo.png"

// input fields
export const InputComponent = ({ id, label, type }) => {
    const [inputValue, setInputValue] = useState("")
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <div className=' '>
            <label htmlFor={id} className='block text-gray-700 font-medium mb-1'>{label}</label>
            <input type={type} id={id} onChange={handleChange} value={inputValue} className='w-full px-2 py-1.5 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A66C2] bg-[#f6f6f6]' />
        </div>
    )
}
// Submit button
export const FormButton = ({ name }) => {
    return (
        <div>
            <button name={name} className="px-4 py-2 w-[100%] bg-[#006FA3] text-[20px] font-medium rounded-md hover:bg-[#0A66C2] transition mt-6 mb-3 text-[#ffffff]">{name}</button>
        </div>

    )
}

// Forgot password and login or signup link
export const CheckText = ({ checktext, usercondition, forgotPassword }) => {
    return (
        <div>
            <div className='flex justify-between items-center  mb-2'>
                <p>{checktext}
                    <a href="/" className='text-blue-500 underline hover:text-blue-700'>
                        {usercondition}
                    </a>
                </p>
                {forgotPassword && (
                    <a href="/forget password" className='text-blue-500 underline hover:text-blue-700'>Forgot Password?</a>
                )}
            </div>

        </div>
    )
}

/* Social Media Signup Options */
export const SignupWith = () => {

    return (
        <>

            <div className="mt-6">
                <div className="flex space-x-2 gap-1 font-Inter">
                    <button
                        type="button"
                        className=" bg-[#006FA3] text-white rounded-md hover:bg-blue-800 text-sm font-semibold transition py-3 px-2"
                    >
                        <div className='flex items-center justify-center'>
                            <img
                                src={linkedin}
                                alt="LinkedIn"
                                className="w-5 h-4 mr-2"
                            />
                            Continue with LinkedIn
                        </div>


                    </button>
                    <button
                        type="button"
                        className=" bg-[#f4eeee] text-black rounded-md hover:bg-[#f4eeee] transition py-3 px-2"
                    >
                        <div className='flex justify-center items-center'>
                            <img
                                src={googleImage}
                                alt="Google"
                                className="w-7 h-7"
                            />
                            Continue with Google
                        </div>

                    </button>
                </div>
            </div>
        </>
    )
}

// Terms and Conditions
export const TermsAndConditions = ({ ifLoggedIn = true }) => {
    return (

        <>
            <div className="flex items-start mb-6 mt-4">
                <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                {ifLoggedIn ? (

                    <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                        Yes, I understand and accept the{" "}
                        <a
                            href=""
                            className="text-blue-500 underline hover:text-blue-700"
                        >
                            Linkprosoft Terms and services
                        </a>
                        , including the {" "}
                        <a
                            href=""
                            className="text-blue-500 underline hover:text-blue-700"
                        >
                            User Agreement
                        </a>
                        {""} and {" "}
                        <a
                            href=""
                            className="text-blue-500 underline hover:text-blue-700"
                        >
                            Privacy Policy
                        </a>.
                    </label>
                ) :

                    (
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                            Keep me logged in
                        </label>
                    )}
            </div>
        </>
    )

}

export default InputComponent

