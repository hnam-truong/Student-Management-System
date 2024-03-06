import React, { useEffect, useState } from "react";

import useClassStudentStore from "../../../store/StudentClassStore";
import StudentClassTable from "../../templates/StudentClassTable/StudentClassTable";
import TableHeader from "../../organisms/TableHeader/TableHeader";
import "../../../styles/main.scss";
import { ImportFromExcel } from "../../../utils/ImportFromExcel";
import ExcelTemplates from "../../../constants/ExcelTemplates";

const StudentsClassManagement: React.FC = () => {
  const { handleExcelStudentClass } = ImportFromExcel();
  const { fetchClassStudent, classStudent, loading } = useClassStudentStore();
  // const [isImport, setIsImport] = useState<boolean>(false);
  // const [isExport, setIsExport] = useState<boolean>(false);
  const [isChangeData, setIsChangeData] = useState<boolean>(false);
  const handleDataChange = () => {
    setIsChangeData((pre) => !pre);
  };

  // const exportData = useCallback(() => {
  //   setIsExport(true);
  // }, []);
  // const completedExport = useCallback(() => {
  //   setIsExport(false);
  // }, []);
  // useEffect(() => {
  //   fetchClassStudent();
  // }, []);
  // const importData = useCallback(() => {
  //   setIsImport(true);
  // }, []);
  useEffect(() => {
    setTimeout(() => fetchClassStudent(), 1000);
  }, [fetchClassStudent, isChangeData]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.clear();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    fetchClassStudent();
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [fetchClassStudent]);

  return (
    <div className="table-container">
      <TableHeader
        title="Student Class List"
        href={ExcelTemplates.StudentClass}
        fileDownload="Student Class Import Template"
        excelUpload={handleExcelStudentClass}
        // importData={importData}
        // exportData={exportData}
        isAddStudentClass
        handleDataChange={handleDataChange}
        isUpdateStudentClassStatus
      />
      <div className="table-container__content">
        <StudentClassTable
          classStudent={classStudent ?? []}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default StudentsClassManagement;
