import { useState } from "react";
import UpdateStudentStatusDropdown from "../../molecules/UpdateStudentStatusDropdown/UpdateStudentStatusDropdown";
import UpdateStudentStatusModal from "../../molecules/UpdateStudentStatusModal/UpdateStudentStatusModal";
import { IStudent } from "../../../interfaces/student.interface";

interface UpdateStudentStatusProps {
  studentSelect: IStudent[];
  isSelectedStudent?: boolean;
}

const UpdateStudentClassStatus = ({
  studentSelect,
  isSelectedStudent,
}: UpdateStudentStatusProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <UpdateStudentStatusDropdown
        showModal={showModal}
        isSelectedStudent={isSelectedStudent}
      />
      <UpdateStudentStatusModal
        studentSelect={studentSelect}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

UpdateStudentClassStatus.defaultProps = {
  isSelectedStudent: false,
};

export default UpdateStudentClassStatus;
