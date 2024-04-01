/** This function component is response for show ASM's score of student
 * including Practice 1, Practice 2, Practice 3, Average ASM score and automatically
 * calculates score of average of all previous columns in AvgQuiz. In first
 * render, it will get the average score from api.
 */
import React, { useEffect } from "react";
import { Form, InputNumber, Table } from "antd";
import type { TableProps } from "antd";
import { IScore } from "../../../interfaces/score.interface";
import rules from "../../../utils/ScoreValidation";
import calculateAverageScore from "../../../utils/CalculateAverageScore";
import Colors from "../../../constants/Colors";

const columns: TableProps<IScore>["columns"] = [
  {
    title: "Practice 1",
    dataIndex: "Practice1",
    key: "Practice1",
    width: 100,
    render: (value) => (
      <Form.Item name="Practice1" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} step={0.1} />
      </Form.Item>
    ),
  },
  {
    title: "Practice 2",
    dataIndex: "Practice2",
    key: "Practice2",
    width: 100,
    render: (value) => (
      <Form.Item name="Practice2" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} step={0.1} />
      </Form.Item>
    ),
  },
  {
    title: "Practice 3",
    dataIndex: "Practice3",
    key: "Practice3",
    width: 100,
    render: (value) => (
      <Form.Item name="Practice3" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} step={0.1} />
      </Form.Item>
    ),
  },
  {
    title: "Avg",
    dataIndex: "AvgASM",
    key: "AvgASM",
    width: 100,
    render: (value) => (
      <Form.Item name="AvgASM" initialValue={value}>
        <InputNumber
          readOnly
          style={{
            background: value !== undefined ? Colors.DisableColor : "inherit",
          }}
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
      const average = calculateAverageScore(asmScore, "ASM");
      onUpdateAverage(average);
    }
  }, [asmScore, onUpdateAverage]);

  if (!asmScore) {
    return null;
  }
  const average = calculateAverageScore(asmScore, "ASM");
  const dataSource = [{ key: "1", ...asmScore, AvgASM: average }];

  return (
    <Table
      bordered
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      size="middle"
      scroll={{ x: "max-content" }}
      style={{ flex: 1, overflowY: "auto" }}
    />
  );
};

export default FormASMTable;
