/** This function component is Modal contain Form with response for add information for user
 * Usage:
 * <AddUser/>
 */
import { Form, Modal } from "antd";
import React, { useState } from "react";
import { VscError } from "react-icons/vsc";
import { AddButton } from "../../atoms/CustomButton/CustomButton";
import FormFooter from "../../molecules/FormFooter/FormFooter";
import Sizes from "../../../constants/Sizes";
import Colors from "../../../constants/Colors";
import { useSingleUserStore } from "../../../store/UserStore";
import { IUser } from "../../../interfaces/user.interface";
import UserForm from "../../molecules/UserForm/UserForm";
import formatDate from "../../../utils/DateFormatting";

interface AddUserProps {
  handleDataChange: () => void;
}

const AddUser: React.FC<AddUserProps> = ({ handleDataChange }) => {
  const [form] = Form.useForm();
  // USE STATE
  const [isModalOpen, setIsModalOpen] = useState(false);

  // USE STORES
  const { postSingleUser } = useSingleUserStore();

  const initialValues = {
    ID: "",
    Name: "",
    Gender: true,
    Email: "",
    DateOfBirth: "",
    Phone: "",
    Status: false,
    UserType: "Trainer",
    ImageUrl: "",
  };

  // Reset form values
  const resetFormValue = () => {
    form.resetFields();
  };

  // Functions handles modals and form reset fields
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    handleDataChange();
    resetFormValue();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    resetFormValue();
  };

  // Function handles form submit, get value and send this to api,
  // then reset form fields and close modal
  const onFinish = (values: IUser) => {
    const userData: IUser = {
      ID: "",
      Name: values.Name,
      Gender: values.Gender,
      Email: values.Email,
      DateOfBirth: formatDate(values.DateOfBirth),
      Phone: values.Phone,
      Status: values.Status,
      UserType: values.UserType,
      ImageUrl: "",
    };
    postSingleUser(userData);
    handleOk();
  };

  return (
    <>
      <AddButton onClick={showModal} text="Add User" />
      {/* This Modal contain Form which handle add new user */}
      <Modal
        title={
          <div className="modal-header-custom centered">Add a new user</div>
        }
        forceRender
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        okText="Submit"
        cancelText="Cancel"
        footer={
          <div className="centered">
            <FormFooter
              handleCancel={handleCancel}
              formName="AddUser"
              submitText="Create"
            />
          </div>
        }
        className="add-reserving-modal"
        width="50%"
        closeIcon={<VscError size={Sizes.LgMedium} color={Colors.White} />}
      >
        <div className="model-reserve-content">
          <div className="reserving modal-content-custom">
            <UserForm
              form={form}
              onFinish={onFinish}
              initialValues={initialValues}
              formName="AddUser"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddUser;
