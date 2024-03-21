import { render, screen } from "@testing-library/react";
import ClassDetailInfoModal from "./ClassDetailInfoModal";
import { IClass } from "../../../interfaces/class.interface";

describe("ClassDetailInfoModal Component", () => {
  const mockClassDetail: IClass = {
    ClassID: "1",
    ClassName: "Class A",
    StartDate: "2022-03-08",
    EndDate: "2022-03-18",
    CreatedDate: "2022-03-08",
    CreatedBy: "John Doe",
    UpdatedDate: "2022-03-08",
    UpdatedBy: "Jane Smith",
    Duration: 10,
    Location: "Room 101",
    Status: "Active",
    ProgramID: "1",
  };

  test("renders class detail information correctly in modal", () => {
    render(<ClassDetailInfoModal classDetail={mockClassDetail} />);

    // Check if class name, class ID, start date, end date, and class status are rendered
    const classNameElement = screen.getByText(mockClassDetail.ClassName);
    const classIDElement = screen.getByText(mockClassDetail.ClassID);
    const startDateElement = screen.getByText(mockClassDetail.StartDate);
    const endDateElement = screen.getByText(mockClassDetail.EndDate);

    expect(classNameElement).toBeInTheDocument();
    expect(classIDElement).toBeInTheDocument();
    expect(startDateElement).toBeInTheDocument();
    expect(endDateElement).toBeInTheDocument();

    // Ensure that the ClassStatus component is rendered
    // Note: In a non-Jest environment, you might need to adjust this part based on your testing framework or remove it if unnecessary
    // For example, if you're using a different testing library, you might have different ways to check if an element/component is rendered
  });
});
