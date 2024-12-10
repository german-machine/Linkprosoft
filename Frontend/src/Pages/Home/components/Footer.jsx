import Facebook from "../../../assets/images/Facebook.png"
import X from "../../../assets/images/X.png"
import Linkden from "../../../assets/images/Linkden.png"

const Footer = () => {
  return (
    <>
    <footer className="w-[100%] bg-bluecolor pb-[180px]">
      <div className="w-[85%] mx-auto flex justify-between relative top-10 gap-5 ">
        <div className="relative top-[100px] w-[30%]">
          <h1 className="font-Inter text-white text-[30px] pb-5 font-bold">Linkprosoft.</h1>
          <p className="pb-2 font-bold text-white font-Inter text-17px">Follow Us</p>

        <div className="flex gap-2 ">
          <img src={Linkden} alt=""  />
          <img src={X} alt="" />
          <img src={Facebook} alt="" />
        </div>
        </div>


        <div className="flex w-[55%] relative justify-between top-[50px]">
          <div>
            <h1 className="font-semibold text-white list-disc font-Inter text-[13px]">Categories</h1>
            <ul className="font-semibold text-white pl-8 list-disc font-Inter text-[12px]">
              <li><a href="">Graphic & Design</a></li>
              <li><a href="">Digital Marketing</a></li>
              <li><a href="">Programming & Tech</a></li>
              <li><a href="">Video Editing</a></li>
              <li><a href="">Animation</a></li>
              <li><a href="">Business</a></li>
              <li><a href="">Photography</a></li>
              <li><a href="">Audio Editing</a></li>
              <li><a href="">Voice Over</a></li>
              <li><a href="">Branding</a></li>
              <li><a href="">Finance</a></li>
              <li><a href="">Writing & Translation</a></li>
              </ul>
          </div>

          <div>
            <h1 className="font-semibold text-white list-disc font-Inter text-[13px]">About</h1>
            <ul className="font-semibold text-white pl-8 list-disc font-Inter text-[12px]">
              <li><a href="">Careers</a></li>
              <li><a href="">Press & News</a></li>
              <li><a href="">Partnerships</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms of Service</a></li>
              </ul>
          </div>

          <div>
            <h1 className="font-semibold text-white list-disc font-Inter text-[13px]">Support</h1>
            <ul className="font-semibold text-white pl-8 list-disc font-Inter text-[12px]">
              <li><a href="">Help & Support</a></li>
              <li><a href="">Trust & Safety</a></li>
              <li><a href="">Hiring on Linkprosoft</a></li>
              <li><a href="">Listing on Linkprosoft</a></li>
              </ul>
          </div>

          <div>
            <h1 className="font-semibold text-white list-disc font-Inter text-[13px]">Resources</h1>
            <ul className="font-semibold text-white pl-8 list-disc font-Inter text-[12px]">
              <li><a href="">Success stories</a></li>
              <li><a href="">Reviews</a></li>
              <li><a href="">Community</a></li>
              <li><a href="">Blog</a></li>
              
              </ul>
          </div>
        </div>
      </div>
      <hr className="relative top-[140px]"/>
    </footer>
    
    </>
  )
}

export default Footer