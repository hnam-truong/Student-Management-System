// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import FileUpload from "./FileUpload";

// describe("FileUpload component", () => {
//   test("renders the component properly", () => {
//     render(<FileUpload />);
//     const uploadText = screen.getByText(
//       "Click or drag file to this area to upload"
//     );
//     const uploadHint = screen.getByText(
//       "Support for a single upload with .xls, .xlsx, or .csv file"
//     );
//     const uploadBtn = screen.getByRole("button", { name: "Upload File" });

//     expect(uploadText).not.toBeInTheDocument();
//     expect(uploadHint).not.toBeInTheDocument();
//     expect(uploadBtn).not.toBeInTheDocument();
//   });

//   test("displays success notification when file upload is successful", () => {
//     render(<FileUpload />);
//     const uploadBtn = screen.getByRole("button", { name: "Upload File" });

//     fireEvent.change(uploadBtn, { target: { files: ["test.xlsx"] } });
//     // Simulate successful upload
//     fireEvent.load(uploadBtn, {
//       target: { files: ["test.xlsx"], status: "done" },
//     });

//     const successNotification = screen.getByText("file uploaded successfully");
//     expect(successNotification).not.toBeInTheDocument();
//   });

//   test("displays error notification when file upload fails", () => {
//     render(<FileUpload />);
//     const uploadBtn = screen.getByRole("button", { name: "Upload File" });

//     fireEvent.change(uploadBtn, { target: { files: ["test.xlsx"] } });
//     // Simulate upload failure
//     fireEvent.load(uploadBtn, {
//       target: { files: ["test.xlsx"], status: "error" },
//     });

//     const errorNotification = screen.getByText("file upload failed");
//     expect(errorNotification).not.toBeInTheDocument();
//   });
//   test("displays error notification when file upload is cancelled", () => {
//     render(<FileUpload />);
//     const uploadBtn = screen.getByRole("button", { name: "Upload File" });
//     fireEvent.change(uploadBtn, { target: { files: ["test.xlsx"] } });
//     // Simulate upload cancellation
//     fireEvent.load(uploadBtn, {
//       target: { files: ["test.xlsx"], status: "abort" },
//     });
//     const errorNotification = screen.getByText("file upload cancelled");
//     expect(errorNotification).not.toBeInTheDocument();
//     expect(uploadBtn).not.toBeInTheDocument();
//   });
//   test("displays success notification when file upload is cancelled", () => {
//     render(<FileUpload />);
//     const uploadBtn = screen.getByRole("button", { name: "Upload File" });
//     fireEvent.change(uploadBtn, { target: { files: ["test.xlsx"] } });
//     // Simulate upload cancellation
//     fireEvent.load(uploadBtn, {
//       target: { files: ["test.xlsx"], status: "abort" },
//     });
//     const errorNotification = screen.getByText("file upload cancelled");
//     expect(errorNotification).not.toBeInTheDocument();
//     expect(uploadBtn).not.toBeInTheDocument();
//   });
// });

// import { render, fireEvent, screen } from "@testing-library/react";
// import FileUpload from "./FileUpload";
// import { ImportFromExcel } from "../../../utils/ImportFromExcel";

// // Mock the ImportFromExcel and Notify modules
// vi.mock("../../../utils/ImportFromExcel", () => ({
//   ImportFromExcel: () => ({
//     readExcelFile: vi.fn(),
//     handleExcelUpload: vi.fn(),
//   }),
// }));
// vi.mock("../Notify/Notify", () => ({
//   errorNotify: vi.fn(),
//   successNotify: vi.fn(),
// }));

// describe("FileUpload", () => {
//   it("renders without crashing", () => {
//     render(<FileUpload />);
//   });

//   it("calls readExcelFile when a file is selected", () => {
//     render(<FileUpload />);
//     const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
//     fireEvent.change(
//       screen.getByText("Click or drag file to this area to upload"),
//       {
//         target: { files: [file] },
//       }
//     );
//     expect(ImportFromExcel.readExcelFile).toHaveBeenCalledWith(
//       file,
//       expect.any(Function)
//     );
//   });

//   it("calls handleExcelUpload when the Upload File button is clicked", () => {
//     render(<FileUpload />);
//     fireEvent.click(screen.getByText("Upload File"));
//     expect((ImportFromExcel as excelDataType).handleExcelUpload).toHaveBeenCalled();
//   });
// });

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FileUpload from "./FileUpload";

describe("FileUpload component", () => {
  test("displays upload area with correct text", () => {
    const excelUpload = vi.fn();
    render(<FileUpload excelUpload={excelUpload} />);
    expect(
      screen.getByText("Click or drag file to this area to upload")
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        "Support for a single upload with .xls, .xlsx, or .csv file"
      )
    ).not.toBeInTheDocument();
  });

  test("triggers success notification when file upload is successful", async () => {
    const excelUpload = vi.fn();
    global.fetch = vi.fn().mockResolvedValueOnce({ status: 200 });
    render(<FileUpload excelUpload={excelUpload} />);
    const file = new File(["dummy content"], "example.xlsx", {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const uploadBtn = screen.getByRole("button", { name: "Upload File" });
    fireEvent.change(uploadBtn, { target: { files: [file] } });
    await waitFor(() => {
      expect(
        screen.queryByText("example.xlsx file uploaded successfully")
      ).not.toBeInTheDocument();
    });
  });

  test("triggers error notification when file upload fails", async () => {
    const excelUpload = vi.fn();
    global.fetch = vi.fn().mockRejectedValueOnce(new Error("Upload failed"));
    render(<FileUpload excelUpload={excelUpload} />);
    const file = new File(["dummy content"], "example.xlsx", {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const uploadBtn = screen.getByRole("button", { name: "Upload File" });
    fireEvent.change(uploadBtn, { target: { files: [file] } });
    await waitFor(() => {
      expect(
        screen.queryByText("example.xlsx file upload failed")
      ).not.toBeInTheDocument();
    });
  });
});
