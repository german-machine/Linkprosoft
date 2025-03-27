import Footer from '../Home/components/Footer'
import PrevNext from '../JobSearch/components/PrevNext'
import Feed from './components/Feed'
import Navbar from './components/Navbar2'
import Suggested from './components/Suggested'
import Newsletter from '../Home/components/Newsletter'


const JobDetails = () => {
  return (
    <>
      <Navbar />
      <Suggested />
      <Feed />
      <PrevNext />
      <Newsletter />
      <Footer />
    </>
  )
}

export default JobDetails