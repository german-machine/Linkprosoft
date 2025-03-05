import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Cards from './components/Cards'
import Footer from "../Home/components/Footer"
import Dashboard from './routes/Dashboard'
import AllGigsPost from './routes/AllGigsPost'
import AllContracts from './routes/AllContracts'
import AnyHire from './routes/AnyHire'
import Messages from './routes/Messages'
import Talent from './routes/Talent'
import Notifications from './routes/Notifications'
import Reports from './routes/Reports'
import SavedLists from './routes/SavedLists'
import PaymentMethod from './routes/PaymentMethod'
import Help from './routes/Help'

const EmployerDashboard = () => {
  return (
    <>
      <section className='fixed w-full top-0 z-10'>
        <Navbar />
      </section>

      <section className='flex mt-32'>
        <div className='w-[30%] h-[calc(100vh-2rem)] overflow-y-auto'>
          <Sidebar />
        </div>
        <div className='w-[70%] ml-auto px-2'>
          <Routes>
            <Route path="/" element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="all-gigs-post" element={<AllGigsPost />} />
            <Route path="all-contracts" element={<AllContracts />} />
            <Route path="any-hire" element={<AnyHire />} />
            <Route path="messages" element={<Messages />} />
            <Route path="talent" element={<Talent />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="reports" element={<Reports />} />
            <Route path="saved-lists" element={<SavedLists />} />
            <Route path="payment-method" element={<PaymentMethod />} />
            <Route path="help" element={<Help />} />
            <Route path="cards" element={<Cards />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default EmployerDashboard