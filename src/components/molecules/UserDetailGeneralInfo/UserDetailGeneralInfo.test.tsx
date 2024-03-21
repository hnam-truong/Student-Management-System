import { render, screen } from "@testing-library/react";
import UserDetailGeneralInfo from "./UserDetailGeneralInfo";

describe("UserDetailGeneralInfo component", () => {
  const mockUserDetail = {
    Name: "Lý An Tường",
    UserType: "Admin",
    Email: "lyantuong23@gmail.com",
    Phone: 123456789,
    DateOfBirth: "30/11/2004",
    Gender: true,
    Status: false,
    ID: "1",
    ImageUrl:
      "https://i.pinimg.com/564x/71/72/72/717272a5b39bf32128253cdba482a1a9.jpg",
  };

  test("Renders general information correctly", () => {
    render(<UserDetailGeneralInfo userDetail={mockUserDetail} />);

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("Gender")).toBeInTheDocument();
    expect(screen.getByText("Date of Birth")).toBeInTheDocument();
    expect(screen.getByText("Role")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  test("Displays correct values for each field", () => {
    render(<UserDetailGeneralInfo userDetail={mockUserDetail} />);

    expect(screen.getByText("123456789")).toBeInTheDocument();
    expect(screen.getByText("Male")).toBeInTheDocument();
    expect(screen.getByText("Admin")).toBeInTheDocument();
    expect(screen.getByText("Inactive")).toBeInTheDocument();
  });

  test("Displays 'Inactive' status if user status is false", () => {
    const inactiveUserDetail = { ...mockUserDetail, Status: false };
    render(<UserDetailGeneralInfo userDetail={inactiveUserDetail} />);

    expect(screen.getByText("Inactive")).toBeInTheDocument();
  });
});
