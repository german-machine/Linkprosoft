
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HowitWorks from "./components/HowitWorks"
import PopularSkills from "./components/PopularSkills"
import WhychooseUs from "./components/WhychooseUs"
import Testimonial from "./components/Testimonial"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import Newsletter from "./components/Newsletter"

const Home = () => {
  return (
    <>
    
    <Navbar />
    <Hero />
    <PopularSkills />
    <HowitWorks />
    <WhychooseUs />
    <Testimonial />
    <CallToAction />
    <Newsletter/>
    {/* <Footer /> */}
    </>
  )
}

export default Home