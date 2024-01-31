import React from "react";
import { Button } from "antd";
import "./StatusButton.scss";
import { generateStatus } from "../../Services/GlobalFunctions/GenerateStatus";

interface StatusButtonProps {
  status?: boolean | null | undefined;
}

/* This is a button show the status of students in courses. 
If student passed, button is green, if student failed, button is red, 
else button is dashed without color. */
const StatusButton: React.FC<StatusButtonProps> = ({ status }) => {
  return (
    <Button
      type={`${status === true || status === false ? "primary" : "default"}`}
      danger={status === false}
      className={`btn-status ${status && " btn-status--success "}${
        (status === undefined || status === null) && " btn-status--outline"
      }`}
    >
      {generateStatus(status)}
    </Button>
  );
};

export default StatusButton;
