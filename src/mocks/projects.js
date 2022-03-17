import Portfolio from "../images/Portfolio.png";
import Delicy from "../images/Delicy.png";
import droppe from "../images/droppe xmas.JPG";
import VBank from "../images/VBank.png";
import Weatherapp from "../images/Weatherapp.png";
import Streamovies from "../images/Streamovies.png";
import html from "../images/html.png";
import js from "../images/js.png";
import react from "../images/react.png";
import scss from "../images/scss.png";
import tailwind from "../images/tailwind.png";
import typescript from "../images/ts-logo-128.png";
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
    text: "Stream-Movies",
    paragraph:
      "My first ever web page. As my first landing page I wanted to make simple landing page to showcase my css skills with sass. Responsive mobile friendly mockup using grid and flexbox. Made with html, sass and compiled with parcel bundler.",
    projectImage: {
      url: Streamovies,
      alt: "Image of project",
    },
    projectStack1: {
      url: html,
      alt: "Html logo",
    },
    stack2: scss,
    button1: "Code",
    button2: "Live",
    a: "https://github.com/TommiKorhonen/StreamMovies",
    a2: "https://tommikorhonen.github.io/StreamMovies/",
  },
];
