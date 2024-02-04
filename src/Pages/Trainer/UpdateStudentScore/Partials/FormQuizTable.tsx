/** This function component is response for show Quiz's score of student
 * including HTML, CSS, Quiz 3, Quiz 4, Quiz 5, Quiz 6, Average of Quiz score
 * and automatically calculates score of average of all previous columns
 * in AvgASM. In first render, it will get the average score from api.
 */
import React, { useEffect } from "react";
import { Form, InputNumber, Table } from "antd";
import type { TableProps } from "antd";
import { IScore } from "../../../../Services/Interfaces & Types/Interfaces";
import { rules } from "./Rules";
import { calculateAverage } from "./ScoreFunction";

const columns: TableProps<IScore>["columns"] = [
  {
    title: "HTML",
    dataIndex: "HTML",
    key: "HTML",
    width: 60,
    render: (value, record) => (
      <Form.Item name="HTML" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "CSS",
    dataIndex: "CSS",
    key: "CSS",
    width: 60,
    render: (value, record) => (
      <Form.Item name="CSS" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "Quiz 3",
    dataIndex: "Quiz3",
    key: "Quiz3",
    width: 60,
    render: (value, record) => (
      <Form.Item name="Quiz3" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "Quiz 4",
    dataIndex: "Quiz4",
    key: "Quiz4",
    width: 60,
    render: (value, record) => (
      <Form.Item name="Quiz4" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "Quiz 5",
    dataIndex: "Quiz5",
    key: "Quiz5",
    width: 60,
    render: (value, record) => (
      <Form.Item name="Quiz5" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "Quiz 6",
    dataIndex: "Quiz6",
    key: "Quiz6",
    width: 60,
    render: (value, record) => (
      <Form.Item name="Quiz6" initialValue={value} rules={rules}>
        <InputNumber min={0} max={10} />
      </Form.Item>
    ),
  },
  {
    title: "Avg",
    dataIndex: "AvgQuiz",
    key: "AvgQuiz",
    width: 30,
    render: (value, record) => (
      <Form.Item name="AvgQuiz" initialValue={value}>
        <InputNumber
          readOnly
          style={{ background: value !== undefined ? "#f0f0f0" : "inherit" }}
        />
      </Form.Item>
    ),
  },
];

interface FormQuizTableProps {
  quizScore: IScore | null;
  onUpdateAverage: (average: number) => void;
}
const FormQuizTable: React.FC<FormQuizTableProps> = ({
  quizScore,
  onUpdateAverage,
}) => {
  useEffect(() => {
    if (quizScore) {
      const average = calculateAverage(quizScore, "quiz");
      onUpdateAverage(average);
    }
  }, [quizScore, onUpdateAverage]);

  if (!quizScore) {
    return null;
  }
  const average = calculateAverage(quizScore, "Quiz");
  const dataSource = [{ key: "1", ...quizScore, AvgASM: average }];
  return (
    <Table
      bordered
      columns={columns}
      dataSource={dataSource}
      pagination={false}
    />
  );
};

export default FormQuizTable;
