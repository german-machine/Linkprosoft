import { IoCaretDown } from 'react-icons/io5'
import { FaMoon } from 'react-icons/fa'
import { Settings, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const SidebarGigPosting = () => {
  return (
    <div className='w-[20%] rounded-lg'>
        <div className='flex w-full h-24 bg-gray-500 rounded-lg gap-5 items-center p-3'>
            <Avatar className="w-1/4 h-fit rounded-full">
                <AvatarImage src="https://github.com/shadcn.png"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
                <h1 className='text-3xl font-semibold'>Jane Doe</h1>
                <p className='text-black opacity-50'>Client</p>
            </div>
        </div>

        <div className='mt-5 w-full bg-slate-500 rounded-lg px-5 py-3'>
            <div className='flex flex-col group justify-between  text-white'>
                <div className='flex justify-between w-full items-center'>
                    <p>Gigs</p>
                    <IoCaretDown  size={30}/>
                </div>
                <div className='flex justify-start pt-3 group-hover:px-5'>
                    <ul className='space-y-3'>
                        <li className='hover:text-black'>Dashboard</li>
                        <li className='hover:text-black'>All Gig Post</li>
                        <li className='hover:text-black'>All Contracts</li>
                        <li className='hover:text-black'>Any Hire</li>
                    </ul>
                </div>
            </div>

            <div className='mt-8'>
                <ul className='w-full text-white space-y-3'>
                    <li className='hover:text-black'>Messages</li>
                    <li className='hover:text-black'>Talent</li>
                    <li className='hover:text-black'>Notifications</li>
                    <li className='hover:text-black'>Reports</li>
                    <li className='hover:text-black'>Saved Lists</li>
                    <li className='hover:text-black'>Payment Method</li>
                    <li className='hover:text-black'>Help</li>
                </ul>

                <div className='flex mt-8 justify-between items-center px-2'>
                    <div className='bg-white text-black w-fit h-fit rounded-full p-3 hover:bg-black hover:text-white'>
                        <Settings />
                    </div>
                    <div className='bg-white text-black w-fit h-fit rounded-full p-3 hover:bg-black hover:text-white'>
                        <FaMoon size={25}/>
                    </div>
                    <div className='bg-white text-black w-fit h-fit rounded-full p-3 hover:bg-black hover:text-white'>
                        <LogOut />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SidebarGigPosting