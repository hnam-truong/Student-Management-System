/* eslint-disable react-hooks/exhaustive-deps */
//  eslint-disable react-hooks/exhaustive-deps
import React, { useEffect, useState } from "react";
import TableHeader from "../../organisms/TableHeader/TableHeader";
import { useUserStore } from "../../../store/UserStore";
import UserTable from "../../templates/UserTable/UserTable";
import { ImportFromExcel } from "../../../utils/ImportFromExcel";
import ExcelTemplates from "../../../constants/ExcelTemplates";

const UserManagement: React.FC = () => {
  const { handleExcelUser } = ImportFromExcel();
  const { fetchUser, user, loading } = useUserStore();
  const [isChangeData, setIsChangeData] = useState<boolean>(false);
  const handleDataChange = () => {
    setIsChangeData((pre) => !pre);
  };
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.clear();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    setTimeout(() => fetchUser(), 500);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isChangeData]);

  return (
    <div className="table-container">
      <TableHeader
        title="User Management"
        href={ExcelTemplates.User}
        fileDownload="User Import Template"
        excelUpload={handleExcelUser}
        isAddUser
        isSearch
        handleDataChange={handleDataChange}
      />
      <div className="table-container__content">
        <UserTable
          user={user ?? []}
          loading={loading}
          handleDataChange={handleDataChange}
        />
      </div>
    </div>
  );
};

export default UserManagement;
