import { Modal } from "antd";
import FileUpload from "../../atoms/FileUpload/FileUpload";
import FormFooter from "../FormFooter/FormFooter";

interface InputExcelModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

const InputExcelModal = ({
  isModalOpen,
  handleCancel,
}: InputExcelModalProps) => (
  <Modal
    title={<div className="modal-header-custom centered">Import file</div>}
    open={isModalOpen}
    onCancel={handleCancel}
    footer={
      <div className="centered">
        <FormFooter
          handleCancel={handleCancel}
          formName="ImportFile"
          text="Download Template"
          isDownload
          href="../../../../public/assets/files/StudentTemplate.xlsx"
          download="Student Import Template"
        />
      </div>
    }
    className="custom-modal-content"
  >
    <div className="modal-content-custom">
      <FileUpload />
    </div>
  </Modal>
);

export default InputExcelModal;
