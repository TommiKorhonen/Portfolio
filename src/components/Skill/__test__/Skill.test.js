import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Skill from "../Skill";

const skillProps = {
  text: "React",
  src: "http://localhost/react.png",
};

describe("Skill", () => {
  test("Should show tech image", () => {
    render(<Skill {...skillProps} />);
    expect(screen.getByAltText(/react/i).src).toBe(skillProps.src);
  });
  test("Should show tech name", () => {
    render(<Skill {...skillProps} />);
    expect(screen.getByText(/react/i)).toBeInTheDocument();
  });
});
