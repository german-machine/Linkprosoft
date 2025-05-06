import React, {useState} from 'react'
import HeaderBanner from './components/HeaderBanner'
import SignupForm from './components/SignUpForm'
import OurLogo from '../../assets/images/linkprosoft-logo.png'
import { Link } from 'react-router-dom'

const EmployerSignup = () => {

    // const [acceptTerms, setAcceptTerms] = useState(false)

    // const handleSubmit = (e) => {
    //     e.PreventDefault()
    //     alert(acceptTerms)

    // }
    return (
        <>
            <HeaderBanner showSignInButton={false} navColor='bg-[#000000]' border='none' />
            <div className='h-full lg:min-h-screen flex items-center justify-center lg:bg-gray-100'>
                <div className='container mx-auto flex items-center justify-between'>
                    <div className='lg:w-1/2  lg:flex flex-col items-center justify-center hidden'>
                        <img
                            src={OurLogo}
                            alt="Logo"
                            className="w-[50%]"
                        />
                        <p className='mt-3 text-[#00000080]'>Linkprosoft bridging the gap between employer and employee</p>
                        <button className='px-4 py-2 bg-[#006FA3] font-medium text-[20px] rounded-md hover:bg-[#0A66C2] transition mt-6 text-[#ffffff]'>
                            <Link to='/employerLogin'>
                                Log In
                            </Link>
                        </button>
                    </div>
                    <div className='lg:relative top-[-20px]  lg:w-1/2'>
                        <SignupForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployerSignup