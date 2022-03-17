import React from "react";
import { techData } from "../../data/TechStackData";
import Skill from "../Skill/Skill";

const Skills = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-16">
      {techData.map((tech) => {
        const { id, text, src } = tech;
        return (
          <li key={id} className="centerFlex flex-col text-center">
            <Skill text={text} src={src} />
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
