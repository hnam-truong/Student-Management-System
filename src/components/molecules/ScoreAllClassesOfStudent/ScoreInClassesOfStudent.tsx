import { useEffect } from "react";
import { useSingleScoreStore } from "../../../store/ScoreStore";
import ScoreInClassesTable from "../ScoreInClassesTable/ScoreInClassesTable";

interface ScoreInClassesOfStudentProps {
  attendeeID: string;
}
const ScoreInClassesOfStudent = ({
  attendeeID,
}: ScoreInClassesOfStudentProps) => {
  const { getStudentScoreByID, aScore, loading } = useSingleScoreStore();
  useEffect(() => {
    getStudentScoreByID(attendeeID);
  }, [getStudentScoreByID, attendeeID]);

  // const loading = !aScore;
  const scores =
    aScore &&
    new Array(1).fill({
      ...aScore,
    });
  // error array
  return <ScoreInClassesTable scores={scores ?? []} loading={loading} />;
};

export default ScoreInClassesOfStudent;
