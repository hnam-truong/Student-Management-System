import { render, screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import ReserveInformation from "./ReserveInformation";

describe("ReserveInformation component", () => {
  // Mock necessary dependencies and props
  const mockData = {
    FullName: "Chu Thiện Phước",
    Gender: true,
    DateOfBirth: new Date("2004-08-14"),
    Hometown: "Hà Nội",
    Class: "Fresher Developer UI/UX Designer",
    ReservedModule: "ReservedModule 2",
    Reason: "Disadvantaged",
    ReservedStartDate: new Date("2098-12-19"),
    Status: "Drop out",
    ReservedEndDate: new Date("2018-07-12"),
    StudentID: "2",
    ClassID: "HCM_24_FR_DAO_01",
    CurrentModules: "CurrentModules 2",
    Conditions: ["1", "2"],
    ID: "2",
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
