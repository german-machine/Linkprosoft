import { Link } from 'react-router-dom'
import { RiMenu5Fill } from "react-icons/ri";
import PostGigsButton from '../../../constants/PostGigsButton';
import SignInButton from '../../../constants/SignInButton';


const OnboardingNav = () => {
  return (
    <header className="w-full border-b md:border-b-[4px] border-bluecolor">
      <div className='w-[90%] mx-auto flex items-center justify-between py-5 md:py-4'>
        <Link to='/' className='text-3xl font-bold text-bluecolor font-Inter uppercase'>
          Linkprosoft
        </Link>

        <div className='hidden md:flex gap-5'>
          <PostGigsButton>
            Post Gigs
          </PostGigsButton>

          <SignInButton>
            Sign In
          </SignInButton>
        </div>

        <div className='block md:hidden'>
          <RiMenu5Fill className='text-3xl font-semibold' />
        </div>
      </div>
    </header>
  )
}

export default OnboardingNav