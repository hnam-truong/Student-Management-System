/** This function component is Form in Modal with response for add reserving information for
 * student, it accept props is id of student, if id is passed, it will auto generate StudentID,
 * ClassName, ClassCode, Current Modules; else if id is an empty string, it will show a search
 * input that allows user find student information by student ID. If student ID exists, it will
 * auto generate the ClassName, ClassCode, Current Modules. Then user required to input the
 * reserved information including period of reservation, reason and conditions for reservation,
 * status active reservation and student information (StudentID, ClassName, ClassCode,
 * Current Modules). And post this to reserved-students api.
 */
import { Form, Modal } from "antd";
import React, { useEffect, useState } from "react";
import ReservingButton from "./Partials/ReservingButton";
import { IReservedStudent } from "../../../Services/Interfaces & Types/Interfaces";
import {
  useReservedStudentSingleStore,
  useReservingCondition,
  useReservingReason,
} from "../../../Store";
import "./AddReserving.scss";
import {
  FieldType,
  ReservingModalProps,
} from "./Partials/AddReservingInterface";
import ReservingStatus from "./Partials/ReservingStatus";
import ReservingConditions from "./Partials/ReservingConditions";
import ReservingReason from "./Partials/ReservingReason";
import ReservingPeriod from "./Partials/ReservingPeriod";
import ReservingStudentDetail from "./Partials/ReservingStudentDetail";
import FormFooter from "./Partials/FormFooter";

const AddReserving: React.FC<ReservingModalProps> = ({ id }) => {
  const [form] = Form.useForm();
  // USE STATE
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTextAreaHidden, setIsTextAreaHidden] = useState(true);

  // USE STORES
  const { fetchReservedStudentByID, aReservedStudent, postReservedStudent } =
    useReservedStudentSingleStore();
  const { fetchReservingCondition, reservingCondition } =
    useReservingCondition();
  const { fetchReservingReason, reservingReason } = useReservingReason();
  useEffect(() => {
    id !== "" && fetchReservedStudentByID(id);
    fetchReservingCondition();
    fetchReservingReason();
  }, [id]);

  // Functions handles modals and form reset fields
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.resetFields();
    setIsModalOpen(false);

    // Clear the value of the Search input using the ref
    form.setFieldsValue({
      ID: "",
      Class: "",
      ClassID: "",
      CurrentModules: "",
    });
  };

  const handleCancel = () => {
    form.resetFields();
    form.setFieldsValue({
      ID: "",
      Class: "",
      ClassID: "",
      CurrentModules: "",
    });
    setIsModalOpen(false);
  };

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
  const onFinish = (values: FieldType) => {
    const selectedReasonKey = values.ReservingReasonSelect;
    const selectedReason =
      selectedReasonKey === "Others"
        ? values.ReservingReasonTextArea
        : reservingReason?.find((reason) => reason?.ID === selectedReasonKey)
            ?.Name;
    const endDate = values.ReservingPeriod[1]?.toDate() || undefined;
    const startDate = values.ReservingPeriod[0]?.toDate() || undefined;
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
    };
    console.log(reservationData);
    postReservedStudent(reservationData);
    handleOk();
  };

  /** This useEffect will run whenever user input new student id
   * and select search button, this will automatically
   * set class, class id, current modules values after fetching data
   */

  useEffect(() => {
    form.setFieldsValue({
      ID: (aReservedStudent as IReservedStudent)?.ID,
      Class: (aReservedStudent as IReservedStudent)?.Class,
      ClassID: (aReservedStudent as IReservedStudent)?.ClassID,
      CurrentModules: (aReservedStudent as IReservedStudent)?.CurrentModules,
    });
  }, [aReservedStudent]);

  return (
    <div>
      {/* If id is passed from parent component, it will show button Add reserving, 
      else show button Add New */}
      {id === "" ? (
        <ReservingButton onClick={showModal} text="Add new" />
      ) : (
        <ReservingButton onClick={showModal} text="Add reserving" />
      )}

      {/* This Modal contain Form which handle add reserving for student */}
      <Modal
        title="Add reserving"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        okText="Submit"
        cancelText="Cancel"
        footer={<FormFooter handleCancel={handleCancel} />}
        style={{ height: "100vh", overflowY: "scroll" }}
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          name="AddReserving"
          initialValues={{
            ID: (aReservedStudent as IReservedStudent)?.ID,
            Class: (aReservedStudent as IReservedStudent)?.Class,
            ClassID: (aReservedStudent as IReservedStudent)?.ClassID,
            CurrentModules: (aReservedStudent as IReservedStudent)
              ?.CurrentModules,
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
          style={{ width: "100%", height: "100%" }}
        >
          <ReservingStudentDetail
            id={id}
            fetchReservedStudentByID={fetchReservedStudentByID}
          />
          <ReservingPeriod />
          <ReservingReason
            reservingReason={reservingReason}
            isOtherReasonHidden={isTextAreaHidden}
            handleSelectOptionChange={handleSelectOptionChange}
          />
          <ReservingConditions reservingCondition={reservingCondition} />
          <ReservingStatus />
        </Form>
      </Modal>
    </div>
  );
};
export default AddReserving;
