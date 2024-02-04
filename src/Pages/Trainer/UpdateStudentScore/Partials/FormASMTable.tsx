/** This function component is response for show ASM's score of student
 * including Practice 1, Practice 2, Practice 3, Average ASM score and automatically
 * calculates score of average of all previous columns in AvgQuiz. In first
 * render, it will get the average score from api.
 */
import React, { useEffect } from "react";
import { Form, InputNumber, Table } from "antd";
import type { TableProps } from "antd";
import { IScore } from "../../../../Services/Interfaces & Types/Interfaces";
import { rules } from "./Rules";
import { calculateAverage } from "./ScoreFunction";

const columns: TableProps<IScore>["columns"] = [
  {
    title: "Practice 1",
    dataIndex: "Practice1",
    key: "Practice1",
    render: (value, record) => (
      <Form.Item name="Practice1" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "Practice 2",
    dataIndex: "Practice2",
    key: "Practice2",
    render: (value, record) => (
      <Form.Item name="Practice2" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "Practice 3",
    dataIndex: "Practice3",
    key: "Practice3",
    render: (value, record) => (
      <Form.Item name="Practice3" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "Avg",
    dataIndex: "AvgASM",
    key: "AvgASM",
    render: (value, record) => (
      <Form.Item name="AvgASM" initialValue={value}>
        <InputNumber
          readOnly
          style={{ background: value !== undefined ? "#f0f0f0" : "inherit" }}
        />
      </Form.Item>
    ),
  },
];

interface FormASMTableProps {
  asmScore: IScore | null;
  onUpdateAverage: (average: number) => void;
}
const FormASMTable: React.FC<FormASMTableProps> = ({
  asmScore,
  onUpdateAverage,
}) => {
  useEffect(() => {
    if (asmScore) {
      const average = calculateAverage(asmScore, "ASM");
      onUpdateAverage(average);
    }
  }, [asmScore, onUpdateAverage]);

  if (!asmScore) {
    return null;
  }
  const average = calculateAverage(asmScore, "ASM");
  const dataSource = [{ key: "1", ...asmScore, AvgASM: average }];

  return (
    <Table
      bordered
      columns={columns}
      dataSource={dataSource}
      pagination={false}
    />
  );
};

export default FormASMTable;
