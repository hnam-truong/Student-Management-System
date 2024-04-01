/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { useReservedStudentStore } from "../../../store/ReservedStudentStore";
import TableHeader from "../../organisms/TableHeader/TableHeader";
import ReservedTable from "../../templates/ReservedTable/ReservedTable";
import { ImportFromExcel } from "../../../utils/ImportFromExcel";
import ExcelTemplates from "../../../constants/ExcelTemplates";

const ReservedStudents: React.FC = () => {
  const { handleExcelReservedStudent } = ImportFromExcel();
  const { fetchReservedStudent, reservedStudent } = useReservedStudentStore();
  const [isImport, setIsImport] = useState<boolean>(false);
  const [isExport, setIsExport] = useState<boolean>(false);
  const [isChangeData, setIsChangeData] = useState<boolean>(false);
  const handleDataChange = () => {
    setIsChangeData((pre) => !pre);
  };
  const importData = useCallback(() => {
    setIsImport(true);
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
    setTimeout(() => fetchReservedStudent(), 500);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isChangeData]);
  const loading = !reservedStudent || !reservedStudent.length;

  return (
    <div className="table-container">
      <TableHeader
        title="Reserve List"
        href={ExcelTemplates.ReservedStudent}
        fileDownload="Reserved Student Import Template"
        excelUpload={handleExcelReservedStudent}
        importData={importData}
        exportData={exportData}
        handleDataChange={handleDataChange}
        showAddModal
      />
      <div className="table-container__content">
        <ReservedTable
          reservedStudent={reservedStudent ?? []}
          loading={loading}
          isImport={isImport}
          isExport={isExport}
          completedExport={completedExport}
          handleDataChange={handleDataChange}
        />
      </div>
    </div>
  );
};

export default ReservedStudents;
