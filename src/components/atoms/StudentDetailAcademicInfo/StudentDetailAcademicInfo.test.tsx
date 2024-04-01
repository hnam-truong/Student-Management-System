import { render, screen } from "@testing-library/react";
import StudentDetailAcademicInfo from "./StudentDetailAcademicInfo";

const mockStudentDetail = {
  ID: "1",
  Name: "John Doe",
  Gender: true,
  DateOfBirth: "2000-01-01",
  Status: "Active",
  Phone: "123-456-7890",
  Email: "john.doe@example.com",
  PermanentResidence: "City, Country",
  Location: "Current City, Current Country",
  University: "Test University",
  Major: "Test Major",
  RECer: "Test RECer",
  GPA: 3.5,
  GraduationTime: "2022-12-31",
  ClassCode: "Test Class Code",
  ClassStartDate: "2022-01-01",
  ImageUrl: "https://example.com/image.jpg",
  Class: "Test Class",
  StudentClasses: ["Class A", "Class B"],
  AttendingStatus: "Attending",
};

describe("StudentDetailAcademicInfo Component", () => {
  it("renders academic info correctly", () => {
    render(<StudentDetailAcademicInfo studentDetail={mockStudentDetail} />);

    // Check if each piece of academic information is rendered correctly
    expect(screen.getByText("University")).toBeInTheDocument();
    expect(screen.getByText("Test University")).toBeInTheDocument();

    expect(screen.getByText("Major")).toBeInTheDocument();
    expect(screen.getByText("Test Major")).toBeInTheDocument();

    expect(screen.getByText("RECer")).toBeInTheDocument();
    expect(screen.getByText("Test RECer")).toBeInTheDocument();

    expect(screen.getByText("GPA")).toBeInTheDocument();
    expect(screen.getByText("3.5")).toBeInTheDocument();

    expect(screen.getByText("Class Code")).toBeInTheDocument();
    expect(screen.getByText("Test Class Code")).toBeInTheDocument();

    expect(screen.getByText("Graduation Time")).toBeInTheDocument();
    expect(screen.getByText("2022-12-31")).toBeInTheDocument();

    expect(screen.getByText("Class Start Date")).toBeInTheDocument();
    expect(screen.getByText("2022-01-01")).toBeInTheDocument();
  });
});
