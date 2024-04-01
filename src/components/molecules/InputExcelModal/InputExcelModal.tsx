/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import FileUpload from "../../atoms/FileUpload/FileUpload";
import FormFooter from "../FormFooter/FormFooter";

interface InputExcelModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  excelUpload: (excelData: any) => void;
  href: string;
  fileDownload: string;
}

const InputExcelModal = ({
  isModalOpen,
  handleCancel,
  excelUpload,
  href,
  fileDownload,
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
          href={href}
          download={fileDownload}
        />
      </div>
    }
    className="custom-modal-content"
  >
    <div className="modal-content-custom">
      <FileUpload excelUpload={excelUpload} />
    </div>
  </Modal>
);

export default InputExcelModal;
