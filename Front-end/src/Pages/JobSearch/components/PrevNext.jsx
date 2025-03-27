
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti"
import next from "../../../assets/images/arrow1.svg"
import prev from "../../../assets/images/arrow2.svg"

const PrevNext = ({ feedDataLength }) => {
  return (
   <>
        <section className="w-full">
            <div className="w-[90%] mx-auto py-4 flex flex-col sm:flex-row justify-between sm:items-center">
                <div className="w-[60%] sm:w-[35%] lg:w-[20%] rounded-full shadow-md inset-4 border px-2 py-1 flex items-center justify-center mb-3 sm:mb-0">
                    <p className="font-Inter text-base font-bold text-center"> showing all {feedDataLength} results </p>
                </div>
                <div className="flex justify-between items-center gap-[2%] shadow-md inset-4 rounded-full">
                    <div className="w-[30%] rounded-full px-3 py-1 bg-black flex justify-center items-center gap-2">
                        <TiArrowLeftOutline className="text-white text-xl " />
                        <p className="text-white text-md font-Inter">Prev</p>
                    </div>

                    <div className="flex justify-between items-center gap-4 bg-[#F4F4F4] rounded-full w-full px-3">
                        <div className="w-full text-base font-bold font-Inter">1</div>
                        <div className="w-full text-center bg-[#D9D9D9] rounded-full px-3 py-1 text-base font-bold font-Inter">2</div>
                        <div className="w-full text-base font-bold font-Inter">3</div>
                        <div className="w-full text-base font-bold font-Inter">4</div>
                    </div>

                    <div className="w-[30%] rounded-full px-3 py-1 bg-black flex justify-center items-center gap-2">
                        <TiArrowRightOutline className="text-white text-xl " />
                        <p className="text-white text-md font-Inter">Next</p>
                    </div>
                </div>
            </div>
        </section>
   </>
  )
}

export default PrevNext