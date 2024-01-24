import Contact from "../Contact";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should load the contact component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("should have 3 input fields", () => {
  render(<Contact />);

  const inputFields = screen.getAllByRole("textbox");

  expect(inputFields.length).toBe(3);
});

test("should have submit button", () => {
  render(<Contact />);

  const button = screen.getAllByRole("button");

  expect(button.length).toBe(1);
});

test("should print message after submitting", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  fireEvent.click(button);

  expect("Thank you for contacting FastFeast, We will reply ASAP.")
    .toBeInTheDocument;
});
