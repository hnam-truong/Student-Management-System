import { render, screen } from "@testing-library/react";
import EmailTemplate from "./EmailTemplate";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";

describe("EmailTemplate Component", () => {
  it("should render correctly", () => {
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
      Email: "",
    };

    render(
      <EmailTemplate
        data={mockData}
        open
        handleOpenRemind={() => {}}
        handleCloseRemind={() => {}}
        modalTitle="Send email"
      />
    );

    // Assertions for the initial render
    const sendButton = screen.getByText("Send");
    const previewButton = screen.getByText("Preview");

    expect(sendButton).toBeInTheDocument();
    expect(previewButton).toBeInTheDocument();
  });
});
