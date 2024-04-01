import React from "react";
import { Form, Input, DatePicker, InputNumber } from "antd";
import rules from "../../../utils/ScoreValidation";

const OtherInfo: React.FC = () => (
  <div className="container-info">
    <div className="col-content">
      <Form.Item
        label="University"
        name="University"
        rules={[{ required: true, message: "Please enter the university" }]}
      >
        <Input className="input-content" placeholder="Enter University" />
      </Form.Item>
      <Form.Item
        label="Major"
        name="Major"
        rules={[{ required: true, message: "Please enter the major" }]}
      >
        <Input className="input-content" placeholder="Enter Major" />
      </Form.Item>
      <Form.Item
        label="RECer"
        name="RECer"
        rules={[{ required: true, message: "Please enter the RECer" }]}
      >
        <Input className="input-content" placeholder="Enter RECer" />
      </Form.Item>
    </div>
    <div className="col-content">
      <Form.Item label="GPA" name="GPA" rules={rules}>
        <InputNumber
          type="number"
          min={0}
          max={10}
          step={0.1}
          className="input-content"
          placeholder="Enter GPA"
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
          className="input-content"
          picker="year"
          mode="year"
          placeholder="Enter Graduation Time"
        />
      </Form.Item>
    </div>
  </div>
);

export default OtherInfo;
