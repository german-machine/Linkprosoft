import { useState } from "react";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { Outlet } from "react-router-dom";

function GigPosting() {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <div>
            <Navbar
                menuActive={menuActive}
                setMenuActive={setMenuActive}
            />

            <div className="relative bg-white">
                <Sidebar
                    menuActive={menuActive}
                    setMenuActive={setMenuActive}
                />

                <Main />
            </div>

            {/* <Outlet /> */}
        </div>
    )
}

export default GigPosting