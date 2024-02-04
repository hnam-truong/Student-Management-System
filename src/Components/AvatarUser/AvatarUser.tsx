import React from "react";
import "./AvatarUser.scss";
import { Avatar } from "antd";

function AvatarUser() {
  return (
    <div className="avatar">
      <Avatar src="/assets/FakeAvatar.png" size={50} />
      <div className="avatar-content">
        <div className="user-name">Warrior Tran</div>
        <div>Log out</div>
      </div>
    </div>
  );
}

export default AvatarUser;
