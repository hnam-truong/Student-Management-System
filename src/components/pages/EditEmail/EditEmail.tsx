import React, { useEffect, useState } from "react";
import { Form } from "antd";
import { useParams } from "react-router";
import { MdOutlineEdit } from "react-icons/md";
import EmailForm from "../../templates/EmailForm/EmailForm";
import { useSingleEmailStore } from "../../../store/EmailStore";
import { IEmail } from "../../../interfaces/email.interface";

const EditEmail: React.FC = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const { aEmail, getEmailByID, putSingleEmail, loading } =
    useSingleEmailStore();
  const [bodyValue, setBodyValue] = useState("");
  const [createdByData, setCreatedByData] = useState("");
  const [createdOnData, setCreatedOnData] = useState("");
  const [moduleScores, setModuleScores] = useState<string[]>([]);

  const updateEmailFormValues = () => {
    const { ...value } = aEmail || {};
    form.setFieldsValue({
      ...value,
    });
  };

  useEffect(() => {
    getEmailByID(id ?? "");
  }, [id, getEmailByID]);

  // Set initial module scores
  let initialModuleScores;
  if (aEmail) {
    const { ModuleScores } = aEmail;
    initialModuleScores = ModuleScores;
  }

  useEffect(() => {
    // save data to body
    if (aEmail) {
      const { Body, CreatedBy, CreatedOn } = aEmail;
      setBodyValue(Body);
      setCreatedByData(CreatedBy);
      setCreatedOnData(CreatedOn);
    }
    // Update form values when aEmail changes
    updateEmailFormValues();
  }, [aEmail, form]);

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
  const onFinish = (values: IEmail) => {
    const emailData: IEmail = {
      ...values,
      ModuleScores: moduleScores,
    };
    putSingleEmail(emailData, id || "");
  };

  return (
    <div>
      <EmailForm
        title="Edit Email Template"
        form={form}
        formName={`EditEmail_${id}`}
        onFinish={onFinish}
        loading={loading}
        bodyValue={bodyValue}
        onChangeBodyValue={onChangeBodyValue}
        isEdit
        createdByData={createdByData}
        createdOnData={createdOnData}
        moduleScores={initialModuleScores}
        onModuleScoresChange={onModuleScoresChange}
        submitText={
          <div className="centered">
            <MdOutlineEdit />
            &nbsp;Change
          </div>
        }
      />
    </div>
  );
};

export default EditEmail;
