import React, { useCallback, useEffect, useState } from "react";
import { Form } from "antd";
import TableHeader from "../../organisms/TableHeader/TableHeader";
import { errorNotify, successNotify } from "../../atoms/Notify/Notify";
import { IStudent } from "../../../interfaces/student.interface";
import { useSingleStudentStore } from "../../../store/StudentStore";
import formatDate from "../../../utils/DateFormatting";
import StudentForm from "../../templates/StudentForm/StudentForm";
import { BackButton } from "../../atoms/CustomButton/CustomButton";

const AddStudent: React.FC = () => {
  const [form] = Form.useForm();
  const { postSingleStudent, newStudent, getStudentByID, aStudent } =
    useSingleStudentStore();

  const initialValues = {};
  const [addedStudent, setAddedStudent] = useState<IStudent | null>(null);
  const [isAbleAdd, setIsAbleAdd] = useState(true);

  const onFinish = async (values: IStudent) => {
    // Convert form
    const studentData: IStudent = {
      ...values,
      Gender: values.Gender,
      DateOfBirth: formatDate(values.DateOfBirth),
      GPA: values.GPA,
      GraduationTime: values.GraduationTime,
      ClassStartDate: "",
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
        newStudent && setAddedStudent(newStudent);
        successNotify("Student added successfully");
        // form.resetFields();
      } catch (error) {
        errorNotify("An error occurred while adding the student");
        console.error("Error adding student:", error);
      }
    }
  };

  useEffect(() => {
    newStudent && setAddedStudent(newStudent);
  }, [newStudent]);

  useEffect(() => {
    // Fetch student data when newStudent changes
    newStudent && getStudentByID(newStudent.ID);
  }, [getStudentByID, newStudent]);

  useEffect(() => {
    // Update addedStudent when aStudent changes
    aStudent && setAddedStudent(aStudent);
  }, [aStudent]);

  const handleAttendingStatusChange = useCallback(() => {
    // Reload or perform any action when AttendingStatus changes
    // For now, you can log a message.
    setIsAbleAdd(false);
    console.log("AttendingStatus changed in StudentForm!");
  }, []);

  return (
    <div className="table-container">
      <div className="back-btn">
        <BackButton />
      </div>
      <TableHeader isHeaderBottom={false} title="Add Student" />
      <div className="table-container__content table-container__class">
        <StudentForm
          form={form}
          formName="AddStudent"
          onFinish={onFinish}
          initialValues={initialValues}
          data={addedStudent}
          isAbleAdd={isAbleAdd}
          onAttendingStatusChange={handleAttendingStatusChange}
        />
      </div>
    </div>
  );
};

export default AddStudent;
