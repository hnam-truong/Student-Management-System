import { render, screen } from "@testing-library/react";
import ReservingCondition from "./ReservingCondition";

describe("ReservingCondition component", () => {
  const reservingCondition = [
    { Name: "Complete tuition payment", ID: "1" },
    { Name: "Ensure the course has not progressed beyond 50%", ID: "2" },
    { Name: "Determine retention fee payment", ID: "3" },
  ];
  // Test Case 1: Rendering with reserving conditions

  test("renders with reserving conditions", () => {
    render(
      <ReservingCondition
        reservingCondition={reservingCondition}
        disable={false}
      />
    );

    expect(
      screen.getByLabelText("Complete tuition payment")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Ensure the course has not progressed beyond 50%")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Determine retention fee payment")
    ).toBeInTheDocument();
  });

  // Test Case 2: Rendering with no reserving conditions
  test("renders with no reserving conditions", () => {
    render(<ReservingCondition reservingCondition={null} disable={false} />);

    expect(
      screen.queryByLabelText("Complete tuition payment")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByLabelText("Ensure the course has not progressed beyond 50%")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByLabelText("Determine retention fee payment")
    ).not.toBeInTheDocument();
  });
  // Test Case 3: Rendering with disabled reserving conditions
  test("renders with disabled reserving conditions", () => {
    render(
      <ReservingCondition reservingCondition={reservingCondition} disable />
    );
    expect(
      screen.getByLabelText("Complete tuition payment")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Ensure the course has not progressed beyond 50%")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Determine retention fee payment")
    ).toBeInTheDocument();
  });
});
