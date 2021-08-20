import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from ".";

describe("Should test button component", () => {
  test("should exist back button", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should have type submit", () => {
    render(<Button type="submit" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "submit");
  });

  test("should have type button", () => {
    render(<Button type="button" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
  });

  test("should exist back-button style class", () => {
    render(<Button type="button" className="back-button" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("back-button");
  });

  test("should exist submit-button style class", () => {
    render(<Button type="submit" className="submit-button" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("submit-button");
  });

  test("should test click event in button", () => {
    let click = false;
    const submit = () => {
      click = true;
    };
    render(<Button type="submit" className="submit-button" onClick={submit} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("submit-button");
    expect(click).toBe(true);
  });
});
