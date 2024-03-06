import React, { useState, useEffect } from "react";
import { Form, Input, Select, DatePicker, Spin } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { validateEmail, validatePhoneNumber } from "../../../utils/Validations";
import { useProvinceStore } from "../../../store/ProvinceStore";
import { errorNotify } from "../Notify/Notify";

const { Option } = Select;
const StatusOptions = ["In class", "Drop out", "Finish", "Reserve"];

interface GeneralInfoProps {
  isEdit?: boolean;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ isEdit }) => {
  const [dob, setDob] = useState<Dayjs | null>(null);
  const { fetchProvinces, loading, province } = useProvinceStore();

  useEffect(() => {
    fetchProvinces();
  }, [fetchProvinces]);

  const handleDobChange = (newDob: Dayjs | null | undefined) => {
    if (newDob && newDob.year) {
      const today = dayjs();
      if (today.year() - newDob.year() < 18) {
        errorNotify("Age must be greater than or equal 18");
      } else {
        setDob(newDob);
      }
    }
  };
  return loading ? (
    <div className="spin-container">
      <Spin />
    </div>
  ) : (
    <div className="container-infor">
      <div className="col">
        {isEdit && (
          <Form.Item
            label={<span className="custom-label-id">ID</span>}
            name="ID"
          >
            <Input className="input" disabled />
          </Form.Item>
        )}
        <Form.Item
          label="Name"
          name="Name"
          rules={[{ required: true, message: "Please enter the name" }]}
        >
          <Input className="input" placeholder="Enter Name" />
        </Form.Item>
        <Form.Item
          label="Gender"
          name="Gender"
          rules={[{ required: true, message: "Please select the gender" }]}
        >
          <Select
            style={{ width: "100%", textAlign: "left" }}
            placeholder="Select Gender"
          >
            <Option value={false}>Male</Option>
            <Option value>Female</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Date of Birth"
          name="DateOfBirth"
          rules={[
            { required: true, message: "Please select the date of birth" },
          ]}
        >
          <DatePicker
            className="input"
            format="DD/MM/YYYY"
            onChange={handleDobChange}
            value={dob}
            placeholder="Select Date of birth"
          />
        </Form.Item>
        <Form.Item
          label="Status"
          name="AttendingStatus"
          rules={[{ required: true, message: "Please select the status" }]}
        >
          <Select
            style={{ width: "100%", textAlign: "left" }}
            placeholder="Select Status"
          >
            {StatusOptions.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </div>
      <div className="col">
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
          <Input className="input" placeholder="Enter Phone" />
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
            className="input"
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
            style={{ width: "100%" }}
            placeholder="Select Permanent Residence"
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
          <Select
            style={{ width: "100%", textAlign: "left" }}
            placeholder="Select Location"
          >
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
