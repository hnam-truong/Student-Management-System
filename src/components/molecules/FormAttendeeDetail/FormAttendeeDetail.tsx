import React from "react";
import type { TabsProps } from "antd";
import { Layout, Tabs } from "antd";
import "./FormAttendeeDetail.scss";
import { Link } from "react-router-dom";
import { IClass } from "../../../interfaces/class.interface";
import { IStudent } from "../../../interfaces/student.interface";
import StudentAvatar from "../StudentAvatar/StudentAvatar";
import StudentDetailGeneralInfo from "../StudentDetailGeneralInfo/StudentDetailGeneralInfo";
import StudentDetailAcademicInfo from "../../atoms/StudentDetailAcademicInfo/StudentDetailAcademicInfo";
import ClassDetailInfoModal from "../../atoms/ClassDetailInfoModal/ClassDetailInfoModal";

interface FormAttendeeDetailProps {
  studentDetail: IStudent;
  classDetail: IClass[];
}

const { Content } = Layout;

const FormAttendeeDetail: React.FC<FormAttendeeDetailProps> = ({
  studentDetail,
  classDetail,
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

  const studentClasses = classDetail.filter((classItem) =>
    studentDetail.StudentClasses.includes(classItem.ClassID)
  );

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

      {/* Third frame for classes */}
      <Content className="classes-frame">
        <div className="subtitle2-bold class-title">Class Information</div>
        <div className="studentclass">
          {studentClasses.map((classItem) => (
            <Link to={`/class/${classItem.ClassID}`} key={classItem.ClassID}>
              <ClassDetailInfoModal
                key={classItem.ClassID}
                // studentDetail={studentDetail}
                classDetail={classItem}
              />
            </Link>
          ))}
        </div>
      </Content>
    </Layout>
  );
};

export default FormAttendeeDetail;
