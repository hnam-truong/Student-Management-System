import { render, screen, fireEvent } from "@testing-library/react";
import ModalFindClass from "./ModalFindClass";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";

describe("ModalFindClass Component", () => {
  it("renders ModalFindClass component", () => {
    const mockData: IReservedStudent = {
      ID: "1",
      StudentID: "S1",
      FullName: "John Doe",
      Gender: true,
      DateOfBirth: new Date(),
      Hometown: "Cityville",
      Class: "Class A",
      ClassID: "C1",
      CurrentModules: "Module A",
      ReservedModule: "Module B",
      Reason: "Some reason",
      Conditions: ["Condition 1", "Condition 2"],
      ReservedStartDate: new Date(),
      ReservedEndDate: new Date(),
      Status: "Reserved",
    };

    const mockProps = {
      data: mockData,
      open: true,
      handleDataChange: () => {},
      updateStatusInClass: () => {},
      close: () => {},
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<ModalFindClass {...mockProps} />);

    // Assertions for the initial render
    const modalTitle = screen.getByText("Reserving Details");

    // Use getByRole to find the button by its role
    const cancelButton = screen.getByRole("button");
    const okButton = screen.getByRole("button");

    expect(modalTitle).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(okButton).toBeInTheDocument();

    fireEvent.click(cancelButton);

    fireEvent.click(okButton);

    fireEvent.click(modalTitle);
  });
});
