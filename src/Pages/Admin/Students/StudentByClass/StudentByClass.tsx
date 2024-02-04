import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { Button } from "antd";
import { IClassStudent } from "../../../../Services/Interfaces & Types/Interfaces";
import { generateFilters } from "../../../../Services/GlobalFunctions/GenerateFilter";
import { IoSettingsOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

interface StudentByClassProps {
  classStudent: IClassStudent[];
  loading: boolean;
  setStudentSelect: any;
}

const StudentByClass: React.FC<StudentByClassProps> = ({
  classStudent,
  loading,
  setStudentSelect,
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
        <Button type="link">
          <IoSettingsOutline
            style={{ width: "20px", height: "20px", color: "white" }}
          />
        </Button>
      ),
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => (
        <Button type="link">
          <BsThreeDots
            style={{ width: "20px", height: "20px", color: "black" }}
          />
        </Button>
      ),
    },
    // Add more columns as needed based on your data structure
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  useEffect(() => {
    setStudentSelect(selectedRowKeys);
  }, [selectedRowKeys, setStudentSelect]);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const scoresWithKeys = classStudent.map((classStudent, index) => ({
    ...classStudent,
    key: classStudent.ID,
  }));

  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={scoresWithKeys}
        loading={loading}
      />
    </div>
  );
};

export default StudentByClass;
