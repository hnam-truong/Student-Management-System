import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import FormClassDetail from "../../molecules/FormClassDetail/FormClassDetail";
import { useSingleClassStore } from "../../../store/ClassStore";
import "../../molecules/FormClassDetail/FormClassDetail.scss";
import { BackButton } from "../../atoms/CustomButton/CustomButton";

const ClassDetail: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [loading, setLoading] = useState(true);
  const { aClass, getClassByID } = useSingleClassStore();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (id) {
        await Promise.all([getClassByID(id)]);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, getClassByID]);
  if (!id) {
    return null;
  }

  if (loading || !aClass) {
    return (
      <div className="spin-container">
        <Spin />
      </div>
    );
  }

  // const singleClassDetail = Array.isArray(classDetail)
  //   ? classDetail[0]
  //   : classDetail;

  return (
    <div className="class-detail">
      <div className="back-btn">
        <BackButton />
      </div>
      <FormClassDetail classDetail={aClass} />
    </div>
  );
};

export default ClassDetail;
