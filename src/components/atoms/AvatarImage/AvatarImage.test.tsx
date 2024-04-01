import { render, screen } from "@testing-library/react";
import AvatarImage from "./AvatarImage";
import { IStudent } from "../../../interfaces/student.interface";

describe("AvatarImage Component", () => {
  const mockStudent: IStudent = {
    ID: "1",
    Name: "John Doe",
    Gender: true,
    DateOfBirth: "10/10/1991",
    Status: "Finish",
    Phone: "123-456-7890",
    Email: "khaipvse171817@fpt.edu.vn",
    PermanentResidence: "Hồ Chí Minh",
    Location: "Hồ Chí Minh",
    University: "FPT",
    Major: "SE",
    RECer: "DatNT",
    GPA: 6,
    GraduationTime: "2023",
    ClassCode: "null",
    ClassStartDate: "null",
    ImageUrl: "public/assets/images/avatar.png",
    Class: "null",
    StudentClasses: [],
    AttendingStatus: "null",
  };

  test("renders image when isImage is true and ImageUrl is provided", () => {
    render(<AvatarImage detail={mockStudent} isImage />);
    const avatarImage = screen.getByTestId("avatar-image");

    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute("src", mockStudent.ImageUrl);
    expect(avatarImage).toHaveAttribute("alt", mockStudent.Name);
  });
});
