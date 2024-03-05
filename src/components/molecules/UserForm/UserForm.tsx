/** This function component is Form with response for add user information
 * with name, role, email, phone, active status, dob, gender.
 * Usage:
 * <UserForm form={form} handleOk={handleOk}/>
 */
import { DatePicker, Form, FormInstance, Input } from "antd";
import React from "react";
import SwitchStatus from "../../atoms/SwitchStatus/SwitchStatus";
import { IUser } from "../../../interfaces/user.interface";
import FormRadio from "../../atoms/FormRadio/FormRadio";
import FormSelect from "../../atoms/FormSelect/FormSelect";
import {
  validateDateOfBirth,
  validateEmail,
  validatePhoneNumber,
} from "../../../utils/Validations";

interface UserFormProps {
  form: FormInstance<IUser>;
  onFinish: (values: IUser) => void;
  initialValues?: object;
  formName: string;
  isEdit?: boolean;
}

const UserForm: React.FC<UserFormProps> = ({
  form,
  onFinish,
  initialValues,
  formName,
  isEdit,
}) => {
  const stringFields = [
    {
      id: "1",
      label: "Name",
      name: "Name",
      text: "User's name",
      rules: [{ required: true, message: "Please input user's name!" }],
    },
    {
      id: "2",
      label: "Email",
      name: "Email",
      text: "Email address",
      rules: [
        { required: true, message: "Please input email address!" },
        {
          validator: (_: unknown, value: string) =>
            validateEmail(value)
              ? Promise.resolve()
              : Promise.reject(new Error("Invalid email format!")),
        },
      ],
    },
    {
      id: "3",
      label: "Phone",
      name: "Phone",
      text: "Phone number",
      rules: [
        { required: true, message: "Please input phone number!" },
        {
          validator: (_: unknown, value: string) =>
            validatePhoneNumber(value)
              ? Promise.resolve()
              : Promise.reject(new Error("Invalid phone number format!")),
        },
      ],
    },
  ];

  const genders = [
    { id: "1", value: true, name: "Male" },
    { id: "2", value: false, name: "Female" },
  ];

  const genderRules = [{ required: true, message: "Please input gender!" }];

  const roles = [{ id: "1", value: "Trainer", option: "Trainer" }];
  const rolesRules = [{ required: true, message: "Please input role!" }];
  const dateOfBirthRules = [
    { required: true, message: "Please input date of birth!" },
    {
      validator: (_: unknown, value: string) =>
        validateDateOfBirth(_, value)
          ? Promise.resolve()
          : Promise.reject(new Error("Age must be greater than or equal 18!")),
    },
  ];

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      name={formName}
      initialValues={initialValues}
      variant="filled"
      preserve={false}
      scrollToFirstError
      className="add-user-form"
    >
      <FormSelect
        list={roles}
        name="UserType"
        rules={rolesRules}
        text="Please select user's role"
        label="User role"
      />
      {stringFields.map((item) => (
        <Form.Item
          key={item.id}
          label={item.label}
          name={item.name}
          rules={item.rules}
        >
          <Input
            placeholder={item.text}
            disabled={item.name === "Email" && isEdit}
          />
        </Form.Item>
      ))}
      <Form.Item
        label="Date of birth"
        name="DateOfBirth"
        rules={dateOfBirthRules}
      >
        <DatePicker format="DD/MM/YYYY" placeholder="Select date" />
      </Form.Item>
      <FormRadio
        list={genders}
        label="Gender"
        rules={genderRules}
        name="Gender"
      />
      <SwitchStatus
        name="Status"
        label="Activate user"
        valuePropName="checked"
      />
    </Form>
  );
};

UserForm.defaultProps = {
  initialValues: {},
  isEdit: false,
};

export default UserForm;