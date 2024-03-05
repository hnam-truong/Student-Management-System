import { Card, Table } from "antd";
import { IScore } from "../../../interfaces/score.interface";
import "./MockTable.scss";

interface MockTableProps {
  studentScore: IScore;
}

const MockTable = ({ studentScore }: MockTableProps) => {
  const mockTable = [
    {
      title: "Mock",
      data: [
        { title: "Mock", dataIndex: "Mock" },
        { title: "Final", dataIndex: "MockFinalModule" },
        { title: "GPA", dataIndex: "MockGPAModule" },
        { title: "Level", dataIndex: "MockLevelModule" },
      ],
    },
  ];
  return (
    <>
      {mockTable.map((table) => (
        <div className="table-in-mock" key={table.title}>
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
    </>
  );
};

export default MockTable;
