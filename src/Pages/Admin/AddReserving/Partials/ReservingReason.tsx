/** This function component is response for selecting form item reason.
 * It will get all sample reasons from server. If user select others,
 * it will show textarea and allow user input text values.
 */
import { Form, Input, Select } from "antd";
import React from "react";
import { IReservingReason } from "../../../../Services/Interfaces & Types/Interfaces";

interface ReservingReasonProps {
  reservingReason: IReservingReason[] | null;
  isOtherReasonHidden: boolean;
  handleSelectOptionChange: (value: string) => void;
}
const ReservingReason: React.FC<ReservingReasonProps> = ({
  reservingReason,
  isOtherReasonHidden,
  handleSelectOptionChange,
}) => {
  return (
    <>
      <Form.Item
        label="Reserving reason"
        name="ReservingReasonSelect"
        rules={[
          {
            required: true,
            message: "Please provide a reason.",
          },
        ]}
      >
        <Select
          placeholder="Please select a reason"
          onChange={handleSelectOptionChange}
        >
          {reservingReason?.map((reason) => (
            <Select.Option key={reason?.ID} value={reason?.ID}>
              {reason?.Name}
            </Select.Option>
          ))}
          <Select.Option value="Others">Others</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Other reason"
        name="ReservingReasonTextArea"
        dependencies={["ReservingReasonSelect"]}
        hidden={isOtherReasonHidden}
        rules={[
          {
            required: !isOtherReasonHidden,
            message: "Please provide a reason.",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
    </>
  );
};

export default ReservingReason;
