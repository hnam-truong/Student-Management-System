import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import CustomDropdown from "../../molecules/CustomDropdown/CustomDropdown";
import { IUser } from "../../../interfaces/user.interface";
import Gender from "../../atoms/Gender/Gender";
import StatusTag from "../../atoms/StatusTag/StatusTag";

interface UserTableProps {
  user: IUser[];
  loading: boolean;
  handleDataChange: () => void;
}

const UserTable: React.FC<UserTableProps> = ({
  user,
  loading,
  handleDataChange,
}) => {
  const columns: TableColumnsType<IUser> = [
    {
      title: "ID",
      dataIndex: "ID",
      key: "ID",
    },
    {
      title: "Full Name",
      dataIndex: "Name",
      key: "Name",
      sorter: (a, b) => a.Name.localeCompare(b.Name),
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Date of Birth",
      dataIndex: "DateOfBirth",
      key: "DateOfBirth",
      sorter: (a, b) =>
        a.DateOfBirth.toString().localeCompare(b.DateOfBirth.toString()),
    },
    {
      title: "Gender",
      dataIndex: "Gender",
      key: "Gender",
      render: (gender) => (
        <div className="centered">
          <Gender gender={gender} />
        </div>
      ),
    },
    {
      title: "User Role",
      dataIndex: "UserType",
      key: "UserType",
      render: (role) => (
        <div className="centered">
          <StatusTag status={role} content={role} />
        </div>
      ),
    },
    {
      key: "operation",
      width: 80,
      render: (_value, record) => (
        <div className="centered">
          <CustomDropdown
            id={record?.ID}
            viewLink="/user"
            isEditUser
            isDeleteUser
            handleDataChange={handleDataChange}
          />
        </div>
      ),
    },
  ];

  const scoresWithKeys = user.map((_student) => ({
    ..._student,
    key: _student.ID,
  }));

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
        columns={columns}
        dataSource={scoresWithKeys}
        loading={loading}
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

export default UserTable;
