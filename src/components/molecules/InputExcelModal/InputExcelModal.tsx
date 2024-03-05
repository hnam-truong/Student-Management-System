import { Button, Modal } from "antd";
import FileUpload from "../../atoms/FileUpload/FileUpload";

interface InputExcelModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

const InputExcelModal = ({
  isModalOpen,
  handleCancel,
}: InputExcelModalProps) => (
  <Modal
    title="Import file"
    open={isModalOpen}
    onCancel={handleCancel}
    footer={[
      <Button key="cancelButton" onClick={handleCancel}>
        Cancel
      </Button>,

      <Button
        key="downloadButton"
        href="../../../../public/assets/files/StudentImportTemplate.xlsx"
        download="Student Import Template"
        type="primary"
      >
        Download Template
      </Button>,
    ]}
    className="custom-modal-content"
  >
    <FileUpload />
  </Modal>
);

export default InputExcelModal;
