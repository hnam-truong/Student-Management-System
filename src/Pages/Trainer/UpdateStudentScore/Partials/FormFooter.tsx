import { Button, Form, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const FormFooter: React.FC = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/scores");
  };
  return (
    <Form.Item>
      <Space className="footer-container">
        <Button htmlType="button" onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Space>
    </Form.Item>
  );
};

export default FormFooter;
