import React, { useEffect } from "react";
import { useStudentStore } from "../../../Store";
import StudentByID from "./StudentByID/StudentByID";

const StudentByIDManagement: React.FC = () => {
    const { fetchStudent, student } = useStudentStore();
  
    useEffect(() => {
      fetchStudent();
    }, []);
    const loading = !student || !student.length;
    return (
      <div className="table-container">
        <StudentByID student={student ?? []} loading={loading} />
      </div>
    );
  };

export default StudentByIDManagement;
