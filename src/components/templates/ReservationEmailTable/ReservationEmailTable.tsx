import React from "react";
import { Table, TableColumnsType } from "antd";
import { IActivityLog } from "../../../interfaces/activity-log.interface";

interface ReservationEmailTableProps {
  activityLogs: IActivityLog[];
  loading: boolean;
}

const ReservationEmailTable: React.FC<ReservationEmailTableProps> = ({
  activityLogs,
  loading,
}) => {
  let counterID = 0;
  const columns: TableColumnsType<IActivityLog> = [
    {
      title: "ID",
      dataIndex: "ID",
      key: "ID",
      fixed: "left",
      // eslint-disable-next-line no-return-assign
      render: () => (counterID += 1),
    },
    {
      title: "DateTime",
      dataIndex: "DateTime",
      key: "DateTime",
      sorter: (a, b) => a.DateTime.localeCompare(b.DateTime),
    },
    {
      title: "Modified by",
      dataIndex: "Sender",
      key: "Sender",
      sorter: (a, b) => a.Sender.localeCompare(b.Sender),
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: (_value, record) =>
        `Send ${record.Category} email to ${record.Receiver}`,
    },
  ];
  const scoresWithKeys = activityLogs.map((e) => ({
    ...e,
    key: e.ID,
  }));
  return (
    <div className="ant-table-container">
      <Table
        columns={columns}
        dataSource={scoresWithKeys}
        loading={loading}
        bordered
      />
    </div>
  );
};

export default ReservationEmailTable;
