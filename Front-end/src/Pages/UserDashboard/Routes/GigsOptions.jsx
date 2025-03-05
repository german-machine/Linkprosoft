import React from 'react'
import { Outlet } from 'react-router-dom'
import GigsOptionsLinks from '../components/GigsOptionsLinks'
import GigsOptionsBanner from '../components/GigsOptionsBanner'

const GigsOptions = () => {
  return (
    <>
    <GigsOptionsBanner />
      <GigsOptionsLinks />
      <Outlet />
    </>
  )
}

export default GigsOptions