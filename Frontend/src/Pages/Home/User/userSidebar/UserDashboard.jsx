import React from 'react'
import DashboardNav from '../../components/dashboard/DashboardNav'
import UserSidebar from '../../components/dashboard/UserSidebar'

const UserDashboard = () => {

    return (
        <div className='dashboard'>
            <DashboardNav />
            <div className='flex'>
                <UserSidebar />


                {/* Main Content */}
                <div className="flex-1 bg-green-200 px-5 py- ml-[26%] dashboard-content">
                    <div className='bg-[#f6f6f6] p-5 pt-7 rounded-lg'>
                        <h1 className="text-2xl font-bold">Hi Welcome Queen 👋</h1>
                        <p>
                            This is where your main content goes. Adjust the layout and styling as
                            needed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard