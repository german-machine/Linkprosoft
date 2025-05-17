import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const PasswordReset = () => {
  const navigate = useNavigate();
  const [passwordResetValues, setPasswordResetValues] = useState({
    currentPassword: '',
    reEnterCurrentPassword: '',
    newPassword: '',
    reEnterNewPassword: '',
  })
  const reEnterCurrentPasswordMessage = passwordResetValues.currentPassword == passwordResetValues.reEnterCurrentPassword;
  const reEnterNewPasswordMessage = passwordResetValues.newPassword == passwordResetValues.reEnterNewPassword;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{8,}$/;
  const resetSuccessfull = () => toast('New password submitted successfully');
  const resetUnsuccessfull = () => toast('New password must be more 8 characters having an uppercase, lowercase, number and special character');
  
  const handleGoBack = () => {
    navigate(-1);
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setPasswordResetValues(prevVal => ({
      ...prevVal,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault;
    if(passwordRegex.test(passwordResetValues.newPassword)){
      setTimeout(() => {
        resetSuccessfull()        
        setPasswordResetValues(prevVal => ({
          ...prevVal,
          currentPassword: '',
          reEnterCurrentPassword: '',
          newPassword: '',
          reEnterNewPassword: '',
        }))
      }, 3000);
    } else{
      resetUnsuccessfull();
    }
  }

  return (
    <section className='w-full'>
      <div className='w-full lg:w-[90%] py-5 px-3 lg:py-0'>
        <div className="w-full flex items-center justify-between mb-3">
          <h1 className='font-Inter text-[25px] lg:text-[40px] font-bold'>Password Reset</h1>
          <h4 onClick={handleGoBack} className='font-Inter text-[15px] lg:text-[20px] font-semibold underline cursor-pointer'>Back</h4>
        </div>

        <form action="" className='w-full'>
          <div className="w-full flex flex-col sm:flex-row flex-wrap gap-[2%] gap-y-5">
            <div className='w-full sm:w-[48%] flex flex-col gap-2'>
              <label htmlFor="currentPassword" className='text-[16px] font-Inter font-semibold'>Current Password</label>
              <input 
                type="password" 
                id='currentPassword' 
                name='currentPassword'
                value={passwordResetValues.currentPassword}
                onChange={handleChange}
                className='border border-[#006FA3] rounded-md py-2 px-2' 
                placeholder='**********'
              />
            </div>

            <div className='w-full sm:w-[48%] flex flex-col gap-2'>
              <label htmlFor="reEnterCurrentPassword" className='text-[16px] font-Inter font-semibold'>Re-enter Current Password</label>
              <input 
                type="password" 
                id='reEnterCurrentPassword' 
                name='reEnterCurrentPassword'
                value={passwordResetValues.reEnterCurrentPassword}
                onChange={handleChange}
                className='border border-[#006FA3] rounded-md py-2 px-2' 
                placeholder='**********'
              />
              {!reEnterCurrentPasswordMessage && <p className='text-red-500'>Must be the same as current password field</p>}
            </div>

            <div className='w-full sm:w-[48%] flex flex-col gap-2'>
              <label htmlFor="newPassword" className='text-[16px] font-Inter font-semibold'>New Password</label>
              <input 
                type="password" 
                id='newPassword' 
                name='newPassword'
                value={passwordResetValues.newPassword}
                onChange={handleChange}
                className='border border-[#006FA3] rounded-md py-2 px-2' 
                placeholder=''
              />
            </div>

            <div className='w-full sm:w-[48%] flex flex-col gap-2'>
              <label htmlFor="reEnterNewPassword" className='text-[16px] font-Inter font-semibold'>Re-enter New Password</label>
              <input 
                type="password" 
                id='reEnterNewPassword' 
                name='reEnterNewPassword'
                value={passwordResetValues.reEnterNewPassword}
                onChange={handleChange}
                className='border border-[#006FA3] rounded-md py-2 px-2' 
                placeholder=''
              />
              {!reEnterNewPasswordMessage && <p className='text-red-500'>Must be same as new password field</p>}
            </div>
          </div>
        </form>

        <button onClick={handleSubmit} type="submit" className='font-Inter text-[20px] bg-[#0A66C2] w-auto mt-10 py-2 px-4 rounded-md text-center flex place-self-center lg:place-self-end text-white lg:mr-4'>Save changes</button>
      </div>
      <ToastContainer />
    </section>
  )
}

export default PasswordReset
