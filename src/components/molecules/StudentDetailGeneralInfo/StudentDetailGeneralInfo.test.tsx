import { render, screen } from "@testing-library/react";
import StudentDetailGeneralInfo from "./StudentDetailGeneralInfo";
import { IStudent } from "../../../interfaces/student.interface";

describe("StudentDetailGeneralInfo component", () => {
  const mockStudentDetail: IStudent = {
    Name: "Chu Thiện Phước",
    Gender: true,
    DateOfBirth: "01/02/2003",
    Status: "Active",
    Phone: "0934876321",
    Email: "chuthienphuoc12@gmail.com",
    PermanentResidence: "Hồ Chí Minh",
    Location: "Hồ Chí Minh",
    University: "Đại học FPT",
    Major: "Legacy Security Developer",
    RECer: "Giang Việt Phương",
    GPA: 6.2,
    GraduationTime: "01/02/2025",
    ClassCode: "HCM_25_FR_LSD_01",
    ClassStartDate: "01/02/2024",
    Class: "Fresher Developer Legacy Security Developer",
    StudentClasses: ["2", "4", "9"],
    AttendingStatus: "In class",
    ID: "1",
    ImageUrl:
      "https://i.pinimg.com/736x/7c/75/dd/7c75dd01ec75f1998b9b14af6227851c.jpg",
  };

  test("Renders general information correctly", () => {
    render(<StudentDetailGeneralInfo studentDetail={mockStudentDetail} />);

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Gender")).toBeInTheDocument();
    expect(screen.getByText("Date of Birth")).toBeInTheDocument();
    expect(screen.getByText("Quincy_Gulgowski@yahoo.com")).toBeInTheDocument();
    expect(screen.getByText("Female")).toBeInTheDocument();
    expect(screen.getByText("1963-03-09")).toBeInTheDocument();

    expect(screen.getByText("Permanent Residence")).toBeInTheDocument();
    expect(screen.getByText("Location")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Suite 425")).toBeInTheDocument();
    expect(screen.getByText("070")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  test("Renders strong tags correctly", () => {
    render(<StudentDetailGeneralInfo studentDetail={mockStudentDetail} />);

    expect(screen.getByText("Phone")).toContainHTML("strong");
    expect(screen.getByText("Email")).toContainHTML("strong");
    expect(screen.getByText("Gender")).toContainHTML("strong");
    expect(screen.getByText("Date of Birth")).toContainHTML("strong");
    expect(screen.getByText("Permanent Residence")).toContainHTML("strong");
    expect(screen.getByText("Location")).toContainHTML("strong");
    expect(screen.getByText("Status")).toContainHTML("strong");
  });

  test("Displays correct values for each field", () => {
    render(<StudentDetailGeneralInfo studentDetail={mockStudentDetail} />);

    expect(screen.getByText("(928) 912-6561 x79342")).toBeInTheDocument();
    expect(screen.getByText("Quincy_Gulgowski@yahoo.com")).toBeInTheDocument();
    expect(screen.getByText("Female")).toBeInTheDocument(); // Since Gender is false
    expect(screen.getByText("1963-03-09")).toBeInTheDocument();
    expect(screen.getByText("Suite 425")).toBeInTheDocument();
    expect(screen.getByText("070")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
  });
});
