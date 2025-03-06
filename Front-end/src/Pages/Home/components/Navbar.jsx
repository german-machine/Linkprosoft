import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header className="bg-white w-[100%] sticky z-[1000] top-0">
        <nav className="w-[90%] py-[15px] mx-auto flex justify-between items-center">
          <div className="text-4xl font-bold text-bluecolor font-Inter cursor-pointer">
            <Link to='/'>Linkprosoft.</Link>
            {/* <img src={Logo} alt="" /> */}
          </div>

          <nav className="flex items-center gap-5 font-Inter text-greycolor text-[17px]">
            <Link to="/">Home</Link>
            <Link to="/UserDashboard">About</Link>
            <Link to="/JobDetails">How It Works</Link>
            <Link to="/EmployerDashboard">Contact Us</Link>
          </nav>

          <div className="flex gap-3 text-[15px]">
            <Link to="/signup" className="bg-bluecolor text-white font-Inter py-[10px] px-[25px] rounded-tl-[40px] rounded-br-[40px]">Sign Up</Link>
            <Link to="/signup/login" className="border text-bluecolor border-bluecolor bg-#006FA3 font-Inter py-[10px] px-[25px] rounded-tl-[40px] rounded-br-[40px]">Login</Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar