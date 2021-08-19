import { render, screen } from "@testing-library/react";
import BackButton from ".";

test("should exist back button", () => {
  render(<BackButton />);
  const backButton = screen.getByRole("button");
  console.log(backButton);
  expect(backButton).toBeInTheDocument();
});
