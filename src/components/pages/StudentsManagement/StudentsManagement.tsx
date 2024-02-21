/* eslint-disable react-hooks/exhaustive-deps */
//  eslint-disable react-hooks/exhaustive-deps
import React, { useCallback, useEffect, useState } from "react";
import { useStudentStore } from "../../../store/Store";
import StudentTable from "../../templates/StudentTable/StudentTable";
import TableHeader from "../../organisms/TableHeader/TableHeader";

const StudentsManagement: React.FC = () => {
  const { fetchStudent, student } = useStudentStore();

  useEffect(() => {
    fetchStudent();
  }, []);
  const [isExport, setIsExport] = useState<boolean>(false);
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
    fetchStudent();
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const loading = !student || !student.length;
  return (
    <div className="table-container">
      <TableHeader exportData={exportData} />
      <StudentTable
        student={student ?? []}
        loading={loading}
        isExport={isExport}
        completedExport={completedExport}
      />
    </div>
  );
};

export default StudentsManagement;
