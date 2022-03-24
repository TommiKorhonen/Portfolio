import React from "react";
import About from "./About";
import Contact from "../Contact/Contact.jsx";
import Projects from "../Projects/Projects";
import WhatIknow from "./WhatIknow";
import { projectData } from "../../data/ProjectData";
const Main = () => {
  return (
    <main>
      <WhatIknow />
      <Projects projects={projectData} />
      <About />
      <Contact />
    </main>
  );
};

export default Main;
