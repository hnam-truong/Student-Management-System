/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Form, Input, Checkbox } from "antd";
import TableHeader from "../TableHeader/TableHeader";
import ToolBar from "../../molecules/ToolBar/ToolBar";

interface TemplateContentProps {
  bodyValue: string;
  onChangeBodyValue: (value: string) => void;
}

const TemplateContent: React.FC<TemplateContentProps> = ({
  bodyValue,
  onChangeBodyValue,
}) => {
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

  return (
    <div>
      <TableHeader isHeaderBottom={false} title="Content" />
      {/* Field for Subject */}
      <Form.Item
        {...formItemLayout}
        className="mt-2"
        label="Subject"
        name="Subject"
        rules={[{ required: true }]}
      >
        <Input placeholder="Enter subject" />
      </Form.Item>

      {/* Field for Dear name */}
      <Form.Item
        {...formItemLayout}
        label="Dear name"
        name="DearName"
        valuePropName="checked"
      >
        <Checkbox />
      </Form.Item>

      {/* Field for Body */}
      <Form.Item {...formItemLayout} label="Body" name="Body">
        <ToolBar bodyValue={bodyValue} onChangeBodyValue={onChangeBodyValue} />
      </Form.Item>
    </div>
  );
};

export default TemplateContent;
