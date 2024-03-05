import React, { useState } from "react";
import { Button, Input, Modal, Select } from "antd";
import "./EmailTemplate.scss"; // Import the styles
import { VscError } from "react-icons/vsc";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";
import Sizes from "../../../constants/Sizes";
import Colors from "../../../constants/Colors";

interface EmailTemplateProps {
  data: IReservedStudent;
  open: boolean;
  handleOpenRemind: () => void;
  handleCloseRemind: () => void;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  data,
  open,
  handleOpenRemind,
  handleCloseRemind,
}) => {
  const [previewModal, setPreviewModal] = useState<boolean>(false);

  const showPreviewModal = () => {
    setPreviewModal(true);
  };

  const hidePreviewModal = () => {
    setPreviewModal(false);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleSendRemind = () => {
    hidePreviewModal();
    console.log(data);
  };
  return (
    <>
      <Modal
        title={<div className="modal-title">Send remind email</div>}
        visible={open}
        closeIcon={<VscError size={Sizes.LgMedium} color={Colors.White} />}
        onOk={handleOpenRemind}
        onCancel={handleCloseRemind}
        className="email-modal"
        cancelText="Send"
        okText="Preview"
        footer={[
          <div className="modal-footer" key="modalFooter">
            <Button
              key="Send"
              onClick={showPreviewModal}
              className="btn-preview-btn"
            >
              Preview
            </Button>
            <Button onClick={handleSendRemind} className="btn-send-btn">
              Send
            </Button>
          </div>,
        ]}
      >
        {/* ... Your Form content ... */}
        <div className="email-form">
          <div className="email-input">
            <p>Categories</p>
            <Input placeholder="Reserve" />
          </div>
          <div className="email-input">
            <p>Apply to</p>
            <Input placeholder="Student" />
          </div>
          <div className="email-input">
            <p>Send to</p>
            <Input placeholder="All" />
          </div>
          <div className="email-input">
            <p>Template name</p>
            <Select
              defaultValue="Select template"
              style={{ width: 500 }}
              onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </div>
        </div>
      </Modal>
      {previewModal && (
        <Modal
          title={<div className="modal-title">Email Preview</div>}
          visible={previewModal}
          closeIcon={
            <VscError
              style={{
                color: "#ffffff",
              }}
            />
          }
          onCancel={hidePreviewModal}
          width={900}
          className="email-modal"
          footer={[
            <div className="modal-footer" key="modalFooter">
              <Button onClick={hidePreviewModal} className="btn-preview-btn">
                Back
              </Button>
              <Button
                key="Send"
                onClick={hidePreviewModal}
                className="ant-btn-primary"
              >
                Send
              </Button>
            </div>,
          ]}
        >
          <div className="email-form">
            <div className="email-input">
              <p>Template name</p>
              <h4>Nhắc gởi điểm</h4>
            </div>
            <div className="email-input">
              <p>From</p>
              <h4>Vi Vi (vivi@gmail.com)</h4>
            </div>
            <div className="email-input">
              <p>To</p>
              <h4>All</h4>
            </div>
            <div className="email-input">
              <p>Cc</p>
              <h4>vivi@gmail.com</h4>
            </div>
            <div className="email-input">
              <p>Subject</p>
              <h4>Lorem ipsum</h4>
            </div>
            <div className="email-input">
              <p>Body</p>
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </h4>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default EmailTemplate;
