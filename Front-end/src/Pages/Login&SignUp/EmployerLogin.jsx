import React from 'react'
import HeaderBanner from './components/HeaderBanner'
import OurLogo from '../../assets/images/linkprosoft-logo.png'
import LoginForm from  "./components/LoginForm"

const EmployerLogin = () => {
  const handleSubmit = (e) => {
    e.PreventDefault()

}
  return (
    <>
    <HeaderBanner showSignInButton={false} navColor='bg-[#000000]' border='none' />
    
    <div className='h-[100vh] bg-gray-100'>
                    <div className='  gap-[5%] overflow-y-hidden flex items-center justify-center relative top-4'>
                        <div className='w-[35%] flex flex-col items-center justify-center relative top-[-39px]'>
                            <img
                                src={OurLogo}
                                alt="Logo"
                                className="w-[60%]"
                            />
                            <p className='mt-3 text-[#00000080]'>Linkprosoft bridging the gap between employer and employee</p>
                        </div>
                        <form onSubmit={handleSubmit} className=' '>
                            <LoginForm changeEmailLabel={true} />
                        </form>
                    </div>
                </div>
    </>
  )
}

export default EmployerLogin