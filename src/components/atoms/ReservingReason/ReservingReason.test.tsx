import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReservingReason from "./ReservingReason";
import { IReservingReason } from "../../../interfaces/reserving-reason.interface";

const mockReservingReasons: IReservingReason[] = [
  {
    Name: "Reserve to study again",
    ID: "1",
  },
  {
    Name: "Disadvantaged",
    ID: "2",
  },
  {
    Name: "Reserve to study Ielts",
    ID: "3",
  },
  {
    Name: "Not enough money for fee payment",
    ID: "4",
  },
  {
    Name: "Looking for new chance",
    ID: "5",
  },
];

describe("ReservingReason Component", () => {
  test("renders ReservingReason with default options", async () => {
    render(
      <ReservingReason
        reservingReason={mockReservingReasons}
        isOtherReasonHidden
        handleSelectOptionChange={() => {}}
      />
    );

    // Wait for the Select element to appear
    await waitFor(() => {
      expect(screen.getByRole("combobox")).toBeInTheDocument();
    });

    // Check if the Select is rendered with the default placeholder
    const placeholderElement = screen.getByText("Please select a reason", {
      selector: ".ant-select-selection-placeholder",
    });
    expect(placeholderElement).toBeInTheDocument();

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

  test('shows Other reason textarea when "Others" is selected', async () => {
    render(
      <ReservingReason
        reservingReason={mockReservingReasons}
        isOtherReasonHidden
        handleSelectOptionChange={() => {}}
      />
    );

    // Open the dropdown
    fireEvent.click(screen.getByRole("combobox"));

    // Find the option containing "Others" text and click it
    const othersOption = screen.getByRole("option", { name: "Others" });
    fireEvent.click(othersOption);

    // // Select the "Others" option
    // await userEvent.selectOptions(screen.getByLabelText("Reserving reason"), [
    //   "Others",
    // ]);

    // Wait for the "Other reason" textarea to become visible
    await waitFor(() => {
      const textareaElement = screen.getByLabelText("Other reason");
      expect(textareaElement).toBeVisible();
    });
  });

  test("hides Other reason textarea when a specific reason is selected", async () => {
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
});
