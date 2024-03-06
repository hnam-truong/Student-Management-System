/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import type { UploadProps } from "antd";
import { Button, Upload } from "antd";
import { FiInbox } from "react-icons/fi";
import { useState } from "react";
import { ImportFromExcel } from "../../../utils/ImportFromExcel";
import { errorNotify, successNotify } from "../Notify/Notify";
import "./FileUpload.scss";

interface FileUploadProps {
  excelUpload: (excelData: any) => void;
}

const FileUpload = ({ excelUpload }: FileUploadProps) => {
  const [uploadedData, setUploadedData] = useState([]);

  const { Dragger } = Upload;
  const { readExcelFile } = ImportFromExcel();

  const props: UploadProps = {
    name: "file",
    accept: ".xls, .xlsx, .csv",
    multiple: false,
    maxCount: 1,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    onChange(info) {
      const { status } = info.file;
      // if (status !== "uploading") {
      //   console.log(info.file, info.fileList);
      // }
      if (status === "done") {
        successNotify(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        errorNotify(`${info.file.name} file upload failed.`);
      }
    },

    onRemove: () => {
      setUploadedData([]);
    },

    beforeUpload: (file) => {
      readExcelFile(file, setUploadedData);
    },
  };

  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <FiInbox />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single upload with <b>.xls, .xlsx, or .csv</b> file.
        </p>
      </Dragger>

      <Button
        onClick={() => excelUpload(uploadedData)}
        className="upload-btn"
        type="primary"
        // loading={}
      >
        Upload File
      </Button>
    </div>
  );
};

export default FileUpload;
