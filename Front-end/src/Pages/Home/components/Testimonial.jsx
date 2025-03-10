
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Person6 from "../../../assets/images/Person6.png";
import Vector from "../../../assets/images/Vector.png";

const testimonials = [
  {
    id: 1,
    name: "John, D",
    position: "CEO, Tech Innovators Inc.",
    image: Person6,
    text: `"As the CEO of Tech Innovators Inc., finding top-tier talent to join our team is a top priority. Partnering with Linkprosoft has been a transformative experience for our hiring process."`
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
    id: 3,
    name: "Michael Doe",
    position: "Founder, AI Solutions",
    image: Person6,
    text: `"Working with Linkprosoft made hiring seamless and efficient. Highly recommend!"`
  },
  {
    id: 3,
    name: "Michael Doe",
    position: "Founder, AI Solutions",
    image: Person6,
    text: `"Working with Linkprosoft made hiring seamless and efficient. Highly recommend!"`
  },
  {
    id: 3,
    name: "Michael Doe",
    position: "Founder, AI Solutions",
    image: Person6,
    text: `"Working with Linkprosoft made hiring seamless and efficient. Highly recommend!"`
  },
];

const WhatUsersSay = () => {
  return (
    <>
      <section className="w-[90%] relative left-[70px] pt-[100px] pb-[30px]">
        <h1 className="text-bluecolor pb-[10px] font-Inter font-bold text-[30px]">
          What Our Users Say
        </h1>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="2.5"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="w-[100%]"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="w-[100%]">
              <div className="w-full bg-orangecolor pb-[120px] rounded-[20px] p-24 shadow-lg">
                <div className="text-[11px] font-Inter text-greycolor">
                  <p className="pb-[15px]">{testimonial.text}</p>
                </div>

                <div className="flex items-center mt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-[70px] h-[70px] rounded-full"
                  />
                  <div className="pl-3">
                    <h1 className="font-bold text-[25px]">{testimonial.name}</h1>
                    <h1 className="font-semibold text-[14px]">{testimonial.position}</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-end w-[95%] relative top-5 text-center">
          <p className="font-bold font-Inter text-greencolor">See more</p>
          <img src={Vector} alt="" className="pt-1 pl-2" />
        </div>
      </section>
    </>
  );
};

export default WhatUsersSay;
