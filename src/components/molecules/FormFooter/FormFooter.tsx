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
  DownloadButton,
  SubmitButton,
} from "../../atoms/CustomButton/CustomButton";

interface FormFooterProps {
  handleCancel: () => void;
  handleOk?: () => void;
  formName?: string;
  text?: string;
  href?: string;
  isDownload?: boolean;
  download?: string;
}

const FormFooter = ({
  handleCancel,
  handleOk,
  formName,
  text,
  href,
  isDownload,
  download,
}: FormFooterProps) => (
  <Form.Item key={1}>
    <Space>
      <CancelButton text="Cancel" onClick={handleCancel} />
      {!isDownload ? (
        <SubmitButton formName={formName} text={text} onClick={handleOk} />
      ) : (
        <DownloadButton text={text} href={href} download={download} />
      )}
    </Space>
  </Form.Item>
);

FormFooter.defaultProps = {
  text: "Save",
  formName: "",
  handleOk: () => {},
  href: null,
  isDownload: false,
  download: null,
};
export default FormFooter;
