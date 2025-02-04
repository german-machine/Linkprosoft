// import Logo from "../assets/images/Logo.svg"
// import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
        <header className=" bg-white w-[100%] sticky z-[1000] top-0" >
            <nav className="w-[90%]  py-[15px] mx-auto flex justify-between items-center">
                <div className="text-4xl font-bold text-bluecolor font-Inter"   >
                    <h1 >Linkprosoft.</h1>
                    {/* <img src={Logo} alt="" /> */}
                </div>

                <ul className="flex items-center gap-5 font-Inter text-greycolor text-[17px] ">
                    <li className=""><a href="">Home</a></li>
                    <li className=""><a href="#">About Us</a></li>
                    <li className=""><a href="#">How it Works</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>

                {/* <nav className="flex items-center gap-5 font-Inter text-greycolor text-[17px] ">
                   <Link to="/">Home</Link>
                   <Link to="/about">About</Link>
                   <Link to="/how-it-works">How It Works</Link>
                   <Link to="/contact-us">Contact Us</Link>
                </nav> */}

                <div className="flex gap-3 text-[15px]">
                    <a className=" bg-bluecolor text-white font-Inter py-[10px] px-[25px] rounded-tl-[40px] rounded-br-[40px]" href="#">Sign Up</a>
                    
                    <a className="border text-bluecolor border-bluecolor bg-#006FA3  font-Inter py-[10px] px-[25px] rounded-tl-[40px] rounded-br-[40px]" href="#">Login</a>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar