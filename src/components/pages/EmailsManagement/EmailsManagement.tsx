/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Tabs, TabsProps } from "antd";
import EmailCategoriesManagement from "../../templates/EmailCategoriesManagement/EmailCategoriesManagement";
import "./EmailsManagement.scss";
import EmailACateManagementProps from "../../templates/EmailACateManagement/EmailACateManagement";
import EmailOtherManagement from "../../templates/EmailOtherManagement/EmailOtherManagement";
import { useEmailStore } from "../../../store/EmailStore";

const EmailsManagement: React.FC = () => {
  const { getEmail, email, loading } = useEmailStore();
  const [isChangeData, setIsChangeData] = useState<boolean>(false);
  const handleDataChange = () => {
    setIsChangeData((pre) => !pre);
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.clear();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    setTimeout(() => getEmail(), 500);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isChangeData]);

  const tabsItems: TabsProps["items"] = [
    {
      key: "all-categories",
      label: "All Categories",
      children: (
        <EmailCategoriesManagement
          emailData={email}
          loading={loading}
          handleDataChange={handleDataChange}
        />
      ),
    },
    {
      key: "reserve",
      label: "Reserve",
      children: (
        <EmailACateManagementProps
          cateFilter="Reserve"
          emailData={email}
          loading={loading}
          handleDataChange={handleDataChange}
        />
      ),
    },
    {
      key: "notice",
      label: "Notice",
      children: (
        <EmailACateManagementProps
          cateFilter="Notice"
          emailData={email}
          loading={loading}
          handleDataChange={handleDataChange}
        />
      ),
    },
    {
      key: "remind",
      label: "Remind",
      children: (
        <EmailACateManagementProps
          cateFilter="Remind"
          emailData={email}
          loading={loading}
          handleDataChange={handleDataChange}
        />
      ),
    },
    {
      key: "ohter",
      label: "Other",
      children: (
        <EmailOtherManagement
          emailData={email}
          loading={loading}
          handleDataChange={handleDataChange}
        />
      ),
    },
  ];

  return (
    <div className="table-container classinfo">
      <div className="classtab">
        <Tabs defaultActiveKey="email-cate" items={tabsItems} />
      </div>
    </div>
  );
};

export default EmailsManagement;
