/* eslint-disable react/prop-types */
/** This function component is response for selecting role of user.
 * This have only one option is Trainer and default is "Trainer".
 */
import { Form, Radio } from "antd";

interface FormRadioProps {
  name: string;
  label: string;
  list: { id: string; value: boolean; name: string }[];
  rules: { required: boolean; message: string }[];
}
const FormRadio: React.FC<FormRadioProps> = ({ list, label, rules, name }) => (
  <Form.Item label={label} rules={rules} name={name}>
    <Radio.Group>
      {list.map((item) => (
        <Radio key={item.id} value={item.value}>
          {item.name}
        </Radio>
      ))}
    </Radio.Group>
  </Form.Item>
);

export default FormRadio;
