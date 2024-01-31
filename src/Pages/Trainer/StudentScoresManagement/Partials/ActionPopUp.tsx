import React from "react";
import { Button } from "antd";
import { MdMoreHoriz } from "react-icons/md";

const ActionPopUp: React.FC = () => {
  return (
    <div>
      <Button className="btn-more">
        <MdMoreHoriz />
      </Button>
    </div>
  );
};

export default ActionPopUp;
