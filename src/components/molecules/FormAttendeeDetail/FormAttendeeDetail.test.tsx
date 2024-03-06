import { render, screen } from "@testing-library/react";
import FormAttendeeDetail from "./FormAttendeeDetail";
import { IStudent } from "../../../interfaces/student.interface";
import { IClass } from "../../../interfaces/class.interface";

describe("FormAttendeeDetail Component", () => {
  const studentDetailMock: IStudent = {
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
    StudentClasses: ["Class 12", "Class 12", "Class 12"],
    AttendingStatus: "In class",
  };

  const classDetailMock: IClass[] = [
    {
      ClassName: "ClassName 2",
      StartDate: "2036-04-13",
      EndDate: "2081-12-18",
      CreatedDate: "2024-02-28",
      CreatedBy: "Cristina Cronin IV",
      UpdatedDate: "2013-03-18",
      UpdatedBy: "Mrs. Maureen Gutkowski",
      Duration: 9,
      Location: "Apt. 638",
      Status: "Opening",
      ProgramID: "fb2c7d03-f3c6-4dbe-8931-4755b5025621",
      ClassID: "2",
    },
  ];

  it("renders without crashing", () => {
    render(
      <FormAttendeeDetail
        studentDetail={studentDetailMock}
        classDetail={classDetailMock}
      />
    );
  });

  it("renders general and academic tabs", () => {
    render(
      <FormAttendeeDetail
        studentDetail={studentDetailMock}
        classDetail={classDetailMock}
      />
    );

    expect(screen.getByText("General Information")).toBeInTheDocument();
    expect(screen.getByText("Academic Info")).toBeInTheDocument();
  });

  it("renders class information", () => {
    const studentDetailWithClass = {
      ...studentDetailMock,
      StudentClasses: ["Class 12"],
    };

    const classDetailMockWithAssociatedClass = classDetailMock;

    render(
      <FormAttendeeDetail
        studentDetail={studentDetailWithClass}
        classDetail={classDetailMockWithAssociatedClass}
      />
    );

    expect(screen.getByText("Class Information")).toBeInTheDocument();
  });
});
