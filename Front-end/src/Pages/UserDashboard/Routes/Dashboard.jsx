import { IoMdSearch } from "react-icons/io";
import { Outlet } from "react-router-dom";
import dashboardImg from '../assets/dashboardImg.png';
import message1 from '../assets/message1.png';
import message2 from '../assets/message2.png';
import alfreadImg from '../assets/alfreadImg.png';
import marvisImg from '../assets/marvisImg.png';


const projects = [
    {
        name: 'Alfred Opinions',
        logo: alfreadImg,
    },
    {
        name: 'PPGC',
        logo: marvisImg,
    },
    {
        name: 'Mavis Studio',
        logo: marvisImg,
    },
];

const professionals = [
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

export default function Dashboard() {
    return (
        <main className='w-full lg:w-[75%] xl:w-[76%] font-Inter'>
            <div className="w-[95%] mx-auto py-10 lg:py-0 flex flex-col lg:flex-row lg:gap-[2%]">
                <main className="w-full lg:w-full lg:py-16">
                    <section className="block lg:hidden mb-5">
                        <div className='w-[80%] lg:w-full mx-auto border border-bluecolor rounded-md flex items-center justify-between bg-white pr-1 py-1'>
                            <input type="text" className="w-[84%] focus:outline-none pl-2" />

                            <div className="bg-bluecolor w-[16%] sm:w-[10%] flex justify-center items-center x-3 py-2 rounded-md">
                                <IoMdSearch className="text-white" />
                            </div>
                        </div>
                    </section>

                    <section className="bg-white py-5 rounded-lg shadow-md mb-8">
                        <div className="w-[90%] mx-auto h-[10rem] rounded-2xl bg-gradient-to-r from-[#492590] via-[#9B2787] to-[#E11980] relative">
                            <div className="w-[90%] mx-auto bg-white shadow-md flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-4 p-4 rounded-xl absolute top-[40%] sm:top-[60%] left-[5%] right-[10%]">
                                <div className="w-[80%] sm:w-fit mx-auto sm:mx-0 flex sm:block justify-center sm:">
                                    <img src={dashboardImg} alt="w-full" />
                                </div>

                                <div className="w-full">
                                    <h2 className="text-lg font-Inter font-semibold text-center sm:text-start">Violet Blue</h2>
                                    <p className="text-xs text-[#000000] opacity-50 font-Inter font-medium text-center sm:text-start">CEO / Co-founder</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[80%] mx-auto pt-24 sm:pt-16">
                            <h2 className="font-semibold text-xl mb-3">About Me</h2>
                            <p className="font-normal text-justify opacity-50 mb-4">
                                As a visionary entrepreneur and tech enthusiast, I'm passionate about harnessing innovation to drive positive change. With a keen eye for opportunity and a relentless drive to succeed, I've dedicated my career to building and leading high-performing teams that deliver cutting-edge solutions.
                            </p>

                            <p className="font-normal text-justify opacity-50">
                                Feel free to connect with me on LinkedIn or follow me on Twitter to stay up-to-date on the latest developments from [startup name]. Let's shape the future of tech together!
                            </p>
                        </div>
                    </section>

                    <section className="w-full">
                        <div className="overflow-x-auto rounded-lg bg-white border border-gray-200 shadow-md scrollbar-hide p-4">
                            <h2 className="font-semibold text-black mb-3">Project table</h2>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-white text-left text-gray-500 text-xs uppercase">
                                    <tr>
                                        <th className="px-4 py-3">Project</th>
                                        <th className="px-4 py-3">Budget</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3">Completion</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 text-sm">
                                    {projects.map((project, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50">
                                            <td className="px-4 py-4 flex items-center gap-3 whitespace-nowrap">
                                                {project.logo && (
                                                    <img
                                                        src={project.logo}
                                                        alt={project.name}
                                                        className="w-6 h-6 rounded-sm object-contain"
                                                    />
                                                )}
                                                <span className="font-medium text-black">{project.name}</span>
                                            </td>
                                            <td className="px-4 py-4 text-black">—</td>
                                            <td className="px-4 py-4 text-black">—</td>
                                            <td className="px-4 py-4 text-black">—</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>

                <aside className="w-full lg:w-[70%] xl:w-[50%]">
                    <section className="hidden lg:block">
                        <div className='w-[80%] lg:w-full mx-auto border border-bluecolor rounded-md flex items-center justify-between bg-white pr-1 py-1'>
                            <input type="text" className="w-[78%] focus:outline-none pl-2" />

                            <div className="bg-bluecolor w-[22%] flex justify-center items-center x-3 py-2 rounded-md">
                                <IoMdSearch className="text-white" />
                            </div>
                        </div>
                    </section>

                    <section className="mt-8 lg:mt-6 w-full ">
                        {/* Related Profession */}
                        <div className="bg-white rounded-md shadow-sm py-4 px-3 mb-4">
                            <h2 className="text-lg font-semibold mb-4">Related Profession</h2>
                            <ul className="space-y-4">
                                {professionals.map((person, index) => (
                                    <li key={index} className="flex items-center justify-between">
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
                                        <button className="text-start text-sm text-[#0A66C2] font-medium hover:underline">
                                            SEND MESSAGE
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* More Details */}
                        <div className="bg-white rounded-xl shadow-sm p-4 space-y-4">
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
                </aside>
            </div>
        </main>
    )
}