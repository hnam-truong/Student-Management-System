import { Form, Select } from "antd";
import React from "react";

const { Option } = Select;

interface FormSelectProps {
  name: string;
  rules: { required: boolean; message: string }[];
  text: string;
  list: { id: string; value: string; option: string }[];
  label?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  rules,
  text,
  list,
}) => (
  <Form.Item name={name} rules={rules} label={label}>
    <Select placeholder={text}>
      {list.map((item) => (
        <Option key={item.id} value={item.value}>
          {item.option}
        </Option>
      ))}
    </Select>
  </Form.Item>
);

FormSelect.defaultProps = {
  label: "",
};

export default FormSelect;
