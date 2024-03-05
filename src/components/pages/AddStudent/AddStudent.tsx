import React from "react";
import { Form } from "antd";
import TableHeader from "../../organisms/TableHeader/TableHeader";
import StudentForm from "../../templates/StudentForm/StudentForm";
import { errorNotify, successNotify } from "../../atoms/Notify/Notify";
import { IStudent } from "../../../interfaces/student.interface";
import { useSingleStudentStore } from "../../../store/StudentStore";
import formatDate from "../../../utils/DateFormatting";

const AddStudent: React.FC = () => {
  const [form] = Form.useForm();
  const { postSingleStudent } = useSingleStudentStore((state) => ({
    postSingleStudent: state.postSingleStudent,
  }));

  const initialValues = {};

  const onFinish = async (values: IStudent) => {
    // Convert form
    const studentData: IStudent = {
      ...values,
      Gender: values.Gender,
      DateOfBirth: formatDate(values.DateOfBirth),
      GPA: values.GPA,
      GraduationTime: formatDate(values.GraduationTime),
      ClassStartDate: formatDate(values.ClassStartDate),
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
        // Manually update GPA value in form to rounded value
        form.setFieldsValue({
          GPA: Math.round(studentData.GPA * 10) / 10,
        });

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
  return (
    <div className="table-container">
      <TableHeader isHeaderBottom={false} title="Add Student" />
      <div className="table-container__content table-container__class">
        <StudentForm
          form={form}
          formName="AddStudent"
          onFinish={onFinish}
          initialValues={initialValues}
        />
      </div>
    </div>
  );
};

export default AddStudent;
