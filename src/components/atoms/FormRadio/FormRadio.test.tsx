import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "antd";
import FormRadio from "./FormRadio";

describe("FormRadio component", () => {
  const mockList = [
    { id: "1", value: true, name: "Trainer" },
    { id: "2", value: false, name: "Student" },
  ];

  test("renders radio group with provided options", () => {
    render(
      <Form>
        <FormRadio
          name="role"
          label="Role"
          list={mockList}
          rules={[{ required: true, message: "Please select a role" }]}
        />
      </Form>
    );

    expect(screen.getByLabelText("Trainer")).toBeInTheDocument();
    expect(screen.getByLabelText("Student")).toBeInTheDocument();
  });

  test("allows selecting another role", async () => {
    render(
      <Form>
        <FormRadio
          name="role"
          label="Role"
          list={mockList}
          rules={[{ required: true, message: "Please select a role" }]}
        />
      </Form>
    );

    const studentRadio = screen.getByLabelText("Student");
    expect(studentRadio).not.toBeChecked();

    await userEvent.click(studentRadio);
    expect(studentRadio).toBeChecked();
  });
  test("allows selecting another role", async () => {
    render(
      <Form>
        <FormRadio
          name="role"
          label="Role"
          list={mockList}
          rules={[{ required: true, message: "Please select a role" }]}
        />
      </Form>
    );

    const studentRadio = screen.getByLabelText("Student");
    expect(studentRadio).not.toBeChecked();

    await userEvent.click(studentRadio);
    expect(studentRadio).toBeChecked();
  });
});
