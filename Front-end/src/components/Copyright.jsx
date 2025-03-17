import React from 'react'
import { LuCopyright } from 'react-icons/lu'

const Copyright = () => {
  return (
    <section className="w-full bg-bluecolor">
      <hr />
        <div className="w-full flex justify-center lg:justify-end p-3 gap- text-center items-center text-white">
          <LuCopyright />
          <h1 className="pl-1 text-[14px] font-Inter"> 2024 Linkprosoft. All Rights Reserved.</h1>

        </div>
    </section>
  )
}

export default Copyright
