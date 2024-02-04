import React, { useState } from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { Button } from "antd";
import { IStudent } from "../../../../Services/Interfaces & Types/Interfaces";
import { generateFilters } from "../../../../Services/GlobalFunctions/GenerateFilter";
import { IoSettingsOutline } from "react-icons/io5";
import ActionDropdown from "../../../../Components/ActionDropdown/ActionDropdown";

interface StudentByIDProps {
  student: IStudent[];
  loading: boolean;
}

const StudentByID: React.FC<StudentByIDProps> = ({ student, loading }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const filters: { [key: string]: ReturnType<typeof generateFilters> } = {
    Name: generateFilters(student, "Name"),
    DateOfBirth: generateFilters(student, "DateOfBirth"),
    Email: generateFilters(student, "Email"),
    Phone: generateFilters(student, "Phone"),
    GPA: generateFilters(student, "GPA"),
    RECer: generateFilters(student, "RECer"),
  };

  const columns: TableColumnsType<IStudent> = [
    {
      title: "Full name",
      dataIndex: "Name",
      key: "Name",
      sorter: (a, b) => a.Name.localeCompare(b.Name),
      filters: filters.Name,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.Name.indexOf(value as string) === 0,
    },
    {
      title: "Date of Birth",
      dataIndex: "DateOfBirth",
      key: "DateOfBirth",
      sorter: (a, b) =>
        a.DateOfBirth.toString().localeCompare(b.DateOfBirth.toString()),
      filters: filters.DateOfBirth,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.DateOfBirth.toString().indexOf(value as string) === 0,
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
      title: "GPA",
      dataIndex: "GPA",
      key: "GPA",
      sorter: (a, b) => a.GPA - b.GPA,
      filters: filters.GPA,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) => record.GPA === value,
    },
    {
      title: "RECer",
      dataIndex: "RECer",
      key: "RECer",
      sorter: (a, b) => a.RECer.localeCompare(b.RECer),
      filters: filters.RECer,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.RECer.indexOf(value as string) === 0,
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
      width: 100,
      render: (value, record) => (
        <ActionDropdown
          id={record?.ID}
          viewLink="/student"
          editLink="/student/edit"
          isDelete={true}
        />
      ),
    },
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const scoresWithKeys = student.map((student, index) => ({
    ...student,
    key: student.ID,
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

export default StudentByID;
