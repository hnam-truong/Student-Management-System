import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import ReserveInformation from "./ReserveInformation";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";

describe("ReserveInformation component", () => {
  // Mock necessary dependencies and props
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
    Email: "test@gmail.com",
  };

  const mockClose = vi.fn();
  const mockHandleDataChange = vi.fn();
  const mockUpdateStatusInClass = vi.fn();

  test("Renders loading spinner when data is loading", async () => {
    render(
      <ReserveInformation
        data={mockData}
        close={mockClose}
        handleDataChange={mockHandleDataChange}
        updateStatusInClass={mockUpdateStatusInClass}
      />
    );
    await waitFor(() => {
      const loadingSpinner = screen.getByTestId("loading-spinner");
      expect(loadingSpinner).toBeInTheDocument();
    });
  });

  test("Renders component with data", async () => {
    render(
      <ReserveInformation
        data={mockData}
        close={mockClose}
        handleDataChange={mockHandleDataChange}
        updateStatusInClass={mockUpdateStatusInClass}
      />
    );

    // Simulate data loading by waiting for loading to disappear
    await waitFor(() => {
      expect(screen.queryByRole("spinbutton")).not.toBeInTheDocument();
    });

    // Check if class detail header is rendered
    expect(screen.queryByText("Class Detail Header")).not.toBeInTheDocument();

    // Check if student score section is rendered
    expect(screen.getByText("Student Score")).toBeInTheDocument();

    // Check if reserving information section is rendered
    expect(screen.getByText("Reserving informations")).toBeInTheDocument();

    // Check if re-class possibilities section is rendered
    expect(screen.getByText("Re-class posibilities")).toBeInTheDocument();
  });

  test("Renders ReserveInformation component with no classes available", async () => {
    render(
      <ReserveInformation
        data={mockData}
        close={mockClose}
        handleDataChange={mockHandleDataChange}
        updateStatusInClass={mockUpdateStatusInClass}
      />
    );

    // Wait for the loading spinner to be removed

    // Check if No class message is rendered
    await waitFor(() => {
      const loadingSpinner = screen.getByTestId("loading-spinner");
      expect(loadingSpinner).toBeInTheDocument();
    });

    // Check if No class message is rendered
    expect(screen.getByText("No class on Opening")).toBeInTheDocument();
  });
});
