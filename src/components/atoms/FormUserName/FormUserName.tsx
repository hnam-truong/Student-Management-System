/** This function component is response for selecting form item reason.
 * It will get all sample reasons from server. If user select others,
 * it will show textarea and allow user input text values.
 */
import { Form, Input } from "antd";

const FormUserType: React.FC = () => (
  <Form.Item label="User role" name="UserType">
    <Input />
  </Form.Item>
);

export default FormUserType;
