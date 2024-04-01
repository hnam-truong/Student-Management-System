import { render, screen } from "@testing-library/react";
import ClassDetailInfo from "../../atoms/ClassDetailInfo/ClassDetailInfo";
import { IClass } from "../../../interfaces/class.interface";

describe("FormClassDetail Component", () => {
  const classDetail: IClass = {
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

  test("renders ClassDetailInfo with correct props", () => {
    render(<ClassDetailInfo classDetail={classDetail} />);
    expect(screen.getByText("Duration")).toBeInTheDocument();
    expect(screen.getAllByText("Location")).toHaveLength(2);
    expect(screen.getByText("Created on")).toBeInTheDocument();
    expect(screen.getByText("Updated on")).toBeInTheDocument();
  });
  test("renders correctly with provided classDetail", () => {
    render(<ClassDetailInfo classDetail={classDetail} />);

    expect(screen.getByText("Duration")).toBeInTheDocument();
    expect(screen.getAllByText("Location")).toHaveLength(2);
    expect(screen.getByText("Created on")).toBeInTheDocument();
    expect(screen.getByText("Updated on")).toBeInTheDocument();
  });

  test("renders without crashing", () => {
    render(<ClassDetailInfo classDetail={classDetail} />);
  });
});
