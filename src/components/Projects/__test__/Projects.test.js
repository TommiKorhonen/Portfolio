import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { projectData } from "../../../mocks/projects.js";
import Projects from "../Projects.jsx";

describe("Projects", () => {
  test("should render given amount of projects", () => {
    render(<Projects projects={projectData} />);
    expect(screen.getAllByRole("article").length).toBe(6);
  });
});
