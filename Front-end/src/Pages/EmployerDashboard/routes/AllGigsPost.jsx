import React from 'react'
import AllGigsPostBanner from '../components/AllGigsPostBanner'
import { Link } from 'react-router-dom'
import AllGigsPostBody from '../components/AllGigsPostBody'

const AllGigsPost = () => {
  return (
    <>    
    <section>
    <AllGigsPostBanner/>

      <AllGigsPostBody/>
    </section>
    </>
  )
}

export default AllGigsPost