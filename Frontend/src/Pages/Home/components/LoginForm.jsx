import React from "react";
import InputComponent, { CheckText, FormButton, SignupWith, TermsAndConditions } from "./FormComponent";

const LoginForm = ({ changeEmailLabel = true }) => {
    return (
        <div className='bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-14 rounded-lg shadow-lg w-full max-w-lg py-16'>
            <h1 className="text-3xl font-bold mb-10">
                Log in, <br />
                Start <span className="text-[#006FA3]">Advertising</span> and <br />
                get <span className="text-[#006FA3]">Working</span>
            </h1>
            {/* email, password and company input */}
            {changeEmailLabel ?
                <InputComponent id="work_email_address" label="Work email address" type="email" /> :
                <InputComponent id="email_address" label="email address" type="email" />
            }
            <InputComponent id="password" label="Password" type="password" />
            {/* Login button, Forgot password, signup options, check box and terms */}
            <FormButton name="Log In" />
            <CheckText checktext="don't have an account?," usercondition="Sign Up" forgotPassword={true} />
            <SignupWith />
            <TermsAndConditions ifLoggedIn={false} />
        </div>
    )
}

export default LoginForm