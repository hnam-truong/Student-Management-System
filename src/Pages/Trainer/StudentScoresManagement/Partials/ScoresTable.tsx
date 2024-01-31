import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import ActionPopUp from "./ActionPopUp";
import { IScore } from "../../../../Services/Interfaces & Types/Interfaces";
import { generateFilters } from "../../../../Services/GlobalFunctions/GenerateFilter";
import "../StudentScoresManagement.scss";
import StatusButton from "../../../../Components/StatusButton/StatusButton";

interface ScoresTableProps {
  scores: IScore[];
  loading: boolean;
}

const ScoresTable: React.FC<ScoresTableProps> = ({ scores, loading }) => {
  const filtersFullName = generateFilters(scores, "FullName");
  const filtersAccount = generateFilters(scores, "Account");
  const filtersHTML = generateFilters(scores, "HTML");
  const filtersCSS = generateFilters(scores, "CSS");
  const filtersQuiz3 = generateFilters(scores, "Quiz3");
  const filtersQuiz4 = generateFilters(scores, "Quiz4");
  const filtersQuiz5 = generateFilters(scores, "Quiz5");
  const filtersQuiz6 = generateFilters(scores, "Quiz6");
  const filtersAvgQuiz = generateFilters(scores, "AvgQuiz");
  const filtersPractice1 = generateFilters(scores, "Practice1");
  const filtersPractice2 = generateFilters(scores, "Practice2");
  const filtersPractice3 = generateFilters(scores, "Practice3");
  const filtersAvgASM = generateFilters(scores, "AvgASM");
  const filtersQuizFinal = generateFilters(scores, "QuizFinal");
  const filtersPracticeFinal = generateFilters(scores, "PracticeFinal");
  const filtersAudit = generateFilters(scores, "Audit");
  const filtersFinalModule = generateFilters(scores, "FinalModule");
  const filtersGPAModule = generateFilters(scores, "GPAModule");
  const filtersLevelModule = generateFilters(scores, "LevelModule");
  const filtersMock = generateFilters(scores, "Mock");
  const filtersMockFinalModule = generateFilters(scores, "MockFinalModule");
  const filtersMockGPAModule = generateFilters(scores, "MockGPAModule");
  const filtersMockLevelModule = generateFilters(scores, "MockLevelModule");
  // Mock API function to generate a mock status

  const columns: TableColumnsType<IScore> = [
    {
      title: "Full Name",
      dataIndex: "FullName",
      key: "FullName",
      width: 170,
      fixed: "left",
      sorter: (a, b) => a.FullName.localeCompare(b.FullName),
      filters: filtersFullName,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.FullName.indexOf(value as string) === 0,
    },
    {
      title: "Account",
      dataIndex: "Account",
      key: "Account",
      width: 170,
      sorter: (a, b) => a.Account.localeCompare(b.Account),
      filters: filtersAccount,
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
          filters: filtersHTML,
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
          filters: filtersCSS,
          filterSearch: true,
          filterMode: "tree",
          onFilter: (value: boolean | React.Key, record) =>
            record.CSS === value,
        },
        {
          title: "Quiz3",
          dataIndex: "Quiz3",
          key: "Quiz3",
          width: 90,
          sorter: (a, b) => a.Quiz3 - b.Quiz3,
          filters: filtersQuiz3,
          filterSearch: true,
          filterMode: "tree",
          onFilter: (value: boolean | React.Key, record) =>
            record.Quiz3 === value,
        },
        {
          title: "Quiz4",
          dataIndex: "Quiz4",
          key: "Quiz4",
          width: 90,
          sorter: (a, b) => a.Quiz4 - b.Quiz4,
          filters: filtersQuiz4,
          filterSearch: true,
          filterMode: "tree",
          onFilter: (value: boolean | React.Key, record) =>
            record.Quiz4 === value,
        },
        {
          title: "Quiz5",
          dataIndex: "Quiz5",
          key: "Quiz5",
          width: 90,
          sorter: (a, b) => a.Quiz5 - b.Quiz5,
          filters: filtersQuiz5,
          filterSearch: true,
          filterMode: "tree",
          onFilter: (value: boolean | React.Key, record) =>
            record.Quiz5 === value,
        },
        {
          title: "Quiz6",
          dataIndex: "Quiz6",
          key: "Quiz6",
          width: 90,
          sorter: (a, b) => a.Quiz6 - b.Quiz6,
          filters: filtersQuiz6,
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
          filters: filtersAvgQuiz,
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
          filters: filtersPractice1,
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
          filters: filtersPractice2,
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
          filters: filtersPractice3,
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
          filters: filtersAvgASM,
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
      filters: filtersQuizFinal,
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
      filters: filtersAudit,
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
      filters: filtersPracticeFinal,
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
      filters: filtersFinalModule,
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
      filters: filtersGPAModule,
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
      filters: filtersLevelModule,
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
      render: (value, record) => <StatusButton status={record.Status} />,
    },
    //mock
    {
      title: "Mock",
      dataIndex: "Mock",
      key: "Mock",
      width: 90,
      sorter: (a, b) => a.Mock - b.Mock,
      filters: filtersMock,
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
      filters: filtersMockFinalModule,
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
      filters: filtersMockGPAModule,
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
      filters: filtersMockLevelModule,
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
      render: (value, record) => <StatusButton status={record.MockStatus} />,
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      width: 60,
      render: (value, record: IScore) => <ActionPopUp />,
    },
  ];

  const scoresWithKeys = scores.map((score, index) => ({
    ...score,
    key: score.ID,
  }));
  return (
    <div
      style={{
        maxHeight: "70%",
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
      }}
    >
      <Table
        columns={columns}
        dataSource={scoresWithKeys}
        bordered
        size="middle"
        scroll={{ x: "max-content" }}
        style={{ flex: 1, overflowY: "auto" }}
        pagination={{
          defaultPageSize: 5,
          pageSizeOptions: ["5", "10", "20", "50", "100"],
          total: scoresWithKeys.length,
          showSizeChanger: true,
        }}
        loading={loading}
      />
    </div>
  );
};

export default ScoresTable;
