import React, { useState } from "react";
import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { MdMoreHoriz } from "react-icons/md";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";
import ModalReservation from "../../atoms/TerminalReservation/TerminalReservation";
import { exportReserveStudentToExcel } from "../../../utils/ExportToExcel";
import {
  getDataFromCache,
  storeDataToCache,
} from "../../../utils/StoreDataToCache";
import Gender from "../../atoms/Gender/Gender";
import FontSizes from "../../../constants/FontSizes";
import StatusTag from "../../atoms/StatusTag/StatusTag";
import ActionTitle from "../../atoms/ActionTitle/ActionTitle";

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

  const columns: TableColumnsType<IReservedStudent> = [
    {
      title: "Full name",
      dataIndex: "FullName",
      key: "FullName",
      fixed: "left",
      sorter: (a: { FullName: string }, b: { FullName: string }) =>
        a.FullName.localeCompare(b.FullName),
    },
    {
      title: "Student code",
      dataIndex: "StudentID",
      key: "StudentID",
      fixed: "left",
      sorter: (a: { StudentID: string }, b: { StudentID: string }) =>
        a.StudentID.localeCompare(b.StudentID),
    },
    {
      title: "Gender",
      dataIndex: "Gender",
      key: "Gender",
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
      render: (dateOfBirth: string) => dateOfBirth,
    },
    {
      title: "Hometown",
      dataIndex: "Hometown",
      key: "Hometown",
    },
    {
      title: "Class",
      dataIndex: "Class",
      key: "Class",
    },
    {
      title: "Reserve module",
      dataIndex: "ReservedModule",
      key: "ReservedModule",
    },
    {
      title: "Reason",
      dataIndex: "Reason",
      key: "Reason",
      sorter: (a: { Reason: string }, b: { Reason: string }) =>
        a.Reason.localeCompare(b.Reason),
    },
    {
      title: "Reserve start date",
      dataIndex: "ReservedStartDate",
      key: "ReservedStartDate",
      sorter: (a: IReservedStudent, b: IReservedStudent) => {
        const dateA = a.ReservedStartDate
          ? new Date(a.ReservedStartDate)
          : new Date(0);
        const dateB = b.ReservedStartDate
          ? new Date(b.ReservedStartDate)
          : new Date(0);
        return dateA.getTime() - dateB.getTime();
      },

      render: (reservedStartDate: string) => reservedStartDate,
    },
    {
      title: "Reserve end date",
      dataIndex: "ReservedEndDate",
      key: "ReservedEndDate",
      sorter: (a: IReservedStudent, b: IReservedStudent) =>
        (a?.ReservedEndDate?.toString() || "").localeCompare(
          b?.ReservedEndDate?.toString() || ""
        ),

      render: (ReservedEndDate: string) => ReservedEndDate,
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      sorter: (a: { Status: string }, b: { Status: string }) =>
        a.Status.localeCompare(b.Status),

      render: (status: string) => (
        <StatusTag status={status} content={status} />
      ),
    },
    {
      title: <ActionTitle />,
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
