import { render, screen } from "@testing-library/react";
import FeeTable from "./FeeTable";

const mockStudentScore = {
  ID: "1",
  FullName: "John Doe",
  Account: "john.doe",
  ASM: 90,
  HTML: 85,
  CSS: 88,
  Quiz3: 75,
  Quiz4: 80,
  Quiz5: 92,
  Quiz6: 78,
  AvgQuiz: 82,
  Practice1: 95,
  Practice2: 88,
  Practice3: 90,
  AvgASM: 91,
  QuizFinal: 85,
  Audit: 90,
  PracticeFinal: 92,
  FinalModule: 88,
  GPAModule: 3.5,
  LevelModule: 2,
  Mock: 75,
  MockFinalModule: 80,
  MockGPAModule: 3.0,
  MockLevelModule: 1,
  Status: true,
  MockStatus: false,
};

describe("FeeTable Component", () => {
  it("renders FeeTable correctly", () => {
    render(<FeeTable studentScore={mockStudentScore} />);

    // Check if each table title is rendered
    expect(
      screen.getByText("ASM", { selector: ".ant-card-head" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Quiz", { selector: ".ant-card-head" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Final", { selector: ".ant-card-head" })
    ).toBeInTheDocument();

    // Check if each specific data item is rendered
    expect(screen.getByText("Practice 1")).toBeInTheDocument();
    expect(screen.getByText("Quiz (Average)")).toBeInTheDocument();
    expect(screen.getByText("GPA")).toBeInTheDocument();
  });
});
