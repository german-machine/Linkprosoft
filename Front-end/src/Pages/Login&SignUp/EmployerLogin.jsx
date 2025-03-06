import React from 'react'
import HeaderBanner from './components/HeaderBanner'
import OurLogo from "../../assets/images/linkprosoft-logo.png"
const EmployerLogin = () => {
  const handleSubmit = (e) => {
    e.PreventDefault()
}
  return (
<>
<HeaderBanner showSignInButton={false} navColor='bg-[#000000]' border='none' />

<div className='py-4 flex items-center justify-center bg-gray-100'>
                <div className='container mx-auto flex items-center justify-center space-x-8 px-4'>
                    <div className='w-1/2 flex flex-col items-center justify-center'>
                        <img
                            src={OurLogo}
                            alt="Logo"
                            className="w-[60%]"
                        />
                        <p className='mt-3 text-[#00000080]'>Linkprosoft bridging the gap between employer and employee</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <LoginForm changeEmailLabel={true} />
                    </form>
                </div>
            </div>
</>
  )
}

export default EmployerLogin