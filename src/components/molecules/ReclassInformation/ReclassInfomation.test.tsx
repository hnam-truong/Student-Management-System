import { render, screen } from "@testing-library/react";
import ReclassInformation from "./ReclassInformation";
import { IClass } from "../../../interfaces/class.interface";

describe("ReclassInformation component", () => {
  const classInfo: IClass = {
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
  // Test case 1: Rendering with valid class information
  test("renders class information correctly", () => {
    render(<ReclassInformation classInfo={classInfo} />);

    expect(screen.getByText("Class Information")).toBeInTheDocument();
    expect(screen.getByText("Class name")).toBeInTheDocument();
    expect(
      screen.getByText("Fresher Developer Legacy Security Developer")
    ).toBeInTheDocument();
    expect(screen.getByText("Class code")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  // Test case 2: Rendering with null class information
  test("renders properly with null class information", () => {
    render(<ReclassInformation classInfo={null} />);

    expect(screen.getByText("Class Information")).toBeInTheDocument();
    expect(screen.getByText("Class name")).toBeInTheDocument();
    expect(screen.getByText("Class code")).toBeInTheDocument();
    expect(screen.getByText("Class time")).toBeInTheDocument();
    // You may add further expectations if needed
  });

  // Test case 3: Rendering with undefined class information
  test("renders properly with undefined class information", () => {
    render(<ReclassInformation classInfo={null} />);

    expect(screen.getByText("Class Information")).toBeInTheDocument();
    expect(screen.getByText("Class name")).toBeInTheDocument();
    expect(screen.getByText("Class code")).toBeInTheDocument();
    expect(screen.getByText("Class time")).toBeInTheDocument();
    // You may add further expectations if needed
  });
});
