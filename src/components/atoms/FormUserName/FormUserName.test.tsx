import { render, screen } from "@testing-library/react";
import FormUserType from "./FormUserName";

describe("FormUserType component", () => {
  test("input field is enabled by default", () => {
    render(<FormUserType />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeEnabled();
  });

  test("renders input field", () => {
    render(<FormUserType />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });
});
