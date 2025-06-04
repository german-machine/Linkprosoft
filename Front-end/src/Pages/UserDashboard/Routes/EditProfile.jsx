import React from 'react'
import EditProfileBody from '../components/EditProfileBody'
import EditProfileForm from '../components/EditProfileForm'

const EditProfile = () => {
  return (
    <section className='w-full lg:w-[70%] xl:w-[75%]'>
      <EditProfileBody />
      <EditProfileForm />
    </section>
  )
}

export default EditProfile