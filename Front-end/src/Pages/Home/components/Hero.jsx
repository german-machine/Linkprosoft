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
      <section className='w-full py-5 lg:py-10'>
        <div className="w-[95%] lg:w-[80%] mx-auto flex flex-col lg:flex-row">
          <div className='w-full px-3 lg:flex lg:flex-col lg:justify-between'>
            <div>
              <div className='w-full mx-auto flex justify-center items-center flex-nowrap'>
                <div className="w-[80%] flex justify-between items-center gap-[2%] px-4 lg:px-8 py-2 lg:py-3 border border-bluecolor rounded-tl-[35px] rounded-br-[35px]">
                  <img src={Search} alt="" className="mr-[2%]" width={20} />
                  <input
                    className="focus:border-transparent outline-none font-Inter bg-transparent w-[90%] text-[12px]"
                    type="text"
                    placeholder="What skills are you looking for?"
                  />
                  <img src={Filter} alt="" width={20} />
                </div>
                <a className="inline-block bg-bluecolor text-white text-sm text-center font-Inter lg:w-[15%] py-[10px] px-[20px] lg:py-[15px] lg:px-[px] rounded-tl-[40px] rounded-br-[40px]"
                  href="#">Search</a>
              </div>

              <div className="w-full py-6">
                <h1 className="max-w-[85%] lg:max-w-full font-Inter text-[38px] lg:text-[40px] font-semibold text-bluecolor leading-[48px] lg:leading-[60px]">
                  Connecting You with the Best <br />
                  <span className="phrase-animation leading-[48px]">{phrases[currentPhraseIndex]}</span>
                </h1>
                <p className="font-Inter text-[16px] text-greycolor py-3">
                  Find and hire experts across various fields with ease and trust.
                </p>

              </div>
            </div>

            <div className="hidden lg:block">
              <p className="font-Inter pb-[5px]">Trusted By:</p>
              <img src={Trust} alt="" />
            </div>

          </div>

          <div className='w-full lg:w-[65%] flex flex-col justify-between'>
            <div className="w-full mx-auto flex justify-center">
              <div className='flex flex-col gap-6'>
                <img src={Person1} alt="" className="w-[90%] mx-auto rounded-tl-[40px] rounded-br-[40px]" />
                <img src={Person2} alt="" className="w-[90%] mx-auto rounded-tl-[40px] rounded-br-[40px]" />
              </div>

              <div className='flex flex-col gap-6 mt-5'>
                <img src={Person3} alt="" className="w-[90%] mx-auto rounded-tl-[40px] rounded-br-[40px]" />
                <img src={Person4} alt="" className="w-[90%] mx-auto rounded-tl-[40px] rounded-br-[40px]" />
              </div>
            </div>

            <div className="block lg:hidden">
              <p className="font-Inter pt-8 pb-5">Trusted By:</p>
              <img src={Trust} alt="" />
            </div>

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