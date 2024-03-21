import { render, screen, waitFor } from "@testing-library/react"; // Assuming you have a custom test-utils for rendering components
import userEvent from "@testing-library/user-event";
import ReservingReason from "./ReservingReason";

const mockReservingReasons = [
  { ID: "1", Name: "Reason 1" },
  { ID: "2", Name: "Reason 2" },
];

describe("ReservingReason Component", () => {
  it("renders ReservingReason with default options", async () => {
    render(
      <ReservingReason
        reservingReason={mockReservingReasons}
        isOtherReasonHidden
        handleSelectOptionChange={() => {}}
      />
    );

    // Check if the Select is rendered with the default placeholder
    const selectElement = screen.getByPlaceholderText("Please select a reason");
    expect(selectElement).toBeInTheDocument();

    // Check if all reserving reasons are present in the dropdown
    for (const reason of mockReservingReasons) {
      expect(screen.getByText(reason.Name)).toBeInTheDocument();
    }

    // Check if the "Others" option is present in the dropdown
    expect(screen.getByText("Others")).toBeInTheDocument();

    // Check if the "Other reason" textarea is initially hidden
    const textareaElement = screen.getByLabelText("Other reason");
    expect(textareaElement).not.toBeVisible();
  });

  it('shows Other reason textarea when "Others" is selected', async () => {
    render(
      <ReservingReason
        reservingReason={mockReservingReasons}
        isOtherReasonHidden
        handleSelectOptionChange={() => {}}
      />
    );

    // Select the "Others" option
    await userEvent.selectOptions(screen.getByLabelText("Reserving reason"), [
      "Others",
    ]);

    // Wait for the "Other reason" textarea to become visible
    await waitFor(() => {
      const textareaElement = screen.getByLabelText("Other reason");
      expect(textareaElement).toBeVisible();
    });
  });

  it("hides Other reason textarea when a specific reason is selected", async () => {
    render(
      <ReservingReason
        reservingReason={mockReservingReasons}
        isOtherReasonHidden={false}
        handleSelectOptionChange={() => {}}
      />
    );

    // Select a specific reason
    await userEvent.selectOptions(screen.getByLabelText("Reserving reason"), [
      "1",
    ]);

    // Wait for the "Other reason" textarea to become hidden
    await waitFor(() => {
      const textareaElement = screen.getByLabelText("Other reason");
      expect(textareaElement).not.toBeVisible();
    });
  });

  // Add more tests if needed
});
