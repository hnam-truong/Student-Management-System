import React, { useState } from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { Button } from 'antd';
import { IReservedStudent } from '../../../../Services/Interfaces & Types/Interfaces';
import { generateFilters } from "../../../../Services/GlobalFunctions/GenerateFilter";
import { IoSettingsOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

interface ReservedTableProps {
    reservedStudent: IReservedStudent[];
    loading: boolean;
}

const ReservedTable: React.FC<ReservedTableProps> = ({ reservedStudent, loading }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const filters: { [key: string]: ReturnType<typeof generateFilters> } = {
        FullName: generateFilters(reservedStudent, "FullName"),
        StudentID: generateFilters(reservedStudent, "StudentID"),
        Gender: generateFilters(reservedStudent, "Gender"),
        DateOfBirth: generateFilters(reservedStudent, "DateOfBirth"),
        Hometown: generateFilters(reservedStudent, "Hometown"),
        Class: generateFilters(reservedStudent, "Class"),
        ReservedModule: generateFilters(reservedStudent, "ReservedModule"),
        Reason: generateFilters(reservedStudent, "Reason"),
        ReservedStartDate: generateFilters(reservedStudent, "ReservedStartDate"),
        ReservedEndDate: generateFilters(reservedStudent, "ReservedEndDate"),
        Status: generateFilters(reservedStudent, "Status"),
        // Add more keys for other columns as needed
    };

    const columns: TableColumnsType<IReservedStudent> = [
        {
            title: 'Full name',
            dataIndex: 'FullName',
            key: "FullName",
            sorter: (a, b) => a.FullName.localeCompare(b.FullName),
            filters: filters.FullName,
            filterSearch: true,
            filterMode: "tree",
            onFilter: (value: boolean | React.Key, record) =>
                record.FullName.indexOf(value as string) === 0,
        },
        {
            title: 'Student code',
            dataIndex: 'StudentID',
            key: "StudentID",
            sorter: (a, b) => a.StudentID.localeCompare(b.StudentID),
            filters: filters.StudentID,
            filterSearch: true,
            filterMode: "tree",
            onFilter: (value: boolean | React.Key, record) =>
                record.StudentID.indexOf(value as string) === 0,
        },
        {
            title: 'Gender',
            dataIndex: 'Gender',
            key: 'Gender',
            filters: [
                { text: 'Male', value: '1' },
                { text: 'Female', value: '0' },
            ],
            filterMode: "tree",
            onFilter: (value: boolean | React.Key, record) =>
                record.Gender == value,
            render: (text: string, record: any) => (record.Gender ? 'Male' : 'Female'),
        },

        {
            title: 'Birthday',
            dataIndex: 'DateOfBirth',
            key: 'DateOfBirth',
            sorter: (a, b) => a.DateOfBirth.toString().localeCompare(b.DateOfBirth.toString()),
            filters: filters.DateOfBirth,
            filterSearch: true,
            filterMode: "tree",
            onFilter: (value: boolean | React.Key, record) =>
                record.DateOfBirth.toString().indexOf(value as string) === 0,
        },
        {
            title: 'Hometown',
            dataIndex: 'Hometown',
            key: 'Hometown',
            filters: filters.Hometown,
            filterSearch: true,
            filterMode: "tree",
            onFilter: (value: boolean | React.Key, record) =>
                record.Hometown.indexOf(value as string) === 0,
        },
        {
            title: 'Class',
            dataIndex: 'Class',
            key: 'Class',
            filters: filters.Class,
            filterSearch: true,
            filterMode: "tree",
            onFilter: (value: boolean | React.Key, record) =>
                record.Class.indexOf(value as string) === 0,
        },
        {
            title: 'Reserve module',
            dataIndex: 'ReservedModule',
            key: 'ReservedModule',
            filters: filters.ReservedModule,
            filterSearch: true,
            filterMode: "tree",
            onFilter: (value: boolean | React.Key, record) =>
                record.ReservedModule.indexOf(value as string) === 0,
        },
        {
            title: 'Reason',
            dataIndex: 'Reason',
            key: 'Reason',
            sorter: (a, b) => a.Reason.localeCompare(b.Reason),
            filters: filters.Reason,
            filterSearch: true,
            filterMode: "tree",
            onFilter: (value: boolean | React.Key, record) =>
                record.Reason.indexOf(value as string) === 0,
        },
        {
            title: 'Reserve start date',
            dataIndex: 'ReservedStartDate',
            key: 'ReservedStartDate',
            sorter: (a, b) => a.ReservedStartDate.toString().localeCompare(b.ReservedStartDate.toString()),
            filters: filters.ReservedStartDate,
            filterSearch: true,
            filterMode: "tree",
            onFilter: (value: boolean | React.Key, record) =>
                record.ReservedStartDate.toString().indexOf(value as string) === 0,
        },
        {
            title: 'Reserve end date',
            dataIndex: 'ReservedEndDate',
            key: 'ReservedEndDate',
            sorter: (a, b) => a.ReservedEndDate.toString().localeCompare(b.ReservedEndDate.toString()),
            filters: filters.ReservedEndDate,
            filterSearch: true,
            filterMode: "tree",
            onFilter: (value: boolean | React.Key, record) =>
                record.ReservedEndDate.toString().indexOf(value as string) === 0,
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status',
            sorter: (a, b) => a.Status.localeCompare(b.Status),
            filters: filters.Status,
            filterSearch: true,
            filterMode: "tree",
            onFilter: (value: boolean | React.Key, record) =>
                record.Status.indexOf(value as string) === 0,
        },
        {
            title: <Button type="link" ><IoSettingsOutline style={{ width: '20px', height: '20px', color: 'white' }} /></Button>,
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <Button type="link" ><BsThreeDots style={{ width: '20px', height: '20px', color: 'black' }} /></Button>,
        },
        // Add more columns as needed based on your data structure
    ];

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const scoresWithKeys = reservedStudent.map((reservedStudent, index) => ({
        ...reservedStudent,
        key: reservedStudent.ID,
    }));

    return (
        <div>
            <Table
                rowSelection={rowSelection}
                scroll={{ x: "max-content" }}
                columns={columns}
                dataSource={scoresWithKeys}
                loading={loading} />
        </div>
    );
};

export default ReservedTable;
