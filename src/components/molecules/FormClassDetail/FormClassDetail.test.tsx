import { render, screen } from "@testing-library/react";
import ClassDetailInfo from "../../atoms/ClassDetailInfo/ClassDetailInfo";
import { IClass } from "../../../interfaces/class.interface";

describe("FormClassDetail Component", () => {
  const classDetail: IClass = {
    ClassName: "ClassName 2",
    StartDate: "2036-04-13",
    EndDate: "2081-12-18",
    CreatedDate: "2024-02-28",
    CreatedBy: "Cristina Cronin IV",
    UpdatedDate: "2013-03-18",
    UpdatedBy: "Mrs. Maureen Gutkowski",
    Duration: 9,
    Location: "Apt. 638",
    Status: "Opening",
    ProgramID: "fb2c7d03-f3c6-4dbe-8931-4755b5025621",
    ClassID: "2",
  };

  test("renders ClassDetailInfo with correct props", () => {
    render(<ClassDetailInfo classDetail={classDetail} />);
    expect(screen.getByText("Duration")).toBeInTheDocument();
    expect(screen.getByText("Location")).toBeInTheDocument();
    expect(screen.getByText("Created on")).toBeInTheDocument();
    expect(screen.getByText("Updated on")).toBeInTheDocument();
  });
  test("renders correctly with provided classDetail", () => {
    render(<ClassDetailInfo classDetail={classDetail} />);

    expect(screen.getByText("Duration")).toBeInTheDocument();
    expect(screen.getByText("Location")).toBeInTheDocument();
    expect(screen.getByText("Created on")).toBeInTheDocument();
    expect(screen.getByText("Updated on")).toBeInTheDocument();
  });

  test("renders without crashing", () => {
    render(<ClassDetailInfo classDetail={classDetail} />);
  });
});
