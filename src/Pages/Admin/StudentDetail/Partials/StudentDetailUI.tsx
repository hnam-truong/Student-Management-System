import React from "react";
import { Layout, Typography, Tabs, Space } from "antd";
import type { TabsProps } from "antd";
import "../StudentDetail.scss";
import StudentDetailGeneralInfo from "./StudentDetailGeneralInfo";
import StudentDetailAcademicInfo from "./StudentDetailAcademicInfo";
import StudentDetailScoreTables from "./StudentDetailScoreInfo";
import {
  IStudent,
  IScore,
} from "../../../../Services/Interfaces & Types/Interfaces";

interface StudentDetailUIProps {
  studentDetail: IStudent;
  studentScore: IScore;
}

const { Content } = Layout;
const { Title } = Typography;

const generateColor = (name: string): string => {
  const colors = ["#f50", "#2db7f5", "#87d068", "#108ee9", "#eb2f96"]; // Add more colors if needed
  const charCodeSum = name
    .split("")
    .reduce((sum: number, char: string) => sum + char.charCodeAt(0), 0);
  const index = charCodeSum % colors.length;
  return colors[index];
};

const StudentDetailUI: React.FC<StudentDetailUIProps> = ({
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
    <Layout>
      {/* First frame for basic information */}
      <Content className="basic-info-frame">
        <Space align="center">
          <div
            className="avatar-container"
            style={{ backgroundColor: generateColor(studentDetail?.Name) }}
          >
            {/* Hiển thị hai chữ cái đầu trong Avatar */}
            {studentDetail?.Name && (
              <span className="avatar-initial">
                {studentDetail.Name.slice(0, 2).toUpperCase()}
              </span>
            )}
          </div>
          <div className="info-text">
            <Title level={3}>{studentDetail?.Name}</Title>
            <Title level={5}>ID {studentDetail?.ID}</Title>
          </div>
        </Space>
      </Content>

      {/* Second frame for tabs */}
      <Content className="tabs-frame">
        <Tabs defaultActiveKey="generalInfo" items={tabsItems} />
      </Content>

      {/* 3rd frame for score */}
      <Content className="score-frame">
        <StudentDetailScoreTables
          studentDetail={studentDetail}
          studentScore={studentScore}
        />
      </Content>
    </Layout>
  );
};

export default StudentDetailUI;
