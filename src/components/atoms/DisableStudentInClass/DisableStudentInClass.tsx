import React from "react";
import DisableModal from "../DisableModal/DisableModal";
import { useSingleClassStore } from "../../../store/StudentClassStore";

interface DisableStudentInClassrops {
  id: string;
  handleDataChange: () => void;
}
const DisableStudentInClass: React.FC<DisableStudentInClassrops> = ({
  id,
  handleDataChange,
}) => {
  const { deleteSingleStudentInClass } = useSingleClassStore();

  const handleOk = () => {
    handleDataChange();
    deleteSingleStudentInClass(id);
  };

  return (
    <DisableModal
      buttonText="Delete"
      handleOk={handleOk}
      modalTitle="Delete Student In Class"
    />
  );
};

export default DisableStudentInClass;
