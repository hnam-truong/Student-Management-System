import React, { useEffect } from "react";
import { Spin } from "antd";
import UserInfo from "../../organisms/UserInfo/UserInfo";
import { useSingleUserStore } from "../../../store/UserStore";

const Profile: React.FC = () => {
  const { aUser, getUserByID, loading } = useSingleUserStore();

  useEffect(() => {
    getUserByID("5");
  }, [getUserByID]);

  if (loading || !aUser) {
    return (
      <div>
        <Spin tip="Loading..." size="large" />
      </div>
    );
  }

  return <UserInfo userDetail={aUser} />;
};

export default Profile;
