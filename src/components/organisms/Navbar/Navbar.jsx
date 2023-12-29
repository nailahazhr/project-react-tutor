export default function Navbar() {
    const itemNav = [
        { name: 'Home', link: "/" },
        { name: 'Course', link: "/course" },
        { name: 'About Us', link: "/about-us" },
        { name: 'Article', link: "/article" },
        { name: 'Contact', link: "/contact" }
    ]
    return (
        <>
            <div className="navbar bg-base-100 px-36 pl-36 shadow-xl">
                <div className="navbar-start">

                    {/* Dropdown */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                itemNav.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={item.link}>{item.name}</a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    {/* Logo */}
                    <img alt="Logo" src="src/assets/header/headerLogo.svg" style={{ maxWidth: '100%' }} />

                </div>

                <div className="navbar-center hidden lg:flex pl-10 pr-10">

                    {/* Menu List */}
                    <ul className="menu menu-horizontal px-1 gap-3 text-lg">
                        {
                            itemNav.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.link}>{item.name}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>

                </div>

                <div className="navbar-end gap-5">

                    {/* Buttons */}
                    <a className="btn btn-outline btn-primary w-40 text-lg">Log in</a>
                    <a className="btn btn-activ btn-primary w-40 text-lg text-white">Register</a>

                </div>
            </div>
        </>
    );
}