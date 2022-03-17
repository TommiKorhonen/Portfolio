import React from "react";

const Project = ({
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
}) => {
  return (
    <>
      <div
        data-testid="juhani"
        className="border border-solid border-gray-50 w-full"
      >
        <img
          src={projectImage.url}
          alt={projectImage.alt}
          className="w-full h-full block bg-white"
        />
      </div>
      <div className="py-12 relative px-10 w-full border-t-0 border border-solid border-gray-50">
        <h3 className="text-xl uppercase mb-2">{text}</h3>
        <p className="mb-4 opacity-80">{paragraph}</p>
        <div className="w-full flex items-center mb-6">
          Tech stack:
          <img
            src={projectStack1.url}
            alt={projectStack1.alt}
            className="h-8 ml-4"
          />
          <img src={stack2} alt={stack2} className="h-8 ml-4" />
          <img src={stack3} alt={stack3} className="h-8 ml-4" />
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-8 relative">
          <a
            href={a}
            className="projectButtonActive"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 icon icon-tabler icon-tabler-brand-github"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="black"
              fill="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
            {button1}
          </a>
          <a
            href={a2}
            className="projectButtonActive"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 icon icon-tabler icon-tabler-world"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
              fill="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <line x1="3.6" y1="9" x2="20.4" y2="9" />
              <line x1="3.6" y1="15" x2="20.4" y2="15" />
              <path d="M11.5 3a17 17 0 0 0 0 18" />
              <path d="M12.5 3a17 17 0 0 1 0 18" />
            </svg>
            {button2}
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
