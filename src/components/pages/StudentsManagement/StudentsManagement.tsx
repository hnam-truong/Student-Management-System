/* eslint-disable react-hooks/exhaustive-deps */
//  eslint-disable react-hooks/exhaustive-deps
import React, { useCallback, useEffect, useState } from "react";
import { useStudentStore } from "../../../store/StudentStore";
import StudentTable from "../../templates/StudentTable/StudentTable";
import TableHeader from "../../organisms/TableHeader/TableHeader";
import { IStudent } from "../../../interfaces/student.interface";

const StudentsManagement: React.FC = () => {
  const { fetchStudent, student } = useStudentStore();
  const [isChangeData, setIsChangeData] = useState<boolean>(false);
  const handleDataChange = () => {
    setIsChangeData((pre) => !pre);
  };

  const [isExport, setIsExport] = useState<boolean>(false);
  const [studentSelect, setStudentSelect] = useState<IStudent[]>([]);
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
    setTimeout(() => fetchStudent(), 500);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isChangeData]);

  const loading = !student || !student.length;
  return (
    <div className="table-container">
      <TableHeader
        title="Student List"
        exportData={exportData}
        isSelectedStudent={!studentSelect.length}
        studentSelect={studentSelect}
        isUpdateStudentStatus
        isAddStudent
      />
      <div className="table-container__content">
        <StudentTable
          student={student ?? []}
          loading={loading}
          isExport={isExport}
          completedExport={completedExport}
          setStudentSelect={setStudentSelect}
          handleDataChange={handleDataChange}
        />
      </div>
    </div>
  );
};

export default StudentsManagement;
