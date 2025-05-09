/* eslint-disable react/prop-types */
import React, { useState } from "react";
import InputComponent, { CheckText, FormButton, SignupWith, TermsAndConditions } from "./FormComponent";

const SignupForm = ({ showCompanyInput = true, changeEmailLabel = true}) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [compName, setCompName] = useState("")
    const [error, setError] = useState({})

    const [acceptTerms, setAcceptTerms] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        let formErrors = {}

        if(!firstName) {
            formErrors.firstName = "Please Enter Your First Name"
        }

        if(!lastName) {
            formErrors.lastName = "Please Enter Your Last Name"
        }

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

        if(!compName) {
            formErrors.compName = "Please Enter Your Company Name"
        }

        setError(formErrors)

        if(acceptTerms)

        if(Object.keys(formErrors).length === 0) {
            if(acceptTerms) {
                alert("Form Submitted")
                setCompName("")
                setEmail("")
                setFirstName("")
                setLastName("")
                setPassword("")
            }
        }
    }

    

    return (
        <form className='bg-white bg-opacity-80  backdrop-filter backdrop-blur-lg px-10 py-10
            rounded-lg shadow-lg w-full lg:py1.5' onSubmit={handleSubmit}>
            <h2 className="text-[#006FA3] text-center text-2xl font-medium md:mb-16 lg:mb-8 mb-6">Sign Up</h2>
            {/* Name input */}
            <div className="space-y-4 lg:space-y-0">
                <div className='flex md:gap-5 md:flex-row  items-center flex-col lg:flex-row space-y-4 md:space-y-0'>
                    <InputComponent label="First name" type="text" id="first_name"
                        handleChange={(e) => setFirstName(e.target.value)}
                        inputValue={firstName}
                    />
                    <InputComponent id="last_name" label="Last name" type="text"
                        handleChange={(e) => setLastName(e.target.value)}
                        inputValue={lastName}
                    />
                </div>
                {/* email, password and company input */}
                {changeEmailLabel ?
                    <InputComponent id="work_email_address" label="Work email address" type="email"
                        handleChange={(e) => setEmail(e.target.value)}
                        inputValue={email}
                    /> :
                    <InputComponent id="email_address" label="email address" type="email"
                        handleChange={(e) => setFirstName(e.target.value)}
                        inputValue={firstName}
                    />
                }
                <InputComponent id="password" label="Password" type="password"
                    handleChange={(e) => setPassword(e.target.value)}
                    inputValue={password}
                />
                {showCompanyInput && (
                    <InputComponent id="company_name" label="Company name" type="text"
                        handleChange={(e) => setCompName(e.target.value)}
                        inputValue={compName}
                    />
                )}

                {/* Login button, Forgot password, signup options, check box and terms */}
                <FormButton name="sign up" />
                <CheckText checktext="Already have an account?," usercondition="Login" forgotPassword={false} />
                <SignupWith />
                <TermsAndConditions checked={acceptTerms} setChecked={() => setAcceptTerms(!acceptTerms)}/>
            </div>
        </form>
    )
}
export default SignupForm