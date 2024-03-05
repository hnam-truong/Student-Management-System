import { Modal, Select } from "antd";
import { IStudent } from "../../../interfaces/student.interface";

interface UpdateStudentStatusProps {
  studentSelect: IStudent[];
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const UpdateStudentStatusModal = ({
  studentSelect,
  isModalOpen,
  handleOk,
  handleCancel,
}: UpdateStudentStatusProps) => {
  const handleChangeStatus = (value: string | number) => {
    console.log("Change status: ", value);
  };

  return (
    <Modal
      title="Update status"
      open={isModalOpen}
      onOk={handleOk}
      okText="Save"
      okButtonProps={{ className: "custom-button" }}
      onCancel={handleCancel}
    >
      <p>Are sure you update status {studentSelect.length} Student?</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 0",
        }}
      >
        <p style={{ color: "#0b213", fontWeight: "800" }}>New status</p>

        <Select
          defaultValue="Finish"
          style={{ width: 200 }}
          onChange={handleChangeStatus}
          options={[
            { value: "In class", label: "In class " },
            { value: "Drop out", label: "Drop out" },
            { value: "Reverse", label: "Reverse" },
            { value: "Finish", label: "Finish" },
          ]}
        />
      </div>
    </Modal>
  );
};

export default UpdateStudentStatusModal;
