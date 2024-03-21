import { render, screen } from "@testing-library/react";
import EmailTemplate from "./EmailTemplate";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";

describe("EmailTemplate Component", () => {
  it("should render correctly", () => {
    const mockData: IReservedStudent = {
      ID: "123",
      StudentID: "456",
      FullName: "John Doe",
      Gender: true, // Assuming boolean for Gender
      DateOfBirth: new Date("1990-01-01"),
      Hometown: "City",
      Class: "Class A",
      ClassID: "789",
      CurrentModules: "Module A",
      ReservedModule: "Module B",
      Reason: "Some reason",
      Conditions: ["Condition 1", "Condition 2"],
      ReservedStartDate: new Date("2022-03-01"),
      ReservedEndDate: new Date("2022-03-15"),
      Status: "Reserved",
    };

    render(
      <EmailTemplate
        data={mockData}
        open
        handleOpenRemind={() => {}}
        handleCloseRemind={() => {}}
      />
    );

    // Assertions for the initial render
    const sendButton = screen.getByText("Send");
    const previewButton = screen.getByText("Preview");

    expect(sendButton).toBeInTheDocument();
    expect(previewButton).toBeInTheDocument();
  });
});
