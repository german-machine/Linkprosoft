
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Person6 from "../../../assets/images/Person6.png";


const testimonials = [
  {
    id: 1,
    name: "John, D",
    position: "CEO, Tech Innovators Inc.",
    image: Person6,
    text: `"As the CEO of Tech Innovators Inc., finding top-tier talent to join our team is a top priority."`
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CTO, FutureTech",
    image: Person6,
    text: `"Linkprosoft impressed us with their professionalism and deep understanding of our industry."`
  },
  {
    id: 3,
    name: "Michael Doe",
    position: "Founder, AI Solutions",
    image: Person6,
    text: `"Working with Linkprosoft made hiring seamless and efficient. Highly recommend!"`
  },
  {
    id: 4,
    name: "Michael Doe",
    position: "Founder, AI Solutions",
    image: Person6,
    text: `"Working with Linkprosoft made hiring seamless and efficient. Highly recommend!"`
  },
  {
    id: 5,
    name: "Michael Doe",
    position: "Founder, AI Solutions",
    image: Person6,
    text: `"Working with Linkprosoft made hiring seamless and efficient. Highly recommend!"`
  },
  {
    id: 6,
    name: "Michael Doe",
    position: "Founder, AI Solutions",
    image: Person6,
    text: `"Working with Linkprosoft made hiring seamless and efficient. Highly recommend!"`
  },
  {
    id: 7,
    name: "Michael Doe",
    position: "Founder, AI Solutions",
    image: Person6,
    text: `"Partnering with Linkprosoft has been a transformative experience for our hiring process."`
  },
];

const WhatUsersSay = () => {
  const slides_per_view = window.innerWidth > 768 ? 2.5 : 1.1;
  const space_between = window.innerWidth > 768 ? -60 : "15";
  return (
    <>
      <section className="w-full">
        <div className="w-[95%] lg:w-[85%] mx-auto py-8">
          <h1 className="text-bluecolor pb-[10px] font-Inter font-bold text-[30px]">
            What Our Users Say
          </h1>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={slides_per_view}
            spaceBetween={space_between}
            coverflowEffect={{
              rotate: -10,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="w-[100%]">
                <div className="w-full lg:w-[80%] mx-auto bg-orangecolor py-8 rounded-[20px]">
                  <div className="">
                    <div className="py-3 mb-5">
                      <p className="text-[16px] max-w-[80%] mx-auto text-center font-[400] font-Inter">{testimonial.text}</p>
                    </div>

                    <div className="flex justify-center gap-2 items-center">
                      <div className="w-[20%]">
                        <img src={testimonial.image} alt="" />
                      </div>
                      <div>
                        <h2 className="font-bold">{testimonial.name}</h2>
                        <h4 className="font-semibold">{testimonial.position}</h4>
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default WhatUsersSay;
