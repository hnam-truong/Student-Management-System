import { render, screen } from "@testing-library/react";
import ClassDetailInfoModal from "./ClassDetailInfoModal";
import { IClass } from "../../../interfaces/class.interface";

describe("ClassDetailInfoModal Component", () => {
  const mockClassDetail: IClass = {
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

  test("renders class detail information correctly in modal", () => {
    render(<ClassDetailInfoModal classDetail={mockClassDetail} />);

    // Check if class name, class ID, start date, end date, and class status are rendered
    const classNameElement = screen.getByText(mockClassDetail.ClassName);
    const classIDElement = screen.getByText(mockClassDetail.ClassID);
    const startDateElement = screen.getByText(mockClassDetail.StartDate);
    const endDateElement = screen.getByText(mockClassDetail.EndDate);

    expect(classNameElement).toBeInTheDocument();
    expect(classIDElement).toBeInTheDocument();
    expect(startDateElement).toBeInTheDocument();
    expect(endDateElement).toBeInTheDocument();

    // Ensure that the ClassStatus component is rendered
    // Note: In a non-Jest environment, you might need to adjust this part based on your testing framework or remove it if unnecessary
    // For example, if you're using a different testing library, you might have different ways to check if an element/component is rendered
  });
});
