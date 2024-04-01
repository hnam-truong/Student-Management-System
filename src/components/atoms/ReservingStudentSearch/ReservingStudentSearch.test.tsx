import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ReservingStudentSearch from "./ReservingStudentSearch";

describe("ReservingStudentSearch component", () => {
  test("renders ReservingStudentSearch component correctly", () => {
    render(<ReservingStudentSearch fetchReservedStudentByID={() => {}} />);
    const studentIdInputs = screen.getAllByPlaceholderText("Input Student ID");
    expect(studentIdInputs.length).toBeGreaterThan(0);
  });

  test("readonly inputs are rendered for non-editable student ID", () => {
    render(
      <ReservingStudentSearch fetchReservedStudentByID={() => {}} id="someId" />
    );
    const inputs = screen.getAllByRole("textbox");
    const readOnlyInputs = inputs.filter(
      (input) => input.getAttribute("readonly") !== null
    );
    expect(readOnlyInputs.length).toBeGreaterThan(0);
  });

  test("no error message is displayed when a student ID is not entered for a readonly input", async () => {
    render(
      <ReservingStudentSearch fetchReservedStudentByID={() => {}} id="someId" />
    );
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    const readOnlyInput = inputs.find((input) => input.readOnly);
    if (readOnlyInput) {
      fireEvent.change(readOnlyInput, { target: { value: "" } });
      fireEvent.keyPress(readOnlyInput, {
        key: "Enter",
        code: 13,
        charCode: 13,
      });
      await waitFor(() => {
        const errorMessage = screen.queryByText("Please select student id.");
        expect(errorMessage).not.toBeInTheDocument();
      });
    } else {
      throw new Error("Readonly input not found");
    }
  });
});
