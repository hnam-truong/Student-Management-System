import { render, screen } from "@testing-library/react";
import StudentDetailGeneralInfo from "./StudentDetailGeneralInfo";

describe("StudentDetailGeneralInfo component", () => {
  const mockStudentDetail = {
    Name: "Jerald Murazik",
    Gender: false,
    DateOfBirth: "1963-03-09",
    Status: "Status 12",
    Phone: "(928) 912-6561 x79342",
    Email: "Quincy_Gulgowski@yahoo.com",
    PermanentResidence: "Suite 425",
    Location: "070",
    University: "University 12",
    Major: "Global Identity Specialist",
    RECer: "Stanley O'Conner IV",
    GPA: 39,
    GraduationTime: "2064-10-02",
    ClassCode: "ClassCode 12",
    ClassStartDate: "2050-02-07",
    ID: "12",
    ImageUrl:
      "https://th.bing.com/th/id/OIP.iAhcp6m_91O-ClK79h8EQQHaFj?rs=1&pid=ImgDetMain",
    Class: "Class 12",
    StudentClasses: [],
    AttendingStatus: "In class",
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
    expect(screen.getByText("Status 12")).toBeInTheDocument();
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
    expect(screen.getByText("Status 12")).toBeInTheDocument();
  });
});
