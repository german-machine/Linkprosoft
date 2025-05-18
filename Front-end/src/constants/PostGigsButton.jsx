import React from 'react'
import { Link } from 'react-router-dom'

const PostGigsButton = ({ children }) => {
  return (
    <Link href="/" className='block bg-[#03AEFF] font-Inter text-white text-sm rounded-md py-2 px-6'>
        {children}
    </Link>
  )
}

export default PostGigsButton
