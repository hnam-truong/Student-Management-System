import { useState } from "react";
import UpdateStudentStatusDropdown from "../../molecules/UpdateStudentStatusDropdown/UpdateStudentStatusDropdown";
import UpdateStudentStatusModal from "../../molecules/UpdateStudentStatusModal/UpdateStudentStatusModal";
import { IStudent } from "../../../interfaces/student.interface";
import { IStudentClass } from "../../../interfaces/student-class.interface";

interface UpdateStudentStatusProps {
  studentSelect: IStudent[] | IStudentClass[];
  isSelectedStudent?: boolean;
}

const UpdateStudentClassStatus = ({
  studentSelect,
  isSelectedStudent,
}: UpdateStudentStatusProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusStudent, setStatusStudent] = useState("Finish");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    console.log("Student in class:", studentSelect);
    console.log("Status is:", statusStudent);
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
        setStatusStudent={setStatusStudent}
      />
    </div>
  );
};

UpdateStudentClassStatus.defaultProps = {
  isSelectedStudent: false,
};

export default UpdateStudentClassStatus;
