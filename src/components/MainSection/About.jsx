import React from "react";
import Title from "../Title/Title";
const About = () => {
  return (
    <section
      className="centerFlex flex-col m-auto pt-16 pb-8 max-w-5xl min-h-screen"
      name="about"
    >
      <Title title={"About me"} mb={"mb-16"} />
      <article className="px-5">
        <p className="flex flex-col gap-8">
          <span>
            Hi, My name is Tommi Korhonen, I'm 25 years old{" "}
            <strong>IT passionate </strong>
            currently based in Varkaus, Finland. Currently I'm in my last year
            of studies towards a bachelor's in Energy Engineering.
          </span>

          <span>
            I first started coding out of curiousity and fell in love with
            programming instantly. My first programming language was{" "}
            <strong>python</strong>. After that I found{" "}
            <strong>javascript </strong>
            and switched to it because I wanted to jump deep into{" "}
            <strong>web development</strong>.
          </span>
          <span>
            My biggest goal at the moment is to find my first webdev related job
            so I can become a professional developer and do what I love for the
            living. I'm sure I'll fit perfectly in your company.
          </span>
        </p>
      </article>
    </section>
  );
};

export default About;
