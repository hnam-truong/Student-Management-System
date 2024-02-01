import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StudentDetailUI from "./StudentDetailUI";
import { IStudent, IScore } from "../../../Services/Interfaces & Types/Interfaces";

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Ensure id is of type string
  const [studentDetail, setStudentDetail] = useState<IStudent | null>(null);
  const getStudentUrl = `https://65b45ebf770d43aba47b213d.mockapi.io/api/v1/students/${id}`;
  const [studentScore, setStudentScore] = useState<IScore | null>(null);
  const getStudentScoreUrl = `https://65b45ebf770d43aba47b213d.mockapi.io/api/v1/scores/${id}`;

  useEffect(() => {
    axios.get<IStudent>(getStudentUrl)
      .then((response) => {
        setStudentDetail(response.data);
      })
      .catch((error) => console.log(error.message));
  }, [getStudentUrl]);

  useEffect(() => {
    axios.get<IScore>(getStudentScoreUrl)
      .then((response) => {
        setStudentScore(response.data);
      })
      .catch((error) => console.log(error.message));
  }, [getStudentScoreUrl]);

  if (!studentDetail || !studentScore) {
    return null;
  }

  return <StudentDetailUI studentDetail={studentDetail} studentScore={studentScore} />;
};

export default StudentDetail;
