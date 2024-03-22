import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FormAttendeeDetail from "./FormAttendeeDetail";
import { IClass } from "../../../interfaces/class.interface";
import { IStudent } from "../../../interfaces/student.interface";

const mockStudentDetail: IStudent = {
  ID: "1",
  Name: "John Doe",
  Gender: true,
  DateOfBirth: "1990-01-01",
  Status: "Active",
  Phone: "123-456-7890",
  Email: "john.doe@example.com",
  PermanentResidence: "City, Country",
  Location: "City, Country",
  University: "University of Something",
  Major: "Computer Science",
  RECer: "REC123",
  GPA: 3.8,
  GraduationTime: "2022-05-01",
  ClassCode: "CS101",
  ClassStartDate: "2021-09-01",
  ImageUrl: "https://example.com/avatar.jpg",
  Class: "Computer Science",
  StudentClasses: ["1"],
  AttendingStatus: "Active",
};

const mockClassDetail: IClass[] = [
  {
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
  },
  // Add more class instances if needed
];

describe("FormAttendeeDetail Component", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <FormAttendeeDetail
          studentDetail={mockStudentDetail}
          classDetail={mockClassDetail}
        />
      </MemoryRouter>
    );

    // Assertions for the initial render
    const generalInfoTab = screen.getByText("General information");
    const academicInfoTab = screen.getByText("Academic infomation");
    const classInfoTitle = screen.getByText("Class information");
    const reservingTitle = screen.getByText("Reserving");
    const scoreTitle = screen.getByText("Score in all class information");

    expect(generalInfoTab).toBeInTheDocument();
    expect(academicInfoTab).toBeInTheDocument();
    expect(classInfoTitle).toBeInTheDocument();
    expect(reservingTitle).toBeInTheDocument();
    expect(scoreTitle).toBeInTheDocument();

    // Add more specific assertions based on your component content
    const studentName = screen.getByText("John Doe");
    const studentEmail = screen.getByText("john.doe@example.com");
    const classLink = screen.getByRole("link", { name: /Math 101/i });

    expect(studentName).toBeInTheDocument();
    expect(studentEmail).toBeInTheDocument();
    expect(classLink).toBeInTheDocument();
  });
});
