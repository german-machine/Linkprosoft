import Footer from '../Home/components/Footer'
import PrevNext from './components/PrevNext'
import Feed from './components/Feed'
import Navbar from './components/Navbar2'
import Suggested from './components/Suggested'
import Newsletter from '../Home/components/Newsletter'
import { feedData } from "../../data/feedData2"



const JobDetails = () => {
  const feedDataLength = feedData.length;
  return (
    <>
      <Navbar />
      <Suggested />
      <Feed />
      <PrevNext feedDataLength={feedDataLength} />
      <Newsletter />
      <Footer />
    </>
  )
}

export default JobDetails