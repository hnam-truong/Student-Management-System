import React, { useEffect } from "react";
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
import ScoreInClassesOfStudent from "../ScoreAllClassesOfStudent/ScoreInClassesOfStudent";
import ReservingInformation from "../StudentReservingInformation/StudentReservingInformation";
import { BackButton } from "../../atoms/CustomButton/CustomButton";
import ReservationEmailTable from "../../templates/ReservationEmailTable/ReservationEmailTable";
import { useActivityLogStore } from "../../../store/ActivityLogStore";

interface FormAttendeeDetailProps {
  studentDetail: IStudent;
  classDetail: IClass[];
}

const { Content } = Layout;

const FormAttendeeDetail: React.FC<FormAttendeeDetailProps> = ({
  studentDetail,
  classDetail,
}) => {
  const { activityLogs, fetchActivityLogByStudentID, loading } =
    useActivityLogStore();
  useEffect(() => {
    fetchActivityLogByStudentID(studentDetail.ID);
  }, [studentDetail.ID, fetchActivityLogByStudentID]);
  const tabsInfoItems: TabsProps["items"] = [
    {
      key: "general-info",
      label: "General information",
      children: <StudentDetailGeneralInfo studentDetail={studentDetail} />,
    },
    {
      key: "academic-info",
      label: "Academic information",
      children: <StudentDetailAcademicInfo studentDetail={studentDetail} />,
    },
  ];
  const tabsItems: TabsProps["items"] = [
    {
      key: "1",
      label: "Reserving",
      children: <ReservingInformation studentDetailID={studentDetail.ID} />,
    },
    {
      key: "2",
      label: "Activity logs",
      children: (
        <ReservationEmailTable
          activityLogs={activityLogs ?? []}
          loading={loading}
        />
      ),
    },
  ];
  const studentClasses = classDetail.filter((classItem) =>
    studentDetail.StudentClasses.includes(classItem.ClassID)
  );
  console.log(activityLogs, studentDetail.ID);

  return (
    <div>
      <div className="back-btn">
        <BackButton />
      </div>
      <Layout className="form-detail-container">
        {/* First frame for basic information */}
        <Content className="basic-info-frame wrapper-frame-custom">
          <StudentAvatar detail={studentDetail} isImage={false} />
        </Content>

        {/* Second frame for tabs */}
        <Content className=" wrapper-frame-custom">
          <Tabs defaultActiveKey="generalInfo" items={tabsInfoItems} />
        </Content>

        {/* Third frame for classes */}
        <Content className="classes-frame wrapper-frame-custom">
          <div className="subtitle2-bold class-title">Class information</div>
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

        <Content className="wrapper-frame-custom">
          <Tabs defaultActiveKey="Reserving" items={tabsItems} />
        </Content>

        <Content className="wrapper-frame-custom">
          <div className="subtitle2-bold class-title">
            Score in all class information
          </div>
          <ScoreInClassesOfStudent attendeeID={studentDetail.ID} />
        </Content>
      </Layout>
    </div>
  );
};

export default FormAttendeeDetail;
