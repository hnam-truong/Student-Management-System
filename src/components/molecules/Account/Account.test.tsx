import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Account from "./Account";

describe("Account Component", () => {
  it("renders Account correctly", async () => {
    render(
      <Router>
        <Account />
      </Router>
    );

    // Check if the initial state is correct
    const avatar = screen.getByAltText("user-avatar");
    expect(avatar).toBeInTheDocument();

    const userName = screen.getByText("Warrior Tran");
    expect(userName).toBeInTheDocument();

    // Simulate clicking on the account dropdown
    fireEvent.click(screen.getByText("Warrior Tran"));

    // Check if the content is displayed after clicking
    const profileButton = screen.getByText("Profile");
    expect(profileButton).toBeInTheDocument();

    const logoutButton = screen.getByText("Log out");
    expect(logoutButton).toBeInTheDocument();

    // Simulate clicking on the "Profile" button
    fireEvent.click(profileButton);
  });
});
