import React, { useEffect } from "react";
import { useStudentStore } from "../../../Store";
import StudentByID from "./StudentByID/StudentByID";
import HeaderOfTable from "./Partials/HeaderOfTable";

const StudentByIDManagement: React.FC = () => {
  const { fetchStudent, student } = useStudentStore();

  useEffect(() => {
    fetchStudent();
  }, []);
  const loading = !student || !student.length;
  return (
    <div className="table-container">
      <HeaderOfTable />
      <StudentByID student={student ?? []} loading={loading} />
    </div>
  );
};

export default StudentByIDManagement;
