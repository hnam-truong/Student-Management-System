/** This function component is response for show Mock's score of student
 * including Mock, Final, GPA, Level.
 */
import React from "react";
import { Form, InputNumber, Table } from "antd";
import type { TableProps } from "antd";
import { IScore } from "../../../../Services/Interfaces & Types/Interfaces";
import { rules } from "./Rules";

const columns: TableProps<IScore>["columns"] = [
  {
    title: "Mock",
    dataIndex: "Mock",
    key: "Mock",
    render: (value, record) => (
      <Form.Item name="Mock" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "Final",
    dataIndex: "MockFinalModule",
    key: "MockFinalModule",
    render: (value, record) => (
      <Form.Item name="MockFinalModule" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "GPA",
    dataIndex: "MockGPAModule",
    key: "MockGPAModule",
    render: (value, record) => (
      <Form.Item name="MockGPAModule" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "Level",
    dataIndex: "MockLevelModule",
    key: "MockLevelModule",
    render: (value, record) => (
      <Form.Item name="MockLevelModule" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
];

interface FormMockTableProps {
  mockScore: IScore | null;
}
const FormMockTable: React.FC<FormMockTableProps> = ({ mockScore }) => {
  if (!mockScore) {
    return null;
  }
  const dataSource = [{ key: "1", ...mockScore }];
  return (
    <Table
      bordered
      columns={columns}
      dataSource={dataSource}
      pagination={false}
    />
  );
};

export default FormMockTable;
