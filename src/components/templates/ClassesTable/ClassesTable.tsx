import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { IoSettingsOutline } from "react-icons/io5";
import { generateFilters } from "../../../utils/GenerateFilter";
import CustomDropdown from "../../molecules/CustomDropdown/CustomDropdown";
import { IClass } from "../../../interfaces/class.interface";
import formatDate from "../../../utils/DateFormatting";
import ClassStatus from "../../atoms/ClassStatus/ClassStatus";

interface ClassTableProps {
  classes: IClass[];
  loading: boolean;
}

const ClassTable: React.FC<ClassTableProps> = ({ classes, loading }) => {
  const filters: { [key: string]: ReturnType<typeof generateFilters> } = {
    ClassName: generateFilters(classes, "ClassName"),
    ClassID: generateFilters(classes, "ClassID"),
    CreatedDate: generateFilters(classes, "CreatedDate"),
    CreatedBy: generateFilters(classes, "CreatedBy"),
    Duration: generateFilters(classes, "Duration"),
    Status: generateFilters(classes, "Status"),
    Location: generateFilters(classes, "Location"),
  };

  const columns: TableColumnsType<IClass> = [
    {
      title: "Class",
      dataIndex: "ClassName",
      key: "ClassName",
      sorter: (a, b) => a.ClassName.localeCompare(b.ClassName),
      filters: filters.ClassName,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.ClassName.indexOf(value as string) === 0,
    },
    {
      title: "Class Code",
      dataIndex: "ClassID",
      key: "ClassID",
      sorter: (a, b) => a.ClassID.localeCompare(b.ClassID),
      filters: filters.ClassID,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.ClassID.indexOf(value as string) === 0,
    },
    {
      title: "Created on",
      dataIndex: "CreatedDate",
      key: "CreatedDate",
      sorter: (a, b) =>
        a.CreatedDate.toString().localeCompare(b.CreatedDate.toString()),
      filters: filters.CreatedDate,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.CreatedDate.toString().indexOf(value as string) === 0,
      render: (CreatedDate: string) => formatDate(CreatedDate),
    },

    {
      title: "Created by",
      dataIndex: "CreatedBy",
      key: "CreatedBy",
      sorter: (a, b) => a.CreatedBy.localeCompare(b.CreatedBy),
      filters: filters.CreatedBy,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.CreatedBy.indexOf(value as string) === 0,
    },
    {
      title: "Duration",
      dataIndex: "Duration",
      key: "Duration",
      sorter: (a, b) => a.Duration - b.Duration,
      filters: filters.Duration,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.Duration === value,
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      width: 90,
      filters: [
        {
          text: "Opening",
          value: true,
        },
        {
          text: "Completed",
          value: false,
        },
      ],
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value, record) => record.Status === value,
      render: (_value, record) => (
        <ClassStatus status={record.Status} isBorder={false} />
      ),
    },
    {
      title: "Location",
      dataIndex: "Location",
      key: "Location",
      sorter: (a, b) => a.Location.localeCompare(b.Location),
      filters: filters.Location,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.Location.indexOf(value as string) === 0,
    },
    {
      title: (
        <div className="centered">
          <IoSettingsOutline size={20} />
        </div>
      ),
      key: "operation",
      width: 80,
      render: (_value, record) => (
        <div className="centered">
          <CustomDropdown
            id={record?.ClassID}
            viewLink="/class"
            textView="View"
            isEdit={false}
            handleDataChange={() => {}}
          />
        </div>
      ),
    },
  ];

  const scoresWithKeys = classes.map((_class) => ({
    ..._class,
    key: _class.ClassID,
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
        size="middle"
        scroll={{ x: "max-content" }}
        style={{ flex: 1, overflowY: "auto" }}
        columns={columns}
        dataSource={scoresWithKeys}
        loading={loading}
        pagination={{
          defaultPageSize: 10,
          pageSizeOptions: ["10", "20", "50", "100"],
          total: scoresWithKeys.length,
          showSizeChanger: true,
        }}
        bordered
      />
    </div>
  );
};

export default ClassTable;
