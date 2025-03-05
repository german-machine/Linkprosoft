import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import profile from '../assets/profile.svg' // Ensure this import is correct
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom'

export const feedData = [
  {
    img: img2,
    title: 'Land-Scaper',
    description: 'A Competent UI designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, and Adobe front end development tools like HTML, CSS, and JavaScript',
    profile: profile,
  },
  {
    img: img3,
    title: 'Architect',
    description: 'A Competent UI designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, and Adobe front end development tools like HTML, CSS, and JavaScript',
    profile: profile,
  },
  {
    img: img1,
    title: 'Plumber',
    description: 'A Competent UI designer with visual appealing designs and a work experience of 5 years with knowledge of Figma, Adobe XD, and Adobe front end development tools like HTML, CSS, and JavaScript',
    profile: profile,
  },
  {
    isPostOpening: true,
  }
]

const AllGigsPostBody = () => {
  return (
    <>
      <div className='font-Inter text-xl mt-6 font-semibold'>
        <h2>Gigs Post <span>(2)</span></h2>
      </div>

      <div className="w-[100%] select-none mt-10 flex flex-wrap gap-4">
        {feedData.map((feed, index) => (
          feed.isPostOpening ? (
            <Link to="/EmployerDashboard/job-posting" key={index} className='border border-[#000000] border-dashed px-3 py-5 rounded-lg w-[22%]'>
              <div className='flex bg-[#D9D9D9] w-[25px] m-auto items-center justify-center rounded-full h-[25px]'>
                <FaPlus className='text-sm text-[#798387]'/>
              </div>
              <div className='mt-4 text-xl flex flex-col align-center justify-center'>
                <p className='font-Inter text-center text-l font-bold'>Post an Opening</p>
                <p className='text-[#798387] text-center text-[12px] pt-3 mb-3 leading-tight font-bold'>Create a new Gigs post and get propositions from Gigs seekers</p>
                <span className='font-Inter m-auto text-bold text-sm font-bold py-1 w-[90%] border-2 align-center text-center rounded-md border-[#03AEFF]'>Post a new Gig</span>
              </div>
            </Link>
          ) : (
            <div key={index} className='flex w-[22%] flex-col'>
              <img src={feed.img} alt="" className='h-[100px] object-contain rounded-t-lg'/>
              <div className=''>
                <p className=' font-Inter font-bold'>{feed.title}</p>
                <p className='font-Inter text-[11px] leading-tight'>{feed.description}</p>
              </div>
            </div>
          )
        ))}
      </div>
    </>
  )
}

export default AllGigsPostBody