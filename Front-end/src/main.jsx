import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Error from './components/Error.jsx'
import JobSearch from './Pages/JobSearch/JobSearch.jsx'
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
// import SignUp from './Pages/Login&SignUp/SignUp.jsx'
// import ProfessionalSignUp from './Pages/Login&SignUp/ProfessionalSignUp.jsx'
// import EmployerSignUp from './Pages/Login&SignUp/EmployerSignUp.jsx'
// import Login from './Pages/Login&SignUp/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/UserDashboard',
    element: <UserDashboard />,
    children: [
      { index: true, element: <Profile /> }, // Default route
      { path: 'profile', element: <Profile /> },
      { path: 'gigs-options', element: <GigsOptions /> },
      { path: 'messages', element: <Messages /> },
      { path: 'projects', element: <Projects /> },
      { path: 'accounts', element: <Accounts /> },
      { path: 'certifications', element: <Certifications /> },
      {
        path: 'gigs-options',
        element: <GigsOptions />,
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
    ],
  },
  {
    path: '/EmployerDashboard/*',
    element: <EmployerDashboard />,
  },
  {
    path: '/JobDetails',
    element: <JobDetails />,
  },
  {
    path: '/JobSearch',
    element: <JobSearch />,
  },
  {
    path: '/Onboarding',
    element: <Onboarding />,
  },
  // {
  //   path: '/signup',
  //   element: <SignUp />,
  //   children: [
  //     { path: 'professional', element: <ProfessionalSignUp /> },
  //     { path: 'employer', element: <EmployerSignUp /> },
  //     { path: 'login', element: <Login /> },
  //   ],
  // },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)