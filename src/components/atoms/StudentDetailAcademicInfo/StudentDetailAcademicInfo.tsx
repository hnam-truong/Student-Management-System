import React from "react";
import "./StudentDetailAcademicInfo.scss";
import { IStudent } from "../../../interfaces/student.interface";
import formatDate from "../../../utils/DateFormatting";

interface StudentDetailAcademicInfoProps {
  studentDetail: IStudent;
}

const StudentDetailAcademicInfo: React.FC<StudentDetailAcademicInfoProps> = ({
  studentDetail,
}) => {
  const infos = [
    {
      key: "1",
      children: [
        {
          key: "1",
          children: [
            { key: "1", name: <strong>University</strong> },
            { key: "2", name: <strong>Major</strong> },
            { key: "3", name: <strong>RECer</strong> },
            { key: "4", name: <strong>GPA</strong> },
          ],
        },
        {
          key: "2",
          children: [
            { key: "1", name: studentDetail.University },
            { key: "2", name: studentDetail.Major },
            { key: "3", name: studentDetail.RECer },
            { key: "4", name: studentDetail.GPA },
          ],
        },
      ],
    },
    {
      key: "2",
      children: [
        {
          key: "3",
          children: [
            { key: "1", name: <strong>Class Code</strong> },
            { key: "2", name: <strong>Graduation Time</strong> },
            { key: "3", name: <strong>Class Start Date</strong> },
          ],
        },
        {
          key: "4",
          children: [
            {
              key: "1",
              name: studentDetail.ClassCode,
            },
            {
              key: "2",
              name: formatDate(studentDetail.GraduationTime.toString()),
            },
            {
              key: "3",
              name: formatDate(studentDetail.ClassStartDate.toString()),
            },
          ],
        },
      ],
    },
  ];
  return (
    <div
      data-testid="academic-info-content"
      className="academic-info-container"
    >
      {/* Academic Information content */}
      <div className="info-container">
        {infos.map((info) => (
          <div key={info.key} className={`info-container-${info.key}`}>
            {info.children.map((child) => (
              <div key={child.key} className={`column-${child.key}`}>
                {child.children.map((item) => (
                  <div key={item.key} className="info-item">
                    {item.name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default StudentDetailAcademicInfo;
