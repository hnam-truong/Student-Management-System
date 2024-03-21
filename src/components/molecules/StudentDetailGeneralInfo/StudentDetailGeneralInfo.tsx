import React from "react";
import { IStudent } from "../../../interfaces/student.interface";
import DetailGeneralInfo from "../../atoms/DetailGeneralInfo/DetailGeneralInfo";
import generateGender from "../../../utils/GenerateGender";
import StatusTag from "../../atoms/StatusTag/StatusTag";

interface StudentDetailGeneralInfoProps {
  studentDetail: IStudent;
}

const StudentDetailGeneralInfo: React.FC<StudentDetailGeneralInfoProps> = ({
  studentDetail,
}) => {
  const gender = generateGender({ gender: studentDetail?.Gender });
  const infos = [
    {
      key: "1",
      children: [
        {
          key: "1",
          children: [
            { key: "1", name: <strong>Phone</strong> },
            { key: "2", name: <strong>Email</strong> },
            { key: "3", name: <strong>Gender</strong> },
            { key: "4", name: <strong>Date of Birth</strong> },
          ],
        },
        {
          key: "2",
          children: [
            { key: "1", name: studentDetail?.Phone },
            { key: "2", name: studentDetail?.Email },
            { key: "3", name: gender },
            {
              key: "4",
              name: studentDetail?.DateOfBirth,
            },
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
            { key: "1", name: <strong>Permanent Residence </strong> },
            { key: "2", name: <strong>Location </strong> },
            { key: "3", name: <strong>Status</strong> },
          ],
        },
        {
          key: "4",
          children: [
            {
              key: "1",
              name: studentDetail?.PermanentResidence,
            },
            {
              key: "2",
              name: studentDetail?.Location,
            },
            {
              key: "3",
              name: (
                <StatusTag
                  status={studentDetail?.Status}
                  content={studentDetail?.Status}
                />
              ),
            },
          ],
        },
      ],
    },
  ];
  // console.log(studentDetail);
  // console.log(infos);

  return <DetailGeneralInfo infos={infos} />;
};

export default StudentDetailGeneralInfo;
