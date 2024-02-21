/** This function component is response for showing two custom button of modal
 * which integrates with the form.
 * Usage:
 * <FormFooter
 *   handleCancel={handleCancel}
 *   formName="yourFormName"
 * />
 */

import { Button, Form, Space } from "antd";
import LayoutFormFooter from "../../../constants/LayoutFormFooter";

interface FormFooterProps {
  handleCancel: () => void;
  formName: string;
}
const FormFooter = ({ handleCancel, formName }: FormFooterProps) => (
  <Form.Item
    wrapperCol={{
      ...LayoutFormFooter.wrapperCol,
      offset: 8,
    }}
    key={1}
  >
    <Space>
      <Button key="Cancel" htmlType="reset" onClick={handleCancel}>
        Cancel
      </Button>
      <Button type="primary" form={formName} key="Submit" htmlType="submit">
        Submit
      </Button>
    </Space>
  </Form.Item>
);
export default FormFooter;
