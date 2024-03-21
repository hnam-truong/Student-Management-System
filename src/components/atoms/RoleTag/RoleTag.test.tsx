import { render, screen } from "@testing-library/react"; // Assuming you have a custom test-utils for rendering components
import RoleTag from "./RoleTag";

describe("RoleTag Component", () => {
  it("renders RoleTag with default props", () => {
    render(<RoleTag type="Trainer" />);

    // Check if the RoleTag is rendered
    const roleTagElement = screen.getByText("Trainer");
    expect(roleTagElement).toBeInTheDocument();
  });

  it("renders RoleTag with custom width", () => {
    render(<RoleTag type="Admin" customWidth="200px" />);

    // Check if the RoleTag is rendered
    const roleTagElement = screen.getByText("Admin");
    expect(roleTagElement).toBeInTheDocument();

    // Check custom width style
    expect(roleTagElement).toHaveStyle({
      width: "200px",
    });
  });

  // Add more tests if needed
});
