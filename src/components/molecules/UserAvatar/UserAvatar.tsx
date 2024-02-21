import React from "react";
import { Space, Typography } from "antd";
import { IStudent } from "../../../interfaces/student.interface";
import AvatarImage from "../../atoms/AvatarImage/AvatarImage";
import "../../../styles/abstracts/_sizes.scss";
import "./UserAvatar.scss";

const { Title } = Typography;

interface UserAvatarProps {
  studentDetail: IStudent;
  isImage: boolean;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ studentDetail, isImage }) => (
  <Space className="user-avatar" data-testid="user-avatar">
    <div className="largeAvatar">
      <div className="large-avatar-image">
        <AvatarImage studentDetail={studentDetail} isImage={isImage} />
      </div>
      <div className="info-text">
        <Title>{studentDetail?.Name}</Title>
        <Title level={4}>ID {studentDetail?.ID}</Title>
      </div>
    </div>
  </Space>
);

export default UserAvatar;
