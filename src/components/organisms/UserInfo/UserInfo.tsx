import React from "react";
import { Card, Space } from "antd";
import { IUser } from "../../../interfaces/user.interface";
import AvatarImage from "../../atoms/AvatarImage/AvatarImage";
import "./UserInfo.scss";
import StatusTag from "../../atoms/StatusTag/StatusTag";
import { getUserStatus } from "../../../utils/GenerateStatus";
import { BackButton } from "../../atoms/CustomButton/CustomButton";

interface UserInfoProps {
  userDetail: IUser;
}

interface CardContent {
  id: string;
  label: string;
  value: React.ReactNode;
}

interface CardData {
  id: string;
  title: string;
  content: CardContent[];
}

const UserInfo: React.FC<UserInfoProps> = ({ userDetail }) => {
  // Define card data
  const cardData: CardData[] = [
    {
      id: "system",
      title: "System",
      content: [
        {
          id: "role",
          label: "Role:",
          value: userDetail.UserType,
        },
        {
          id: "status",
          label: "Status:",
          value: (
            <StatusTag
              status={getUserStatus(userDetail.Status)}
              content={userDetail.Status ? "Activating..." : "Inactivated"}
            />
          ),
        },
      ],
    },
    {
      id: "information",
      title: "Information",
      content: [
        {
          id: "gender",
          label: "Gender:",
          value: userDetail.Gender ? "Male" : "Female",
        },
        {
          id: "dob",
          label: "Date of Birth:",
          value: userDetail.DateOfBirth,
        },
      ],
    },
    {
      id: "contact",
      title: "Contact",
      content: [
        {
          id: "email",
          label: "Email:",
          value: userDetail.Email,
        },
        {
          id: "phone",
          label: "Phone:",
          value: userDetail.Phone,
        },
      ],
    },
  ];

  return (
    <div>
      <div className="back-btn">
        <BackButton />
      </div>
      <div className="userinfo-container centered">
        <div className="userinfo-header centered">
          <AvatarImage detail={userDetail} isImage />
          <h2 className="userinfo-name">{userDetail.Name}</h2>
          <p className="userinfo-id">ID: {userDetail.ID}</p>
        </div>
        <Space wrap className="useinfo-body">
          {cardData.map((card) => (
            <Card key={card.id} className="useinfo-card" title={card.title}>
              {card.content.map((item) => (
                <p className="userinfo-content" key={item.id}>
                  <b className="userinfo-label">{item.label}</b>
                  {item.value}
                </p>
              ))}
            </Card>
          ))}
        </Space>
      </div>
    </div>
  );
};

export default UserInfo;
