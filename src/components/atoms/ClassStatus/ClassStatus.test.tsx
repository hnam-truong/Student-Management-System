import { render, screen } from "@testing-library/react";
import ClassStatus from "./ClassStatus";

describe("ClassStatus Component", () => {
  it('renders "Opening" status correctly', () => {
    render(<ClassStatus status="Opening" />);
    const statusElement = screen.getByText("Opening");

    expect(statusElement).toBeInTheDocument();
    expect(statusElement).toHaveStyle("background-color: #52c41a");
  });

  it('renders "Planning" status correctly', () => {
    render(<ClassStatus status="Planning" />);
    const statusElement = screen.getByText("Planning");

    expect(statusElement).toBeInTheDocument();
    expect(statusElement).toHaveStyle("background-color: #2363a3");
  });

  test('renders "Finishing" status correctly', () => {
    render(<ClassStatus status="Finishing" />);
    const statusElement = screen.getByText("Finishing");

    expect(statusElement).toBeInTheDocument();
    expect(statusElement).toHaveStyle("background-color: #ff7568");
  });
});
