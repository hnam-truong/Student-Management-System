import { render, screen } from "@testing-library/react";
import FormQuizTable from "./FormQuizTable";

describe("FormQuizTable component", () => {
  const mockQuizScore = {
    FullName: "Chu Thiện Phước",
    Account: "NTD01",
    ASM: 6.2,
    QuizFinal: 8.7,
    Audit: 7.5,
    PracticeFinal: 9.1,
    FinalModule: 8.6,
    GPAModule: 7.9,
    LevelModule: 9.4,
    Status: true,
    HTML: 3,
    CSS: 9.3,
    Quiz3: 10,
    Quiz4: 8.3,
    Quiz5: 7.5,
    Quiz6: 8.4,
    AvgQuiz: 7.7,
    Practice1: 1,
    Practice2: 8.7,
    Practice3: 7.8,
    AvgASM: 5.8,
    Mock: 9.4,
    MockFinalModule: 8.9,
    MockGPAModule: 7.2,
    MockLevelModule: 8.5,
    MockStatus: true,
    ID: "1",
  };

  test("renders table with provided quiz score", () => {
    render(
      <FormQuizTable quizScore={mockQuizScore} onUpdateAverage={() => {}} />
    );

    expect(screen.getByText("HTML")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
    expect(screen.getByText("Quiz 3")).toBeInTheDocument();
    expect(screen.getByText("Quiz 4")).toBeInTheDocument();
    expect(screen.getByText("Quiz 5")).toBeInTheDocument();
    expect(screen.getByText("Quiz 6")).toBeInTheDocument();
    expect(screen.getByText("Avg")).toBeInTheDocument();
  });

  test("does not render table if quizScore is null", () => {
    render(<FormQuizTable quizScore={null} onUpdateAverage={() => {}} />);

    expect(screen.queryByRole("table")).not.toBeInTheDocument();
  });

  test("renders empty table if quizScore object is empty", () => {
    render(<FormQuizTable quizScore={null} onUpdateAverage={() => {}} />);

    expect(screen.queryByRole("table")).not.toBeInTheDocument();
    expect(screen.queryByRole("row")).not.toBeInTheDocument();
  });
});
