import React from "react";
import { techData } from "../../data/TechStackData";
import { toolsData } from "../../data/ToolsData";
import Title from "../Title/Title";
import Skills from "../Skills/Skills.jsx";
const WhatIknow = () => {
  return (
    <section
      className="centerFlex flex-col m-auto max-w-6xl pb-16 min-h-screen"
      id="skills"
      name="skills"
    >
      <Title title={"What I know"} mb={"mb-16"} />
      <article className="mb-32">
        <h3 className="text-2xl text-center mb-12">My tech stack</h3>
        <Skills />
      </article>
      <article>
        <h3 className="text-2xl text-center mb-12">Tools that I use</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          {toolsData.map((tool) => {
            const { id, text, src } = tool;
            return (
              <li key={id} className="centerFlex flex-col text-center">
                <img src={src} alt={text} className="h-16 mb-2" />
                <p className="font-medium uppercase">{text}</p>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default WhatIknow;
