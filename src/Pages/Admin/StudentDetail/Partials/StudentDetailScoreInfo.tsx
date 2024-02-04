import React from "react";
import "../StudentDetail.scss";
import { Card, Space, Table } from "antd";
import {
  IStudent,
  IScore,
} from "../../../../Services/Interfaces & Types/Interfaces";

interface StudentDetailScoreTablesProps {
  studentDetail: IStudent;
  studentScore: IScore;
}

const StudentDetailScoreInfo: React.FC<StudentDetailScoreTablesProps> = ({
  studentDetail,
  studentScore,
}) => {
  return (
    <div className="score-table-container">
      {/* Basic Information */}
      <Space className="basic-info">
        <div>
          <div className="class-code">{studentDetail?.ClassCode}</div>
        </div>
      </Space>

      {/* Score Tables */}
      <div className="score-tables">
        {/* Quiz Table */}
        <Card className="quiz-table">
          <div className="ant-card-head">Quiz</div>
          <Table
            dataSource={[
              {
                HTML: studentScore.HTML,
                CSS: studentScore.CSS,
                "Quiz 3": studentScore.Quiz3,
                "Quiz 5": studentScore.Quiz5,
                "Quiz 6": studentScore.Quiz6,
                "Quiz (Average)": studentScore.AvgQuiz,
              },
            ]}
            columns={[
              { title: "HTML", dataIndex: "HTML", render: (score) => score },
              { title: "CSS", dataIndex: "CSS", render: (score) => score },
              {
                title: "Quiz 3",
                dataIndex: "Quiz 3",
                render: (score) => score,
              },
              {
                title: "Quiz 5",
                dataIndex: "Quiz 5",
                render: (score) => score,
              },
              {
                title: "Quiz 6",
                dataIndex: "Quiz 6",
                render: (score) => score,
              },
              {
                title: "Quiz (Average)",
                dataIndex: "Quiz (Average)",
                render: (score) => score,
              },
            ]}
            pagination={false}
          />
        </Card>

        {/* ASM Table */}
        <Card className="asm-table">
          <div className="ant-card-head">ASM</div>
          <Table
            dataSource={[
              {
                ASM: studentScore.ASM,
                "Practice 1": studentScore.Practice1,
                "Practice 2": studentScore.Practice2,
                "Practice 3": studentScore.Practice3,
                "Practice (Average)": studentScore.AvgASM,
              },
            ]}
            columns={[
              { title: "ASM", dataIndex: "ASM", render: (score) => score },
              {
                title: "Practice 1",
                dataIndex: "Practice 1",
                render: (score) => score,
              },
              {
                title: "Practice 2",
                dataIndex: "Practice 2",
                render: (score) => score,
              },
              {
                title: "Practice 3",
                dataIndex: "Practice 3",
                render: (score) => score,
              },
              {
                title: "Practice (Average)",
                dataIndex: "Practice (Average)",
                render: (score) => score,
              },
            ]}
            pagination={false}
          />
        </Card>

        {/* Mock Table */}
        <Card className="mock-table">
          <div className="ant-card-head">Mock</div>
          <Table
            dataSource={[
              {
                MockFinalModule: studentScore.MockFinalModule,
                MockGPAModule: studentScore.MockGPAModule,
                MockLevelModule: studentScore.MockLevelModule,
                MockStatus: studentScore.MockStatus?.toString(),
              },
            ]}
            columns={[
              {
                title: "Final",
                dataIndex: "MockFinalModule",
                render: (score) => score,
              },
              {
                title: "GPA",
                dataIndex: "MockGPAModule",
                render: (score) => score,
              },
              {
                title: "Level",
                dataIndex: "MockLevelModule",
                render: (score) => score,
              },
              {
                title: "Status",
                dataIndex: "MockStatus",
                render: (score) => {
                  if (score === true) {
                    return "Pass";
                  } else if (score === false) {
                    return "Fail";
                  } else {
                    return "-";
                  }
                },
              },
            ]}
            pagination={false}
          />
        </Card>
      </div>
    </div>
  );
};

export default StudentDetailScoreInfo;
