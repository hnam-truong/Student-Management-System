import React from "react";
import { Card, Space } from "antd";
import { IUser } from "../../../interfaces/user.interface";
import AvatarImage from "../../atoms/AvatarImage/AvatarImage";
import "./UserInfo.scss";

interface UserInfoProps {
  userDetail: IUser;
}

const UserInfo: React.FC<UserInfoProps> = ({ userDetail }) => (
  <div className="userinfo-container centered">
    <div className="userinfo-header centered">
      <AvatarImage detail={userDetail} isImage />
      <h2 className="userinfo-name">{userDetail.Name}</h2>
      <p className="userinfo-id">ID: {userDetail.ID}</p>
    </div>
    <Space wrap className="useinfo-body">
      <Card className="useinfo-card" title="System">
        <p>
          <b>Role:</b> {userDetail.UserType}
        </p>
        <p>
          <b>Status:</b> {userDetail.Status ? "Activating..." : "Inactivated"}
        </p>
      </Card>
      <Card className="useinfo-card" title="Information">
        <p>Gender: {userDetail.Gender ? "Male" : "Female"}</p>
        <p>Date of Birth: {userDetail.DateOfBirth}</p>
      </Card>
      <Card className="useinfo-card" title="Contact">
        <p>
          <b>Email:</b> {userDetail.Email}
        </p>
        <p>
          <b>Phone:</b> {userDetail.Phone}
        </p>
      </Card>
    </Space>
  </div>
);

export default UserInfo;
