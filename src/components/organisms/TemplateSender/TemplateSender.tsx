/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Form, Select } from "antd";
import TableHeader from "../TableHeader/TableHeader";

interface TemplateSenderProps {}

const TemplateSender: React.FC<TemplateSenderProps> = () => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 6 },
      sm: { span: 3 },
    },
    wrapperCol: {
      xs: { span: 18 },
      sm: { span: 21 },
    },
  };

  const senderOption = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
  ];

  return (
    <div>
      <TableHeader isHeaderBottom={false} title="Sender" />

      {/* Field for Sender */}
      <Form.Item
        {...formItemLayout}
        className="mt-2"
        label="From"
        name="Sender"
        rules={[{ required: true }]}
      >
        <Select options={senderOption} placeholder="Select sender" />
      </Form.Item>
    </div>
  );
};

export default TemplateSender;
