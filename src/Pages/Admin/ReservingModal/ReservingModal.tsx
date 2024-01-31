import { Form, Input, Modal } from "antd";
import React, { useState } from "react";
import ReservingButton from "./ReservingButton";

interface ReservingModalProps {
  id: string;
}
const ReservingModal: React.FC<ReservingModalProps> = ({ id }) => {
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
      <ReservingButton onClick={showModal} text="Add reserving" />
      <ReservingButton onClick={showModal} text="Add new" />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <Form>
          <Form.Item>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ReservingModal;
