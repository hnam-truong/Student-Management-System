import React from "react";
import { Table, TableColumnsType } from "antd";
import { IScore } from "../../../interfaces/score.interface";
import { generateFilters } from "../../../utils/GenerateFilter";
import StatusTag from "../../atoms/StatusTag/StatusTag";
import { getCourseStatus } from "../../../utils/GenerateStatus";

interface ScoreInClassesTableProps {
  scores: IScore[];
  loading: boolean;
}
const ScoreInClassesTable = ({ scores, loading }: ScoreInClassesTableProps) => {
  const filters: { [key: string]: ReturnType<typeof generateFilters> } = {
    FullName: generateFilters(scores, "FullName"),
    Account: generateFilters(scores, "Account"),
    HTML: generateFilters(scores, "HTML"),
    CSS: generateFilters(scores, "CSS"),
    Quiz3: generateFilters(scores, "Quiz3"),
    Quiz4: generateFilters(scores, "Quiz4"),
    Quiz5: generateFilters(scores, "Quiz5"),
    Quiz6: generateFilters(scores, "Quiz6"),
    AvgQuiz: generateFilters(scores, "AvgQuiz"),
    Practice1: generateFilters(scores, "Practice1"),
    Practice2: generateFilters(scores, "Practice2"),
    Practice3: generateFilters(scores, "Practice3"),
    AvgASM: generateFilters(scores, "AvgASM"),
    QuizFinal: generateFilters(scores, "QuizFinal"),
    PracticeFinal: generateFilters(scores, "PracticeFinal"),
    Audit: generateFilters(scores, "Audit"),
    FinalModule: generateFilters(scores, "FinalModule"),
    GPAModule: generateFilters(scores, "GPAModule"),
    LevelModule: generateFilters(scores, "LevelModule"),
    Mock: generateFilters(scores, "Mock"),
    MockFinalModule: generateFilters(scores, "MockFinalModule"),
    MockGPAModule: generateFilters(scores, "MockGPAModule"),
    MockLevelModule: generateFilters(scores, "MockLevelModule"),
  };
  const columns: TableColumnsType<IScore> = [
    {
      title: "Class ID",
      dataIndex: "FullName",
      key: "FullName",
      width: 170,
      fixed: "left",
      sorter: (a, b) => a.FullName.localeCompare(b.FullName),
      filters: filters.FullName,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.FullName.indexOf(value as string) === 0,
    },
    {
      title: "Class Name",
      dataIndex: "Account",
      key: "Account",
      width: 170,
      sorter: (a, b) => a.Account.localeCompare(b.Account),
      filters: filters.Account,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.Account.indexOf(value as string) === 0,
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
          filters: filters.HTML,
          filterSearch: true,
          filterMode: "tree",
          onFilter: (value: boolean | React.Key, record) =>
            record.HTML === value,
        },
        {
          title: "CSS",
          dataIndex: "CSS",
          key: "CSS",
          width: 90,
          sorter: (a, b) => a.CSS - b.CSS,
          filters: filters.CSS,
          filterSearch: true,
          filterMode: "tree",
          onFilter: (value: boolean | React.Key, record) =>
            record.CSS === value,
        },
        {
          title: "Quiz 3",
          dataIndex: "Quiz3",
          key: "Quiz3",
          width: 100,
          sorter: (a, b) => a.Quiz3 - b.Quiz3,
          filters: filters.Quiz3,
          filterSearch: true,
          filterMode: "tree",
          onFilter: (value: boolean | React.Key, record) =>
            record.Quiz3 === value,
        },
        {
          title: "Quiz 4",
          dataIndex: "Quiz4",
          key: "Quiz4",
          width: 100,
          sorter: (a, b) => a.Quiz4 - b.Quiz4,
          filters: filters.Quiz4,
          filterSearch: true,
          filterMode: "tree",
          onFilter: (value: boolean | React.Key, record) =>
            record.Quiz4 === value,
        },
        {
          title: "Quiz 5",
          dataIndex: "Quiz5",
          key: "Quiz5",
          width: 100,
          sorter: (a, b) => a.Quiz5 - b.Quiz5,
          filters: filters.Quiz5,
          filterSearch: true,
          filterMode: "tree",
          onFilter: (value: boolean | React.Key, record) =>
            record.Quiz5 === value,
        },
        {
          title: "Quiz 6",
          dataIndex: "Quiz6",
          key: "Quiz6",
          width: 100,
          sorter: (a, b) => a.Quiz6 - b.Quiz6,
          filters: filters.Quiz6,
          filterSearch: true,
          filterMode: "tree",
          onFilter: (value: boolean | React.Key, record) =>
            record.Quiz6 === value,
        },
        {
          title: "Avg",
          dataIndex: "AvgQuiz",
          key: "AvgQuiz",
          width: 90,
          sorter: (a, b) => a.AvgQuiz - b.AvgQuiz,
          filters: filters.AvgQuiz,
          filterSearch: true,
          filterMode: "tree",
          onFilter: (value: boolean | React.Key, record) =>
            record.AvgQuiz === value,
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
          filters: filters.Practice1,
          filterSearch: true,
          filterMode: "tree",
          onFilter: (value: boolean | React.Key, record) =>
            record.Practice1 === value,
        },
        {
          title: "Practice 2",
          dataIndex: "Practice2",
          key: "Practice2",
          width: 120,
          sorter: (a, b) => a.Practice2 - b.Practice2,
          filters: filters.Practice2,
          filterSearch: true,
          filterMode: "tree",
          onFilter: (value: boolean | React.Key, record) =>
            record.Practice2 === value,
        },
        {
          title: "Practice 3",
          dataIndex: "Practice3",
          key: "Practice3",
          width: 120,
          sorter: (a, b) => a.Practice3 - b.Practice3,
          filters: filters.Practice3,
          filterSearch: true,
          filterMode: "tree",
          onFilter: (value: boolean | React.Key, record) =>
            record.Practice3 === value,
        },
        {
          title: "Avg",
          dataIndex: "AvgASM",
          key: "AvgASM",
          width: 80,
          sorter: (a, b) => a.AvgASM - b.AvgASM,
          filters: filters.AvgASM,
          filterSearch: true,
          filterMode: "tree",
          onFilter: (value: boolean | React.Key, record) =>
            record.AvgASM === value,
        },
      ],
    },
    {
      title: "Quiz Final",
      dataIndex: "QuizFinal",
      key: "QuizFinal",
      width: 100,
      sorter: (a, b) => a.QuizFinal - b.QuizFinal,
      filters: filters.QuizFinal,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.QuizFinal === value,
    },
    {
      title: "Audit",
      dataIndex: "Audit",
      key: "Audit",
      width: 90,
      sorter: (a, b) => a.Audit - b.Audit,
      filters: filters.Audit,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) => record.Audit === value,
    },
    {
      title: "Practice Final",
      dataIndex: "PracticeFinal",
      key: "PracticeFinal",
      width: 100,
      sorter: (a, b) => a.PracticeFinal - b.PracticeFinal,
      filters: filters.PracticeFinal,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.PracticeFinal === value,
    },
    {
      title: "Final Module",
      dataIndex: "FinalModule",
      key: "FinalModule",
      width: 100,
      sorter: (a, b) => a.FinalModule - b.FinalModule,
      filters: filters.FinalModule,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.FinalModule === value,
    },
    {
      title: "GPA Module",
      dataIndex: "GPAModule",
      key: "GPAModule",
      width: 100,
      sorter: (a, b) => a.GPAModule - b.GPAModule,
      filters: filters.GPAModule,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.GPAModule === value,
    },
    {
      title: "Level Module",
      dataIndex: "LevelModule",
      key: "LevelModule",
      width: 100,
      sorter: (a, b) => a.LevelModule - b.LevelModule,
      filters: filters.LevelModule,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.LevelModule === value,
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
      filters: filters.Mock,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) => record.Mock === value,
    },

    {
      title: "Final Module",
      dataIndex: "MockFinalModule",
      key: "MockFinalModule",
      width: 90,
      sorter: (a, b) => a.MockFinalModule - b.MockFinalModule,
      filters: filters.MockFinalModule,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.MockFinalModule === value,
    },
    {
      title: "GPA Module",
      dataIndex: "MockGPAModule",
      key: "MockGPAModule",
      width: 90,
      sorter: (a, b) => a.MockGPAModule - b.MockGPAModule,
      filters: filters.MockGPAModule,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.MockGPAModule === value,
    },
    {
      title: "Level Module",
      dataIndex: "MockLevelModule",
      key: "MockLevelModule",
      width: 90,
      sorter: (a, b) => a.MockLevelModule - b.MockLevelModule,
      filters: filters.MockLevelModule,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.MockLevelModule === value,
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
