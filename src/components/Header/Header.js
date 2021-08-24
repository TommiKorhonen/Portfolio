import React, { useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'
import Me from "../../images/Me.png"
import Info from './Info'
import { spanData } from './SpanData'
const Header = () => {
    const [hover,setHover] = useState(false);
    const toggleHover = (e) => {
        setHover(!hover)  
    }
    
    return (
        <header className="centerFlex min-h-screen p-5 max-w-6xl m-auto">
                <div className="centerFlex flex-col m-auto relative">
                    <div>
                        <h1 id="title" onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()} className=" text-5xl sm:text-6xl uppercase font-bold max-w-md">
                            {spanData.map((info) => {
                                const {id, letter} = info
                                return(
                                    <span key={id} className={hover ? "activespan" : "activespan2"}>{letter}</span>
                                )
                            })}
                            </h1>
                        <span className="text-lg">Tommi Korhonen</span>
                    </div>
                    <div className="flex items-center flex-wrap gap-4 sm:gap-16 relative  sm:-left-14">
                        <button className="btn uppercase sm:animate-bounce centerFlex gap-2">
                            Hire Me
                            <ArrowRightIcon className="h-5"/>
                        </button>
                        <img src={Me} alt="" className="rounded relative left-19 sm:left-0"/>
                    </div>
                    <Info />
                </div>
        </header>

    )
}

export default Header
