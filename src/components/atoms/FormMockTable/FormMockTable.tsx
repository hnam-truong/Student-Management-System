/** This function component is response for show Mock's score of student
 * including Mock, Final, GPA, Level.
 */
import React from "react";
import { Form, InputNumber, Table } from "antd";
import type { TableProps } from "antd";
import { IScore } from "../../../interfaces/score.interface";
import rules from "../../../utils/ScoreValidation";

const columns: TableProps<IScore>["columns"] = [
  {
    title: "Mock",
    dataIndex: "Mock",
    key: "Mock",
    width: 100,
    render: (value) => (
      <Form.Item name="Mock" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} step={0.1} />
      </Form.Item>
    ),
  },
  {
    title: "Final",
    dataIndex: "MockFinalModule",
    width: 100,
    key: "MockFinalModule",
    render: (value) => (
      <Form.Item name="MockFinalModule" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} step={0.1} />
      </Form.Item>
    ),
  },
  {
    title: "GPA",
    dataIndex: "MockGPAModule",
    key: "MockGPAModule",
    width: 100,
    render: (value) => (
      <Form.Item name="MockGPAModule" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} step={0.1} />
      </Form.Item>
    ),
  },
  {
    title: "Level",
    dataIndex: "MockLevelModule",
    key: "MockLevelModule",
    width: 100,
    render: (value) => (
      <Form.Item name="MockLevelModule" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} step={0.1} />
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
      size="middle"
      scroll={{ x: "max-content" }}
      style={{ flex: 1, overflowY: "auto" }}
      bordered
      columns={columns}
      dataSource={dataSource}
      pagination={false}
    />
  );
};

export default FormMockTable;
