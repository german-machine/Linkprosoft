import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Error from './components/Error.jsx'
import JobDetails from './Pages/JobDetails/JobDetails.jsx'
import EmployerDashboard from './Pages/EmployerDashboard/EmployerDashboard.jsx'
import Recommended from './Pages/UserDashboard/Routes/Recommended.jsx'
import SavedGigs from './Pages/UserDashboard/Routes/SavedGigs.jsx'
import Notifications from './Pages/UserDashboard/Routes/Notifications.jsx'
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

// user-dashboard routes
import UserDashboard from './Pages/UserDashboard/UserDashboard.jsx'
import Profile from './Pages/UserDashboard/Routes/Profile.jsx'
import Certifications from './Pages/UserDashboard/Routes/Certifications.jsx'
import Post from './Pages/UserDashboard/Routes/Post.jsx'
import Projects from './Pages/UserDashboard/Routes/Projects.jsx'
import ProjectsBody from './Pages/UserDashboard/components/ProjectsBody.jsx'
import Billing from './Pages/UserDashboard/Routes/Billing.jsx'
import NotificationSidebar from './Pages/UserDashboard/Routes/NotificationSidebar.jsx'
import Report from './Pages/UserDashboard/Routes/Report.jsx'
import ProjectSidebar from './Pages/UserDashboard/Routes/ProjectSidebar.jsx'

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
      { path: 'certifications', element: <Certifications /> },
      { path: 'post', element: <Post /> },
      { path: 'projects', element: <ProjectSidebar /> },
      { path: 'billing', element: <Billing /> },
      { path: 'notifications', element: <NotificationSidebar /> },
      { path: 'report', element: <Report /> },
      { path: 'settings', element: <Settings /> },	
      {
        path: 'gigs-options',
        element: <GigsOptionsBody />,
        children: [
          { index: true, element: <Recommended /> }, // Default route for GigsOptions
          { path: 'recommended', element: <Recommended /> },
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