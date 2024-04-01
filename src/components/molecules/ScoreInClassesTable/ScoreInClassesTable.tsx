import { Table, TableColumnsType } from "antd";
import { IScore } from "../../../interfaces/score.interface";
import StatusTag from "../../atoms/StatusTag/StatusTag";
import { getCourseStatus } from "../../../utils/GenerateStatus";

interface ScoreInClassesTableProps {
  scores: IScore[];
  loading: boolean;
}
const ScoreInClassesTable = ({ scores, loading }: ScoreInClassesTableProps) => {
  const columns: TableColumnsType<IScore> = [
    {
      title: "Class ID",
      dataIndex: "FullName",
      key: "FullName",
      width: 170,
      fixed: "left",
      sorter: (a, b) => a.FullName.localeCompare(b.FullName),
    },
    {
      title: "Class Name",
      dataIndex: "Account",
      key: "Account",
      width: 170,
      sorter: (a, b) => a.Account.localeCompare(b.Account),
    },
    {
      title: "Quiz",
      children: [
        {
          title: "HTML",
          dataIndex: "HTML",
          key: "HTML",
          width: 90,
          sorter: (a, b) => a.HTML - b.HTML,
        },
        {
          title: "CSS",
          dataIndex: "CSS",
          key: "CSS",
          width: 90,
          sorter: (a, b) => a.CSS - b.CSS,
        },
        {
          title: "Quiz 3",
          dataIndex: "Quiz3",
          key: "Quiz3",
          width: 100,
          sorter: (a, b) => a.Quiz3 - b.Quiz3,
        },
        {
          title: "Quiz 4",
          dataIndex: "Quiz4",
          key: "Quiz4",
          width: 100,
          sorter: (a, b) => a.Quiz4 - b.Quiz4,
        },
        {
          title: "Quiz 5",
          dataIndex: "Quiz5",
          key: "Quiz5",
          width: 100,
          sorter: (a, b) => a.Quiz5 - b.Quiz5,
        },
        {
          title: "Quiz 6",
          dataIndex: "Quiz6",
          key: "Quiz6",
          width: 100,
          sorter: (a, b) => a.Quiz6 - b.Quiz6,
        },
        {
          title: "Avg",
          dataIndex: "AvgQuiz",
          key: "AvgQuiz",
          width: 90,
          sorter: (a, b) => a.AvgQuiz - b.AvgQuiz,
        },
      ],
    },
    {
      title: "ASM",
      children: [
        {
          title: "Practice 1",
          dataIndex: "Practice1",
          key: "Practice1",
          width: 120,
          sorter: (a, b) => a.Practice1 - b.Practice1,
        },
        {
          title: "Practice 2",
          dataIndex: "Practice2",
          key: "Practice2",
          width: 120,
          sorter: (a, b) => a.Practice2 - b.Practice2,
        },
        {
          title: "Practice 3",
          dataIndex: "Practice3",
          key: "Practice3",
          width: 120,
          sorter: (a, b) => a.Practice3 - b.Practice3,
        },
        {
          title: "Avg",
          dataIndex: "AvgASM",
          key: "AvgASM",
          width: 80,
          sorter: (a, b) => a.AvgASM - b.AvgASM,
        },
      ],
    },
    {
      title: "Quiz Final",
      dataIndex: "QuizFinal",
      key: "QuizFinal",
      width: 100,
      sorter: (a, b) => a.QuizFinal - b.QuizFinal,
    },
    {
      title: "Audit",
      dataIndex: "Audit",
      key: "Audit",
      width: 90,
      sorter: (a, b) => a.Audit - b.Audit,
    },
    {
      title: "Practice Final",
      dataIndex: "PracticeFinal",
      key: "PracticeFinal",
      width: 100,
      sorter: (a, b) => a.PracticeFinal - b.PracticeFinal,
    },
    {
      title: "Final Module",
      dataIndex: "FinalModule",
      key: "FinalModule",
      width: 100,
      sorter: (a, b) => a.FinalModule - b.FinalModule,
    },
    {
      title: "GPA Module",
      dataIndex: "GPAModule",
      key: "GPAModule",
      width: 100,
      sorter: (a, b) => a.GPAModule - b.GPAModule,
    },
    {
      title: "Level Module",
      dataIndex: "LevelModule",
      key: "LevelModule",
      width: 100,
      sorter: (a, b) => a.LevelModule - b.LevelModule,
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      width: 90,
      filters: [
        {
          text: "Passed",
          value: true,
        },
        {
          text: "Failed",
          value: false,
        },
      ],
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value, record) => record.Status === value,
      render: (_value, record) => (
        <StatusTag
          status={record.Status}
          content={getCourseStatus(record.Status)}
        />
      ),
    },
    // mock
    {
      title: "Mock",
      dataIndex: "Mock",
      key: "Mock",
      width: 90,
      sorter: (a, b) => a.Mock - b.Mock,
    },
    {
      title: "Final Module",
      dataIndex: "MockFinalModule",
      key: "MockFinalModule",
      width: 90,
      sorter: (a, b) => a.MockFinalModule - b.MockFinalModule,
    },
    {
      title: "GPA Module",
      dataIndex: "MockGPAModule",
      key: "MockGPAModule",
      width: 90,
      sorter: (a, b) => a.MockGPAModule - b.MockGPAModule,
    },
    {
      title: "Level Module",
      dataIndex: "MockLevelModule",
      key: "MockLevelModule",
      width: 90,
      sorter: (a, b) => a.MockLevelModule - b.MockLevelModule,
    },
    {
      title: "Status",
      dataIndex: "MockStatus",
      key: "MockStatus",
      width: 90,
      filters: [
        {
          text: "Passed",
          value: true,
        },
        {
          text: "Failed",
          value: false,
        },
      ],
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value, record) => record.MockStatus === value,
      render: (_value, record) => (
        <StatusTag
          status={record.MockStatus}
          content={getCourseStatus(record.MockStatus)}
        />
      ),
    },
  ];

  const scoresWithKeys = scores.map((student) => ({
    ...student,
    key: student.ID,
  }));
  return (
    <div
      style={{
        maxHeight: "70%",
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
      }}
      className="ant-table-container"
    >
      <Table
        // onChange={onChange}
        columns={columns}
        dataSource={scoresWithKeys}
        bordered
        // rowSelection={rowSelection}
        size="middle"
        scroll={{ x: "max-content" }}
        style={{ flex: 1, overflowY: "auto" }}
        pagination={{
          defaultPageSize: 10,
          pageSizeOptions: ["10", "20", "50", "100"],
          total: scoresWithKeys.length,
          showSizeChanger: true,
        }}
        loading={loading}
      />
    </div>
  );
};

export default ScoreInClassesTable;
