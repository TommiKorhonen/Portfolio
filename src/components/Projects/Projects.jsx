import React from "react";
import { projectData } from "../../data/ProjectData";
import Project from "../Project/Project";
import Title from "../Title/Title";
const Projects = () => {
  return (
    <section
      className="centerFlex min-h-screen flex-col m-auto pt-16 pb-8 max-w-5xl"
      name="projects"
    >
      <Title title={"Projects"} mb={"mb-16"} />
      {projectData.map((project) => {
        const {
          id,
          a,
          a2,
          text,
          paragraph,
          projectImage,
          projectStack1,
          stack2,
          stack3,
          button1,
          button2,
        } = project;
        return (
          <article
            className="flex flex-col items-center mb-16 p-3 md:px-32 w-full"
            key={id}
          >
            <Project
              a={a}
              a2={a2}
              text={text}
              paragraph={paragraph}
              projectImage={projectImage}
              projectStack1={projectStack1}
              stack2={stack2}
              stack3={stack3}
              button1={button1}
              button2={button2}
            />
          </article>
        );
      })}
    </section>
  );
};

export default Projects;
