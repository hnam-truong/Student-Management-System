import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import FormAttendeeDetail from "../../molecules/FormAttendeeDetail/FormAttendeeDetail";
import { useClassStore } from "../../../store/ClassStore";
import { useSingleStudentStore } from "../../../store/StudentStore";
import "../../molecules/FormClassDetail/FormClassDetail.scss";

const AttendeeDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [loading, setLoading] = useState(true);
  const { aStudent, getStudentByID } = useSingleStudentStore();
  const { classes, fetchClass } = useClassStore();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (id) {
        await Promise.all([getStudentByID(id), fetchClass()]);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, getStudentByID, fetchClass]);

  if (!id) {
    return null;
  }

  if (loading || !aStudent || !classes) {
    return (
      <div className="spin-container">
        <Spin />
      </div>
    );
  }

  return (
    <div className="student-detail">
      <FormAttendeeDetail studentDetail={aStudent} classDetail={classes} />
    </div>
  );
};

export default AttendeeDetail;
