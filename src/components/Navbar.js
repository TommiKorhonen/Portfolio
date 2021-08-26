import React from 'react'
import { MenuIcon } from "@heroicons/react/solid"
import { XIcon } from "@heroicons/react/solid"
import logo from "../images/logo.png"
import { Link } from 'react-scroll'
const Navbar = ({isOpen, toggle}) => {
    
    return (
        <nav className="shadow-orange bg-lightBlack sticky top-0 z-50">
          <div className={isOpen ?"flex justify-between pt-5 md:py-5 px-5 md:px-10" : "flex justify-between  py-2 px-5 md:px-10"}>
                {/* left */}
                <div className="flex items-center gap-4">
                    <Link  to="home" spy={true} smooth={true} duration={500}><img src={logo} alt="logo" className="h-8 transform hover:scale-110 cursor-pointer"/></Link>
                    <span className="text-base font-semibold uppercase ">Front-end Dev</span>
                </div>
                {/* right */}
                <span className="px-4 flex items-center justify-end cursor-pointer" onClick={toggle}>
                    <MenuIcon className={isOpen ? "hidden" : "h-12"}/>
                    <XIcon className={isOpen ? "h-12" : "hidden"} />
                </span>
            </div>
            <div className={isOpen ? "py-5 px-5 pt-1 pb-4 transition duration-500 ease-in-out" : "invisible max-h-0"}>
                <Link to="home" className=" block px-2 py-1 font-semibold text-lg sm:text-xl md:text-2xl  rounded hover:bg-twitchPurple" onClick={toggle}>Home</Link>
                <Link to="skills" className="mt-1 block px-2 py-1 font-semibold text-lg  sm:text-xl md:text-2xl  rounded hover:bg-twitchPurple" onClick={toggle}>What I know</Link>
                <Link to="projects" className="mt-1 block px-2 py-1 font-semibold text-lg sm:text-xl md:text-2xl  rounded hover:bg-twitchPurple" onClick={toggle}>Projects</Link>
                <Link to="about" className="mt-1 block px-2 py-1 font-semibold text-lg sm:text-xl md:text-2xl  rounded hover:bg-twitchPurple" onClick={toggle}>About me</Link>
                <Link to="contact" className="mt-1 block px-2 py-1 font-semibold text-lg sm:text-xl md:text-2xl  rounded hover:bg-twitchPurple" onClick={toggle}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
