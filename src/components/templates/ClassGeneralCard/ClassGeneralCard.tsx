import React, { useEffect } from "react";
import { Card, Spin } from "antd";
import { CiCalendar } from "react-icons/ci";
import { TfiAlarmClock } from "react-icons/tfi";
import { BiBuildingHouse } from "react-icons/bi";
import { RiUserVoiceLine } from "react-icons/ri";
import { GiAlliedStar } from "react-icons/gi";
import { IoIosArrowDropdown } from "react-icons/io";
import { IClass } from "../../../interfaces/class.interface";
import "./ClassGeneralCard.scss";
import { useSingleUserStore } from "../../../store/UserStore";
import UserDropdown from "../../organisms/UserDropdown/UserDropdown";

interface ClassGeneralCardProps {
  classInfo: IClass;
}

const ClassGeneralCard: React.FC<ClassGeneralCardProps> = ({ classInfo }) => {
  const { getUserByID, users, loading } = useSingleUserStore();
  const infos = [
    {
      id: "1",
      icon: <TfiAlarmClock />,
      title: "Class Time",
      description: `${classInfo.StartTime} - ${classInfo.EndTime}`,
    },
    {
      id: "2",
      icon: <BiBuildingHouse />,
      title: "Location",
      description: classInfo?.SpecificLocation?.map((location) => (
        <div key={location?.ID}>{location?.Name}</div>
      )),
    },
    {
      id: "3",
      icon: <RiUserVoiceLine />,
      title: "Trainers",
      description: loading ? (
        <Spin />
      ) : (
        users.map((user) => <UserDropdown user={user} key={user.ID} />)
      ),
    },
    {
      id: "4",
      icon: <GiAlliedStar />,
      title: "FSU",
      description: classInfo.FSU,
    },
  ];
  const references = [
    {
      id: "1",
      role: "Created",
      description: `${classInfo.CreatedDate} by ${classInfo.CreatedBy}`,
    },
    {
      id: "2",
      role: "Review",
      description: `${classInfo.ReviewDate} by ${classInfo.Reviewer}`,
    },
    {
      id: "3",
      role: "Approve",
      description: `${classInfo.ApproveDate} by ${classInfo.Approver}`,
    },
  ];

  useEffect(() => {
    classInfo.Trainers.forEach(async (trainerId) => {
      getUserByID(trainerId);
    });
  }, [classInfo.Trainers, getUserByID]);

  return (
    <Card
      type="inner"
      title={
        <div className="class-general-card__title">
          <CiCalendar />
          <strong className="class-general-card__title--text">General</strong>
        </div>
      }
      className="class-general-card"
      extra={
        <span className="class-general-card__title class-general-card__extra-icon">
          <IoIosArrowDropdown />
        </span>
      }
    >
      <div>
        {infos.map((info) => (
          <div key={info.id} className="class-general-card__info">
            <div className="class-general-card__info--header">
              {info.icon}
              <div className="class-general-card__info--title">
                {info.title}
              </div>
            </div>
            <span>
              <strong>{info.description}</strong>
            </span>
          </div>
        ))}
        <hr className="class-general-card__divider" />
        {references.map((ref) => (
          <div key={ref.id} className="class-general-card__info">
            <div className="class-general-card__info--header">{ref.role}</div>
            <span>{ref.description}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ClassGeneralCard;
