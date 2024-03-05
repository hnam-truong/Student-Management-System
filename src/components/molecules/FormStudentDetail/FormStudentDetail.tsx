import React from "react";
import { Layout, Tabs } from "antd";
import type { TabsProps } from "antd";
import "./FormStudentDetail.scss";
import StudentDetailAcademicInfo from "../../atoms/StudentDetailAcademicInfo/StudentDetailAcademicInfo";
import StudentDetailScoreInfo from "../../atoms/StudentDetailScoreInfo/StudentDetailScoreInfo";
import StudentAvatar from "../StudentAvatar/StudentAvatar";
import { IStudent } from "../../../interfaces/student.interface";
import { IScore } from "../../../interfaces/score.interface";
import StudentDetailGeneralInfo from "../StudentDetailGeneralInfo/StudentDetailGeneralInfo";

interface FormStudentDetailProps {
  studentDetail: IStudent;
  studentScore: IScore;
}

const { Content } = Layout;

const FormStudentDetail: React.FC<FormStudentDetailProps> = ({
  studentDetail,
  studentScore,
}) => {
  const tabsItems: TabsProps["items"] = [
    {
      key: "generalInfo",
      label: "General Information",
      children: <StudentDetailGeneralInfo studentDetail={studentDetail} />,
    },
    {
      key: "academicInfo",
      label: "Academic Info",
      children: <StudentDetailAcademicInfo studentDetail={studentDetail} />,
    },
  ];

  return (
    <Layout className="form-detail-container">
      {/* First frame for basic information */}
      <Content className="basic-info-frame">
        <StudentAvatar detail={studentDetail} isImage={false} />
      </Content>

      {/* Second frame for tabs */}
      <Content className="tabs-frame">
        <Tabs defaultActiveKey="generalInfo" items={tabsItems} />
      </Content>

      {/* Third frame for scores */}
      <Content className="score-frame">
        <StudentDetailScoreInfo
          studentDetail={studentDetail}
          studentScore={studentScore}
        />
      </Content>
    </Layout>
  );
};

export default FormStudentDetail;
