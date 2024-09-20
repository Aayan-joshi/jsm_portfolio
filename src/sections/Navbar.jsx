import React, {useState} from 'react'
import {navLinks} from "../constants/index.js";

const NavItems = () => {
    return (
        <ul className={`nav-ul`}>
            {navLinks.map((item, index) => (
                <li key={index} className={`nav-li`}>
                    <a href={item.href} className={`nav-li_a`}>{item.name}</a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen)



    return (
        <header className={`fixed top-0 left-0 right-0 z-50 w-full bg-black/90 p-5 text-white bg-transparent`}>
            <div className={`max-w-7xl mx-auto`}>
                <div className={`flex justify-between items-center py-5 mx-auto c-space`}>
                    <a href="/" className={`text-neutral-400 font-bold hover:text-white transition-colors`}>
                        Aayan
                    </a>

                    <button onClick={() => handleMenu()} className={`text-neutral-400 hover:text-white focus:outline-none sm:hidden flex`} aria-label={`Toggle Menu`}>
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg" } alt="toggle" className={`w-6 h-6`} />
                    </button>

                    <nav className={`sm:flex hidden`}>
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                <nav className={`py-5`}>
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}
export default Navbar
