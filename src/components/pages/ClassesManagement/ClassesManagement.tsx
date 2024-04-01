import React, { useEffect } from "react";
import TableHeader from "../../organisms/TableHeader/TableHeader";
import { useClassStore } from "../../../store/ClassStore";
import ClassTable from "../../templates/ClassesTable/ClassesTable";

const ClassesManagement: React.FC = () => {
  const { fetchClass, classes } = useClassStore();
  useEffect(() => {
    fetchClass();
  }, [fetchClass]);

  const loading = !classes || !classes.length;
  return (
    <div className="table-container">
      <TableHeader
        title="Class List"
        isExport={false}
        isImport={false}
        isSearch={false}
        isHeaderBottom={false}
      />
      <div className="table-container__content table-container__class">
        <ClassTable loading={loading} classes={classes ?? []} />
      </div>
    </div>
  );
};

export default ClassesManagement;
