import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Project from "../Project";

const projectProps = {
  id: 1,
  text: "Portfolio",
  paragraph: "My portfolio made with React, tailwind",
  projectImage: {
    url: "http://localhost/Portfolio.png",
    alt: "Image of project",
  },
  projectStack1: {
    url: "http://localhost/react.png",
    alt: "React logo",
  },
  stack2: "http://localhost/Portfolio.png",
  button1: "Code",
  button2: "Live",
  a: "https://github.com/TommiKorhonen/Portfolio",
  a2: "https://tommi-korhonen.com/",
};

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Project {...projectProps} />);
});

describe("Project", () => {
  test("Should show project image", () => {
    expect(screen.getByAltText(/Image of project/i).src).toBe(
      projectProps.projectImage.url
    );
  });
  test("Should show project name", () => {
    expect(
      screen.getByRole("heading", {
        name: "Portfolio",
      })
    ).toBeInTheDocument();
  });
  test("Should show project description", () => {
    expect(
      screen.getByText(/My portfolio made with React, tailwind/i)
    ).toBeInTheDocument();
  });
  test("Should show tech stack icon", () => {
    expect(screen.getByAltText(/react logo/i).src).toBe(
      projectProps.projectStack1.url
    );
  });
  test("Should show project github link", () => {
    expect(screen.getByRole("link", { name: /code/i })).toHaveAttribute(
      "href",
      "https://github.com/TommiKorhonen/Portfolio"
    );
  });
  test("Should show project live link", () => {
    expect(screen.getByRole("link", { name: /live/i })).toHaveAttribute(
      "href",
      "https://tommi-korhonen.com/"
    );
  });
});
