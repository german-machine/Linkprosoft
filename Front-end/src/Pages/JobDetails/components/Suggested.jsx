import { useState } from 'react';
import arrow from '../assets/images/arrow.png';
import { IoIosArrowDown, IoMdSearch } from 'react-icons/io';

const filters = ['Architect',  'Lawyer',  'Painter',  'Electrician',  'Chinese Civil',  'Julius Berger',  'Web Developer' ]
const Suggested = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <section className="w-full select-none ">
      <div className="w-[90%] mx-auto py-8 lg:py-5">

        <div className='mx-auto flex lg:hidden justify-between items-center bg-[#D9D9D933]'>
          <input type="text" placeholder='What skills are you looking for?' className='w-[90%] outline-none px-2 bg-transparent' />
          <div className="w-[15%] mx-auto flex justify-center py-2 md:py-3 px-1 bg-[#03AEFF] rounded-md cursor-pointer">
            <IoMdSearch className='block text-2xl text-center' />
          </div>
        </div>

        <h1 className="font-Inter font-medium py-3 text-sm " >Suggested</h1>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* First Row - 4 filters */}
          <div className="grid grid-cols-4 gap-4">
            {filters.slice(0, 4).map((item) => (
              <div key={item} className="bg-[#D9D9D9] font-Inter text-xs font-semibold py-3 lg:px-2 rounded-md text-center">
                {item}
              </div>
            ))}
          </div>

          {/* Second Row - 3 filters */}
          <div className="grid grid-cols-3 gap-4">
            {filters.slice(4).map((item) => (
              <div key={item} className="bg-[#D9D9D9] font-Inter text-xs font-semibold py-3 lg:px-2 rounded-md text-center">
                {item}
              </div>
            ))}
          </div>
        </div>


        <div className="flex gap-2 py-5 lg:w-[60%]">
          {/* Dropdown Buttons */}
          {[
            { label: 'Category', id: 'category' },
            { label: 'Service', id: 'serviceOption' },
            { label: 'Budget', id: 'budget' },
            { label: 'Delivery', id: 'deliveryTime' },

          ].map((dropdown, index) => (
            <div key={index} className="w-full ">
              <div
                className="px- py-1 cursor-pointer flex items-center justify-around font-Inter rounded border border-[#FC8E08] font-bold"
                onClick={() => toggleDropdown(dropdown.id)}
              >
                <span className='text-xs font-normal'>{dropdown.label}</span>
                <div className="">
                  <IoIosArrowDown className='text-[10px] text-[#FC8E08]' />
                </div>
              </div>

              {/* Dropdown Menu */}
              {openDropdown === dropdown.id && (
                <div
                  id={dropdown.id}
                  className="rounded border-[1px] border-gray-300 bg-white absolute top-[110%] w-auto shadow-md z-10"
                >
                  <div className="cursor-pointer hover:bg-gray-300 px-4 py-2">
                    Option 1
                  </div>
                  <div className="cursor-pointer hover:bg-gray-300 px-4 py-2">
                    Option 2
                  </div>
                  <div className="cursor-pointer hover:bg-gray-300 px-4 py-2">
                    Option 3
                  </div>
                  <div className="cursor-pointer hover:bg-gray-300 px-4 py-2">
                    Option 4
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suggested;
