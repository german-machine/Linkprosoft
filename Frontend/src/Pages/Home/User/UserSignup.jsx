import React from 'react'
import HeaderBanner from '../components/HeaderBanner'
import SignupForm from '../components/SignupForm'
import OurLogo from '../../../assets/images/linkprosoft-logo.png'
import { Link } from 'react-router-dom'


const UserSignup = () => {
    const handleSubmit = (e) => {
        e.PreventDefault()
    }
    return (
        <>
            <HeaderBanner showSignInButton={false} navColor='bg-[#006FA3]' border='none' />
            <div className='py-4 flex items-center justify-center bg-gray-100'>
                <div className='container mx-auto flex items-center justify-center space-x-8 px-4'>
                    <div className='w-1/2 flex flex-col items-center justify-center'>
                        <img
                            src={OurLogo}
                            alt="Logo"
                            className="w-[60%]"
                        />
                        <p className='mt-3 text-[#00000080]'>Linkprosoft bridging the gap between employer and employee</p>
                        <button className='px-4 py-2 bg-[#006FA3] font-medium text-[20px] rounded-md hover:bg-[#0A66C2] transition mt-6 text-[#ffffff]'>
                            <Link to="/userLogin">
                                Log In
                            </Link>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <SignupForm showCompanyInput={false} changeEmailLabel={false} />
                    </form>
                </div>
            </div>

        </>
    )
}

export default UserSignup