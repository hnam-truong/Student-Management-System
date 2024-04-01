/** This function component is Modal contain Form with response for add information for user
 * Usage:
 * <EditUser id={userId} handleDataChange={handleDataChange}/>
 */
import { Modal, Spin } from "antd";
import React, { useState } from "react";
import { VscError } from "react-icons/vsc";
import dayjs from "dayjs";
import { CommonButton } from "../../atoms/CustomButton/CustomButton";
import FormFooter from "../../molecules/FormFooter/FormFooter";
import Sizes from "../../../constants/Sizes";
import Colors from "../../../constants/Colors";
import { useSingleUserStore } from "../../../store/UserStore";
import { IUser } from "../../../interfaces/user.interface";
import UserForm from "../../molecules/UserForm/UserForm";
import formatDate from "../../../utils/DateFormatting";

interface EditUserProps {
  id: string;
  handleDataChange: () => void;
}

const EditUser: React.FC<EditUserProps> = ({ id, handleDataChange }) => {
  // USE STATE
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReset, setIsReset] = useState(false);

  // USE STORES
  const { aUser, getUserByID, putSingleUser, loading } = useSingleUserStore();

  const initialValues = {
    ID: aUser?.ID,
    Name: aUser?.Name,
    Gender: aUser?.Gender,
    Email: aUser?.Email,
    DateOfBirth: dayjs(aUser?.DateOfBirth, "DD/MM/YYYY"),
    Phone: aUser?.Phone,
    Status: aUser?.Status,
    UserType: aUser?.UserType,
    ImageUrl: aUser?.ImageUrl,
  };

  // const updateUserFormValues = () => {
  //   form.setFieldsValue(initialValues);
  // };

  // useEffect(() => {
  //   // Update form values when aUser changes
  //   updateUserFormValues();
  // }, [aUser]);

  // Functions handles modals and form reset fields
  const showModal = () => {
    getUserByID(id);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    handleDataChange();
    setIsReset(true);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsReset(true);
    setIsModalOpen(false);
  };

  // Function handles form submit, get value and send this to api,
  // then reset form fields and close modal
  const onFinish = (values: IUser) => {
    const userData: IUser = {
      ID: aUser?.ID || "",
      Name: values.Name,
      Gender: values.Gender,
      Email: values.Email,
      DateOfBirth: formatDate(values.DateOfBirth),
      Phone: values.Phone,
      Status: values.Status,
      UserType: values.UserType,
      ImageUrl: aUser?.ImageUrl || "",
    };
    putSingleUser(userData, id);
    handleOk();
  };

  return (
    <>
      <CommonButton onClick={showModal} text="Edit" />
      {/* This Modal contain Form which handle edit user */}

      <Modal
        title={<div className="modal-header-custom centered">Edit user</div>}
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
              formName={`EditUser_${id}`}
            />
          </div>
        }
        className="add-reserving-modal"
        width="50%"
        closeIcon={<VscError size={Sizes.LgMedium} color={Colors.White} />}
      >
        {loading ? (
          <Spin />
        ) : (
          <div className="model-reserve-content">
            <div className="reserving modal-content-custom">
              <UserForm
                onFinish={onFinish}
                formName={`EditUser_${id}`}
                isEdit
                isAdmin={aUser?.UserType === "Admin"}
                isReset={isReset}
                setIsReset={setIsReset}
                initialValues={initialValues}
              />
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default EditUser;