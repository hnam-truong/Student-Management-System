import React, { useState } from "react";
import { Card, Form, FormInstance } from "antd";
import { useNavigate } from "react-router";
import TemplateDetails from "../../organisms/TemplateDetails/TemplateDetails";
import TemplateSender from "../../organisms/TemplateSender/TemplateSender";
import TemplateContent from "../../organisms/TemplateContent/TemplateContent";
import TemplateScore from "../../organisms/TemplateScore/TemplateScore";
import FormFooter from "../../molecules/FormFooter/FormFooter";
import { IEmail } from "../../../interfaces/email.interface";
import TableHeader from "../../organisms/TableHeader/TableHeader";
import { BackButton } from "../../atoms/CustomButton/CustomButton";
import "./EmailForm.scss";

interface EmailFormProps {
  title: string;
  form: FormInstance<IEmail>;
  formName: string;
  loading: boolean;
  onFinish: (values: IEmail) => void;
  bodyValue: string;
  onChangeBodyValue: (value: string) => void;
  submitText: string | React.ReactNode;
  isEdit?: boolean;
  createdByData?: string;
  createdOnData?: string;
}
const emailFormDefaultProps: Partial<EmailFormProps> = {
  isEdit: false,
  createdByData: "",
  createdOnData: "",
};

const EmailForm: React.FC<EmailFormProps> = ({
  title,
  form,
  formName,
  loading,
  onFinish,
  bodyValue,
  onChangeBodyValue,
  submitText,
  isEdit,
  createdByData,
  createdOnData,
}) => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/emails");
  };

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <div className="email-form">
      <div className="back-btn">
        <BackButton />
      </div>
      <TableHeader isHeaderBottom={false} title={title} />
      <Form
        form={form}
        name={formName}
        onFinish={onFinish}
        variant="filled"
        labelAlign="left"
        requiredMark={false}
        colon={false}
      >
        <Card hoverable className="email-form-card">
          <TemplateDetails
            isEdit={isEdit || false}
            createdByData={createdByData || ""}
            createdOnData={createdOnData || ""}
            onCategoryChange={handleCategoryChange}
          />
        </Card>
        <Card hoverable className="email-form-card">
          <TemplateSender />
        </Card>
        <Card hoverable className="email-form-card">
          <TemplateContent
            bodyValue={bodyValue}
            onChangeBodyValue={onChangeBodyValue}
          />
        </Card>
        {selectedCategory === "Reserve" && (
          <Card hoverable className="email-form-card">
            <TemplateScore />
          </Card>
        )}

        <div className="btn-save">
          <FormFooter
            formName={formName}
            text={submitText}
            loading={loading}
            handleCancel={handleCancel}
          />
        </div>
      </Form>
    </div>
  );
};

EmailForm.defaultProps = emailFormDefaultProps;

export default EmailForm;