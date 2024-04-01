/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { IStudentClass } from "../../../interfaces/student-class.interface";
import CustomDropdown from "../../molecules/CustomDropdown/CustomDropdown";
import StatusTag from "../../atoms/StatusTag/StatusTag";
import ActionTitle from "../../atoms/ActionTitle/ActionTitle";

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

  const columns: TableColumnsType<IStudentClass> = [
    {
      title: "Full name",
      dataIndex: "FullName",
      key: "FullName",
      fixed: "left",
      sorter: (a, b) => a.FullName.localeCompare(b.FullName),
    },
    {
      title: "Date of Birth",
      dataIndex: "DateOfBirth",
      key: "DateOfBirth",
      sorter: (a, b) =>
        a.DateOfBirth.toString().localeCompare(b.DateOfBirth.toString()),
      render: (dateOfBirth: string) => dateOfBirth,
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      key: "Phone",
    },
    {
      title: "GPA",
      dataIndex: "GPA",
      key: "GPA",
      sorter: (a, b) => a.GPA - b.GPA,
    },
    {
      title: "RECer",
      dataIndex: "RECer",
      key: "RECer",
      sorter: (a, b) => a.RECer.localeCompare(b.RECer),
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      sorter: (a, b) => a.Status.localeCompare(b.Status),
      render: (status) => (
        <div className="centered">
          <StatusTag status={status} content={status} />
        </div>
      ),
    },
    {
      title: <ActionTitle />,
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
