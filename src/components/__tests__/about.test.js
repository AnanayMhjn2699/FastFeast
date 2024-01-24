import { getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../About";

test("should load the image ", () => {
  render(<About />);
  const image = screen.getByAltText("Burger's");

  expect(image).toBeInTheDocument();
});
