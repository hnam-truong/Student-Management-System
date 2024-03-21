/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Col, Form, Input, Select, Switch } from "antd";
import TableHeader from "../TableHeader/TableHeader";
import "./TemplateDetails.scss";

interface TemplateDetailsProps {
  isEdit: boolean;
  createdByData: string;
  createdOnData: string;
  onCategoryChange: (value: string) => void;
}

const TemplateDetails: React.FC<TemplateDetailsProps> = ({
  isEdit,
  createdByData,
  createdOnData,
  onCategoryChange,
}) => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 6 },
      sm: { span: 3 },
    },
    wrapperCol: {
      xs: { span: 18 },
      sm: { span: 21 },
    },
  };

  const formItemLayoutGrid = {
    labelCol: {
      xs: { span: 6 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 18 },
      sm: { span: 18 },
    },
  };

  const cateOption = [
    {
      value: "Reserve",
      label: "Reserve",
    },
    {
      value: "Notice",
      label: "Notice",
    },
    {
      value: "Remind",
      label: "Remind",
    },
    {
      value: "Others",
      label: "Others",
    },
  ];

  const applyOption = [
    {
      value: "Trainee",
      label: "Trainee",
    },
    {
      value: "Trainer",
      label: "Trainer",
    },
  ];

  return (
    <div>
      <TableHeader isHeaderBottom={false} title="Template details" />
      <div className="mt-2">{}</div>
      {/* Show CreatedBy and CreatedOn */}
      {isEdit && (
        <div className="template-detail-col">
          <Col xs={24} sm={12}>
            <Form.Item
              {...formItemLayoutGrid}
              label="Created by"
              name="CreatedBy"
              colon
            >
              {createdByData}
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              {...formItemLayoutGrid}
              label="Created on"
              name="CreatedOn"
              colon
            >
              {createdOnData}
            </Form.Item>
          </Col>
        </div>
      )}

      {/* Field for Email name */}
      <Form.Item
        {...formItemLayout}
        label="Email name"
        name="Name"
        rules={[{ required: true }]}
      >
        <Input placeholder="Enter email name" />
      </Form.Item>

      {/* Field for Description */}
      <Form.Item
        {...formItemLayout}
        label="Description"
        name="Description"
        rules={[{ required: true }]}
      >
        <Input.TextArea placeholder="Enter description" />
      </Form.Item>

      <div className="template-detail-col">
        {/* Field for Category */}
        <Col xs={24} sm={8}>
          <Form.Item
            {...formItemLayoutGrid}
            label="Category"
            name="Category"
            rules={[{ required: true }]}
          >
            <Select
              options={cateOption}
              placeholder="Select category"
              onChange={(value) => onCategoryChange(value)}
            />
          </Form.Item>
        </Col>

        {/* Field for Apply to */}
        <Col xs={24} sm={8}>
          <Form.Item
            {...formItemLayoutGrid}
            label="Apply to"
            name="ApplyTo"
            rules={[{ required: true }]}
          >
            <Select options={applyOption} placeholder="Select role to apply" />
          </Form.Item>
        </Col>

        {/* Field for Status */}
        <Col xs={24} sm={5}>
          <Form.Item
            {...formItemLayoutGrid}
            label="Active"
            name="Status"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </Col>
      </div>
    </div>
  );
};

export default TemplateDetails;
