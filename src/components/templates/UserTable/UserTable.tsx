import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { generateFilters } from "../../../utils/GenerateFilter";
import CustomDropdown from "../../molecules/CustomDropdown/CustomDropdown";
import { IUser } from "../../../interfaces/user.interface";
import Gender from "../../atoms/Gender/Gender";
import RoleTag from "../../atoms/RoleTag/RoleTag";

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
  const filters: { [key: string]: ReturnType<typeof generateFilters> } = {
    Name: generateFilters(user, "Name"),
    DateOfBirth: generateFilters(user, "DateOfBirth"),
    Email: generateFilters(user, "Email"),
    Gender: generateFilters(user, "Gender"),
    UserType: generateFilters(user, "UserType"),
  };
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
      filters: filters.Name,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.Name.indexOf(value as string) === 0,
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
      filters: filters.Gender,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.Gender.toString().indexOf(value as string) === 0,
    },
    {
      title: "User Role",
      dataIndex: "UserType",
      key: "UserType",
      filters: filters.UserType,
      filterSearch: true,
      filterMode: "tree",
      onFilter: (value: boolean | React.Key, record) =>
        record.UserType.toString().indexOf(value as string) === 0,
      render: (role) => (
        <div className="centered">
          <RoleTag type={role} />
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
