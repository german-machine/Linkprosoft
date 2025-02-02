import React, { useState } from 'react'
import Home from "./Pages/Home/Home"
import SignUpAs from "./Pages/Home/SignUpAs"
import EmployerSignup from './Pages/Home/Employer/EmployerSignup'
import UserSignup from './Pages/Home/User/UserSignup'
import EmployerLogin from './Pages/Home/Employer/EmployerLogin'
import UserLogin from './Pages/Home/User/UserLogin'
import UserDashboard from "./Pages/Home/User/userSidebar/UserDashboard"

import { Route, Routes, Link, Navigate } from 'react-router-dom'
import UserProfile from './Pages/Home/User/userSidebar/UserProfile'
import GigsRecommended from './Pages/Home/components/dashboard/GigsRecommended'
import GigsViewed from "./Pages/Home/components/dashboard/GigsViewed"
import SavedGigs from "./Pages/Home/components/dashboard/SavedGigs"
import UserNotification from "./Pages/Home/components/dashboard/UserNotification"
import PendingProjects from "./Pages/Home/components/dashboard/PendingProjects"
import UserSettings from "./Pages/Home/User/userSidebar/UserSetting"
import PasswordReset from "./Pages/Home/components/dashboard/PasswordReset"
const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signupAs' element={<SignUpAs />} />
        <Route path='/employerSignup' element={<EmployerSignup />} />
        <Route path='/userSignup' element={<UserSignup />} />
        <Route path='/userLogin' element={<UserLogin />} />
        <Route path='/employerLogin' element={<EmployerLogin />} />

        <Route path='/userdashboard' element={<UserDashboard />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path="/gigs" element={<Navigate to="/recommendedgigs" />} />
        <Route path='/recommendedgigs' element={<GigsRecommended />} />
        <Route path='/viewedgigs' element={<GigsViewed />} />
        <Route path='/savedgigs' element={<SavedGigs />} />
        <Route path='/notification' element={<UserNotification />} />
        <Route path='/projects' element={<Navigate to="/pending" />} />
        <Route path='/pending' element={<PendingProjects />} />
        <Route path='/settings' element={<UserSettings />} />
        <Route path='/passwordreset' element={<PasswordReset />} />
      </Routes>
    </div>
  )
}

export default App