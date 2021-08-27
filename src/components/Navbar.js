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
                <div className="flex">
                    <a href="https://github.com/TommiKorhonen"  target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon hidden sm:block icon-tabler icon-tabler-brand-github" width="54" height="54" viewBox="0 0 24 24"  stroke="black" fill="white" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/tommi-korhonen1/"  target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon hidden sm:block icon-tabler icon-tabler-brand-linkedin" width="54" height="54" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2867B2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <line x1="8" y1="11" x2="8" y2="16" />
                            <line x1="8" y1="8" x2="8" y2="8.01" />
                            <line x1="12" y1="16" x2="12" y2="11" />
                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>
                </a>
                <span className="px-4 flex items-center justify-end cursor-pointer" onClick={toggle}>
                    <MenuIcon className={isOpen ? "hidden" : "h-12"}/>
                    <XIcon className={isOpen ? "h-12" : "hidden"} />
                </span>
                </div>
            </div>
            <div className={isOpen ? "py-5 px-5 pt-1 pb-4 transition duration-500 ease-in-out" : "invisible max-h-0"}>
                <Link to="home" className=" block px-2 py-1 font-semibold text-lg sm:text-xl md:text-2xl  rounded hover:bg-twitchPurple" onClick={toggle}>Home</Link>
                <Link to="skills" className="mt-1 block px-2 py-1 font-semibold text-lg  sm:text-xl md:text-2xl  rounded hover:bg-twitchPurple" onClick={toggle}>What I know</Link>
                <Link to="projects" className="mt-1 block px-2 py-1 font-semibold text-lg sm:text-xl md:text-2xl  rounded hover:bg-twitchPurple" onClick={toggle}>Projects</Link>
                <Link to="about" className="mt-1 block px-2 py-1 font-semibold text-lg sm:text-xl md:text-2xl  rounded hover:bg-twitchPurple" onClick={toggle}>About me</Link>
                <Link to="contact" className="mt-1 block px-2 py-1 font-semibold text-lg sm:text-xl md:text-2xl  rounded hover:bg-twitchPurple" onClick={toggle}>Contact</Link>
                <div className="flex p-2 sm:hidden">
                <a href="https://github.com/TommiKorhonen"  target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="40" height="40" viewBox="0 0 24 24"  stroke="black" fill="white" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/tommi-korhonen1/"  target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2867B2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <line x1="8" y1="11" x2="8" y2="16" />
                            <line x1="8" y1="8" x2="8" y2="8.01" />
                            <line x1="12" y1="16" x2="12" y2="11" />
                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>
                </a>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
