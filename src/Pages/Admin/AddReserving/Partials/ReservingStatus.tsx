/** This function component is responsible for allow
 * user change reserved status of students. If switch is
 * true, student status is reserve, else it will set by
 * student status before. */
import { Form, Switch } from "antd";
import React from "react";

const ReservingStatus: React.FC = () => {
  return (
    <Form.Item
      name="ActivateReserving"
      label="Activate reserving"
      valuePropName="checked"
    >
      <Switch />
    </Form.Item>
  );
};

export default ReservingStatus;
