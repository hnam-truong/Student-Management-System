import { fireEvent, render, screen } from "@testing-library/react"; // Assuming you have a custom test-utils for rendering components

import ReservingPeriod from "./ReservingPeriod";

describe("ReservingPeriod Component", () => {
  it("renders the component with a RangePicker", async () => {
    render(<ReservingPeriod />);

    // Check if the RangePicker is rendered
    const rangePicker = screen.getByLabelText("Reserving period");
    expect(rangePicker).toBeInTheDocument();
  });
  // Add more tests if needed
  test("renders ReservingPeriod component", () => {
    render(<ReservingPeriod />);
    const labelElement = screen.getByText("Reserving period");
    expect(labelElement).toBeInTheDocument();
  });
  test("selecting a valid reserving period does not show error message", () => {
    render(<ReservingPeriod />);
    const inputs = screen.getAllByRole("textbox");

    // Assuming start date input is the first textbox and end date input is the second textbox
    const startDateInput = inputs[0];
    const endDateInput = inputs[1];

    fireEvent.focus(startDateInput);
    fireEvent.click(startDateInput);
    const startDateCell = screen
      .getAllByRole("cell")
      .find((cell) => cell.textContent === "10");
    if (startDateCell) {
      fireEvent.click(startDateCell);
    } else {
      throw new Error("Start date cell not found");
    }

    fireEvent.focus(endDateInput);
    fireEvent.click(endDateInput);
    const endDateCell = screen
      .getAllByRole("cell")
      .find((cell) => cell.textContent === "20");
    if (endDateCell) {
      fireEvent.click(endDateCell);
    } else {
      throw new Error("End date cell not found");
    }

    const errorMessage = screen.queryByText("Please select a period");
    expect(errorMessage).not.toBeInTheDocument();
  });
});
