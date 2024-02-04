import React, { useEffect, useState } from "react";
import { useClassStudentStore } from "../../../Store";
import StudentByClass from "./StudentByClass/StudentByClass";
import HeaderOfTable from "./Partials/HeaderOfTable";
import { Modal, Select } from "antd";
import "../../../Theme.scss";
const StudentByClassManagement: React.FC = () => {
  const { fetchClassStudent, classStudent } = useClassStudentStore();

  useEffect(() => {
    fetchClassStudent();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangeStatus = (value: string | number) => {
    console.log("Change status: ", value);
  };
  const [studentSelect, setStudentSelect] = useState([]);

  const loading = !classStudent || !classStudent.length;

  return (
    <>
      <div className="table-container">
        <HeaderOfTable
          showModal={showModal}
          isSelectStudent={!studentSelect.length}
        />
        <StudentByClass
          classStudent={classStudent ?? []}
          loading={loading}
          setStudentSelect={setStudentSelect}
        />
      </div>
      <Modal
        title="Update status"
        open={isModalOpen}
        onOk={handleOk}
        okText="Save"
        okButtonProps={{ className: "custom-button" }}
        onCancel={handleCancel}
      >
        <p>Are sure you update status {studentSelect.length} Student?</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 0",
          }}
        >
          <p style={{ color: "#0b213", fontWeight: "800" }}>New status</p>

          <Select
            defaultValue={"Finish"}
            style={{ width: 200 }}
            onChange={handleChangeStatus}
            options={[
              { value: "In class", label: "In class " },
              { value: "Drop out", label: "Drop out" },
              { value: "Reverse", label: "Reverse" },
              { value: "Finish", label: "Finish" },
            ]}
          />
        </div>
      </Modal>
    </>
  );
};

export default StudentByClassManagement;
