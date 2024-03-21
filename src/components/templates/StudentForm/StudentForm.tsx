// AddStudentUI.tsx
import React, { useEffect, useState } from "react";
import { Form, FormInstance } from "antd";
import { useNavigate } from "react-router-dom";
import GeneralInfo from "../../atoms/GeneralInfo/GeneralInfo";
import OtherInfo from "../../atoms/OtherInfo/OtherInfo";
import "./StudentForm.scss";
import { IStudent } from "../../../interfaces/student.interface";
import FormFooter from "../../molecules/FormFooter/FormFooter";
import FormClassInfo from "../../atoms/FormClassInfo/FormClassInfo";
import AddReservingStudent from "../../organisms/AddReservingStudent/AddReservingStudent";
import StudentReservingInformation from "../../molecules/StudentReservingInformation/StudentReservingInformation";
import TerminalReservation from "../../atoms/TerminalReservation/TerminalReservation";
import { useReservedStudentSingleStore } from "../../../store/ReservedStudentStore";

interface StudentFormProps {
  form: FormInstance<IStudent>;
  onFinish: (values: IStudent) => void;
  initialValues?: object;
  formName: string;
  isEdit?: boolean;
  data?: IStudent | null;
  isAbleAdd?: boolean;
  onAttendingStatusChange: () => void;
}
const StudentForm: React.FC<StudentFormProps> = ({
  form,
  onFinish,
  initialValues,
  formName,
  isEdit,
  data,
  isAbleAdd,
  onAttendingStatusChange,
}) => {
  console.log(data);
  const [student, setStudent] = useState<IStudent | null>(null);
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState<boolean>(false);
  const { fetchReservedStudentByID, aReservedStudent } =
    useReservedStudentSingleStore();
  const handleCancel = () => {
    form.resetFields();
    navigate("/students");
  };

  useEffect(() => {
    setStudent(data || null);
    fetchReservedStudentByID(student?.ID ?? "");
  }, [data, fetchReservedStudentByID, student?.ID]);
  console.log(isAbleAdd, student);

  return (
    <>
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

        <div className="btn-save">
          <FormFooter formName={formName} handleCancel={handleCancel} />
        </div>
      </Form>
      {student !== null && student !== undefined && (
        <>
          <div className="Title">Class Information</div>
          {student !== null && student !== undefined && (
            <FormClassInfo data={student} isDisabled={!student} />
          )}
          <div className="Title">Reserving Information</div>
          <div className="">
            {!isAbleAdd || student.AttendingStatus === "Reserve" ? (
              <div className="container-update">
                {aReservedStudent && (
                  <div className="update-status">
                    {/* <div> </div>
                    <div> </div> */}
                    <TerminalReservation
                      isShow={isShow}
                      setIsShow={setIsShow}
                      data={aReservedStudent}
                      handleDataChange={() => {}}
                    >
                      <div className="open-popup centered">Change status</div>
                    </TerminalReservation>
                  </div>
                )}
                <StudentReservingInformation studentDetailID={student?.ID} />
              </div>
            ) : (
              student !== null &&
              student !== undefined && (
                <AddReservingStudent
                  handleDataChange={() => {}}
                  id={student?.ID}
                  isAddNew={false}
                  onAttendingStatusChange={onAttendingStatusChange}
                />
              )
            )}
          </div>
        </>
      )}
    </>
  );
};

export default StudentForm;
