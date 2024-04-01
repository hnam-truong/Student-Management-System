import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Flex, Layout, Spin } from "antd";
import { Content } from "antd/es/layout/layout";
import StudentAvatar from "../../molecules/StudentAvatar/StudentAvatar";
import { useSingleUserStore } from "../../../store/UserStore";
import "../../../styles/main.scss";
import UserDetailGeneralInfo from "../../molecules/UserDetailGeneralInfo/UserDetailGeneralInfo";
import { BackButton } from "../../atoms/CustomButton/CustomButton";

const UserDetail: React.FC = () => {
  const { aUser, getUserByID, loading } = useSingleUserStore();
  const { id } = useParams();

  useEffect(() => {
    getUserByID(id || "");
  }, [id, getUserByID]);
  return loading || !aUser ? (
    <Flex align="center">
      <Spin size="large" />
    </Flex>
  ) : (
    <div>
      <div className="back-btn">
        <BackButton />
      </div>
      <Layout className="form-detail-container">
        {/* First frame for basic information */}
        <Content className="basic-info-frame">
          <StudentAvatar detail={aUser} isImage />
        </Content>

        {/* Second frame for tabs */}
        <Content className="tabs-frame">
          <UserDetailGeneralInfo userDetail={aUser} />
        </Content>

        {/* Third frame for scores */}
        {/* <Content className="score-frame">
          <StudentDetailScoreInfo
            studentDetail={studentDetail}
            studentScore={studentScore}
          />
        </Content> */}
      </Layout>
    </div>
  );
};

export default UserDetail;
