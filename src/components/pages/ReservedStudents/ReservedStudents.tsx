/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useReservedStudentStore } from "../../../store/Store";
import ReservedTable from "../../templates/ReservedTable/ReservedTable";
import TableHeader from "../../organisms/TableHeader/TableHeader";

const ReservedStudents: React.FC = () => {
  const { fetchReservedStudent, reservedStudent } = useReservedStudentStore();

  useEffect(() => {
    fetchReservedStudent();
  }, []);
  const loading = !reservedStudent || !reservedStudent.length;
  return (
    <div className="table-container">
      <TableHeader />
      <ReservedTable
        reservedStudent={reservedStudent ?? []}
        loading={loading}
      />
    </div>
  );
};

export default ReservedStudents;
