import React, { useState } from "react";
import { Button, Modal } from "antd";
import { IoIosWarning } from "react-icons/io";
import { useSingleStudentStore } from "../../../../Store";
import "../StudentDetail.scss";
import "./Partials.scss"
interface DisableStudentProps {
  id: string;
}
const DisableStudent: React.FC<DisableStudentProps> = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteSingleStudent } = useSingleStudentStore();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    deleteSingleStudent(id);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="text" danger className="delete-btn" onClick={showModal}>Delete</Button>
      <Modal
        title={
          <div className="title-header">
            <IoIosWarning />
            <span>Delete student</span>
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Delete"
        centered
      >
        <span>Are you sure to delete this student?</span>
      </Modal>
    </>
  );
};

export default DisableStudent;
