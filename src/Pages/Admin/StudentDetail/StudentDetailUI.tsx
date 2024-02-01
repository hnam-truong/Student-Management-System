import React from "react";
import { Layout, Typography, Tabs, Card, Space, Table } from 'antd';
import type { TabsProps } from 'antd';
import './StudentDetail.scss';
import { IStudent, IScore } from "../../../Services/Interfaces & Types/Interfaces";

interface StudentDetailUIProps {
  studentDetail: IStudent;
  studentScore: IScore ;
}

const { Content } = Layout;
const { Title } = Typography;

const generateColor = (name: string): string => {
  const colors = ['#f50', '#2db7f5', '#87d068', '#108ee9', '#eb2f96']; // Add more colors if needed
  const charCodeSum = name.split('').reduce((sum: number, char: string) => sum + char.charCodeAt(0), 0);
  const index = charCodeSum % colors.length;
  return colors[index];
};

const StudentDetailUI: React.FC<StudentDetailUIProps> = ({ studentDetail, studentScore }) => {
  const renderGeneralInfo = (
    <div className="student-detail-container">
      {/* General Information content */}
      <div className="info-container">
        <div className="left-info">
          <div className="info-item"><strong>Phone </strong> {studentDetail.Phone}</div>
          <div className="info-item"><strong>Email</strong> {studentDetail.Email}</div>
          <div className="info-item"><strong>Gender</strong> {studentDetail.Gender}</div>
        </div>
        <div className="right-info">
          <div className="info-item"><strong>Date of Birth </strong> {new Date(studentDetail.DateOfBirth).toLocaleDateString()}</div>
          <div className="info-item"><strong>Permanent Residence </strong> {studentDetail.PermanentResidence}</div>
          <div className="info-item"><strong>Location </strong> {studentDetail.Location}</div>
          <div className="info-item"><strong>Status </strong> {studentDetail.Status}</div>
        </div>
      </div>
    </div>
  );

  const renderAcademicInfo = (
    <div className="academic-info-container">
      {/* Academic Information content */}
      <div className="info-container">
        <div className="left-info">
          <div className="info-item"><strong>University </strong> {studentDetail.University}</div>
          <div className="info-item"><strong>Major </strong> {studentDetail.Major}</div>
          <div className="info-item"><strong>RECer </strong> {studentDetail.RECer}</div>
        </div>
        <div className="right-info">
          <div className="info-item"><strong>GPA </strong> {studentDetail.GPA}</div>
          <div className="info-item"><strong>Graduation Time </strong> {new Date(studentDetail.GraduationTime).toLocaleDateString()}</div>
          <div className="info-item"><strong>Class Code </strong> {studentDetail.ClassCode}</div>
          <div className="info-item"><strong>Class Start Date </strong> {new Date(studentDetail.ClassStartDate).toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );

  const renderScoreTables = (
    <div className="score-table-container">
      {/* Basic Information */}
      <Space className="basic-info">
        <div>
          <div className="class-code">{studentDetail?.ClassCode}</div>
        </div>
      </Space>

      {/* Score Tables */}
      <div className="score-tables">
        {/* Quiz Table */}
        <Card className="quiz-table">
          <div className="ant-card-head">Quiz Table</div>
          <Table
            dataSource={[
              {
                'HTML': studentScore.HTML,
                'CSS': studentScore.CSS,
                'Quiz 3': studentScore.Quiz3,
                'Quiz 5': studentScore.Quiz5,
                'Quiz 6': studentScore.Quiz6,
                'Quiz (Average)': studentScore.AvgQuiz
              },
            ]}
            columns={[
              { title: 'HTML', dataIndex: 'HTML', render: (score) => score },
              { title: 'CSS', dataIndex: 'CSS', render: (score) => score },
              { title: 'Quiz 3', dataIndex: 'Quiz 3', render: (score) => score },
              { title: 'Quiz 5', dataIndex: 'Quiz 5', render: (score) => score },
              { title: 'Quiz 6', dataIndex: 'Quiz 6', render: (score) => score },
              { title: 'Quiz (Average)', dataIndex: 'Quiz (Average)', render: (score) => score },
            ]}
            pagination={false}
          />
        </Card>

        {/* ASM Table */}
        <Card className="asm-table">
          <div className="ant-card-head">ASM Table</div>
          <Table
            dataSource={[
              {
                'ASM': studentScore.ASM,
                'Practice 1': studentScore.Practice1,
                'Practice 2': studentScore.Practice2,
                'Practice 3': studentScore.Practice3,
                'Practice (Average)': studentScore.AvgASM,
              }
            ]}
            columns={[
              { title: 'ASM', dataIndex: 'ASM', render: (score) => score },
              { title: 'Practice 1', dataIndex: 'Practice 1', render: (score) => score },
              { title: 'Practice 2', dataIndex: 'Practice 2', render: (score) => score },
              { title: 'Practice 3', dataIndex: 'Practice 3', render: (score) => score },
              { title: 'Practice (Average)', dataIndex: 'Practice (Average)', render: (score) => score },
            ]}
            pagination={false}
          />
        </Card>

        {/* Mock Table */}
        <Card className="mock-table">
          <div className="ant-card-head">Mock Table</div>
          <Table
            dataSource={[
              {
                'MockFinalModule': studentScore.MockFinalModule,
                'MockGPAModule': studentScore.MockGPAModule,
                'MockLevelModule': studentScore.MockLevelModule,
                'MockStatus': studentScore.MockStatus?.toString()
              },
            ]}
            columns={[
              { title: 'Mock Final Module', dataIndex: 'MockFinalModule', render: (score) => score },
              { title: 'Mock GPA Module', dataIndex: 'MockGPAModule', render: (score) => score },
              { title: 'Mock Level Module', dataIndex: 'MockLevelModule', render: (score) => score },
              { title: 'Mock Status', dataIndex: 'MockStatus', render: (score) => score },
            ]}
            pagination={false}
          />
        </Card >
      </div >
    </div>
  );

  const tabsItems: TabsProps['items'] = [
    { key: 'generalInfo', label: 'General Information', children: renderGeneralInfo },
    { key: 'academicInfo', label: 'Academic Info', children: renderAcademicInfo },
  ];

  return (
    <Layout>
      {/* First frame for basic information */}
      <Content className="basic-info-frame">
      <Space align="center">
          <div className="avatar-container" style={{ backgroundColor: generateColor(studentDetail?.Name) }}>
            {/* Hiển thị hai chữ cái đầu trong Avatar */}
            {studentDetail?.Name && <span className="avatar-initial">{studentDetail.Name.slice(0, 2).toUpperCase()}</span>}
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
      {renderScoreTables}
      </Content>
    </Layout>
  );
};

export default StudentDetailUI;
