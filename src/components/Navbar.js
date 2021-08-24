import React from 'react'
import { MenuIcon } from "@heroicons/react/solid"
import { XIcon } from "@heroicons/react/solid"
import logo from "../images/logo.png"

const Navbar = ({isOpen, toggle}) => {
    
    return (
        <nav className="shadow-orange bg-lightBlack sticky top-0 z-40">
          <div className={isOpen ?"flex justify-between pt-5 md:py-5 px-5 md:px-10" : "flex justify-between  py-5 px-5 md:px-10"}>
                {/* left */}
                <div className="flex items-center gap-4">
                    <img src={logo} alt="logo" className="h-12 transform hover:scale-110"/>
                    <span className="text-base font-semibold uppercase ">Front-end Dev</span>
                </div>
                {/* right */}
                <span className="px-4 flex items-center justify-end cursor-pointer" onClick={toggle}>
                    <MenuIcon className={isOpen ? "hidden" : "h-14"}/>
                    <XIcon className={isOpen ? "h-14" : "hidden"} />
                </span>
            </div>
            <div className={isOpen ? "py-5 px-5 pt-2 pb-4 transition duration-500 ease-in-out" : "invisible max-h-0"}>
                <a href="#Home" className="block px-2 py-1 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl rounded hover:bg-twitchPurple" onClick={toggle}>Home</a>
                <a href="#WhatIknow" className="mt-1 block px-2 py-1 font-semibold text-lg  sm:text-xl md:text-2xl lg:text-3xl rounded hover:bg-twitchPurple" onClick={toggle}>What I know</a>
                <a href="#Projects" className="mt-1 block px-2 py-1 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl rounded hover:bg-twitchPurple" onClick={toggle}>Projects</a>
                <a href="#Aboutme" className="mt-1 block px-2 py-1 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl rounded hover:bg-twitchPurple" onClick={toggle}>About me</a>
            </div>
        </nav>
    )
}

export default Navbar
