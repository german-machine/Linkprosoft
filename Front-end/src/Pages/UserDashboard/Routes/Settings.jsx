import React from 'react';
import { Outlet } from 'react-router-dom';


const Settings = () => {
    return (
        <section className='w-full lg:w-[70%] xl:w-[75%]'>

            <Outlet />
        </section>
    )
}

export default Settings