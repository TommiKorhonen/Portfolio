import React from "react";
import About from "./About";
import Contact from "../Contact/Contact.jsx";
import Projects from "../Projects/Projects";
import WhatIknow from "./WhatIknow";

const Main = () => {
  return (
    <main>
      <WhatIknow />
      <Projects />
      <About />
      <Contact />
    </main>
  );
};

export default Main;
