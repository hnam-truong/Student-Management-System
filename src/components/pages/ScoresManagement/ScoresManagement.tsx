import React, { useCallback, useEffect, useState } from "react";
import { useScoreStore } from "../../../store/ScoreStore";
import TableHeader from "../../organisms/TableHeader/TableHeader";
import ScoresTable from "../../templates/ScoresTable/ScoresTable";
import { ImportFromExcel } from "../../../utils/ImportFromExcel";
import ExcelTemplates from "../../../constants/ExcelTemplates";

const StudentScoresManagement: React.FC = () => {
  const { handleExcelStudentScore } = ImportFromExcel();
  const { fetchScore, score } = useScoreStore();
  useEffect(() => {
    fetchScore();
  }, [fetchScore]);
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
    fetchScore();
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [fetchScore]);
  const loading = !score || !score.length;
  return (
    <div className="table-container">
      <TableHeader
        title="Score List"
        href={ExcelTemplates.StudentScore}
        fileDownload="Student Score Import Template"
        excelUpload={handleExcelStudentScore}
        exportData={exportData}
      />
      <div className="table-container__content">
        <ScoresTable
          scores={score ?? []}
          loading={loading}
          isExport={isExport}
          completedExport={completedExport}
        />
      </div>
    </div>
  );
};

export default StudentScoresManagement;
