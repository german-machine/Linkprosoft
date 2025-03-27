import { IoIosArrowDown } from "react-icons/io"
import { feedData } from "../../../data/feedData2"

const Feed = () => {
    return (
        <>
            <section className="w-full">
                <div className="w-[90%] mx-auto pb-0">
                    <div>
                        <div className="w-full flex justify-end mb-1">
                            <div className="flex gap-1">
                                <p className="font-Inter font-medium text-sm">Sort by:</p>
                                <span className="flex items-center gap-1">
                                    <p className="font-Inter font-medium text-sm">Relevance</p>
                                    <IoIosArrowDown className="text-[#FC8E08]" />
                                </span>
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                            {feedData.map((feed, index) => (
                                <div key={index} className="shadow-lg transition-shadow rounded-lg overflow-hidden cursor-pointer ">
                                    <div className="h-[10rem] relative scale-100 hover:scale-110 transition-all">
                                        <img src={feed.img} alt="" className="h-full object-cover rounded-lg" />
                                        <img src={feed.profile} alt="" className="rounded-full absolute w-[15%] bottom-3 right-4" />
                                    </div>

                                    <div className="px-2 py-2 mb-4">
                                        <h1 className="text-xl font-bold font-Inter">{feed.title}</h1>
                                        <p className="text-sm font-normal font-Inter line-clamp-4">{feed.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Feed