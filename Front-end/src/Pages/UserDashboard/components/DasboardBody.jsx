import { useLocation, useNavigate } from "react-router-dom";
import Main from "./DashboardRight/Main";
import RelatedProfession from "./DashboardRight/RelatedProfession";
import ChatArea from "../Routes/ChatArea";
import { useEffect, useState } from "react";
import dashboardImg from '../assets/dashboardImg.png';
import message1 from '../assets/message1.png'
import message2 from '../assets/message2.png'
import MessageList from "../Routes/MessageList";


const user = [
    {
        name: 'Steph B.',
        role: 'Product Designer',
        avatar: dashboardImg,
    },
    {
        name: 'Marie S.',
        role: 'Data Analyst',
        avatar: message1,
    },
    {
        name: 'Boeing J.',
        role: 'Backend Developer',
        avatar: message2,
    },
];

export default function DashboardBody() {
    const [selectedUser, setSelectedUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate()

    const path = location.pathname.split('/')[3];

    const onClose = () => {
        setSelectedUser(null)
        navigate(-1);
    }
    return (
        <main >
            <div className="w-[95%] mx-auto py-5 lg:py-0 flex flex-col lg:flex-row lg:gap-[2%]">
                <Main />

                { path == 'message' ? <ChatArea selectedUser={selectedUser} onClose={onClose} user={user} /> : <RelatedProfession onSelectUser={setSelectedUser} user={user} /> }
                                
            </div>

            {/* <Outlet /> */}
        </main>
    )
}
