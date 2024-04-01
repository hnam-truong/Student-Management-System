import React from "react";
import { useSingleUserStore } from "../../../store/UserStore";
import DisableModal from "../DisableModal/DisableModal";

interface DisableStudentProps {
  id: string;
  handleDataChange: () => void;
}
const DisableUser: React.FC<DisableStudentProps> = ({
  id,
  handleDataChange,
}) => {
  const { deleteSingleUser } = useSingleUserStore();

  const handleOk = () => {
    deleteSingleUser(id);
    handleDataChange();
  };

  return (
    <DisableModal
      buttonText="Delete"
      handleOk={handleOk}
      modalTitle="Delete user"
    />
  );
};

export default DisableUser;
