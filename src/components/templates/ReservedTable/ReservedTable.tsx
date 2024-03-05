import React, { useState } from "react";
import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { IoSettingsOutline } from "react-icons/io5";
import { MdMoreHoriz } from "react-icons/md";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";
import { generateFilters } from "../../../utils/GenerateFilter";
import ModalReservation from "../../atoms/TerminalReservation/TerminalReservation";
import { exportReserveStudentToExcel } from "../../../utils/ExportToExcel";
import {
  getDataFromCache,
  storeDataToCache,
} from "../../../utils/StoreDataToCache";
import formatDate from "../../../utils/DateFormatting";
import Gender from "../../atoms/Gender/Gender";
import FontSizes from "../../../constants/FontSizes";

interface ReservedTableProps {
  reservedStudent: IReservedStudent[] | null;
  loading: boolean;
  isExport: boolean;
  isImport: boolean;
  completedExport: () => void;
  handleDataChange: () => void;
}

const ReservedTable: React.FC<ReservedTableProps> = ({
  reservedStudent,
  loading,
  isExport = false,
  isImport = false,
  completedExport,
  handleDataChange,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [rowClick, setRowClick] = useState<string>("");
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedRows, setSelectedRows] = useState<IReservedStudent[]>([]);
  console.log(reservedStudent);
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
      fixed: "left",
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
      fixed: "left",
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
        { text: "Male", value: true },
        { text: "Female", value: false },
      ],
      filterMode: "tree",
      onFilter: (
        value: boolean | React.Key,
        record: { Gender: boolean | React.Key }
      ) => record.Gender === value,
      render: (_value, record) => (
        <Gender gender={record.Gender} customFontSize={FontSizes.XsLarger} />
      ),
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
      render: (dateOfBirth: string) => formatDate(dateOfBirth),
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
      render: (reservedStartDate: string) => formatDate(reservedStartDate),
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
      render: (ReservedEndDate: string) => formatDate(ReservedEndDate),
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
        <div className="centered">
          <IoSettingsOutline size={20} />
        </div>
      ),
      key: "operation",
      width: 80,
      render: (record: IReservedStudent) => (
        <div className="centered">
          <ModalReservation
            isShow={isShow && rowClick === record?.ID}
            setIsShow={setIsShow}
            data={record}
            handleDataChange={handleDataChange}
          >
            <Button
              className="btn-more"
              onClick={() => setRowClick(record?.ID)}
            >
              <MdMoreHoriz />
            </Button>
          </ModalReservation>
        </div>
      ),
    },
  ];

  const onSelectChange = (
    selectedRowKey: React.Key[],
    selectedRow: IReservedStudent[]
  ) => {
    setSelectedRowKeys(selectedRowKey);
    setSelectedRows(selectedRow);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const scoresWithKeys = Array.isArray(reservedStudent)
    ? reservedStudent?.map((_reservedStudent) => ({
        ..._reservedStudent,
        key: _reservedStudent.ID,
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
    const dataExport =
      selectedRowKeys.length > 0 ? selectedRows : dataCache || scoresWithKeys;
    exportReserveStudentToExcel(columns, dataExport);
  };
  if (isExport) {
    handleExport();
    setTimeout(() => {
      completedExport();
    }, 200);
  }
  console.log("isImport", isImport);
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
        bordered
        pagination={{
          defaultPageSize: 10,
          pageSizeOptions: ["10", "20", "50", "100"],
          total: scoresWithKeys.length,
          showSizeChanger: true,
        }}
      />
    </div>
  );
};

export default ReservedTable;
