import { useState } from "react";
import ChatArea from "../../Routes/ChatArea";
import MessageList from "../../Routes/MessageList";
import dashboardImg from '../../assets/dashboardImg.png';
import message1 from '../../assets/message1.png'
import message2 from '../../assets/message2.png'
import { Link, Outlet } from "react-router-dom";

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

const details = {
    email: 'violetblue23@gmail.com',
    skills: ['C++', 'HTML', 'Javascript'],
    languages: ['Russian', 'Efik', 'English'],
    softSkills: ['Problem solving', 'Communication'],
};

function RelatedProfession({ user, onSelectUser }) {
    return (
        <aside className="w-full lg:w-[100%] xl:w-[50%] relative">
            <section className="w-full">
                <div className="bg-white rounded-md shadow-md py-4 px-3 mb-8">
                    {/* Related Profession */}
                    <h2 className="text-lg font-semibold mb-4">Related Profession</h2>
                    <ul className="space-y-4">
                        {user.map((person, index) => (
                            <Link to='message' onClick={() => onSelectUser(user[index])} key={index} className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <img
                                        src={person.avatar}
                                        alt={person.name}
                                        className="w-10 h-10 rounded-md object-cover"
                                    />
                                    <div>
                                        <p className="font-medium">{person.name}</p>
                                        <p className="text-xs text-gray-500">{person.role}</p>
                                    </div>
                                </div>
                                <button className="text-start text-xs text-[#0A66C2] font-medium hover:underline">
                                    SEND MESSAGE
                                </button>
                            </Link>
                        ))}
                    </ul>
                </div>


                {/* More Details */}
                <div className="bg-white rounded-xl shadow-md p-4 space-y-4">
                    <h2 className="text-lg font-semibold">More Details</h2>
                    <div className="space-y-2 text-sm">
                        <div>
                            <p className="font-medium text-gray-600">Email</p>
                            <p className="text-[#0A66C2]">{details.email}</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-600">Skills</p>
                            <p className="text-[#0A66C2] space-x-2">
                                {details.skills.map((skill, i) => (
                                    <span key={i}>{skill}</span>
                                ))}
                            </p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-600">Languages</p>
                            <p className="text-[#0A66C2] space-x-2">
                                {details.languages.map((lang, i) => (
                                    <span key={i}>{lang}</span>
                                ))}
                            </p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-600">Soft Skills</p>
                            <p className="text-blue-600 space-x-2">
                                {details.softSkills.map((skill, i) => (
                                    <span key={i}>{skill}</span>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Outlet />
        </aside>
    )
}

export default RelatedProfession;