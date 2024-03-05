import React from "react";
import { Form, Input, DatePicker } from "antd";

const ClassInfo: React.FC = () => (
  <div>
    <Form.Item
      label="Class Code"
      name="ClassCode"
      rules={[{ required: true, message: "Please enter the class code" }]}
    >
      <Input className="input" />
    </Form.Item>
    <Form.Item
      label="Class Start Date"
      name="ClassStartDate"
      rules={[
        { required: true, message: "Please select the class start date" },
      ]}
    >
      <DatePicker className="input" format="DD/MM/YYYY" />
    </Form.Item>
  </div>
);

export default ClassInfo;
