/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from "react";
import { Table, Button } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { IoSettingsOutline } from "react-icons/io5";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";
import { generateFilters } from "../../../utils/GenerateFilter";
import CustomDropdown from "../../molecules/CustomDropdown/CustomDropdown";
import { exportReserveStudentToExcel } from "../../../utils/ExportToExcel";
import {
  getDataFromCache,
  storeDataToCache,
} from "../../../utils/StoreDataToCache";

interface ReservedTableProps {
  reservedStudent: IReservedStudent[] | null;
  loading: boolean;
  isExport: boolean;
  completedExport: () => void;
}

const ReservedTable: React.FC<ReservedTableProps> = ({
  reservedStudent,
  loading,
  isExport,
  completedExport,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const filters: { [key: string]: ReturnType<typeof generateFilters> } = {
    FullName: generateFilters(
      (reservedStudent || []) as IReservedStudent[],
      "FullName"
    ),
    StudentID: generateFilters(
      (reservedStudent || []) as IReservedStudent[],
      "StudentID"
    ),
    Gender: generateFilters(
      (reservedStudent || []) as IReservedStudent[],
      "Gender"
    ),
    DateOfBirth: generateFilters(
      (reservedStudent || []) as IReservedStudent[],
      "DateOfBirth"
    ),
    Hometown: generateFilters(
      (reservedStudent || []) as IReservedStudent[],
      "Hometown"
    ),
    Class: generateFilters(
      (reservedStudent || []) as IReservedStudent[],
      "Class"
    ),
    ReservedModule: generateFilters(
      (reservedStudent || []) as IReservedStudent[],
      "ReservedModule"
    ),
    Reason: generateFilters(
      (reservedStudent || []) as IReservedStudent[],
      "Reason"
    ),
    ReservedStartDate: generateFilters(
      (reservedStudent || []) as IReservedStudent[],
      "ReservedStartDate"
    ),
    ReservedEndDate: generateFilters(
      (reservedStudent || []) as IReservedStudent[],
      "ReservedEndDate"
    ),
    Status: generateFilters(
      (reservedStudent || []) as IReservedStudent[],
      "Status"
    ),
  };

  const columns: TableColumnsType<IReservedStudent> = [
    {
      title: "Full name",
      dataIndex: "FullName",
      key: "FullName",
      sorter: (a: { FullName: string }, b: { FullName: string }) =>
        a.FullName.localeCompare(b.FullName),
      filters: filters.FullName,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (
        value: boolean | React.Key,
        record: { FullName: string | string[] }
      ) => record.FullName.indexOf(value as string) === 0,
    },
    {
      title: "Student code",
      dataIndex: "StudentID",
      key: "StudentID",
      sorter: (a: { StudentID: string }, b: { StudentID: string }) =>
        a.StudentID.localeCompare(b.StudentID),
      filters: filters.StudentID,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (
        value: boolean | React.Key,
        record: { StudentID: string | string[] }
      ) => record.StudentID.indexOf(value as string) === 0,
    },
    {
      title: "Gender",
      dataIndex: "Gender",
      key: "Gender",
      filters: [
        { text: "Male", value: "1" },
        { text: "Female", value: "0" },
      ],
      filterMode: "tree",
      onFilter: (
        value: boolean | React.Key,
        record: { Gender: boolean | React.Key }
      ) => record.Gender === value,
      render: (record) => (record.Gender ? "Male" : "Female"),
    },

    {
      title: "Birthday",
      dataIndex: "DateOfBirth",
      key: "DateOfBirth",
      sorter: (
        a: { DateOfBirth: { toString: () => string } },
        b: { DateOfBirth: { toString: () => string } }
      ) => a.DateOfBirth.toString().localeCompare(b.DateOfBirth.toString()),
      filters: filters.DateOfBirth,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (
        value: boolean | React.Key,
        record: { DateOfBirth: { toString: () => string | string[] } }
      ) => record.DateOfBirth.toString().indexOf(value as string) === 0,
    },
    {
      title: "Hometown",
      dataIndex: "Hometown",
      key: "Hometown",
      filters: filters.Hometown,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (
        value: boolean | React.Key,
        record: { Hometown: string | string[] }
      ) => record.Hometown.indexOf(value as string) === 0,
    },
    {
      title: "Class",
      dataIndex: "Class",
      key: "Class",
      filters: filters.Class,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (
        value: boolean | React.Key,
        record: { Class: string | string[] }
      ) => record.Class.indexOf(value as string) === 0,
    },
    {
      title: "Reserve module",
      dataIndex: "ReservedModule",
      key: "ReservedModule",
      filters: filters.ReservedModule,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (
        value: boolean | React.Key,
        record: { ReservedModule: string | string[] }
      ) => record.ReservedModule.indexOf(value as string) === 0,
    },
    {
      title: "Reason",
      dataIndex: "Reason",
      key: "Reason",
      sorter: (a: { Reason: string }, b: { Reason: string }) =>
        a.Reason.localeCompare(b.Reason),
      filters: filters.Reason,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (
        value: boolean | React.Key,
        record: { Reason: string | string[] }
      ) => record.Reason.indexOf(value as string) === 0,
    },
    {
      title: "Reserve start date",
      dataIndex: "ReservedStartDate",
      key: "ReservedStartDate",
      // {
      //   title: "Birthday",
      //   dataIndex: "DateOfBirth",
      //   key: "DateOfBirth",
      //   sorter: (
      //     a: { DateOfBirth: { toString: () => string } },
      //     b: { DateOfBirth: { toString: () => string } }
      //   ) => a.DateOfBirth.toString().localeCompare(b.DateOfBirth.toString()),
      //   filters: filters.DateOfBirth,
      //   filterSearch: true,
      //   filterMode: "tree",
      //   onFilter: (
      //     value: boolean | React.Key,
      //     record: { DateOfBirth: { toString: () => string | string[] } }
      //   ) => record.DateOfBirth.toString().indexOf(value as string) === 0,
      // },
      sorter: (a: IReservedStudent, b: IReservedStudent) => {
        const dateA = a.ReservedStartDate
          ? new Date(a.ReservedStartDate)
          : new Date(0);
        const dateB = b.ReservedStartDate
          ? new Date(b.ReservedStartDate)
          : new Date(0);
        return dateA.getTime() - dateB.getTime();
      },

      filters: filters.ReservedStartDate,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record: IReservedStudent) => {
        const stringValue = record.ReservedStartDate?.toString() || "";
        return stringValue.includes(value as string);
      },
    },
    {
      title: "Reserve end date",
      dataIndex: "ReservedEndDate",
      key: "ReservedEndDate",
      sorter: (a: IReservedStudent, b: IReservedStudent) =>
        (a?.ReservedEndDate?.toString() || "").localeCompare(
          b?.ReservedEndDate?.toString() || ""
        ),
      filters: filters.ReservedEndDate,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record: IReservedStudent) => {
        const stringValue = record.ReservedEndDate?.toString() || "";
        return stringValue.includes(value as string);
      },
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      sorter: (a: { Status: string }, b: { Status: string }) =>
        a.Status.localeCompare(b.Status),
      filters: filters.Status,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (
        value: boolean | React.Key,
        record: { Status: string | string[] }
      ) => record.Status.indexOf(value as string) === 0,
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
      render: (record: { ID: string | undefined }) => (
        <CustomDropdown
          id={record?.ID}
          viewLink="/reserved-student"
          editLink="/reserved-student/edit"
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

  const scoresWithKeys = Array.isArray(reservedStudent)
    ? reservedStudent?.map((reservedStudent) => ({
        ...reservedStudent,
        key: reservedStudent.ID,
      }))
    : [];

  const onChange: TableProps<IReservedStudent>["onChange"] = (
    _pagination,
    _filters,
    _sorter,
    extra
  ) => {
    const dataStorage = extra.currentDataSource;
    storeDataToCache(dataStorage, "studentReserve");
  };

  const handleExport = () => {
    const dataCache = getDataFromCache("studentReserve") as IReservedStudent[];
    const dataExport = dataCache || scoresWithKeys;
    exportReserveStudentToExcel(columns, dataExport);
  };
  if (isExport) {
    handleExport();
    setTimeout(() => {
      completedExport();
    }, 1000);
  }

  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={scoresWithKeys}
        loading={loading}
        onChange={onChange}
      />
    </div>
  );
};

export default ReservedTable;
