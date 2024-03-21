import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Select } from "antd";
import "./EmailTemplate.scss"; // Import the styles
import { VscError } from "react-icons/vsc";
import dayjs from "dayjs";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";
import Sizes from "../../../constants/Sizes";
import Colors from "../../../constants/Colors";
import { useEmailStore } from "../../../store/EmailStore";
import { IEmail } from "../../../interfaces/email.interface";
import { useSingleActivityLogStore } from "../../../store/ActivityLogStore";
import { IActivityLog } from "../../../interfaces/activity-log.inteface";
import { errorNotify } from "../../atoms/Notify/Notify";
import { IUser } from "../../../interfaces/user.interface";
import formatDate from "../../../utils/DateFormatting";

interface EmailTemplateProps {
  data: IReservedStudent | IUser;
  open: boolean;
  handleOpenRemind: () => void;
  handleCloseRemind: () => void;
  modalTitle: string;
  type?: string;
  isIndividual?: boolean;
}

const { Option } = Select;
const EmailTemplate: React.FC<EmailTemplateProps> = ({
  data,
  open,
  handleOpenRemind,
  handleCloseRemind,
  modalTitle,
  type,
  isIndividual,
}) => {
  const [previewModal, setPreviewModal] = useState<boolean>(false);
  const { email, getEmail } = useEmailStore();
  const { postActivityLog, loadingActivityLog } = useSingleActivityLogStore();
  const [receiver, setReceiver] = useState<string>("All");
  const [template, setTemplate] = useState<IEmail | null>(email && email[0]);
  const showPreviewModal = () => {
    setPreviewModal(true);
  };

  const hidePreviewModal = () => {
    setPreviewModal(false);
  };
  const handleTemplateChange = (value: string) => {
    const choosedTemplate = email?.find((item) => item.ID === value);
    setTemplate(choosedTemplate ?? null);
  };
  const handleReceiverChange = (value: string) => {
    setReceiver(value);
  };
  const handleSendRemind = () => {
    const dataActivityLog: IActivityLog = {
      ID: "",
      TemplateID: template?.ID ?? "1",
      Category: "Reservation",
      DateTime: formatDate(dayjs(Date.now()).toString()),
      Sender: "vivi@gmail.com",
      Receiver: receiver?.toString() ?? "All",
      Cc: "vivi@gmail.com",
    };
    try {
      postActivityLog(dataActivityLog);

      setTimeout(() => {
        hidePreviewModal();
        handleCloseRemind();
      }, 1000);
    } catch (error) {
      errorNotify("An error occurred while send email remind student");
      console.error("Error remind:", error);
    }
  };

  useEffect(() => {
    getEmail();
  }, [getEmail]);

  const emailTemplateInitialValues = {
    Receiver: isIndividual ? data?.Email : "All",
    TemplateID: (email && email[0]?.Name) ?? "Select template name",
    Applier: type,
  };

  return (
    <>
      <Modal
        title={<div className="modal-title">{modalTitle}</div>}
        open={open}
        closeIcon={<VscError size={Sizes.LgMedium} color={Colors.White} />}
        onOk={handleOpenRemind}
        onCancel={handleCloseRemind}
        className="email-modal"
        cancelText="Send"
        okText="Preview"
        footer={[
          <div className="modal-footer" key="modalFooter">
            <Button
              key="preview"
              onClick={() => {
                showPreviewModal();
              }}
              className="btn-preview-btn"
            >
              Preview
            </Button>
            <Button
              onClick={handleSendRemind}
              className="btn-send-btn"
              loading={loadingActivityLog}
            >
              Send
            </Button>
          </div>,
        ]}
      >
        <Form name="RemindForm" initialValues={emailTemplateInitialValues}>
          <div className="email-template">
            <div className="input-default">
              <p className="input-title">Categories</p>
              <p>Reservation</p>
            </div>
            <Form.Item label="Apply to" name="Applier">
              <Select
                style={{ width: 300 }}
                placeholder="Select send to"
                onChange={handleReceiverChange}
                disabled={type !== ""}
              >
                {!isIndividual && (
                  <>
                    <Option value="Student">Student</Option>
                    <Option value="Trainer">Trainer</Option>
                  </>
                )}
              </Select>
            </Form.Item>
            <Form.Item label="Send to" name="Receiver">
              <Select
                style={{ width: 300 }}
                placeholder="Select send to"
                onChange={handleReceiverChange}
                disabled={isIndividual}
              >
                {!isIndividual && <Option value="All">All</Option>}
                {data?.Email !== "" && (
                  <Option value={data?.Email}>{data?.Email}</Option>
                )}
              </Select>
            </Form.Item>
            <Form.Item label="Template name" name="TemplateID">
              <Select
                style={{ width: 300 }}
                onChange={handleTemplateChange}
                defaultActiveFirstOption
              >
                {email?.map((item) => (
                  <Option value={item.ID} key={item.ID}>
                    {item.Name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </Form>
      </Modal>
      {previewModal && (
        <Modal
          title={<div className="modal-title">Email Preview</div>}
          open={previewModal}
          closeIcon={
            <VscError
              style={{
                color: Colors.White,
              }}
            />
          }
          onCancel={hidePreviewModal}
          width={900}
          className="email-modal"
          footer={[
            <div className="modal-footer" key="modalFooter">
              <Button
                onClick={() => {
                  hidePreviewModal();
                  handleOpenRemind();
                }}
                className="btn-preview-btn"
              >
                Back
              </Button>
              <Button
                key="Send"
                onClick={handleSendRemind}
                className="ant-btn-primary"
                loading={loadingActivityLog}
              >
                Send
              </Button>
            </div>,
          ]}
        >
          <div className="email-form">
            <div className="email-input">
              <p>Template name</p>
              <h4>{template?.Name}</h4>
            </div>
            <div className="email-input">
              <p>From</p>
              <h4>Vi Vi (vivi@gmail.com)</h4>
            </div>
            <div className="email-input">
              <p>To</p>
              <h4>{receiver}</h4>
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
              <h4>{template?.Description}</h4>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

EmailTemplate.defaultProps = {
  isIndividual: false,
  type: "",
};

export default EmailTemplate;
