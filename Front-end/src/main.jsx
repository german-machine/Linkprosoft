import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Error from './components/Error.jsx'
import JobDetails from './Pages/JobDetails/JobDetails.jsx'
import UserDashboard from './Pages/UserDashboard/UserDashboard.jsx'
import EmployerDashboard from './Pages/EmployerDashboard/EmployerDashboard.jsx'
import Profile from './Pages/UserDashboard/Routes/Profile.jsx'
import GigsOptions from './Pages/UserDashboard/Routes/GigsOptions.jsx'
import Messages from './Pages/UserDashboard/Routes/Messages.jsx'
import Projects from './Pages/UserDashboard/Routes/Projects.jsx'
import Accounts from './Pages/UserDashboard/Routes/Accounts.jsx'
import Certifications from './Pages/UserDashboard/Routes/Certifications.jsx'
import Recommended from './Pages/UserDashboard/Routes/Recommended.jsx'
import RecentViewed from './Pages/UserDashboard/Routes/RecentViewed.jsx'
import SavedGigs from './Pages/UserDashboard/Routes/SavedGigs.jsx'
import Notifications from './Pages/UserDashboard/Routes/Notifications.jsx'
import ProjectsBody from './Pages/UserDashboard/components/ProjectsBody.jsx'
import Pending from './Pages/UserDashboard/Routes/Pending.jsx'
import Completed from './Pages/UserDashboard/Routes/Completed.jsx'
import Rejected from './Pages/UserDashboard/Routes/Rejected.jsx'
import Onboarding from './Pages/OnBoarding/Onboarding.jsx'
import SignUpAs from './Pages/Login&SignUp/SignUpAs.jsx'
import Login from './Pages/Login&SignUp/EmployerLogin.jsx'
import EmployerSignup from './Pages/Login&SignUp/EmployerSignUp.jsx'
import ProfesionalLogin from './Pages/Login&SignUp/ProfesionalLogin.jsx'
import ProfessionalSignUp from './Pages/Login&SignUp/ProfessionalSignUp.jsx'
import GigsOptionsBody from './Pages/UserDashboard/components/GigsOptionsBody.jsx'
import Settings from './Pages/UserDashboard/Routes/Settings.jsx'
import Help from './Pages/UserDashboard/Routes/Help.jsx'
import CustomerSupport from './Pages/UserDashboard/Routes/CustomerSupport.jsx'
import SettingsBody from './Pages/UserDashboard/components/SettingsBody.jsx'
import PasswordReset from './Pages/UserDashboard/Routes/PasswordReset.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/user-dashboard',
    element: <UserDashboard />,
    children: [
      { index: true, element: <Profile /> }, // Default route
      { path: 'dashboard', element: <Profile /> },
      { path: 'gigs-options', element: <GigsOptions /> },
      { path: 'messages', element: <Messages /> },
      { path: 'projects', element: <Projects /> },
      { path: 'accounts', element: <Accounts /> },
      { path: 'certifications', element: <Certifications /> },
      { path: 'settings', element: <Settings /> },	
      {
        path: 'gigs-options',
        element: <GigsOptionsBody />,
        children: [
          { index: true, element: <Recommended /> }, // Default route for GigsOptions
          { path: 'recommended', element: <Recommended /> },
          { path: 'recent-viewed', element: <RecentViewed /> },
          { path: 'saved-gigs', element: <SavedGigs /> },
          { path: 'notifications', element: <Notifications /> },
        ],
      },
      {
        path: 'projects',
        element: <ProjectsBody />,
        children: [
          { index: true, element: <Pending /> }, // Default route for Projects
          { path: 'pending', element: <Pending /> },
          { path: 'completed', element: <Completed /> },
          { path: 'rejected', element: <Rejected /> },
        ],
      },
      {
        path: 'settings',
        children: [
          { index: true, element: <SettingsBody /> },
          { path: 'password-reset', element: <PasswordReset /> },
          { path: 'help', element: <Help /> },
          { path: 'customers-support', element: <CustomerSupport /> },
        ]
      }
    ],
  },
  {
    path: '/employer-dashboard/*',
    element: <EmployerDashboard />,
  },
  {
    path: '/job-details',
    element: <JobDetails />,
  },
  {
    path: '/on-boarding',
    element: <Onboarding />,
  },
  {
    path: '/signup-as',
    element: <SignUpAs />,
  },
  {
    path: '/employer-signup',
    element: <EmployerSignup/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/professional-login',
    element: <ProfesionalLogin/>,
  },
  {
    path: '/professional-signup',
    element: <ProfessionalSignUp/>,
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)