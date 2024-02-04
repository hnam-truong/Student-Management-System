import React, { useEffect } from "react";
import ScoresTable from "./Partials/ScoresTable";
import { useScoreStore } from "../../../Store";
import "./StudentScoresManagement.scss";
import HeaderOfTable from "./Partials/HeaderOfTable";

const StudentScoresManagement: React.FC = () => {
  const { fetchScore, score } = useScoreStore();

  useEffect(() => {
    fetchScore();
  }, []);
  const loading = !score || !score.length;
  return (
    <div className="table-container">
      <HeaderOfTable />
      <ScoresTable scores={score ?? []} loading={loading} />
    </div>
  );
};

export default StudentScoresManagement;
