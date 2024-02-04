/** This function component is response for show final score of student
 * including Quiz Final, Audit, Practice Final, Final Module, GPA Module
 * and Level Module.
 */
import React from "react";
import { Form, InputNumber, Table } from "antd";
import type { TableProps } from "antd";
import { IScore } from "../../../../Services/Interfaces & Types/Interfaces";
import { rules } from "./Rules";

const columns: TableProps<IScore>["columns"] = [
  {
    title: "Quiz Final",
    dataIndex: "QuizFinal",
    key: "QuizFinal",
    render: (value, record) => (
      <Form.Item name="QuizFinal" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "Audit",
    dataIndex: "Audit",
    key: "Audit",
    render: (value, record) => (
      <Form.Item name="Audit" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "Practice Final",
    dataIndex: "PracticeFinal",
    key: "PracticeFinal",
    render: (value, record) => (
      <Form.Item name="PracticeFinal" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "Final Module",
    dataIndex: "FinalModule",
    key: "FinalModule",
    render: (value, record) => (
      <Form.Item name="FinalModule" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "GPA Module",
    dataIndex: "GPAModule",
    key: "GPAModule",
    render: (value, record) => (
      <Form.Item name="GPAModule" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "Level Module",
    dataIndex: "LevelModule",
    key: "LevelModule",
    render: (value, record) => (
      <Form.Item name="LevelModule" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
];

interface FormTotalTableProps {
  totalScore: IScore | null;
}
const FormTotalTable: React.FC<FormTotalTableProps> = ({ totalScore }) => {
  if (!totalScore) {
    return null;
  }
  const dataSource = [{ key: "1", ...totalScore }];
  return (
    <Table
      bordered
      columns={columns}
      dataSource={dataSource}
      pagination={false}
    />
  );
};

export default FormTotalTable;
