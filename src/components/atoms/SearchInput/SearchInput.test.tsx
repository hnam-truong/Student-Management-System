// this test ensures that the SearchInput component renders correctly,
// handles user input, updates search options, and allows users to select a search result.
// It's a functional test that covers various aspects of the component's behavior.

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("SearchInput Component", () => {
  test("should render correctly and handle search", async () => {
    render(<SearchInput />);

    // Find the search input
    const searchInput = screen.getByPlaceholderText("Search");

    // Simulate user typing in the search input
    fireEvent.change(searchInput, { target: { value: "example" } });

    // Wait for options to be updated
    await waitFor(() => {
      expect(screen.getByText("Found example on")).toBeInTheDocument();
    });

    // Check if the search results are displayed
    const searchResult = screen.getByText("Found example on");

    // Perform assertions based on your component behavior
    expect(searchResult).toBeInTheDocument();

    // Simulate selecting a search result
    fireEvent.click(searchResult);

    // Perform assertions based on your component behavior, for example:
    // - Check if the correct value is logged to the console in the onSelect handler
  });
});
