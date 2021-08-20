import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

describe("Should test all input possibilities", () => {
  test("Should render input component", async () => {
    render(<Input />);
    const input = await screen.findByAltText("input");
    expect(input).toBeInTheDocument();
  });
  test("Should render input component with type", async () => {
    render(<Input type="email" />);
    const input = await screen.findByAltText("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "email");
  });
});
