// this test ensures that the SearchInput component renders correctly,
// handles user input, updates search options, and allows users to select a search result.
// It's a functional test that covers various aspects of the component's behavior.
// Test search Input
// Import necessary modules
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import "@testing-library/user-event"; // Make sure to import user-event
import SearchInput from "./SearchInput";

// Describe the test suite
describe("SearchInput Component", () => {
  // Test case
  test("should render correctly and handle search", async () => {
    // Render the SearchInput component
    render(<SearchInput />);

    // Find the AutoComplete wrapper using data-testid
    const autoComplete = screen.getByTestId("search-input-autocomplete");

    // Ensure the input element is not null using within
    const inputElement = within(autoComplete).getByPlaceholderText("Search");

    // Simulate user typing in the search input
    fireEvent.change(inputElement, { target: { value: "example" } });

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

    // Perform additional assertions if needed
    // For example, check if the correct value is logged to the console in the onSelect handler
    // expect(console.log).toHaveBeenCalledWith("onSelect", "example");
  });
});
