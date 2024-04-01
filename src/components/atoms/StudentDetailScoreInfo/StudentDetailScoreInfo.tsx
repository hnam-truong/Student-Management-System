import React from "react";
import "./StudentDetailScoreInfo.scss";
import { Card, Space, Table } from "antd";
import { IStudent } from "../../../interfaces/student.interface";
import { IScore } from "../../../interfaces/score.interface";
import "../../../styles/main.scss";
import StatusTag from "../StatusTag/StatusTag";
import { getCourseStatus } from "../../../utils/GenerateStatus";

interface StudentDetailScoreInfoProps {
  studentDetail: IStudent;
  studentScore: IScore;
}

const StudentDetailScoreInfo: React.FC<StudentDetailScoreInfoProps> = ({
  studentDetail,
  studentScore,
}) => {
  if (!studentScore) {
    return null;
  }

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
    <div className="score-table-container">
      {/* Basic Information */}
      <Space className="class-code" direction="vertical">
        <div className="heading-h5 student-class">{studentDetail?.Class}</div>
        <div className="subtitle1-bold class-code">
          {studentDetail?.ClassCode}
        </div>
      </Space>
      <hr className="class-code-divider" />
      {/* Score Tables */}
      <div className="score-tables">
        {/* Fee Tables */}
        <div>
          <div className="table-status">
            <div className="subtitle1-bold table-status-name">FEE</div>
            <StatusTag
              status={studentScore.Status}
              content={getCourseStatus(studentScore.Status)}
            />
          </div>
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
                    />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        {/* Mock Table */}
        <div>
          <div className="table-status">
            <div className="subtitle1-bold table-status-name">MOCK</div>
            <StatusTag
              status={studentScore.MockStatus}
              content={getCourseStatus(studentScore.MockStatus)}
            />
          </div>
          <div className="mock-table">
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
                    />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailScoreInfo;
