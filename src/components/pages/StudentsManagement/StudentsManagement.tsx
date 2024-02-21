/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useStudentStore } from "../../../store/Store";
import StudentTable from "../../templates/StudentTable/StudentTable";
import TableHeader from "../../organisms/TableHeader/TableHeader";

const StudentsManagement: React.FC = () => {
  const { fetchStudent, student } = useStudentStore();

  useEffect(() => {
    fetchStudent();
  }, []);
  const loading = !student || !student.length;
  return (
    <div className="table-container">
      <TableHeader />
      <StudentTable student={student ?? []} loading={loading} />
    </div>
  );
};

export default StudentsManagement;
