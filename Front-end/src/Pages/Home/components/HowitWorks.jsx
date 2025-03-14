import Arrow from "../../../assets/images/Arrow.svg"

const HowitWorks = () => {
  return (
    <>
      <section className="w-full">
        <div className="w-[95%] lg:w-[80%] mx-auto py-8">
          <h1 className="text-bluecolor pb-[10px] font-Inter font-bold text-[30px]">How Linkprosoft Works:</h1>

          <div className="w-full flex flex-col lg:flex-row items-left lg:items-center justify-start lg:justify-center flex-nowrap gap-8 font-Inter lg:gap-4">

            <div className="w-full text-left lg:text-center flex lg:flex-col items-center gap-3 lg:gap-1">
              <div className="border-3 border rounded-full flex items-center justify-center font-Inter font-semibold text-bluecolor text-[30px] w-auto h-auto px-[25px] py-[10px] border-bluecolor">1</div>
              <div className="flex flex-col items-start lg:block">
                <h1 className="text-[20px] font-bold text-greycolor">Post Your Need</h1>
                <p className="text-[14px] text-greycolor">Describe the service you need.</p>
              </div>
            </div>

            <div className="w-[60%] hidden lg:block x-auto">
              <img src={Arrow} alt="" />
            </div>

            <div className="w-full text-left lg:text-center flex lg:flex-col lg:items-center gap-3 lg:gap-1">
              <div className="border-3 border rounded-full flex items-center justify-center font-Inter font-semibold text-bluecolor text-[30px] w-auto h-auto px-[25px] py-[10px] border-bluecolor">2</div>
              <div className="flex flex-col items-start lg:block">
                <h1 className="text-[20px] font-bold text-greycolor">Match with Professionals</h1>
                <p className="text-[14px] text-greycolor">Get matched with the best professionals nearby</p>
              </div>

            </div>

            <div className="w-[60%] hidden lg:block x-auto">
              <img src={Arrow} alt="" />
            </div>

            <div className="w-full font-Inter text-left lg:text-center flex lg:flex-col items-center gap-3 lg:gap-1" >
              <div className="border-3 border rounded-full flex items-center justify-center font-Inter font-semibold text-bluecolor text-[30px] w-auto h-auto px-[25px] py-[10px] border-bluecolor">3</div>
              <div className="flex flex-col items-start  lg:block">
                <h1 className="text-[20px] font-bold text-greycolor">Hire & Get It Done</h1>
                <p className="text-[14px] text-greycolor">Hire the professionals and get the job done.</p>
              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default HowitWorks