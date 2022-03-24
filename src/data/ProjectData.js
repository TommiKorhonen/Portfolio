import Portfolio from "../images/Portfolio.png";
import Delicy from "../images/Delicy.png";
import droppe from "../images/droppe xmas.JPG";
import VBank from "../images/VBank.png";
import Weatherapp from "../images/Weatherapp.png";
import Sketch from "../images/sketch.JPG";
import html from "../images/html.png";
import js from "../images/js.png";
import react from "../images/react.png";
import scss from "../images/scss.png";
import tailwind from "../images/tailwind.png";
import typescript from "../images/ts-logo-128.png";
import tictactoe from "../images/tic-tac-toe.png";
export const projectData = [
  {
    id: 1,
    text: "Portfolio",
    paragraph: "My portfolio made with React, tailwind",
    projectImage: {
      url: Portfolio,
      alt: "Image of project",
    },
    projectStack1: {
      url: react,
      alt: "React logo",
    },
    stack: react,
    stack2: tailwind,
    button1: "Code",
    button2: "Live",
    a: "https://github.com/TommiKorhonen/Portfolio",
    a2: "https://tommi-korhonen.com/",
  },
  {
    id: 2,
    text: "Sketch",
    paragraph: "Create pixel art with a variety of drawing tools.",
    projectImage: {
      url: Sketch,
      alt: "Image of project",
    },
    projectStack1: {
      url: react,
      alt: "React logo",
    },
    stack2: scss,
    stack3: typescript,
    button1: "Code",
    button2: "Live",
    a: "https://github.com/TommiKorhonen/Sketch",
    a2: "https://tommikorhonen.github.io/Sketch/",
  },
  {
    id: 3,
    text: "Delicy",
    paragraph:
      "Landing page, made with React and Tailwind. My first big project where I wanted to showcase my progress as Front-end dev.",
    projectImage: {
      url: Delicy,
      alt: "Image of project",
    },
    projectStack1: {
      url: react,
      alt: "React logo",
    },
    stack2: tailwind,
    button1: "Code",
    button2: "Live",
    a: "https://github.com/TommiKorhonen/Delicy",
    a2: "https://tommikorhonen.github.io/Delicy/#/",
  },
  {
    id: 4,
    text: "DroppeXmas",
    paragraph:
      "Whislist app, where parent can accept and decline childrens wishes",
    projectImage: {
      url: droppe,
      alt: "Image of project",
    },
    projectStack1: {
      url: react,
      alt: "React logo",
    },
    stack2: typescript,
    stack3: scss,
    button1: "Code",
    button2: "Live",
    a: "https://github.com/TommiKorhonen/Droppe-Xmas",
    a2: "https://tommikorhonen.github.io/Droppe-Xmas/",
  },
  {
    id: 5,
    text: "VBank",
    paragraph:
      "Digital Bank landing page, made with React and Tailwind. Really clean and responsive style.",
    projectImage: {
      url: VBank,
      alt: "Image of project",
    },
    projectStack1: {
      url: react,
      alt: "React logo",
    },
    stack2: tailwind,
    button1: "Code",
    button2: "Live",
    a: "https://github.com/TommiKorhonen/VBank",
    a2: "https://tommikorhonen.github.io/VBank/",
  },
  {
    id: 6,
    text: "Weather app",
    paragraph:
      "Weather app showcasing api usage. Fetched api from openweathermap. Displays temperature and if there is clear sky/clouds etc. Made with html, sass, javascript and compiled with parcel bundler.",
    projectImage: {
      url: Weatherapp,
      alt: "Image of project",
    },
    projectStack1: {
      url: html,
      alt: "Html logo",
    },
    stack2: scss,
    stack3: js,
    button1: "Code",
    button2: "Live",
    a: "https://github.com/TommiKorhonen/WeatherApp",
    a2: "https://tommikorhonen.github.io/WeatherApp/",
  },
  {
    id: 7,
    text: "Tic-Tac-Toe",
    paragraph:
      "Tic-Tac-Toe game. Fully tested components with React testing library & Jest.",
    projectImage: {
      url: tictactoe,
      alt: "Image of project",
    },
    projectStack1: {
      url: react,
      alt: "React logo",
    },
    stack2: tailwind,
    button1: "Code",
    button2: "Live",
    a: "https://github.com/TommiKorhonen/tic-tac-toe",
    a2: "https://tommikorhonen.github.io/tic-tac-toe/",
  },
];
