import { useEffect, useRef } from "react";


function Sidebar({ menuActive, setMenuActive }) {
    const menuRef = useRef(null);

    useEffect(() => {
        function handleCloseMenu() {
            if (menuRef.current  && !menuRef.current.contains(event.target)) {
                setMenuActive(() => false);
            }
        }

        if (menuActive) document.addEventListener('mousedown', handleCloseMenu);

        return () => {
            document.removeEventListener('mousedown', handleCloseMenu);
        }

    }, [menuActive])

    return (
        <div ref={menuRef} className={`${menuActive ? 'right-0 duration-500' : '-right-[1000%] lg:left-0 duration-500'} w-[70%] lg:w-[25%] top-0 lg:top-[13vh] bottom-0 fixed shadow-2xl z-[999] bg-white`}>
            Sidebar;
        </div>
    )
}

export default Sidebar;