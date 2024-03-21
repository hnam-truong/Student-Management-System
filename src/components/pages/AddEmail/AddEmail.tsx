import React, { useState } from "react";
import { Form } from "antd";
import { MdCloudUpload } from "react-icons/md";
import EmailForm from "../../templates/EmailForm/EmailForm";
import { useSingleEmailStore } from "../../../store/EmailStore";
import { IEmail } from "../../../interfaces/email.interface";
import { getCurrentTime } from "../../../utils/TakeCurrentTime";

const AddEmail: React.FC = () => {
  const [form] = Form.useForm();
  const { postSingleEmail, loading } = useSingleEmailStore();
  const [bodyValue, setBodyValue] = useState("");

  // reset field after done
  const resetFormValue = () => {
    form.resetFields();
  };

  const handleOk = () => {
    resetFormValue();
    setBodyValue("");
  };

  // handle data input
  const onChangeBodyValue = (value: string) => {
    setBodyValue(value);
    form.setFieldsValue({ Body: value });
  };

  // convert form data
  const onFinish = async (values: IEmail) => {
    const emailData: IEmail = {
      ...values,
      CreatedOn: getCurrentTime(),
      CreatedBy: "User",
    };
    postSingleEmail(emailData);
    handleOk();
  };

  return (
    <div>
      <EmailForm
        title="Add Email Template"
        form={form}
        formName="AddEmail"
        onFinish={onFinish}
        loading={loading}
        bodyValue={bodyValue}
        onChangeBodyValue={onChangeBodyValue}
        submitText={
          <div className="centered">
            <MdCloudUpload />
            &nbsp;Upload
          </div>
        }
      />
    </div>
  );
};

export default AddEmail;
