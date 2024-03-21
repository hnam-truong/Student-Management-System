import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Form, ConfigProvider } from "antd";
import UserForm from "./UserForm";

describe("UserForm component", () => {
  const mockOnFinish = vi.fn();
  const mockInitialValues = {
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
  //   const formMock = {
  //     getFieldValue: vi.fn((name) => mockInitialValues[name]), // Simulates getting field values based on initial values
  //     getFieldsValue: vi.fn(() => mockInitialValues), // Simulates getting all field values
  //     getFieldError: vi.fn(() => []), // Simulates getting field errors (assuming no errors initially)
  //     getFieldsError: vi.fn(() => []), // Simulates getting errors for all fields (assuming no errors initially)
  //     getFieldWarning: vi.fn(() => []), // Simulates getting field warnings (assuming no warnings initially)
  //     isFieldsTouched: vi.fn(() => false), // Simulates no fields being touched initially
  //     isFieldTouched: vi.fn(() => false), // Simulates a field not being touched initially
  //     isFieldValidating: vi.fn(() => false), // Simulates no field being validated initially
  //     isFieldsValidating: vi.fn(() => false), // Simulates no fields being validated initially
  //     resetFields: vi.fn(), // Simulates resetting fields
  //     setFields: vi.fn(), // Simulates setting fields
  //     setFieldValue: vi.fn(), // Simulates setting a field value
  //     setFieldsValue: vi.fn(), // Simulates setting values for multiple fields
  //     validateFields: vi.fn((callback) => callback()), // Simulates validating fields
  //     submit: vi.fn(), // Simulates form submission
  //   };

  test("submitting the form with valid data calls onFinish callback", async () => {
    const onFinishMock = vi.fn();
    render(
      <ConfigProvider>
        <UserForm
          formName="testForm"
          onFinish={onFinishMock}
          form={Form.useForm()[0]}
        />
      </ConfigProvider>
    );

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Phone number"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText("Date of birth"), {
      target: { value: "03/10/1990" },
    });
    fireEvent.click(screen.getByText("Male")); // Assuming Male radio button is selected
    fireEvent.click(screen.getByText("Activate user")); // Assuming the switch is turned on

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(onFinishMock).toHaveBeenCalledWith({
        Name: "John Doe",
        Email: "john@example.com",
        Phone: "1234567890",
        DateOfBirth: "03/10/1990",
        Gender: true,
        Status: true,
      });
    });
  });

  test("Disables email field when in edit mode", () => {
    render(
      <ConfigProvider>
        <UserForm
          formName="testForm"
          onFinish={mockOnFinish}
          form={Form.useForm()[0]}
        />
      </ConfigProvider>
    );

    const emailInput = screen.getByLabelText("Email");
    expect(emailInput).toBeDisabled();
  });

  test("Calls onFinish with form values when submitted", () => {
    render(
      <ConfigProvider>
        <UserForm
          formName="testForm"
          onFinish={mockOnFinish}
          form={Form.useForm()[0]}
        />
      </ConfigProvider>
    );

    const nameInput = screen.getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "Jane Doe" } });

    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, { target: { value: "jane.doe@example.com" } });

    const phoneInput = screen.getByLabelText("Phone");
    fireEvent.change(phoneInput, { target: { value: "987654321" } });

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    expect(mockOnFinish).toHaveBeenCalledWith({
      ...mockInitialValues,
      Name: "Jane Doe",
      Email: "jane.doe@example.com",
      Phone: "987654321",
    });
  });

  test("displays error message for invalid email format", async () => {
    render(
      <ConfigProvider>
        <UserForm
          formName="testForm"
          onFinish={mockOnFinish}
          form={Form.useForm()[0]}
        />
      </ConfigProvider>
    );

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "invalidemail" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    const errorMessage = await screen.findByText(/invalid email format/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays error message for age less than 18", async () => {
    render(
      <ConfigProvider>
        <UserForm
          formName="testForm"
          onFinish={mockOnFinish}
          form={Form.useForm()[0]}
        />
      </ConfigProvider>
    );
    //   <UserForm
    //     form={Form.useForm()[0]}
    //     onFinish={mockOnFinish}
    //     initialValues={mockInitialValues}
    //     formName="testForm"
    //   />

    fireEvent.change(screen.getByLabelText("Date of birth"), {
      target: { value: "03/10/2010" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    const errorMessage = await screen.findByText(
      /age must be greater than or equal 18/i
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
