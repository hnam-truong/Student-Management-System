/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Form } from "antd";
import { useParams } from "react-router";
import { MdOutlineEdit } from "react-icons/md";
import EmailForm from "../../templates/EmailForm/EmailForm";
import { useSingleEmailStore } from "../../../store/EmailStore";
import { IEmail } from "../../../interfaces/email.interface";
import { getCurrentTime } from "../../../utils/TakeCurrentTime";

const EditEmail: React.FC = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const { aEmail, getEmailByID, putSingleEmail, loading } =
    useSingleEmailStore();
  const [bodyValue, setBodyValue] = useState("");
  const [createdByData, setCreatedByData] = useState("");
  const [createdOnData, setCreatedOnData] = useState("");

  const updateEmailFormValues = () => {
    const { ...rest } = aEmail || {};
    form.setFieldsValue({
      ...rest,
    });
  };

  useEffect(() => {
    getEmailByID(id ?? "");
  }, [id, getEmailByID]);

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
    console.log(form);
  }, [aEmail, form]);

  // handle data input
  const onChangeBodyValue = (value: string) => {
    setBodyValue(value);
    form.setFieldsValue({ Body: value });
  };

  // convert form data
  const onFinish = (values: IEmail) => {
    const emailData: IEmail = {
      ...values,
      CreatedOn: getCurrentTime(),
      CreatedBy: "User",
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
