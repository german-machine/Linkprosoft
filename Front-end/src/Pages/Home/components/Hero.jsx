import React, { useState, useEffect } from 'react';
import Person1 from "../../../assets/images/Person1.png";
import Person2 from "../../../assets/images/Person2.png";
import Person3 from "../../../assets/images/Person3.png";
import Person4 from "../../../assets/images/Person4.png";
import Search from "../../../assets/images/search.svg";
import Filter from "../../../assets/images/filter.svg";
import Trust from "../../../assets/images/Trust.svg";

const phrases = [
  "Skilled Professionals.",
  "Experienced Experts.",
  "Trusted Specialists.",
  "Qualified Individuals."
];

const Hero = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="w-[90%] mx-auto flex flex-wrap pb-[120px]">
        <div className="flex w-[60%] gap-[2%] flex-wrap relative top-[60px]">
          <div className="w-[83%] relative flex items-center justify-center gap-[5%] border border-bluecolor rounded-tl-[35px] rounded-br-[35px] py-[15px]">
            <div className="w-full flex justify-between px-7">
              <img src={Search} alt="" className="pr-[4px]" />
              <input
                className="focus:border-transparent outline-none font-Inter bg-transparent pl-4 w-[60%] text-[14px] flex-wrap"
                type="text"
                placeholder="What skills are you looking for?"
              />
              <img src={Filter} alt="" />
            </div>
          </div>
          <a
            className="bg-bluecolor text-white font-Inter w-[15%] py-[15px] px-[25px] rounded-tl-[40px] rounded-br-[40px]"
            href="#"
          >
            Search
          </a>
        </div>

        <div className="relative top-[120px] w-[63%]">
          <h1 className="font-Inter text-[48px] font-bold text-bluecolor leading-[60px]">
            Connecting You with the Best <br />
            <span className="phrase-animation">{phrases[currentPhraseIndex]}</span>
          </h1>
          <p className="pt-[20px] font-Inter text-[15px] text-greycolor">
            Find and hire experts across various fields with ease and trust.
          </p>

          <div className="relative top-[120px]">
            <p className="font-Inter pb-[5px]">Trusted By:</p>
            <img src={Trust} alt="" />
          </div>
        </div>

        <div className="w-[37%] flex flex-wrap relative top-[-25px]">
          <div className="w-[47%] relative top-[px] left-11">
            <img src={Person1} alt="" className="pb-[15px] w-[90%]" />
            <img src={Person2} alt="" className="w-[90%]" />
          </div>

          <div className="w-[47%] relative top-[70px] left-12">
            <img src={Person3} alt="" className="pb-[15px] w-[90%]" />
            <img src={Person4} alt="" className="w-[90%]" />
          </div>
        </div>
      </section>
      <style jsx>{`
        .phrase-animation {
          display: inline-block;
          animation: swipe 3s infinite;
        }

        @keyframes swipe {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-100%);
          }
        }
      `}</style>
    </>
  );
};

export default Hero;