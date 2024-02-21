/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { useReservedStudentStore } from "../../../store/Store";
import ReservedTable from "../../templates/ReservedTable/ReservedTable";
import TableHeader from "../../organisms/TableHeader/TableHeader";

const ReservedStudents: React.FC = () => {
  const { fetchReservedStudent, reservedStudent } = useReservedStudentStore();
  const [isExport, setIsExport] = useState<boolean>(false);

  useEffect(() => {
    fetchReservedStudent();
  }, []);
  const exportData = useCallback(() => {
    setIsExport(true);
  }, []);
  const completedExport = useCallback(() => {
    setIsExport(false);
  }, []);
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.clear();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    fetchReservedStudent();
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  const loading = !reservedStudent || !reservedStudent.length;
  return (
    <div className="table-container">
      <TableHeader exportData={exportData} />
      <ReservedTable
        reservedStudent={reservedStudent ?? []}
        loading={loading}
        isExport={isExport}
        completedExport={completedExport}
      />
    </div>
  );
};

export default ReservedStudents;
