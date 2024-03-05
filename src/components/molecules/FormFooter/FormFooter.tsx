/** This function component is response for showing two custom button of modal
 * which integrates with the form.
 * Usage:
 * <FormFooter
 *   handleCancel={handleCancel}
 *   formName="yourFormName"
 * />
 */

import { Form, Space } from "antd";
import {
  CancelButton,
  SubmitButton,
} from "../../atoms/CustomButton/CustomButton";

interface FormFooterProps {
  handleCancel: () => void;
  formName?: string;
  submitText?: string;
  handleOk?: () => void;
}

const FormFooter = ({
  handleCancel,
  formName,
  submitText,
  handleOk,
}: FormFooterProps) => (
  <Form.Item key={1}>
    <Space>
      <CancelButton text="Cancel" onClick={handleCancel} />
      <SubmitButton formName={formName} text={submitText} onClick={handleOk} />
    </Space>
  </Form.Item>
);

FormFooter.defaultProps = {
  submitText: "Save",
  formName: "",
  handleOk: () => {},
};
export default FormFooter;
