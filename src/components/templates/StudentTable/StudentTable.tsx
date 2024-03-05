/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { IoSettingsOutline } from "react-icons/io5";
import { IStudent } from "../../../interfaces/student.interface";
import { generateFilters } from "../../../utils/GenerateFilter";
import CustomDropdown from "../../molecules/CustomDropdown/CustomDropdown";
import {
  getDataFromCache,
  storeDataToCache,
} from "../../../utils/StoreDataToCache";
import { exportStudentToExcel } from "../../../utils/ExportToExcel";

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
      fixed: "left",
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
        <div className="centered">
          <IoSettingsOutline size={20} />
        </div>
      ),
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
