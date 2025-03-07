import React from 'react'
import {Link} from 'react-router-dom'
import HeaderBanner from './components/HeaderBanner'
import SignupForm from './components/SignUpForm'
import OurLogo from '../../assets/images/linkprosoft-logo.png'


const ProfessionalSignUp = () => {
    const handleSubmit = (e) => {
        e.PreventDefault()
    }
    return (
        <>
            <HeaderBanner showSignInButton={false} navColor='bg-[#006FA3]' border='none' />
            <div className='flex h-[580px] items-center w-full justify-center bg-gray-100'>
                <div className='container  flex items-center justify-center '>
                    <div className='w-[50%] flex flex-col items-center  justify-center'>
                        <img
                            src={OurLogo}
                            alt="Logo"
                            className="w-[40%]"
                        />
                        <p className='mt-3 text-[#00000080]'>Linkprosoft bridging the gap between employer and employee</p>
                        <button className='px-4 py-2 bg-[#006FA3] font-medium text-[20px] rounded-md hover:bg-[#0A66C2] transition mt-6 text-[#ffffff]'>
                            <Link to="/userLogin">
                                Log In
                            </Link>
                        </button>
                    </div>
                    
                    <form onSubmit={handleSubmit} className=' '>
                        <SignupForm showCompanyInput={false} changeEmailLabel={false} />
                    </form>
                </div>
            </div>

        </>
    )
}

export default ProfessionalSignUp