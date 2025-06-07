import dashboardImg from '../../assets/dashboardImg.png';
import alfreadImg from '../../assets/alfreadImg.png';
import marvisImg from '../../assets/marvisImg.png';


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

export default function Main() {
    return (
        <main className="w-full lg:w-full">
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

            <section className="w-full mb-8">
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
    )
}