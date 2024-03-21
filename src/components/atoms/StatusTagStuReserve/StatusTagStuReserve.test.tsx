import { render, screen } from "@testing-library/react";
import StatusTagStuReserve from "./StatusTagStuReserve";

describe("StatusTagStuReserve Component", () => {
  it("renders Reserve status correctly", () => {
    render(<StatusTagStuReserve status="Reserve" />);

    // Check if the component renders with the correct background color, content, and default width
    const statusTag = screen.getByText("Reserve");
    expect(statusTag).toHaveStyle({
      backgroundColor: "#faad14",
      color: "#eeeeee",
    });
  });

  it("renders Finish status correctly", () => {
    render(<StatusTagStuReserve status="Finish" />);

    // Check if the component renders with the correct background color, content, and default width
    const statusTag = screen.getByText("Finish");
    expect(statusTag).toHaveStyle({
      backgroundColor: "#ff8c00",
      color: "#eeeeee",
    });
  });

  it("renders In class status correctly", () => {
    render(<StatusTagStuReserve status="In class" />);

    // Check if the component renders with the correct background color, content, and default width
    const statusTag = screen.getByText("In class");
    expect(statusTag).toHaveStyle({
      backgroundColor: "#52c41a",
      color: "#eeeeee",
    });
  });

  it("renders Drop out status correctly", () => {
    render(<StatusTagStuReserve status="Drop out" />);

    // Check if the component renders with the correct background color, content, and default width
    const statusTag = screen.getByText("Drop out");
    expect(statusTag).toHaveStyle({
      backgroundColor: "#f2212c",
      color: "#eeeeee",
    });
  });
});
