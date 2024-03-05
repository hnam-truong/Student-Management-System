import { render, screen } from "@testing-library/react";
import StudentAvatar from "./StudentAvatar";
import { IStudent } from "../../../interfaces/student.interface";

describe("StudentAvatar Component", () => {
  const studentDetail: IStudent = {
    Name: "Jerald Murazik",
    Gender: false,
    DateOfBirth: "1963-03-09",
    Status: "Status 12",
    Phone: "(928) 912-6561 x79342",
    Email: "Quincy_Gulgowski@yahoo.com",
    PermanentResidence: "Suite 425",
    Location: "070",
    University: "University 12",
    Major: "Global Identity Specialist",
    RECer: "Stanley O'Conner IV",
    GPA: 39,
    GraduationTime: "2064-10-02",
    ClassCode: "ClassCode 12",
    ClassStartDate: "2050-02-07",
    ID: "12",
    ImageUrl:
      "https://th.bing.com/th/id/OIP.iAhcp6m_91O-ClK79h8EQQHaFj?rs=1&pid=ImgDetMain",
    Class: "Class 12",
    StudentClasses: [],
  };

  test("should render user avatar with image", () => {
    render(<StudentAvatar detail={studentDetail} isImage />);

    // Assert that user avatar is rendered
    const userAvatarElement = screen.getByTestId("user-avatar");
    expect(userAvatarElement).toBeInTheDocument();

    // Assert that student's name and ID are displayed
    expect(screen.getByText("Jerald Murazik")).toBeInTheDocument();
    expect(screen.getByText("ID 12")).toBeInTheDocument();

    // Assert that avatar image is rendered
    const avatarImage = screen.getByTestId("avatar-image") as HTMLImageElement;
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage.src).toBe(studentDetail.ImageUrl);
  });

  test("should render student details", () => {
    render(<StudentAvatar detail={studentDetail} isImage />);

    // Assert that student's name and ID are displayed
    const nameElement = screen.getByText(studentDetail.Name);
    const idElement = screen.getByText(`ID ${studentDetail.ID}`);
    expect(nameElement).toBeInTheDocument();
    expect(idElement).toBeInTheDocument();
  });

  test("should render user avatar without image", () => {
    render(<StudentAvatar detail={studentDetail} isImage={false} />);

    // Assert that user avatar is rendered
    const userAvatarElement = screen.getByTestId("user-avatar");
    expect(userAvatarElement).toBeInTheDocument();

    // Assert that student's name and ID are displayed
    expect(screen.getByText("Jerald Murazik")).toBeInTheDocument();
    expect(screen.getByText("ID 12")).toBeInTheDocument();

    // Assert that avatar image is not rendered
    const avatarImage = screen.queryByTestId("avatar-image");
    expect(avatarImage).not.toBeInTheDocument();
  });

  test("should render user avatar initial", () => {
    render(<StudentAvatar detail={studentDetail} isImage={false} />);

    // Assert that avatar initials are rendered
    const avatarInitial = screen.getByText("JE");
    expect(avatarInitial).toBeInTheDocument();
  });
});
