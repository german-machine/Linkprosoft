import { Link } from 'react-router-dom';

const HeaderBanner = ({ bgColor, logoColor, btnColor, btnTextColor, pageHeader, pageLink }) => {
    return (
        <header className={`w-full border-b-[3px] sticky top-0 z-[9999]`} style={{ backgroundColor: bgColor, border: btnColor }} >
            <nav className="w-full">
                <div className="w-[90%] mx-auto py-4 lg:py-3 flex items-center justify-between">
                    <div className={`text-3xl md:text-4xl lg:text-4xl font-bold font-Inter cursor-pointer`} style={{ color: logoColor}}>
                        <Link to='/'>Linkprosoft</Link>
                    </div>

                    <div className='flex items-center justify-end gap-4'>
                        <Link to={`/${pageLink}`} className={`text-center px-6 py-2 rounded-md`} style={{ backgroundColor: btnColor }}>
                            <span className={`font-Inter font-bold text-base `} style={{ color: btnTextColor }}>{pageHeader}</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderBanner

