import { render, screen } from "@testing-library/react";
import ClassDetailHeader from "./ClassDetailHeader";

const mockClassDetail = {
  ClassName: "Fresher Developer Legacy Security Developer",
  StartDate: "01/03/2023",
  EndDate: "10/04/2023",
  CreatedDate: "15/02/2023",
  CreatedBy: "Ngư Hữu Khanh",
  UpdatedDate: "25/04/2023",
  UpdatedBy: "Chu Thiện Phước",
  Duration: 41,
  Location: "Hồ Chí Minh",
  Status: "Closed",
  ProgramID: "91ab0aab-fc7c-4ada-9c37-38c76e8c116c",
  StartTime: "09:00",
  EndTime: "12:00",
  Trainers: ["3", "5"],
  FSU: "FHM",
  SpecificLocation: [
    {
      ID: "1",
      Name: "FTown 1",
    },
    {
      ID: "2",
      Name: "FTown 2",
    },
  ],
  Reviewer: "Lý Minh Nhân",
  Approver: "Võ Trọng Bình",
  ReviewDate: "09/02/2023",
  ApproveDate: "20/02/2023",
  ClassID: "1",
};

describe("ClassDetailHeader Component", () => {
  test("should render correctly with class details", () => {
    render(<ClassDetailHeader classDetail={mockClassDetail} />);

    // Check if the class name is rendered
    const classNameElement = screen.getByText(
      "Fresher Developer Legacy Security Developer"
    );
    expect(classNameElement).toBeInTheDocument();

    // Check if the class status is rendered
    const classStatusElement = screen.getByText("Closed");
    expect(classStatusElement).toBeInTheDocument();

    // Check if the class ID is rendered
    const classIdElement = screen.getByText("1");
    expect(classIdElement).toBeInTheDocument();

    // Check if the start and end dates are rendered
    const startDateElement = screen.getByText("01/03/2023");
    const endDateElement = screen.getByText("10/04/2023");
    expect(startDateElement).toBeInTheDocument();
    expect(endDateElement).toBeInTheDocument();

    // Check if the icons are present with data-testid
    const iconsAndButton = screen.getAllByTestId("class-icons");
    expect(iconsAndButton[0].childNodes.length).toBe(6);
  });
});
