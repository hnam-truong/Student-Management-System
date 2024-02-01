import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import '../StudentDetail.scss';

const DisableStudent: React.FC = () => {
  const { id } = useParams<{ id: string }>() ?? { id: "" }; // Ensure id is of type string
  const deleteStudentsUrl = `https://65b45ebf770d43aba47b213d.mockapi.io/api/v1/students`;

  const [idToDelete, setIdToDelete] = useState<string | null>(null);
  const [openDelBox, setOpenDelBox] = useState(false);

  const deleteStudent = () => {
    if (idToDelete) {
      axios
        .delete(deleteStudentsUrl + `/${idToDelete}`)
        .then((response) => response.data)
        .then((data) => setOpenDelBox(true))
        .catch((error) => console.log(error.message));
    }
  };

  return (
    <div>
        <Popconfirm className="popDel"
          title="Delete the task"
          placement="topRight"
          onConfirm={deleteStudent}
          onCancel={() => setIdToDelete(null)}
          icon={<QuestionCircleOutlined />}
        >
          <Button
            type="primary"
            danger
            onClick={() => setIdToDelete(id ?? null)}
            >
            Delete
          </Button>
        </Popconfirm>
      </div>
  )
}

export default DisableStudent