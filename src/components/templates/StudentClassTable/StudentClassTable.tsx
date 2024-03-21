/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { IoSettingsOutline } from "react-icons/io5";
import { IStudentClass } from "../../../interfaces/student-class.interface";
import { generateFilters } from "../../../utils/GenerateFilter";
import CustomDropdown from "../../molecules/CustomDropdown/CustomDropdown";
import StatusTag from "../../atoms/StatusTag/StatusTag";

interface StudentClassTableProps {
  classStudent: IStudentClass[];
  loading: boolean;
  handleDataChange: () => void;
  setStudentSelect: React.Dispatch<React.SetStateAction<IStudentClass[]>>;
}

const StudentClassTable: React.FC<StudentClassTableProps> = ({
  classStudent,
  loading,
  handleDataChange,
  setStudentSelect,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const filters: { [key: string]: ReturnType<typeof generateFilters> } = {
    FullName: generateFilters(classStudent, "FullName"),
    DateOfBirth: generateFilters(classStudent, "DateOfBirth"),
    Email: generateFilters(classStudent, "Email"),
    Phone: generateFilters(classStudent, "Phone"),
    GPA: generateFilters(classStudent, "GPA"),
    RECer: generateFilters(classStudent, "RECer"),
    Status: generateFilters(classStudent, "Status"),
  };

  const columns: TableColumnsType<IStudentClass> = [
    {
      title: "Full name",
      dataIndex: "FullName",
      key: "FullName",
      fixed: "left",
      sorter: (a, b) => a.FullName.localeCompare(b.FullName),
      filters: filters.FullName,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.FullName.indexOf(value as string) === 0,
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
      render: (dateOfBirth: string) => dateOfBirth,
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
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      sorter: (a, b) => a.Status.localeCompare(b.Status),
      filters: filters.Status,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.Status.indexOf(value as string) === 0,
      render: (status) => (
        <div className="centered">
          <StatusTag status={status} content={status} />
        </div>
      ),
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
            isDeleteStudentInClass
            handleDataChange={handleDataChange}
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

  useEffect(() => {
    // Map selectedRowKeys to actual IStudent objects
    const selectedStudents = scoresWithKeys.filter((selectedStudent) =>
      selectedRowKeys.includes(selectedStudent.key)
    );

    // Update the state using setStudentSelect
    setStudentSelect(selectedStudents);
  }, [selectedRowKeys, setStudentSelect]);

  useEffect(() => {
    // Map selectedRowKeys to actual IStudent objects
    const selectedStudents = scoresWithKeys.filter((selectedStudent) =>
      selectedRowKeys.includes(selectedStudent.key)
    );

    // Update the state using setStudentSelect
    setStudentSelect(selectedStudents);
  }, [selectedRowKeys, setStudentSelect]);

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
