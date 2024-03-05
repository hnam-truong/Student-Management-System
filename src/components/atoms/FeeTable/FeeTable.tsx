import { Card, Table } from "antd";
import { IScore } from "../../../interfaces/score.interface";
import "./FeeTable.scss";

interface FeeTableProps {
  studentScore: IScore;
}
const FeeTable = ({ studentScore }: FeeTableProps) => {
  const feeTables = [
    {
      title: "ASM",
      data: [
        { title: "ASM", dataIndex: "ASM" },
        { title: "Practice 1", dataIndex: "Practice1" },
        { title: "Practice 2", dataIndex: "Practice2" },
        { title: "Practice 3", dataIndex: "Practice3" },
        { title: "Practice (Average)", dataIndex: "AvgASM" },
      ],
    },
    {
      title: "Quiz",
      data: [
        { title: "HTML", dataIndex: "HTML" },
        { title: "CSS", dataIndex: "CSS" },
        { title: "Quiz 3", dataIndex: "Quiz3" },
        { title: "Quiz 5", dataIndex: "Quiz5" },
        { title: "Quiz 6", dataIndex: "Quiz6" },
        { title: "Quiz (Average)", dataIndex: "AvgQuiz" },
      ],
    },
    {
      title: "Final",
      data: [
        { title: "Module Final", dataIndex: "FinalModule" },
        { title: "Quiz Final", dataIndex: "QuizFinal" },
        { title: "Practice Final", dataIndex: "PracticeFinal" },
        { title: "Audit", dataIndex: "Audit" },
        { title: "GPA", dataIndex: "GPAModule" },
        { title: "Level", dataIndex: "LevelModule" },
      ],
    },
  ];
  return (
    <div className="fee-tables">
      {feeTables.map((table) => (
        <div className="table-in-fee" key={table.title}>
          <Card className="quiz-table">
            <div className="ant-card-head">{table.title}</div>
            <div className="table-data">
              <Table
                dataSource={[{ key: "1", ...studentScore }]}
                columns={table.data.map((item) => ({
                  title: item.title,
                  dataIndex: item.dataIndex,
                  render: (score) => score,
                }))}
                pagination={false}
                bordered
              />
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default FeeTable;
