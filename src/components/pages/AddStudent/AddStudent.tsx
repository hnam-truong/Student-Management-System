import React, { useCallback, useEffect, useState } from "react";
import TableHeader from "../../organisms/TableHeader/TableHeader";
import { IStudent } from "../../../interfaces/student.interface";
import { useSingleStudentStore } from "../../../store/StudentStore";
import formatDate from "../../../utils/DateFormatting";
import StudentForm from "../../templates/StudentForm/StudentForm";
import { BackButton } from "../../atoms/CustomButton/CustomButton";

const AddStudent: React.FC = () => {
  const { postSingleStudent, newStudent, getStudentByID, aStudent } =
    useSingleStudentStore();

  const initialValues = {};
  const [addedStudent, setAddedStudent] = useState<IStudent | null>(null);
  const [isAbleAdd, setIsAbleAdd] = useState(true);

  const onFinish = async (values: IStudent) => {
    // Convert form
    const studentData: IStudent = {
      ...values,
      DateOfBirth: formatDate(values.DateOfBirth),
      GraduationTime: new Date(values.GraduationTime).getFullYear().toString(),
      ClassStartDate: "",
      ClassCode: "",
    };

    await postSingleStudent(studentData);
    newStudent && setAddedStudent(newStudent);
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
