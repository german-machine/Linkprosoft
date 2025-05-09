import React from 'react'
import ProfileBody from '../components/ProfileBody'
import ProfileForm from '../components/ProfileForm'

const Profile = () => {
  return (
    <section className='w-full lg:w-[70%] xl:w-[75%]'>
      <ProfileBody />
      <ProfileForm />
    </section>
  )
}

export default Profile