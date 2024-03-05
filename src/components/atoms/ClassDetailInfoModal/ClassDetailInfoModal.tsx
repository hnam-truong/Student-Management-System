import React from "react";
import { Card } from "antd";
import { IClass } from "../../../interfaces/class.interface";
// import { IStudent } from "../../../interfaces/student.interface";
import ClassStatus from "../ClassStatus/ClassStatus";
import formatDate from "../../../utils/DateFormatting";
import "./ClassDetailInfoModal.scss";

interface ClassDetailInfoModalProps {
  classDetail: IClass;
  // studentDetail: IStudent;
}

const ClassDetailInfoModal: React.FC<ClassDetailInfoModalProps> = ({
  classDetail,
  // studentDetail,
}) => (
  <Card className="classinfomodal">
    <div className="first-line">
      <div className="subtitle2-bold">{classDetail.ClassName}</div>
      <div className="classstatus">
        <ClassStatus status={classDetail.Status} />
      </div>
    </div>
    <div className="second-line">
      <div className="class">{classDetail.ClassID}</div>
      <div className="st">{formatDate(classDetail.StartDate.toString())}</div>
      <div className="end">{formatDate(classDetail.EndDate.toString())}</div>
    </div>
  </Card>
);
export default ClassDetailInfoModal;
