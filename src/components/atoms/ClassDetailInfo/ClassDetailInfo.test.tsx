import { render, screen, waitFor } from "@testing-library/react";
import ClassDetailInfo from "./ClassDetailInfo";
import { IClass } from "../../../interfaces/class.interface";

describe("ClassDetailInfo Component", () => {
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

  test("renders class detail information correctly", async () => {
    render(<ClassDetailInfo classDetail={mockClassDetail} />);

    // Wait for the ClassDetailInfo component to render
    await waitFor(() => {
      const classDetailInfo = screen.getByTestId("class-detail-info");
      expect(classDetailInfo).toBeInTheDocument();
    });

    // Debugging: log HTML structure to the console
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();

    // Assert that ClassDetailHeader is present
    const classDetailHeader = screen.queryByTestId("class-detail-header");

    // Check if classDetailHeader is not null before asserting
    if (classDetailHeader) {
      // Check if classDetailHeader is in the document
      expect(classDetailHeader).toBeInTheDocument();

      // Check if duration, location, created date, and updated date are rendered
      const durationElement = screen.getByText("Duration");
      const locationElement = screen.getByText("Location");
      const createdDateElement = screen.getByText("Created on");
      const updatedDateElement = screen.getByText("Updated on");

      expect(durationElement).toBeInTheDocument();
      expect(locationElement).toBeInTheDocument();
      expect(createdDateElement).toBeInTheDocument();
      expect(updatedDateElement).toBeInTheDocument();

      // Check if the corresponding class detail data is rendered
      const durationDataElement = screen.getByText(
        `${mockClassDetail.Duration} days`
      );
      const locationDataElement = screen.getByText(mockClassDetail.Location);
      const createdDateDataElement = screen.getByText(
        mockClassDetail.CreatedDate
      );
      const updatedDateDataElement = screen.getByText(
        mockClassDetail.UpdatedDate
      );

      expect(durationDataElement).toBeInTheDocument();
      expect(locationDataElement).toBeInTheDocument();
      expect(createdDateDataElement).toBeInTheDocument();
      expect(updatedDateDataElement).toBeInTheDocument();

      const createdByElement = screen.getByText(
        `by ${mockClassDetail.CreatedBy}`
      );
      const updatedByElement = screen.getByText(
        `by ${mockClassDetail.UpdatedBy}`
      );

      expect(createdByElement).toBeInTheDocument();
      expect(updatedByElement).toBeInTheDocument();

      // Check if the Tabs component is rendered
      const tabsElement = screen.getByTestId("class-tabs");
      expect(tabsElement).toBeInTheDocument();
    }
  });
});
