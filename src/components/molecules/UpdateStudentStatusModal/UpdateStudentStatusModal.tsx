import { Modal, Select } from "antd";
import { Dispatch, SetStateAction } from "react";
import { VscError } from "react-icons/vsc";
import { IStudent } from "../../../interfaces/student.interface";
import { IStudentClass } from "../../../interfaces/student-class.interface";
import Sizes from "../../../constants/Sizes";
import Colors from "../../../constants/Colors";
import FormFooter from "../FormFooter/FormFooter";
import FontWeights from "../../../constants/FontWeight";

interface UpdateStudentStatusProps {
  studentSelect: IStudent[] | IStudentClass[];
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  setStatusStudent: Dispatch<SetStateAction<string>>;
}

const UpdateStudentStatusModal = ({
  studentSelect,
  isModalOpen,
  handleOk,
  handleCancel,
  setStatusStudent,
}: UpdateStudentStatusProps) => {
  const handleChangeStatus = (value: string) => {
    // console.log("Change status: ", value);
    setStatusStudent(value);
  };

  return (
    <Modal
      title={<div className="modal-header-custom centered">Update status</div>}
      open={isModalOpen}
      onOk={handleOk}
      okText="Save"
      okButtonProps={{ className: "custom-button" }}
      onCancel={handleCancel}
      className="add-reserving-modal"
      width="50%"
      closeIcon={<VscError size={Sizes.LgMedium} color={Colors.White} />}
      footer={
        <div className="centered">
          <FormFooter
            handleCancel={handleCancel}
            formName="AddReserving"
            handleOk={handleOk}
          />
        </div>
      }
    >
      <div className="add-reserving-modal-content modal-content-custom">
        <p>Are sure you update status {studentSelect.length} Student?</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 0",
          }}
        >
          <p
            style={{
              color: Colors.DarkBlue,
              fontWeight: FontWeights.ExtraBold,
            }}
          >
            New status
          </p>

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
      </div>
    </Modal>
  );
};

export default UpdateStudentStatusModal;
