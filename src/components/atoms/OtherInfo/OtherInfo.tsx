import React from "react";
import { Form, Input, DatePicker, InputNumber } from "antd";
import { validateGPA } from "../../../utils/Validations";

const OtherInfo: React.FC = () => (
  <div className="container-infor">
    <div className="col">
      <Form.Item
        label="University"
        name="University"
        rules={[{ required: true, message: "Please enter the university" }]}
      >
        <Input className="input" placeholder="Enter University" />
      </Form.Item>
      <Form.Item
        label="Major"
        name="Major"
        rules={[{ required: true, message: "Please enter the major" }]}
      >
        <Input className="input" placeholder="Enter Major" />
      </Form.Item>
      <Form.Item
        label="RECer"
        name="RECer"
        rules={[{ required: true, message: "Please enter the RECer" }]}
      >
        <Input className="input" placeholder="Enter RECer" />
      </Form.Item>
    </div>
    <div className="col">
      <Form.Item
        label="GPA"
        name="GPA"
        rules={[
          { required: true, message: "Please enter the GPA" },
          {
            validator: (_, value) => {
              if (value && !validateGPA(parseFloat(value))) {
                return Promise.reject(
                  new Error("Please enter the GPA between 0 and 10")
                );
              }
              return Promise.resolve();
            },
          },
        ]}
      >
        <InputNumber
          type="number"
          step={0.1}
          className="input"
          placeholder="Enter GPA"
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item
        label="Graduation Time"
        name="GraduationTime"
        rules={[
          { required: true, message: "Please select the graduation time" },
        ]}
      >
        <DatePicker
          className="input"
          picker="year"
          placeholder="Enter Graduation Time"
        />
      </Form.Item>
    </div>
  </div>
);

export default OtherInfo;
