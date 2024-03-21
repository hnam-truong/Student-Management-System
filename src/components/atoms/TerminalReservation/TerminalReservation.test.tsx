import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ModalReservation from "./TerminalReservation";
import { useReservedStudentSingleStore } from "../../../store/ReservedStudentStore";

// Manually create a mock implementation for useReservedStudentSingleStore
const mockUseReservedStudentSingleStore = {
  putReservedStudent: async () => {}, // Assuming putReservedStudent returns a promise
};

describe("ModalReservation Component", () => {
  it("renders ModalReservation correctly", async () => {
    const mockData = {
      ID: "1",
      StudentID: "1",
      FullName: "Thi",
      Gender: true,
      DateOfBirth: new Date("2002-10-20"),
      Hometown: "HCM",
      Class: "React-04",
      ClassID: "1",
      CurrentModules: "Test",
      ReservedModule: "Test",
      Reason: "Test",
      Conditions: ["Test"], // Update to an array of strings
      ReservedStartDate: new Date("2003-10-20"),
      ReservedEndDate: new Date("1992-10-20"),
      Status: "Test",
    };

    // Mock the implementation of useReservedStudentSingleStore
    useReservedStudentSingleStore.setState(mockUseReservedStudentSingleStore);

    // Render the component
    render(
      <ModalReservation
        isShow
        setIsShow={() => {}}
        data={mockData}
        handleDataChange={() => {}}
      >
        {/* Content for your ModalReservation */}
        <div>Modal Content</div>
      </ModalReservation>
    );

    // Assertions can be added based on your component's behavior
    // For example, you can check if certain buttons are present and simulate clicks

    // Example: Check if the "Re-class" button is present
    expect(screen.getByText("Re-class")).toBeInTheDocument();

    // Example: Simulate a click on the "Re-class" button
    fireEvent.click(screen.getByText("Re-class"));

    // Example: Check if the handleDataChange function is called after the button click
    await waitFor(() => {
      // Your assertion for handleDataChange
      // For example: expect(handleDataChangeMock).toHaveBeenCalled();
    });
  });
});
