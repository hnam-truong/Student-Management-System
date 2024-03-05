/** This function component is response for show final score of student
 * including Quiz Final, Audit, Practice Final, Final Module, GPA Module
 * and Level Module.
 */
import React from "react";
import { Form, InputNumber, Table } from "antd";
import type { TableProps } from "antd";
import { IScore } from "../../../interfaces/score.interface";
import rules from "../../../utils/ScoreValidation";

const columns: TableProps<IScore>["columns"] = [
  {
    title: "Quiz Final",
    dataIndex: "QuizFinal",
    key: "QuizFinal",
    width: 100,
    render: (value) => (
      <Form.Item name="QuizFinal" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} step={0.1} />
      </Form.Item>
    ),
  },
  {
    title: "Audit",
    dataIndex: "Audit",
    key: "Audit",
    width: 100,
    render: (value) => (
      <Form.Item name="Audit" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} step={0.1} />
      </Form.Item>
    ),
  },
  {
    title: "Practice Final",
    dataIndex: "PracticeFinal",
    key: "PracticeFinal",
    width: 100,
    render: (value) => (
      <Form.Item name="PracticeFinal" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} step={0.1} />
      </Form.Item>
    ),
  },
  {
    title: "Final Module",
    dataIndex: "FinalModule",
    key: "FinalModule",
    width: 100,
    render: (value) => (
      <Form.Item name="FinalModule" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} step={0.1} />
      </Form.Item>
    ),
  },
  {
    title: "GPA Module",
    dataIndex: "GPAModule",
    key: "GPAModule",
    width: 100,
    render: (value) => (
      <Form.Item name="GPAModule" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} step={0.1} />
      </Form.Item>
    ),
  },
  {
    title: "Level Module",
    dataIndex: "LevelModule",
    key: "LevelModule",
    width: 100,
    render: (value) => (
      <Form.Item name="LevelModule" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} step={0.1} />
      </Form.Item>
    ),
  },
];

interface FormFinalTableProps {
  totalScore: IScore | null;
}
const FormFinalTable: React.FC<FormFinalTableProps> = ({ totalScore }) => {
  if (!totalScore) {
    return null;
  }
  const dataSource = [{ key: "1", ...totalScore }];
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

export default FormFinalTable;
