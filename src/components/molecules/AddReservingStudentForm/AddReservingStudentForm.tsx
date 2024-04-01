/* eslint-disable @typescript-eslint/no-explicit-any */
/** This function component is Form in Modal with response for add reserving information for
 * student, it accept props is id of student, if id is passed, it will auto generate StudentID,
 * ClassName, ClassCode, Current Modules; else if id is an empty string, it will show a search
 * input that allows user find student information by student ID. If student ID exists, it will
 * auto generate the ClassName, ClassCode, Current Modules. Then user required to input the
 * reserved information including period of reservation, reason and conditions for reservation,
 * status active reservation and student information (StudentID, ClassName, ClassCode,
 * Current Modules). And post this to reserved-students api.
 */
import { Form, FormInstance } from "antd";
import React, { useEffect, useState } from "react";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";
import useReservingCondition from "../../../store/ReservingConditionStore";
import useReservingReason from "../../../store/ReservingReasonStore";
import { useReservedStudentSingleStore } from "../../../store/ReservedStudentStore";
import SwitchStatus from "../../atoms/SwitchStatus/SwitchStatus";
import ReservingCondition from "../../atoms/ReservingCondition/ReservingCondition";
import ReservingReason from "../../atoms/ReservingReason/ReservingReason";
import ReservingPeriod from "../../atoms/ReservingPeriod/ReservingPeriod";
import ReservingStudentSearch from "../../atoms/ReservingStudentSearch/ReservingStudentSearch";
import { useSingleStudentStore } from "../../../store/StudentStore";
import { IStudent } from "../../../interfaces/student.interface";

type ReservingFormType = {
  ID: string;
  Class: string;
  ClassID: string;
  CurrentModules: string;
  ReservingReasonSelect: string;
  ReservingReasonTextArea: string;
  ReservingPeriod: [null, null];
  ReservingConditions: string[];
  ActivateReserving: boolean;
};

interface AddReservingStudentProps {
  form: FormInstance<any>;
  handleOk: () => void;
  id?: string;
  isAddNew?: boolean;
  onAttendingStatusChange: () => void;
}

const AddReservingStudentForm: React.FC<AddReservingStudentProps> = ({
  id,
  handleOk,
  form,
  isAddNew,
  onAttendingStatusChange,
}) => {
  // USE STATE
  const [isTextAreaHidden, setIsTextAreaHidden] = useState(true);

  // USE STORES
  const { fetchReservedStudentByID, aReservedStudent, postReservedStudent } =
    useReservedStudentSingleStore();
  const { fetchReservingCondition, reservingCondition } =
    useReservingCondition();
  const { fetchReservingReason, reservingReason } = useReservingReason();
  const { aStudent, putSingleStudent } = useSingleStudentStore();

  useEffect(() => {
    isAddNew &&
      id !== undefined &&
      id !== "" &&
      id === null &&
      fetchReservedStudentByID(id);
    fetchReservingCondition();
    fetchReservingReason();
  }, [
    fetchReservedStudentByID,
    fetchReservingCondition,
    fetchReservingReason,
    id,
    isAddNew,
  ]);
  useEffect(() => {
    id && fetchReservedStudentByID(id);
  }, [fetchReservedStudentByID]);

  /** Function handles selecting reserved reason,
   *  if user do not select available option but choose others
   *  the text area will show and allow user to input reason
   */
  const handleSelectOptionChange = (value: string) => {
    const showTextArea = value === "Others";
    showTextArea ? setIsTextAreaHidden(false) : setIsTextAreaHidden(true);

    form.setFieldsValue({
      ReservingReasonTextArea: showTextArea ? "" : undefined,
    });
    form.validateFields(["ReservingReasonTextArea"]);
  };

  // Function handles form submit, get value and send this to api,
  // then reset form fields and close modal
  const onFinish = (values: ReservingFormType) => {
    const selectedReasonKey = values.ReservingReasonSelect;
    const selectedReason =
      selectedReasonKey === "Others"
        ? values.ReservingReasonTextArea
        : reservingReason?.find(
            (reason: { ID: string }) => reason?.ID === selectedReasonKey
          )?.Name;
    const endDate = values.ReservingPeriod[1] || undefined;
    const startDate = values.ReservingPeriod[0] || undefined;
    const conditions: string[] = values.ReservingConditions || [];
    const reservationData: IReservedStudent = {
      ID: "",
      Class: values.Class,
      ClassID: values.ClassID,
      CurrentModules: values.CurrentModules,
      StudentID: (aReservedStudent as IReservedStudent)?.StudentID,
      Reason: selectedReason || "",
      ReservedStartDate: startDate,
      ReservedEndDate: endDate,
      Conditions: conditions,
      Status: values.ActivateReserving
        ? "Reserve"
        : (aReservedStudent as IReservedStudent)?.Status,
      FullName: (aReservedStudent as IReservedStudent)?.FullName,
      Gender: (aReservedStudent as IReservedStudent)?.Gender,
      DateOfBirth: (aReservedStudent as IReservedStudent)?.DateOfBirth,
      Hometown: (aReservedStudent as IReservedStudent)?.Hometown,
      ReservedModule: (aReservedStudent as IReservedStudent)?.ReservedModule,
      Email: (aReservedStudent as IReservedStudent)?.Email,
    };
    postReservedStudent(reservationData);
    const studentID = (aReservedStudent as IReservedStudent)?.StudentID;

    // Update the student status to "Reserve"
    if (studentID) {
      const updatedStudent: IStudent = {
        Status: aStudent?.Status || "",
        ID: aStudent?.ID || "",
        Name: aStudent?.Name || "",
        Gender: aStudent?.Gender || true,
        DateOfBirth: aStudent?.DateOfBirth || "",
        Phone: aStudent?.Phone || "",
        Email: aStudent?.Email || "",
        PermanentResidence: aStudent?.PermanentResidence || "",
        Location: aStudent?.Location || "",
        University: aStudent?.University || "",
        Major: aStudent?.Major || "",
        RECer: aStudent?.RECer || "",
        GPA: aStudent?.GPA || 0,
        GraduationTime: aStudent?.GraduationTime || "",
        ClassCode: aStudent?.ClassCode || "",
        ClassStartDate: aStudent?.ClassStartDate || "",
        ImageUrl: aStudent?.ImageUrl || "",
        Class: aStudent?.Class || "",
        StudentClasses: aStudent?.StudentClasses || [],
        AttendingStatus: "Reserve",
      };
      putSingleStudent(updatedStudent, studentID);
      onAttendingStatusChange();
    }
    handleOk();
  };

  /** This useEffect will run whenever user input new student id
   * and select search button, this will automatically
   * set class, class id, current modules values after fetching data
   */

  useEffect(() => {
    console.log("aReservedStudent:", aReservedStudent);
    form.setFieldsValue({
      ID: (aReservedStudent as IReservedStudent)?.ID || "",
      Class: (aReservedStudent as IReservedStudent)?.Class || "",
      ClassID: (aReservedStudent as IReservedStudent)?.ClassID || "",
      CurrentModules:
        (aReservedStudent as IReservedStudent)?.CurrentModules || "",
    });
  }, [aReservedStudent, form, id]);

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      name="AddReserving"
      initialValues={{
        ID: (aReservedStudent as IReservedStudent)?.ID,
        Class: (aReservedStudent as IReservedStudent)?.Class,
        ClassID: (aReservedStudent as IReservedStudent)?.ClassID,
        CurrentModules: (aReservedStudent as IReservedStudent)?.CurrentModules,
        ReservingReason: "",
        ReservingPeriod: 0,
        ReservingConditions: [],
        ActivateReserving: false,
        ReservingReasonSelect: "",
        ReservingReasonTextArea: "",
      }}
      variant="filled"
      preserve={false}
      scrollToFirstError
      className="add-reserving-form"
    >
      <ReservingStudentSearch
        id={id}
        fetchReservedStudentByID={fetchReservedStudentByID}
      />
      <ReservingPeriod />
      <ReservingReason
        reservingReason={reservingReason}
        isOtherReasonHidden={isTextAreaHidden}
        handleSelectOptionChange={handleSelectOptionChange}
      />
      <ReservingCondition
        reservingCondition={reservingCondition}
        disable={false}
      />
      <SwitchStatus
        name="ActivateReserving"
        label="Activate reserving"
        valuePropName="checked"
      />
    </Form>
  );
};

AddReservingStudentForm.defaultProps = {
  id: "",
  isAddNew: true,
};
export default AddReservingStudentForm;
