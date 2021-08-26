import React from 'react'
import { navData } from './AsideNavData'
import { Link } from 'react-scroll'

const Asidenav = ({isOpen, toggle}) => {
    return (
        <aside className={isOpen ? " hidden" : "fixed hidden lg:block top-[100px] left-[25px] w-[120px] h-[30rem] py-8 opacity-100 transition duration-200 ease-in z-40 transform translate-x-0 translate-y-0"}>
            <div className="w-[2px] h-full bg-gray-200 opacity-30 absolute top-[10px] left-[17px]"></div>
            <ul className="flex justify-between flex-col h-full">
                {navData.map((li) => {
                    const {id,text,to} = li;
                    return(
                        <li className="pl-[30px] relative" key={id}>
                            <Link activeClass="activeNumber" to={to} spy={true} smooth={true} duration={500} className="absolute left-[30px] opacity-5 transition duration-200 ease-in cursor-pointer hover:text-yellow-500 hover:opacity-100" role="none">0{id}</Link>
                            <Link activeClass="activeLi" to={to} spy={true} smooth={true} duration={500} className="absolute uppercase opacity-0 translate-x-[30px] transform transition  duration-200 ease-in">{text}</Link>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Asidenav
