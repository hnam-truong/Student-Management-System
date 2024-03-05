import React from "react";
import { Space, Typography } from "antd";
import { IStudent } from "../../../interfaces/student.interface";
import AvatarImage from "../../atoms/AvatarImage/AvatarImage";
import "../../../styles/abstracts/_sizes.scss";
import "./StudentAvatar.scss";
import { IUser } from "../../../interfaces/user.interface";

const { Title } = Typography;

interface StudentAvatarProps {
  detail: IStudent | IUser | null;
  isImage: boolean;
}

const StudentAvatar: React.FC<StudentAvatarProps> = ({ detail, isImage }) => (
  <Space className="user-avatar" data-testid="user-avatar">
    <div className="largeAvatar">
      <div className="large-avatar-image">
        <AvatarImage detail={detail} isImage={isImage} />
      </div>
      <div className="info-text">
        <Title>{detail?.Name}</Title>
        <Title level={4}>ID {detail?.ID}</Title>
      </div>
    </div>
  </Space>
);

export default StudentAvatar;
