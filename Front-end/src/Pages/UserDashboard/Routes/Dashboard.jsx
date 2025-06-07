import { Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <main className='w-full lg:w-[75%] xl:w-[76%] font-Inter'>

            <Outlet />
        </main>
    )
}