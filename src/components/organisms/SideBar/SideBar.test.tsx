// This describe block is use to test sidebar component when
//  - user clicks on content to navigate and this element must be selected
//  - user click on content to open all children

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import SideBar from "./SideBar";

describe("Sidebar Component", () => {
  // Check when user clicks on title "scores", web will navigate to /scores from /home
  test("should selected when user click on title do not have any children title", async () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <SideBar />
      </MemoryRouter>
    );
    // Find element containing content "Scores"
    const scoresLink = await screen.findByText("Scores");
    // eslint-disable-next-line testing-library/no-node-access
    const scoresLiEL = scoresLink.closest("li");
    // Click to navigate
    fireEvent.click(scoresLink);

    // Wait for the navigation to be completed
    await waitFor(() => {
      // Check this element is selected or not
      expect(scoresLiEL).toHaveClass("ant-menu-item-selected");
    });
  });
  // when click "Students", submenu of student must be shown
  test("should open the submenu when click an item which have children", async () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <SideBar />
      </MemoryRouter>
    );
    // Find element containing content "Scores"
    const studentsLink = await screen.findByText("Students");
    // eslint-disable-next-line testing-library/no-node-access
    const studentLiEle = studentsLink.closest("li");
    // Find element child have text "en.findByText("Students");
    // Find element child before clicking
    const studentChildBefore = screen.queryByRole("menuitem", {
      name: /Student List/i,
    });
    // Check element must not be shown
    expect(studentChildBefore).not.toBeInTheDocument();
    // Click on "Students"
    fireEvent.click(studentsLink);
    // Find element have text "Student List"
    const studentChildAfter = screen.getByRole("menuitem", {
      name: /Student List/i,
    });
    // Check student list is existed in document
    expect(studentChildAfter).toBeInTheDocument();
    // Check  parent element with class open
    expect(studentLiEle).toHaveClass("ant-menu-submenu-open");
  });
});
