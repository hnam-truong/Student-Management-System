import { fireEvent, render, screen } from "@testing-library/react"; // Assuming you have a custom test-utils for rendering components
import OtherInfo from "./OtherInfo";

describe("OtherInfo Component", () => {
  it("renders the component with form elements", async () => {
    render(<OtherInfo />);

    // Check if form elements are rendered
    const universityInput = screen.getByPlaceholderText("Enter University");
    const majorInput = screen.getByPlaceholderText("Enter Major");
    const recerInput = screen.getByPlaceholderText("Enter RECer");
    const gpaInput = screen.getByPlaceholderText("Enter GPA");
    const graduationTimeInput = screen.getByPlaceholderText(
      "Enter Graduation Time"
    );

    expect(universityInput).toBeInTheDocument();
    expect(majorInput).toBeInTheDocument();
    expect(recerInput).toBeInTheDocument();
    expect(gpaInput).toBeInTheDocument();
    expect(graduationTimeInput).toBeInTheDocument();
  });

  test("validates form fields", async () => {
    render(<OtherInfo />);

    fireEvent.change(screen.getByLabelText("GPA"), { target: { value: "11" } });
    expect(
      screen.queryByText("Please enter the GPA between 0 and 10")
    ).not.toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("GPA"), { target: { value: "5" } });
    expect(
      screen.queryByText("Please enter the GPA between 0 and 10")
    ).not.toBeInTheDocument();
  });

  it("submits the form with valid input", async () => {
    render(<OtherInfo />);

    // Fill in valid form data
    const universityInput = screen.getByPlaceholderText("Enter University");
    const majorInput = screen.getByPlaceholderText("Enter Major");
    const recerInput = screen.getByPlaceholderText("Enter RECer");
    const gpaInput = screen.getByPlaceholderText("Enter GPA");
    // const graduationTimeInput = screen.getByPlaceholderText(
    //   "Enter Graduation Time"
    // );

    fireEvent.change(universityInput, {
      target: { value: "Sample University" },
    });
    fireEvent.change(majorInput, { target: { value: "Computer Science" } });
    fireEvent.change(recerInput, { target: { value: "REC123" } });
    fireEvent.change(gpaInput, { target: { value: "8.5" } });

    // You may need to mock the DatePicker component or use its specific query method if it's not a simple input field

    // Submit the form
    // Here you need to simulate the form submission, either by clicking a submit button or triggering the form's onSubmit event

    // Add assertions or checks based on your actual form submission logic
  });
});
