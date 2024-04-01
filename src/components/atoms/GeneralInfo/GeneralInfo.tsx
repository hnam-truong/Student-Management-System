import React, { useEffect } from "react";
import { Form, Input, Select, DatePicker, Spin } from "antd";
import {
  validateDateOfBirth,
  validateEmail,
  validatePhoneNumber,
} from "../../../utils/Validations";
import { useProvinceStore } from "../../../store/ProvinceStore";

const { Option } = Select;
const StatusOptions = ["In class", "Drop out", "Finish", "Reserve"];

interface GeneralInfoProps {
  isEdit?: boolean;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ isEdit }) => {
  const { fetchProvinces, loading, province } = useProvinceStore();

  useEffect(() => {
    fetchProvinces();
  }, [fetchProvinces]);

  const dateOfBirthRules = [
    { required: true, message: "Please input date of birth!" },
    {
      validator: (_: unknown, value: string) =>
        validateDateOfBirth(_, value)
          ? Promise.resolve()
          : Promise.reject(new Error("Age must be greater than or equal 18!")),
    },
  ];
  return loading ? (
    <div className="spin-container">
      <Spin />
    </div>
  ) : (
    <div className="container-info">
      <div className="col-content">
        {isEdit && (
          <Form.Item
            label={<span className="custom-label-id">ID</span>}
            name="ID"
          >
            <Input className="input-content" disabled />
          </Form.Item>
        )}
        <Form.Item
          className="enter-name"
          label="Name"
          name="Name"
          rules={[{ required: true, message: "Please enter the name" }]}
        >
          <Input className="input-content" placeholder="Enter Name" />
        </Form.Item>
        <Form.Item
          label="Gender"
          name="Gender"
          rules={[{ required: true, message: "Please select the gender" }]}
        >
          <Select placeholder="Select Gender" className="select-content">
            <Option value={false}>Male</Option>
            <Option value>Female</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Date of Birth"
          name="DateOfBirth"
          rules={dateOfBirthRules}
        >
          <DatePicker
            className="input-content"
            format="DD/MM/YYYY"
            placeholder="Select date of birth"
          />
        </Form.Item>
        <Form.Item
          label="Status"
          name="AttendingStatus"
          rules={[{ required: true, message: "Please select the status" }]}
        >
          <Select placeholder="Select Status" className="select-content">
            {StatusOptions.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </div>
      <div className="col-content">
        <Form.Item
          label="Phone"
          name="Phone"
          rules={[
            { required: true, message: "Please enter the phone" },
            {
              validator: (_, value) =>
                validatePhoneNumber(value)
                  ? Promise.resolve()
                  : Promise.reject(new Error("Invalid phone number format")),
            },
          ]}
        >
          <Input className="input-content" placeholder="Enter Phone" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="Email"
          rules={[
            { required: true, message: "Please enter the email" },
            {
              validator: (_, value) =>
                validateEmail(value)
                  ? Promise.resolve()
                  : Promise.reject(new Error("Invalid email format")),
            },
          ]}
        >
          <Input
            className="input-content"
            placeholder="Enter Email"
            disabled={isEdit}
          />
        </Form.Item>
        <Form.Item
          label="Permanent Residence"
          name="PermanentResidence"
          rules={[
            {
              required: true,
              message: "Please select the permanent residence",
            },
          ]}
        >
          <Select
            placeholder="Select Permanent Residence"
            className="select-content"
          >
            {province?.map((option) => (
              <Option key={option.id} value={option.name}>
                {option.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Location"
          name="Location"
          rules={[{ required: true, message: "Please select the location" }]}
        >
          <Select placeholder="Select Location" className="select-content">
            {province?.map((option) => (
              <Option key={option.id} value={option.name}>
                {option.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </div>
    </div>
  );
};

GeneralInfo.defaultProps = {
  isEdit: false,
};

export default GeneralInfo;
