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
  const [moduleScores, setModuleScores] = useState<string[]>([]);

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

  // Handle module scores to set to ModuleScores[]
  const onModuleScoresChange = (scores: string[]) => {
    setModuleScores(scores);
  };

  // convert form data
  const onFinish = async (values: IEmail) => {
    const emailData: IEmail = {
      ...values,
      ModuleScores: moduleScores,
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
        moduleScores={moduleScores}
        onModuleScoresChange={onModuleScoresChange}
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
