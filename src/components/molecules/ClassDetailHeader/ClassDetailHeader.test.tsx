import { render, screen } from "@testing-library/react";
import ClassDetailHeader from "./ClassDetailHeader";

const mockClassDetail = {
  ClassID: "123456",
  ClassName: "Sample Class",
  StartDate: "2022-01-01",
  EndDate: "2022-12-31",
  CreatedDate: "2022-01-01",
  CreatedBy: "John Doe",
  UpdatedDate: "2022-02-01",
  UpdatedBy: "Jane Doe",
  Duration: 10,
  Location: "Sample Location",
  Status: "Active",
  ProgramID: "7890",
};

describe("ClassDetailHeader Component", () => {
  test("should render correctly with class details", () => {
    render(<ClassDetailHeader classDetail={mockClassDetail} />);

    // Check if the class name is rendered
    const classNameElement = screen.getByText("Sample Class");
    expect(classNameElement).toBeInTheDocument();

    // Check if the class status is rendered
    const classStatusElement = screen.getByText("Active");
    expect(classStatusElement).toBeInTheDocument();

    // Check if the class ID is rendered
    const classIdElement = screen.getByText("123456");
    expect(classIdElement).toBeInTheDocument();

    // Check if the start and end dates are rendered
    const startDateElement = screen.getByText("2022-01-01");
    const endDateElement = screen.getByText("2022-12-31");
    expect(startDateElement).toBeInTheDocument();
    expect(endDateElement).toBeInTheDocument();

    // Check if the icons are present with data-testid
    const icons = screen.getAllByTestId("class-icon");
    expect(icons).toHaveLength(5);
  });
});
