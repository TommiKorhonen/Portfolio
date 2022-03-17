import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Me from "../../images/Me.png";
import Info from "../Info/Info";
import { spanData } from "../../data/SpanData";
import { Link } from "react-scroll";
import Informations from "../Informations/Informations";
const Header = () => {
  return (
    <header
      className="centerFlex min-h-screen p-5 lg:max-w-6xl max-w-4xl m-auto"
      id="home"
      name="home"
    >
      <div className="centerFlex flex-col m-auto relative">
        <div>
          <h1
            id="title"
            className=" text-5xl sm:text-6xl uppercase font-bold max-w-md"
          >
            {spanData.map((info) => {
              const { id, letter } = info;
              return (
                <span key={id} className="activespan">
                  {letter}
                </span>
              );
            })}
          </h1>
          <span className="text-lg">Tommi Korhonen</span>
        </div>
        <div className="flex items-center flex-wrap gap-4 sm:gap-16 relative  sm:-left-14">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={800}
            className="btn uppercase sm:animate-bounce centerFlex gap-2 cursor-pointer"
          >
            Hire Me
            <ArrowRightIcon className="h-5" />
          </Link>
          <img src={Me} alt="" className="rounded relative left-19 sm:left-0" />
        </div>
        <Informations />
      </div>
    </header>
  );
};

export default Header;
