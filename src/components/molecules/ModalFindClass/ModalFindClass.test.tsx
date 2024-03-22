import { render, screen, fireEvent } from "@testing-library/react";
import ModalFindClass from "./ModalFindClass";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";

describe("ModalFindClass Component", () => {
  it("renders ModalFindClass component", () => {
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
