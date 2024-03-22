import React, { useEffect, useState } from "react";
import { Modal, Form, Input } from "antd";
import { VscError } from "react-icons/vsc";
import { SearchProps } from "antd/es/input";
import { errorNotify, successNotify } from "../../atoms/Notify/Notify";
import { postSingleStudentInClass } from "../../../services/api/ApiCaller3";
import { IStudent } from "../../../interfaces/student.interface";
import { IStudentClass } from "../../../interfaces/student-class.interface";
import FormFooter from "../../molecules/FormFooter/FormFooter";
import { AddButton } from "../../atoms/CustomButton/CustomButton";
import Sizes from "../../../constants/Sizes";
import Colors from "../../../constants/Colors";
import { useSingleStudentStore } from "../../../store/StudentStore";

const { Search } = Input;

const AddStudentsClass: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [classId] = useState("");
  const { getStudentByID, aStudent, putSingleStudent } =
    useSingleStudentStore();
  const [form] = Form.useForm();

  const showModal = () => {
    setOpen(true);
  };

  const resetFormValue = () => {
    form.resetFields();
    form.setFieldsValue({
      ID: "",
      Name: "",
      RECer: "",
      Email: "",
      Status: "",
      GPA: "",
    });
  };

  const handleCancel = () => {
    setOpen(false);
    resetFormValue();
  };

  const handleOk = async () => {
    try {
      if (!studentId) {
        errorNotify("Please input a student ID");
        resetFormValue();
        return;
      }

      if (!aStudent) {
        errorNotify("Student not found");
        resetFormValue();
        return;
      }

      if (aStudent.StudentClasses.includes(classId)) {
        errorNotify("Student already exists in the class.");
        setOpen(false);
        resetFormValue();
        return;
      }

      aStudent.StudentClasses.push(classId);
      await putSingleStudent(aStudent, studentId);

      const classStudentData: IStudentClass = {
        ID: studentId,
        FullName: aStudent.Name,
        Phone: aStudent.Phone,
        Email: aStudent.Email,
        Status: "In Class",
        DateOfBirth: aStudent.DateOfBirth,
        GPA: aStudent.GPA,
        RECer: aStudent.RECer,
      };

      await postSingleStudentInClass({
        data: classStudentData,
      });

      successNotify("Student added to class successfully");
      setOpen(false);
    } catch (error) {
      console.error(error);
      errorNotify("An error occurred while adding the student to class.");
    }

    resetFormValue();
  };
  const onSearch: SearchProps["onSearch"] = async (value) => {
    setStudentId(value);
    getStudentByID(value);
  };

  useEffect(() => {
    form.setFieldsValue({
      ID: (aStudent as IStudent)?.ID || "",
      Name: (aStudent as IStudent)?.Name || "",
      Email: (aStudent as IStudent)?.Email || "",
      Status: (aStudent as IStudent)?.Status || "",
      RECer: (aStudent as IStudent)?.RECer || "",
      GPA: (aStudent as IStudent)?.GPA || 0,
    });
    form.validateFields([studentId]);
  }, [aStudent, form, studentId]);

  const initialValues = { Name: "", Email: "", ReCer: "", GPA: "", Status: "" };
  return (
    <div>
      <AddButton text="Add new" onClick={showModal} />
      <Modal
        title={
          <div className="modal-header-custom centered">
            Add Student to Class
          </div>
        }
        forceRender
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={
          <div className="centered">
            <FormFooter handleCancel={handleCancel} handleOk={handleOk} />
          </div>
        }
        className="add-reserving-form"
        width="50%"
        closeIcon={<VscError size={Sizes.LgMedium} color={Colors.White} />}
      >
        <Form
          layout="vertical"
          className="add-class-form"
          form={form}
          name="AddStudentClass"
          initialValues={initialValues}
        >
          <div className="form-row">
            <Form.Item label="Student ID" className="form-item">
              <Search
                placeholder="Input Student ID"
                allowClear
                onSearch={onSearch}
                loading={false}
              />
            </Form.Item>
            <Form.Item label="Student Name" className="form-item" name="Name">
              <Input disabled />
            </Form.Item>
          </div>
          <div className="form-row">
            <Form.Item label="RECer" className="form-item" name="RECer">
              <Input disabled />
            </Form.Item>
            <Form.Item label="Email" className="form-item" name="Email">
              <Input disabled />
            </Form.Item>
          </div>
          <div className="form-row">
            <Form.Item label="Status" className="form-item" name="Status">
              <Input disabled />
            </Form.Item>
            <Form.Item label="GPA" className="form-item" name="GPA">
              <Input disabled />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AddStudentsClass;
