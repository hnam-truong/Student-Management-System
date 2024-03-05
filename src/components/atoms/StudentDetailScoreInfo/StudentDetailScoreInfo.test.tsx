import { render, screen } from "@testing-library/react";
import StudentDetailScoreInfo from "./StudentDetailScoreInfo";

describe("FormStudentDetail Component", () => {
  const studentDetail = {
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
  };
  const studentScore = {
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
  test("renders StudentDetailScoreInfo with null student score", () => {
    render(
      <StudentDetailScoreInfo
        studentDetail={studentDetail}
        studentScore={studentScore}
      />
    );
  });
  test("renders fee tables with student score", () => {
    render(
      <StudentDetailScoreInfo
        studentDetail={studentDetail}
        studentScore={studentScore}
      />
    );
    expect(screen.getByText("Quiz")).toBeInTheDocument();
  });
  test("renders status tags", () => {
    render(
      <StudentDetailScoreInfo
        studentDetail={studentDetail}
        studentScore={studentScore}
      />
    );
    expect(screen.getByText("FEE")).toBeInTheDocument();
    expect(screen.getByText("MOCK")).toBeInTheDocument();
  });
});
