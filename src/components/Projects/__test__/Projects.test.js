import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { projectData } from "../../../mocks/projects.js";
import Projects from "../Projects.jsx";

describe("Projects", () => {
  test("should render 6 projects", () => {
    render(<Projects />);
    expect(screen.getAllByRole("article").length).toBe(6);
  });
});
