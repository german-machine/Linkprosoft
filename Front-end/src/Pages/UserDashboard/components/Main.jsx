import React from 'react'
import Profile from '../Routes/Profile'
import Messages from '../Routes/Messages'
import Projects from '../Routes/Projects'
import Accounts from '../Routes/Accounts'
import Certifications from '../Routes/Certifications'
import GigsOptions from '../Routes/GigsOptions'

const Main = ({ isActive }) => {
    return (
        <main className='w-full flex justify-end'>

            {isActive === "dashboard"
                ? <Profile />
                : isActive === "gigs-options"
                    ? <GigsOptions />
                    : isActive === "messages"
                        ? <Messages />
                        : isActive === "projects"
                            ? <Projects />
                            : isActive === "accounts"
                                ? <Accounts />
                                : isActive === "certifications"
                                    ? <Certifications />
                                    : "No such path is found"
            }
        </main>
    )
}

export default Main
