// AddStudentUI.tsx
import React from "react";
import { Form, FormInstance } from "antd";
import { useNavigate } from "react-router-dom";
import GeneralInfo from "../../atoms/GeneralInfo/GeneralInfo";
import OtherInfo from "../../atoms/OtherInfo/OtherInfo";
import "./StudentForm.scss";
import { IStudent } from "../../../interfaces/student.interface";
import FormFooter from "../../molecules/FormFooter/FormFooter";

interface StudentFormProps {
  form: FormInstance<IStudent>;
  onFinish: (values: IStudent) => void;
  initialValues?: object;
  formName: string;
  isEdit?: boolean;
}
const StudentForm: React.FC<StudentFormProps> = ({
  form,
  onFinish,
  initialValues,
  formName,
  isEdit,
}) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    form.resetFields();
    navigate("/students");
  };

  return (
    <Form
      name={formName}
      form={form}
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 20 }}
      onFinish={onFinish}
      layout="horizontal"
      initialValues={initialValues}
    >
      <div className="Title">General</div>
      <GeneralInfo isEdit={isEdit} />

      <div className="Title">Other</div>
      <OtherInfo />
      <div className="button-sc">
        <FormFooter formName={formName} handleCancel={handleCancel} />
      </div>
      {/* <div className="Title">Class Information</div> */}
    </Form>
  );
};

StudentForm.defaultProps = {
  initialValues: {},
  isEdit: false,
};

export default StudentForm;
