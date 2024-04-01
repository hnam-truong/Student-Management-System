import React, { useEffect, useState } from "react";
import { Modal, Form, Select, Input } from "antd";
import { VscError } from "react-icons/vsc";
import { errorNotify, successNotify } from "../Notify/Notify";
import { putSingleStudent } from "../../../services/api/ApiCaller";
import { getClassByID } from "../../../services/api/ApiCaller2";
import { IStudent } from "../../../interfaces/student.interface";
import { IClass } from "../../../interfaces/class.interface";
import ClassDetailInfoModal from "../ClassDetailInfoModal/ClassDetailInfoModal";
import FormFooter from "../../molecules/FormFooter/FormFooter";
import { useClassStore } from "../../../store/ClassStore";
import Sizes from "../../../constants/Sizes";
import Colors from "../../../constants/Colors";
import { AddButtonWithCircle } from "../CustomButton/CustomButton";
import "./FormClassInfo.scss";

const { Option } = Select;

interface Props {
  data: IStudent | null;
  isDisabled?: boolean;
}

const AddClassToStudentButton: React.FC<Props> = ({ data, isDisabled }) => {
  const [open, setOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [classStartDate, setClassStartDate] = useState<string>("");
  const [classEndDate, setClassEndDate] = useState<string>("");
  const [className, setClassName] = useState<string>("");
  const [classDetails, setClassDetails] = useState<IClass[]>([]);

  const { classes, fetchClass } = useClassStore();

  const loadClassDetails = async () => {
    if (data) {
      const classDetailsPromises = data.StudentClasses?.map(async (classId) => {
        const classData = await getClassByID({ id: classId });
        return classData;
      });

      const resolvedClassDetails = await Promise.all(classDetailsPromises);
      setClassDetails(resolvedClassDetails.filter(Boolean) as IClass[]);
    }
  };

  useEffect(() => {
    fetchClass();
    if (data) {
      loadClassDetails();
    }
  }, [data]);
  const showModal = () => {
    setOpen(true);
  };

  const resetForm = () => {
    setSelectedClass("");
    setClassStartDate("");
    setClassEndDate("");
    setClassName("");
  };

  const handleOk = async () => {
    if (!selectedClass) {
      errorNotify("Please select a class.");
      resetForm();
      return;
    }

    if (data) {
      if (data?.StudentClasses?.includes(selectedClass)) {
        errorNotify("Class already exists in student's classes.");
        setOpen(false);
        resetForm();
        return;
      }

      data?.StudentClasses?.unshift(selectedClass);
      const newClass = { data, id: data.ID };
      await putSingleStudent(newClass);

      loadClassDetails();
      setOpen(false);
      setSelectedClass("");
      successNotify("Added new class to student successfully.");
      resetForm();
    } else {
      errorNotify("Student is not added.");
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
    resetForm();
  };

  const handleClassChange = async (id: string) => {
    setSelectedClass(id);
    const classData = await getClassByID({ id });
    setClassStartDate(classData?.StartDate ?? "");
    setClassEndDate(classData?.EndDate ?? "");
    setClassName(classData?.ClassName ?? "");
  };

  return (
    <div className="addclass">
      <div className={`button-add-class ${isDisabled && " btn-disable"}`}>
        <AddButtonWithCircle onClick={showModal} />
      </div>

      <Modal
        title={
          <div className="modal-header-custom centered">
            Add Class to Student
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
        <Form layout="vertical" className="add-class-form">
          <div className="form-row">
            <Form.Item label="Class ID" className="form-item">
              <Select
                value={selectedClass}
                onChange={(value) => handleClassChange(value)}
              >
                {classes?.map((classItem) => (
                  <Option key={classItem.ClassID} value={classItem.ClassID}>
                    {classItem.ClassID}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Class Name" className="form-item">
              <Input value={className} disabled />
            </Form.Item>
          </div>
          <div className="form-row">
            <Form.Item label="Start Date" className="form-item">
              <Input value={classStartDate} disabled />
            </Form.Item>
            <Form.Item label="End Date" className="form-item">
              <Input value={classEndDate} disabled />
            </Form.Item>
          </div>
        </Form>
      </Modal>

      <div className="studentclass">
        {classDetails?.map((classDetail) => (
          <ClassDetailInfoModal
            key={classDetail.ClassID}
            classDetail={classDetail}
          />
        ))}
      </div>
    </div>
  );
};

AddClassToStudentButton.defaultProps = {
  isDisabled: false,
};

export default AddClassToStudentButton;
