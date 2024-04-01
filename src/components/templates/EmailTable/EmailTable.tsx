import React, { useState } from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { IEmail } from "../../../interfaces/email.interface";
import { storeDataToCache } from "../../../utils/StoreDataToCache";
import StatusTag from "../../atoms/StatusTag/StatusTag";
import { getUserStatus } from "../../../utils/GenerateStatus";
import CustomDropdown from "../../molecules/CustomDropdown/CustomDropdown";
import ActionTitle from "../../atoms/ActionTitle/ActionTitle";

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

  const columns: TableColumnsType<IEmail> = [
    {
      title: "Full name",
      dataIndex: "Name",
      key: "Name",
      sorter: (a, b) => a.Name.localeCompare(b.Name),
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
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
    },
    {
      title: "Apply to",
      dataIndex: "ApplyTo",
      key: "ApplyTo",
      sorter: (a, b) => a.ApplyTo.localeCompare(b.ApplyTo),
    },
    {
      title: <ActionTitle />,
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
