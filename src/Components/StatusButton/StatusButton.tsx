/* This is a button show the status of students in courses. 
If student passed, button is green, if student failed, button is red, 
else button is dashed without color. */
import React from "react";
import { Button } from "antd";
import "./StatusButton.scss";
import { generateStatus } from "../../Services/GlobalFunctions/GenerateStatus";

interface StatusButtonProps {
  status?: boolean | null | undefined;
  isInTable?: boolean | null | undefined;
}

const StatusButton: React.FC<StatusButtonProps> = ({ status, isInTable }) => {
  return (
    <Button
      type={`${status === true || status === false ? "primary" : "default"}`}
      danger={status === false}
      className={`btn-status ${status && " btn-status--success "}${
        (status === undefined || status === null) &&
        " btn-status--outline btn-status--centered "
      }${
        (status === undefined || (status === null && !isInTable)) &&
        " btn-status--null btn-status--centered"
      }
      `}
    >
      {generateStatus(status)}
    </Button>
  );
};

export default StatusButton;
