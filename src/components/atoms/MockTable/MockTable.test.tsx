import { render, screen } from "@testing-library/react";
import MockTable from "./MockTable";
import { IScore } from "../../../interfaces/score.interface";

describe("MockTable Component", () => {
  const mockScore: IScore = {
    ID: "123",
    FullName: "John Doe",
    Account: "johnDoe",
    ASM: 8.5,
    HTML: 9.2,
    CSS: 8.8,
    Quiz3: 7.5,
    Quiz4: 8.0,
    Quiz5: 8.5,
    Quiz6: 9.0,
    AvgQuiz: 8.3,
    Practice1: 9.5,
    Practice2: 8.8,
    Practice3: 9.2,
    AvgASM: 9.1,
    QuizFinal: 8.8,
    Audit: 9.0,
    PracticeFinal: 9.4,
    FinalModule: 9.0,
    GPAModule: 3.8,
    LevelModule: 2,
    Mock: 8.5,
    MockFinalModule: 9.2,
    MockGPAModule: 3.8,
    MockLevelModule: 3,
    Status: true,
    MockStatus: false,
  };

  test("should render correctly", () => {
    render(<MockTable studentScore={mockScore} />);

    // Check if table headers are rendered correctly
    const mockTableHeaders = ["Mock", "Final", "GPA", "Level"];

    mockTableHeaders.forEach((header) => {
      const columnHeaders = screen.getAllByText(header);
      columnHeaders.forEach((columnHeader) => {
        expect(columnHeader).toBeInTheDocument();
      });
    });

    // Check if student score data is rendered correctly
    const {
      ID,
      FullName,
      Account,
      ASM,
      HTML,
      CSS,
      Quiz3,
      Quiz4,
      Quiz5,
      Quiz6,
      AvgQuiz,
      Practice1,
      Practice2,
      Practice3,
      AvgASM,
      QuizFinal,
      Audit,
      PracticeFinal,
      FinalModule,
      GPAModule,
      LevelModule,
      MockStatus,
      Status,
      ...specificMockScore
    } = mockScore; // get Mock Scores
    Object.values(specificMockScore).forEach((value) => {
      const dataCell = screen.getByText(value.toString());
      expect(dataCell).toBeInTheDocument();
    });
  });
});
