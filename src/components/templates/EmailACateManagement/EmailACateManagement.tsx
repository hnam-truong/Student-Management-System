/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import EmailTable from "../EmailTable/EmailTable";
import TableHeader from "../../organisms/TableHeader/TableHeader";
import { IEmail } from "../../../interfaces/email.interface";

interface EmailACateManagementProps {
  cateFilter: string;
  emailData: IEmail[] | null;
  loading: boolean;
  handleDataChange: () => void;
}

const EmailACateManagement: React.FC<EmailACateManagementProps> = ({
  cateFilter,
  emailData,
  loading,
  handleDataChange,
}) => {
  const [cateEmails, setCateEmails] = useState([]);

  useEffect(() => {
    if (emailData) {
      const filteredEmails: any = emailData.filter(
        (item) => item.Category === cateFilter
      );
      setCateEmails(filteredEmails);
    }
  }, [emailData]);

  return (
    <div className="table-container">
      <TableHeader
        title="Email List"
        isExport={false}
        isImport={false}
        isAddEmail
      />
      <div className="table-container__content">
        <EmailTable
          email={cateEmails}
          loading={loading}
          handleDataChange={handleDataChange}
        />
      </div>
    </div>
  );
};

export default EmailACateManagement;
