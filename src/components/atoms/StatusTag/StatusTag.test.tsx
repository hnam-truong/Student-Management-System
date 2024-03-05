// Rendering "Passed" and "Failed" statuses with the expected background colors
import { render, screen } from "@testing-library/react";
import StatusTag from "./StatusTag";

test('renders "Passed" status correctly', () => {
  // eslint-disable-next-line react/jsx-boolean-value
  render(<StatusTag status={true} />);
  const passedElement = screen.getByText("Passed");

  expect(passedElement).toBeInTheDocument();
  expect(passedElement).toHaveStyle("background-color: #228B22");
});

test('renders "Failed" status correctly', () => {
  render(<StatusTag status={false} />);
  const passedElement = screen.getByText("Failed");

  expect(passedElement).toBeInTheDocument();
  expect(passedElement).toHaveStyle("background-color: #ff0000");
});
