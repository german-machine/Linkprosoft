// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import JobDetails from './Pages/JobDetails/JobDetails'
import Onboarding from './Pages/Onboarding'
import GigPosting from './Pages/GigPosting'

const App = () => {
  return (
   <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/job-details' element={<JobDetails />}/>
        <Route path='/onboarding' element={<Onboarding />} />
        <Route path='/post-gig' element={<GigPosting />} />
      </Routes>
   </>
  )
}

export default App