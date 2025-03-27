import Footer from "../Home/components/Footer"
import Navbar from "../JobDetails/components/Navbar2"
import Suggested from "../JobDetails/components/Suggested"
import Feed from "./components/Feed"
import PrevNext from "./components/PrevNext"
import { feedData } from "../../data/feedData2"
import Newsletter from "../Home/components/Newsletter"

const JobSearch = () => {
  const feedDataLength = feedData.length
  return (
    <>
    <Navbar/>
    <Suggested/>
    <Feed/>
    <PrevNext feedDataLength={feedDataLength} />
    <Feed/>
    <Newsletter />
    <Footer/>
    </>
  )
}

export default JobSearch