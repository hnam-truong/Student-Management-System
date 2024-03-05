// AddStudentUI.tsx
import React from "react";
import { Form } from "antd";
import { successNotify, errorNotify } from "../../atoms/Notify/Notify";
import GeneralInfo from "../../atoms/GeneralInfo/GeneralInfo";
import OtherInfo from "../../atoms/OtherInfo/OtherInfo";
import ClassInfo from "../../atoms/ClassInfo/ClassInfo";
import { useSingleStudentStore } from "../../../store/StudentStore";
import "./AddStudentForm.scss";
import { IStudent } from "../../../interfaces/student.interface";
import FormFooter from "../../molecules/FormFooter/FormFooter";

const AddStudentForm: React.FC = () => {
  const [form] = Form.useForm();
  const { postSingleStudent } = useSingleStudentStore((state) => ({
    postSingleStudent: state.postSingleStudent,
  }));

  const onFinish = async (values: IStudent) => {
    // Convert form
    const studentData: IStudent = {
      ...values,
      Gender: values.Gender,
      DateOfBirth: values.DateOfBirth,
      GPA: values.GPA,
      GraduationTime: values.GraduationTime,
      ClassStartDate: values.ClassStartDate,
      ImageUrl: "",
      Class: "",
    };

    // Calculate age
    const today = new Date();
    const birthDate = new Date(studentData.DateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();

    // Check if age is less than 18
    if (age < 18) {
      errorNotify(
        "You must be at least 18 years old to study at the university"
      );
    } else {
      // Proceed with saving the student
      try {
        // Validate the form
        await form.validateFields();
        await postSingleStudent(studentData);
        successNotify("Student added successfully");
        form.resetFields();
      } catch (error) {
        errorNotify("An error occurred while adding the student");
        console.error("Error adding student:", error);
      }
    }
  };
  const handleCancel = () => {
    form.resetFields();
  };

  return (
    <Form
      name="AddStudent"
      form={form}
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 20 }}
      onFinish={onFinish}
      layout="horizontal"
      className="AddStudentForm"
    >
      <div className="title">General</div>
      <GeneralInfo />

      <div className="title">Other</div>
      <OtherInfo />

      <div className="title">Class Information</div>
      <ClassInfo />
      <div className="button-sc">
        <FormFooter formName="AddStudent" handleCancel={handleCancel} />
      </div>
    </Form>
  );
};

export default AddStudentForm;
