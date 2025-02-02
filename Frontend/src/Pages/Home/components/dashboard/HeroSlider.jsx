import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { Autoplay, Pagination } from "swiper/modules";// Import required modules
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
    return (
        <div className="bg-lightblue w-[1020px] px-10 mb-7 rounded-lg">
            <Swiper
                modules={[Autoplay, Pagination]} // Pass modules here
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="SwiperControl"
            >
                <SwiperSlide>
                    <div className="bg-lightblue h-[200px] flex items-center justify-start">
                        <h2 className="font-medium text-white text-3xl">
                            Linkprosoft the bridge to linking up skilled <br />
                            professionals to paying clients
                        </h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-lightblue h-[200px] flex items-center justify-start">
                        <h2 className="font-medium text-white text-3xl">
                            Empowering professionals with the tools to succeed.
                        </h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-lightblue h-[200px] flex items-center justify-start">
                        <h2 className="font-medium text-white text-3xl">
                            Empowering professionals with the tools to succeed.
                        </h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroSlider;




// < div className = 'bg-[#03aeff] px-10 py-12 mb-7 rounded-lg' >
//     <p className='font-medium text-[#ffffff] text-2xl mb-10'>
//         Linkprosoft the bridge to linking up skilled <br />
//         professionals to paying clients.
//     </p>
//                     </div >