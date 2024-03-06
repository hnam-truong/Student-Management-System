/* eslint-disable react-hooks/exhaustive-deps */
/** This function component is Modal contain Form with response for add information for user
 * Usage:
 * <EditStudent/>
 */
import { Form, Spin } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import dayjs from "dayjs";
import { IStudent } from "../../../interfaces/student.interface";
import formatDate from "../../../utils/DateFormatting";
import TableHeader from "../../organisms/TableHeader/TableHeader";
import { useSingleStudentStore } from "../../../store/StudentStore";
import StudentForm from "../../templates/StudentForm/StudentForm";

interface EditStudentProps {
  handleDataChange: () => void;
}

const EditStudent: React.FC<EditStudentProps> = ({ handleDataChange }) => {
  const [form] = Form.useForm();
  const { id } = useParams();

  // USE STORES
  const { aStudent, getStudentByID, putSingleStudent, loading } =
    useSingleStudentStore();

  const updateUserFormValues = () => {
    form.setFieldsValue({
      ID: aStudent?.ID,
      Name: aStudent?.Name,
      Gender: aStudent?.Gender,
      Email: aStudent?.Email,
      DateOfBirth: dayjs(aStudent?.DateOfBirth, "DD/MM/YYYY"),
      Phone: aStudent?.Phone,
      Status: aStudent?.Status,
      AttendingStatus: aStudent?.AttendingStatus,
      ImageUrl: aStudent?.ImageUrl,
      PermanentResidence: aStudent?.PermanentResidence,
      Location: aStudent?.Location,
      University: aStudent?.University,
      Major: aStudent?.Major,
      RECer: aStudent?.RECer,
      GPA: aStudent?.GPA,
      GraduationTime: dayjs(aStudent?.GraduationTime, "DD/MM/YYYY"),
      ClassCode: aStudent?.ClassCode,
      ClassStartDate: dayjs(aStudent?.ClassStartDate, "DD/MM/YYYY"),
      Class: aStudent?.Class,
      StudentClasses: aStudent?.StudentClasses,
    });
  };

  useEffect(() => {
    getStudentByID(id ?? "");
  }, [id, getStudentByID]);

  useEffect(() => {
    // Update form values when aStudent changes
    updateUserFormValues();
  }, [aStudent, form]);

  // Reset form values
  // const resetFormValue = () => {
  //   form.resetFields();
  // };

  const handleOk = () => {
    handleDataChange();
    // resetFormValue();
  };

  // Function handles form submit, get value and send this to api,
  // then reset form fields and close modal
  const onFinish = (values: IStudent) => {
    const userData: IStudent = {
      ID: aStudent?.ID || "",
      Name: values.Name,
      Gender: values.Gender,
      Email: values.Email,
      DateOfBirth: formatDate(values.DateOfBirth),
      Phone: values.Phone,
      Status: values.Status,
      ImageUrl: aStudent?.ImageUrl || "",
      PermanentResidence: values.PermanentResidence,
      Location: values.Location,
      University: values.University,
      Major: values.Major,
      RECer: values.RECer,
      GPA: values.GPA,
      GraduationTime: formatDate(values.GraduationTime),
      ClassCode: values.ClassCode,
      ClassStartDate: formatDate(values.ClassStartDate),
      Class: values.Class,
      StudentClasses: values.StudentClasses,
      AttendingStatus: values.AttendingStatus,
    };
    putSingleStudent(userData, id || "");
    handleOk();
  };

  return (
    <div className="table-container">
      <TableHeader isHeaderBottom={false} title="Edit Student" />
      <div className="table-container__content table-container__class">
        {loading ? (
          <div className="spin-container">
            <Spin />
          </div>
        ) : (
          <StudentForm
            form={form}
            onFinish={onFinish}
            formName={`EditStudent_${id}`}
            isEdit
          />
        )}
      </div>
    </div>
  );
};

export default EditStudent;
