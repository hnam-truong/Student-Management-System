import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import FormASMTable from "./FormASMTable";

describe("FormASMTable component", () => {
  const mockAsmScore = {
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

  test("renders FormASMTable with provided ASM score", () => {
    const onUpdateAverage = vi.fn();

    render(
      <FormASMTable asmScore={mockAsmScore} onUpdateAverage={onUpdateAverage} />
    );
    expect(screen.getByText("Practice 1")).toBeInTheDocument();
    expect(screen.getByText("Practice 2")).toBeInTheDocument();
    expect(screen.getByText("Practice 3")).toBeInTheDocument();
    expect(screen.getByText("Avg")).toBeInTheDocument();
  });

  test("calculates average ASM score and calls onUpdateAverage function", () => {
    const onUpdateAverage = vi.fn();
    render(
      <FormASMTable asmScore={mockAsmScore} onUpdateAverage={onUpdateAverage} />
    );
    expect(onUpdateAverage).toHaveBeenCalledWith(5.8);
  });

  test("should not render table if asmScore is null", () => {
    const { container } = render(
      <FormASMTable asmScore={null} onUpdateAverage={() => {}} />
    );
    expect(container).toBeEmptyDOMElement();
  });
});
