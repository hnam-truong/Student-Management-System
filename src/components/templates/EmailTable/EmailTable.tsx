/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { IoSettingsOutline } from "react-icons/io5";
import { IEmail } from "../../../interfaces/email.interface";
import { generateFilters } from "../../../utils/GenerateFilter";
import { storeDataToCache } from "../../../utils/StoreDataToCache";
import StatusTag from "../../atoms/StatusTag/StatusTag";
import { getUserStatus } from "../../../utils/GenerateStatus";
import CustomDropdown from "../../molecules/CustomDropdown/CustomDropdown";

interface EmailTableProps {
  email: IEmail[];
  loading: boolean;
  handleDataChange: () => void;
}

const EmailTable: React.FC<EmailTableProps> = ({
  email,
  loading,
  handleDataChange,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const filters: { [key: string]: ReturnType<typeof generateFilters> } = {
    Name: generateFilters(email, "Name"),
    Status: generateFilters(email, "Status"),
    Description: generateFilters(email, "Description"),
    Category: generateFilters(email, "Category"),
    ApplyTo: generateFilters(email, "ApplyTo"),
  };

  const columns: TableColumnsType<IEmail> = [
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
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      filters: [
        { text: "Active", value: true },
        { text: "Inactive", value: false },
      ],
      filterMode: "tree",
      onFilter: (
        value: boolean | React.Key,
        record: { Status: boolean | React.Key }
      ) => record.Status === value,
      render: (_value, record) => (
        <StatusTag
          status={getUserStatus(record.Status)}
          content={getUserStatus(record.Status)}
        />
      ),
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
    },
    {
      title: "Categories",
      dataIndex: "Category",
      key: "Category",
      sorter: (a, b) => a.Category.localeCompare(b.Category),
      filters: filters.Category,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.Category.indexOf(value as string) === 0,
    },
    {
      title: "Apply to",
      dataIndex: "ApplyTo",
      key: "ApplyTo",
      sorter: (a, b) => a.ApplyTo.localeCompare(b.ApplyTo),
      filters: filters.ApplyTo,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.ApplyTo.indexOf(value as string) === 0,
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
            viewLink="/email-detail"
            editLink="/email/edit"
            isDeleteEmail
            handleDataChange={handleDataChange}
          />
        </div>
      ),
    },
  ];

  const onSelectChange = (selectedRowKey: React.Key[]) => {
    setSelectedRowKeys(selectedRowKey);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const scoresWithKeys = email.map((_email) => ({
    ..._email,
    key: _email.ID,
  }));

  const onChange: TableProps<IEmail>["onChange"] = (
    _pagination,
    _filters,
    _sorter,
    extra
  ) => {
    const dataStorage = extra.currentDataSource;
    storeDataToCache(dataStorage, "email");
  };

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

export default EmailTable;
