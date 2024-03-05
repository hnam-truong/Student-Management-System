import React, { useState } from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { IoSettingsOutline } from "react-icons/io5";
import { IClassStudent } from "../../../interfaces/class-student.interface";
import { generateFilters } from "../../../utils/GenerateFilter";
import CustomDropdown from "../../molecules/CustomDropdown/CustomDropdown";

interface StudentClassTableProps {
  classStudent: IClassStudent[];
  loading: boolean;
}

const StudentClassTable: React.FC<StudentClassTableProps> = ({
  classStudent,
  loading,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const filters: { [key: string]: ReturnType<typeof generateFilters> } = {
    FullName: generateFilters(classStudent, "FullName"),
    Phone: generateFilters(classStudent, "Phone"),
    Email: generateFilters(classStudent, "Email"),
    Status: generateFilters(classStudent, "Status"),
    // Add more keys for other columns as needed
  };

  const columns: TableColumnsType<IClassStudent> = [
    {
      title: "Full name",
      dataIndex: "FullName",
      key: "FullName",
      sorter: (a, b) => a.FullName.localeCompare(b.FullName),
      filters: filters.FullName,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.FullName.indexOf(value as string) === 0,
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      key: "Phone",
      filters: filters.Phone,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.Phone.indexOf(value as string) === 0,
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
      filters: filters.Email,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.Email.indexOf(value as string) === 0,
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      sorter: (a, b) => a.Status.localeCompare(b.Status),
      filters: filters.Status,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.Status.indexOf(value as string) === 0,
    },
    {
      title: (
        <div className="centered">
          <IoSettingsOutline size={20} />
        </div>
      ),
      key: "operation",
      width: 80,
      render: (record: { ID: string | undefined }) => (
        <div className="centered">
          <CustomDropdown
            id={record?.ID}
            viewLink="/class100/student"
            editLink="/class100/student/edit"
            handleDataChange={() => {}}
          />
        </div>
      ),
    },
    // Add more columns as needed based on your data structure
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const scoresWithKeys = classStudent.map((student) => ({
    ...student,
    key: student.ID,
  }));

  return (
    <div className="ant-table-container">
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={scoresWithKeys}
        loading={loading}
        bordered
      />
    </div>
  );
};

export default StudentClassTable;
