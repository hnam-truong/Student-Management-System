import React, { useEffect, useState } from "react";
import { useStudentClassStore } from "../../../store/StudentClassStore";
import StudentClassTable from "../../templates/StudentClassTable/StudentClassTable";
import TableHeader from "../../organisms/TableHeader/TableHeader";
import "../../../styles/main.scss";
import { IStudentClass } from "../../../interfaces/student-class.interface";
import { ImportFromExcel } from "../../../utils/ImportFromExcel";
import ExcelTemplates from "../../../constants/ExcelTemplates";

const StudentsClassManagement: React.FC = () => {
  const { handleExcelStudentClass } = ImportFromExcel();
  const { fetchStudentClass, classStudent, loading } = useStudentClassStore();
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
  //   fetchStudentClass();
  // }, []);
  // const importData = useCallback(() => {
  //   setIsImport(true);
  // }, []);
  useEffect(() => {
    setTimeout(() => fetchStudentClass(), 1000);
  }, [fetchStudentClass, isChangeData]);

  const [studentSelect, setStudentSelect] = useState<IStudentClass[]>([]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.clear();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    fetchStudentClass();
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [fetchStudentClass]);

  return (
    <div className="table-container">
      <TableHeader
        title="Student Class List"
        href={ExcelTemplates.StudentClass}
        fileDownload="Student Class Import Template"
        excelUpload={handleExcelStudentClass}
        // importData={importData}
        // exportData={exportData}
        isSelectedStudent={!studentSelect.length}
        studentClassSelect={studentSelect}
        isAddStudentClass
        handleDataChange={handleDataChange}
        isUpdateStudentClassStatus
      />
      <div className="table-container__content">
        <StudentClassTable
          classStudent={classStudent ?? []}
          loading={loading}
          handleDataChange={handleDataChange}
          setStudentSelect={setStudentSelect}
        />
      </div>
    </div>
  );
};

export default StudentsClassManagement;
