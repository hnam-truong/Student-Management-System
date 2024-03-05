import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import FormStudentDetail from "../../molecules/FormStudentDetail/FormStudentDetail";
import { useSingleScoreStore } from "../../../store/ScoreStore";
import { useSingleStudentStore } from "../../../store/StudentStore";
import "../../molecules/FormClassDetail/FormClassDetail.scss";

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [loading, setLoading] = useState(true);
  const { aStudent, getStudentByID } = useSingleStudentStore();
  const { aScore, getStudentScoreByID } = useSingleScoreStore();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (id) {
        await Promise.all([getStudentByID(id), getStudentScoreByID(id)]);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, getStudentByID, getStudentScoreByID]);

  if (!id) {
    return null;
  }

  if (loading || !aStudent || !aScore) {
    return (
      <div className="spin-container">
        <Spin />
      </div>
    );
  }

  return (
    <div className="student-detail">
      <FormStudentDetail studentDetail={aStudent} studentScore={aScore} />
    </div>
  );
};

export default StudentDetail;
