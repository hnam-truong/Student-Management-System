import React from "react";
import { Card } from "antd";
import { IClass } from "../../../interfaces/class.interface";
// import { IStudent } from "../../../interfaces/student.interface";
import "./ClassDetailInfoModal.scss";
import StatusTag from "../StatusTag/StatusTag";

interface ClassDetailInfoModalProps {
  classDetail: IClass;
  // studentDetail: IStudent;
}

const ClassDetailInfoModal: React.FC<ClassDetailInfoModalProps> = ({
  classDetail,
  // studentDetail,
}) => (
  <Card className="class-info-modal">
    <div className="first-line">
      <div className="subtitle2-bold ">{classDetail.ClassName}</div>
      <div className="class-status">
        <StatusTag status={classDetail.Status} content={classDetail.Status} />
      </div>
    </div>
    <div className="second-line">
      <div className="class">{classDetail.ClassID}</div>
      <div className="st">{classDetail.StartDate}</div>
      <div className="end">{classDetail.EndDate}</div>
    </div>
  </Card>
);
export default ClassDetailInfoModal;
