/** This function component is response for showing two custom button of modal
 * which integrates with the form.
 */
import { Button, Form, Space } from "antd";

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
    offset: 1,
  },
};
interface FormFooterProps {
  handleCancel: () => void;
}
const FormFooter: React.FC<FormFooterProps> = ({ handleCancel }) => {
  return (
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
      key={1}
    >
      <Space>
        <Button key="Cancel" htmlType="reset" onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          type="primary"
          form="AddReserving"
          key="Submit"
          htmlType="submit"
        >
          Submit
        </Button>
      </Space>
    </Form.Item>
  );
};
export default FormFooter;
