import { render, screen, fireEvent } from "@testing-library/react";
import FormStudentDetail from "./FormStudentDetail";
import { IStudent } from "../../../interfaces/student.interface";
import { IScore } from "../../../interfaces/score.interface";

describe("FormStudentDetail Component", () => {
  const studentDetail: IStudent = {
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
  };

  const studentScore: IScore = {
    FullName: "Angie Carter",
    Account: "Josephine Bartoletti II",
    ASM: 2,
    QuizFinal: 2,
    Audit: 99,
    PracticeFinal: 68,
    FinalModule: 67,
    GPAModule: 49,
    LevelModule: 58,
    Status: false,
    HTML: 77,
    CSS: 100,
    Quiz3: 25,
    Quiz4: 9,
    Quiz5: 57,
    Quiz6: 4,
    AvgQuiz: 34,
    Practice1: 65,
    Practice2: 73,
    Practice3: 27,
    AvgASM: 0,
    Mock: 16,
    MockFinalModule: 84,
    MockGPAModule: 61,
    MockLevelModule: 83,
    MockStatus: true,
    ID: "1",
  };

  test("renders FormStudentDetail with student detail and score", () => {
    render(
      <FormStudentDetail
        studentDetail={studentDetail}
        studentScore={studentScore}
      />
    );
  });
  test("renders tabs with correct labels and content", () => {
    render(
      <FormStudentDetail
        studentDetail={studentDetail}
        studentScore={studentScore}
      />
    );

    expect(screen.getByText("General Information")).toBeInTheDocument();
    expect(screen.getByText("Academic Info")).toBeInTheDocument();
  });
  test("switches tabs and displays corresponding content", () => {
    render(
      <FormStudentDetail
        studentDetail={studentDetail}
        studentScore={studentScore}
      />
    );

    fireEvent.click(screen.getByText("Academic Info"));
    expect(screen.getByTestId("academic-info-content")).toBeInTheDocument();

    fireEvent.click(screen.getByText("General Information"));
    expect(screen.getByTestId("general-info-content")).toBeInTheDocument();
  });
});
