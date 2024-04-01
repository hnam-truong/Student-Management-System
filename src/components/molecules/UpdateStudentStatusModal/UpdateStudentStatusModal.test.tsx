import { render, screen, fireEvent } from "@testing-library/react";
import UpdateStudentStatusModal from "./UpdateStudentStatusModal";
import { IStudent } from "../../../interfaces/student.interface";

describe("UpdateStudentStatusModal component", () => {
  const mockStudentSelect: IStudent[] = [
    {
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
    },
    {
      Name: "Jerald hihi",
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
      AttendingStatus: "Drop out",
    },
  ];

  test("Renders modal with correct title", () => {
    const setStatusStudent = vi.fn();
    const handleOk = vi.fn();
    const handleCancel = vi.fn();
    render(
      <UpdateStudentStatusModal
        studentSelect={mockStudentSelect}
        isModalOpen
        handleOk={handleOk}
        handleCancel={handleCancel}
        setStatusStudent={setStatusStudent}
      />
    );
    expect(screen.getByText("Update status")).toBeInTheDocument();
  });

  test("Displays correct number of students in the message", () => {
    const setStatusStudent = vi.fn();
    const handleOk = vi.fn();
    const handleCancel = vi.fn();
    render(
      <UpdateStudentStatusModal
        studentSelect={mockStudentSelect}
        isModalOpen
        handleOk={handleOk}
        handleCancel={handleCancel}
        setStatusStudent={setStatusStudent}
      />
    );
    expect(
      screen.getByText(
        `Are sure you update status ${mockStudentSelect.length} Student?`
      )
    ).toBeInTheDocument();
  });

  test("Clicking on 'Save' button triggers handleOk function", () => {
    const setStatusStudent = vi.fn();
    const handleOk = vi.fn();
    const handleCancel = vi.fn();
    render(
      <UpdateStudentStatusModal
        studentSelect={mockStudentSelect}
        isModalOpen
        handleOk={handleOk}
        handleCancel={handleCancel}
        setStatusStudent={setStatusStudent}
      />
    );

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    expect(handleOk).toHaveBeenCalledTimes(1);
  });
});
