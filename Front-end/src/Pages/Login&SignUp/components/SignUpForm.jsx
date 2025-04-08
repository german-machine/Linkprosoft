/* eslint-disable react/prop-types */
import React, { useState } from "react";
import InputComponent, { CheckText, FormButton, SignupWith, TermsAndConditions } from "./FormComponent";

const SignupForm = ({ showCompanyInput = true, changeEmailLabel = true}) => {

    

    return (
        <div className='bg-white bg-opacity-80  backdrop-filter backdrop-blur-lg px-10 py-10
            rounded-lg shadow-lg w-full lg:py1.5'>
            <h2 className="text-[#006FA3] text-center text-2xl font-medium md:mb-16 lg:mb-8 mb-6">Sign Up</h2>
            {/* Name input */}
            <div className="space-y-4 lg:space-y-0">
                <div className='flex md:gap-5 md:flex-row  items-center flex-col lg:flex-row space-y-4 md:space-y-0'>
                    <InputComponent label="First name" type="text" id="first_name"  />
                    <InputComponent id="last_name" label="Last name" type="text" />
                </div>
                {/* email, password and company input */}
                {changeEmailLabel ?
                    <InputComponent id="work_email_address" label="Work email address" type="email" /> :
                    <InputComponent id="email_address" label="email address" type="email" />
                }
                <InputComponent id="password" label="Password" type="password" />
                {showCompanyInput && (
                    <InputComponent id="company_name" label="Company name" type="text" />
                )}

                {/* Login button, Forgot password, signup options, check box and terms */}
                <FormButton name="sign up"/>
                <CheckText checktext="Already have an account?," usercondition="Login" forgotPassword={false} />
                <SignupWith />
                <TermsAndConditions />
            </div>
        </div>
    )
}
export default SignupForm