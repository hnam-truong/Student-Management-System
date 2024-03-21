import { render, screen } from "@testing-library/react";
import MockTable from "./MockTable";
import { IScore } from "../../../interfaces/score.interface";

describe("MockTable Component", () => {
  const mockScore: IScore = {
    ID: "123",
    FullName: "John Doe",
    Account: "johndoe",
    ASM: 85,
    HTML: 92,
    CSS: 88,
    Quiz3: 75,
    Quiz4: 80,
    Quiz5: 85,
    Quiz6: 90,
    AvgQuiz: 83,
    Practice1: 95,
    Practice2: 88,
    Practice3: 92,
    AvgASM: 91,
    QuizFinal: 88,
    Audit: 90,
    PracticeFinal: 94,
    FinalModule: 90,
    GPAModule: 3.8,
    LevelModule: 2,
    Mock: 85,
    MockFinalModule: 92,
    MockGPAModule: 3.8,
    MockLevelModule: 3,
    Status: true,
    MockStatus: false,
  };

  test("should render correctly", () => {
    render(<MockTable studentScore={mockScore} />);

    // Check if the card title is rendered correctly
    // const cardTitle = screen.getByText("Mock");
    // expect(cardTitle).toBeInTheDocument();

    // Check if table headers are rendered correctly
    const tableHeaders = Object.keys(mockScore).filter(
      (key) => key !== "ID" && key !== "FullName" && key !== "Account"
    );
    tableHeaders.forEach((header) => {
      const columnHeader = screen.getByText(header);
      expect(columnHeader).toBeInTheDocument();
    });

    // Check if student score data is rendered correctly
    Object.entries(mockScore).forEach(([key, value]) => {
      if (key !== "ID" && key !== "FullName" && key !== "Account") {
        const dataCell = screen.getByText(value.toString());
        expect(dataCell).toBeInTheDocument();
      }
    });
  });
});
