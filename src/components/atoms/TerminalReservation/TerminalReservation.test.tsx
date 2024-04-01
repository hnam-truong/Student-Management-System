import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ModalReservation from "./TerminalReservation";
import { useReservedStudentSingleStore } from "../../../store/ReservedStudentStore";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";

// Manually create a mock implementation for useReservedStudentSingleStore
const mockUseReservedStudentSingleStore = {
  putReservedStudent: async () => {}, // Assuming putReservedStudent returns a promise
};

describe("ModalReservation Component", () => {
  it("renders ModalReservation correctly", async () => {
    const mockData: IReservedStudent = {
      FullName: "Hàn Quốc Hoàng",
      Gender: true,
      DateOfBirth: "01/01/2003",
      Hometown: "Hồ Chí Minh",
      Class: "Fresher Developer Operation",
      ReservedModule: "ReservedModule 1",
      Reason: "Reserve to study again",
      ReservedStartDate: "15/10/2023",
      Status: "Reserve",
      ReservedEndDate: "06/01/2050",
      StudentID: "1",
      ClassID: "HCM_24_FR_DAO_03",
      CurrentModules: "CurrentModules 1",
      Conditions: ["1", "3"],
      ID: "1",
      Email: "test@example.com",
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
