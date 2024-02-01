import React, { useEffect } from "react";
import { useClassStudentStore } from "../../../Store";
import StudentByClass from "./StudentByClass/StudentByClass";
import HeaderOfTable from "./Partials/HeaderOfTable";

const StudentByClassManagement: React.FC = () => {
    const { fetchClassStudent, classStudent } = useClassStudentStore();
  
    useEffect(() => {
      fetchClassStudent();
    }, []);
    const loading = !classStudent || !classStudent.length;
    return (
      <div className="table-container">
        <HeaderOfTable/>
        <StudentByClass classStudent={classStudent ?? []} loading={loading} />
      </div>
    );
  };

export default StudentByClassManagement;
