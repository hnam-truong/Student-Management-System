/** This function is response for calculate the average of all previous columns
 * of one table */
import { IScore } from "../../../../Services/Interfaces & Types/Interfaces";

export const calculateAverage = (totalScore: IScore, table: string) => {
  // Extract numeric values from the object excluding columns starting with "Avg"
  const scores = Object.values(totalScore).filter((value, index) =>
    typeof value === "number" && table === "ASM"
      ? Object.keys(totalScore)[index] === "Practice1" ||
        Object.keys(totalScore)[index] === "Practice2" ||
        Object.keys(totalScore)[index] === "Practice3"
      : Object.keys(totalScore)[index] === "HTML" ||
        Object.keys(totalScore)[index] === "CSS" ||
        Object.keys(totalScore)[index] === "Quiz3" ||
        Object.keys(totalScore)[index] === "Quiz4" ||
        Object.keys(totalScore)[index] === "Quiz5" ||
        Object.keys(totalScore)[index] === "Quiz6"
  );
  if (scores.length === 0) {
    return table === "ASM" ? totalScore?.AvgASM : totalScore?.AvgQuiz;
  }
  const total = scores.reduce((sum, score) => sum + score, 0);
  const average = total / scores.length || 0;
  return parseFloat(average.toFixed(2));
};
