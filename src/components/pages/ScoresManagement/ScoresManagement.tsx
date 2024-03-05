import React, { useCallback, useEffect, useState } from "react";
import { useScoreStore } from "../../../store/ScoreStore";
import TableHeader from "../../organisms/TableHeader/TableHeader";
import ScoresTable from "../../templates/ScoresTable/ScoresTable";

const StudentScoresManagement: React.FC = () => {
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
      <TableHeader exportData={exportData} title="Score List" />
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
