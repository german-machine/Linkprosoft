import message1 from '../assets/message1.png';
import message2 from '../assets/message2.png';
import dashboardImg from '../assets/dashboardImg.png';
import { Link, Outlet } from 'react-router-dom';

export default function MessageList({ user, onSelectUser }) {
    return (
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
    )
}