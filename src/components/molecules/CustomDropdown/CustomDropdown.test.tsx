import { render, screen, fireEvent } from "@testing-library/react";
import CustomDropdown from "./CustomDropdown";

describe("CustomDropdown Component", () => {
  // Mock function to simulate handleDataChange
  const mockHandleDataChange = () => {
    // Your mock implementation goes here
    console.log("Mock handleDataChange called");
  };

  test("should render correctly", () => {
    render(
      <CustomDropdown
        handleDataChange={mockHandleDataChange}
        id="123"
        viewLink="/sample"
        isDelete
      />
    );

    // Check if the dropdown component is rendered
    const dropdownComponent = screen.getByRole("button");
    expect(dropdownComponent).toBeInTheDocument();

    // Simulate a click on the dropdown component
    fireEvent.click(dropdownComponent);
  });
});
