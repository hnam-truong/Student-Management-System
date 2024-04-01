/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { IStudent } from "../../../interfaces/student.interface";
import CustomDropdown from "../../molecules/CustomDropdown/CustomDropdown";
import {
  getDataFromCache,
  storeDataToCache,
} from "../../../utils/StoreDataToCache";
import { exportStudentToExcel } from "../../../utils/ExportToExcel";
import ActionTitle from "../../atoms/ActionTitle/ActionTitle";

interface StudentTableProps {
  student: IStudent[];
  loading: boolean;
  isExport: boolean;
  completedExport: () => void;
  handleDataChange: () => void;
  setStudentSelect: React.Dispatch<React.SetStateAction<IStudent[]>>;
}

const StudentTable: React.FC<StudentTableProps> = ({
  student,
  loading,
  isExport,
  completedExport,
  handleDataChange,
  setStudentSelect,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedRows, setSelectedRows] = useState<IStudent[]>([]);

  const columns: TableColumnsType<IStudent> = [
    {
      title: "Full name",
      dataIndex: "Name",
      key: "Name",
      sorter: (a, b) => a.Name.localeCompare(b.Name),
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
      sorter: (a, b) => a.Email.localeCompare(b.Email),
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      key: "Phone",
      fixed: "left",
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
      title: <ActionTitle />,
      key: "operation",
      width: 80,
      render: (_value, record) => (
        <div className="centered">
          <CustomDropdown
            id={record?.ID}
            viewLink="/student"
            editLink="/student/edit"
            isDelete
            handleDataChange={handleDataChange}
          />
        </div>
      ),
    },
  ];

  const onSelectChange = (
    selectedRowKey: React.Key[],
    selectedRow: IStudent[]
  ) => {
    setSelectedRowKeys(selectedRowKey);
    setSelectedRows(selectedRow);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const scoresWithKeys = student.map((_student) => ({
    ..._student,
    key: _student.ID,
  }));

  const onChange: TableProps<IStudent>["onChange"] = (
    _pagination,
    _filters,
    _sorter,
    extra
  ) => {
    const dataStorage = extra.currentDataSource;
    storeDataToCache(dataStorage, "student");
  };

  const handleExport = () => {
    const dataCache = getDataFromCache("student") as IStudent[];
    const dataExport =
      selectedRowKeys.length > 0 ? selectedRows : dataCache || scoresWithKeys;
    exportStudentToExcel(columns, dataExport);
  };
  if (isExport) {
    handleExport();
    setTimeout(() => {
      completedExport();
    }, 200);
  }

  useEffect(() => {
    // Map selectedRowKeys to actual IStudent objects
    const selectedStudents = scoresWithKeys.filter((selectedStudent) =>
      selectedRowKeys.includes(selectedStudent.key)
    );

    // Update the state using setStudentSelect
    setStudentSelect(selectedStudents);
  }, [selectedRowKeys, setStudentSelect]);

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
        rowSelection={rowSelection}
        columns={columns}
        dataSource={scoresWithKeys}
        loading={loading}
        onChange={onChange}
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

export default StudentTable;
