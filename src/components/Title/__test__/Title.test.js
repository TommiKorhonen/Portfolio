import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Title from "../Title";

const titleprops = {
  title: "About me",
};

describe("Title", () => {
  test("should show title", () => {
    render(<Title {...titleprops} />);
    expect(screen.getByRole("heading")).toHaveTextContent(/about me/i);
  });
});
