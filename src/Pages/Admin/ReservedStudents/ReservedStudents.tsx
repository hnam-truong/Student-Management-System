import React, { useEffect } from "react";
import { useReservedStudentStore } from "../../../Store";
import ReservedTable from "./Partials/ReservedTable";
import HeaderOfTable from "./Partials/HeaderOfTable";

const ReservedStudents: React.FC = () => {
  const { fetchReservedStudent, reservedStudent } = useReservedStudentStore();

  useEffect(() => {
    fetchReservedStudent();
  }, []);
  const loading = !reservedStudent || !reservedStudent.length;
  return (
    <div className="table-container">
      <HeaderOfTable />
      <ReservedTable
        reservedStudent={reservedStudent ?? []}
        loading={loading}
      />
    </div>
  );
};

export default ReservedStudents;
