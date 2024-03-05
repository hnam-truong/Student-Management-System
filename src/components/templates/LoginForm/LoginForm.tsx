import React from "react";
import { Button, Checkbox, Form, Input, Card } from "antd";
import "./LoginForm.scss";
import Logo from "../../../../public/assets/images/logoSoftware.jpg";

const onFinish = (values: unknown) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: unknown) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginForm: React.FC = () => (
  <div className="centered login-form-container">
    <img src={Logo} alt="FPT Software" className=" login-logo" />
    <Card hoverable className="login-form">
      <Form
        className="form"
        labelCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          className="centered"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item className="centered">
          <Button href="/home" type="primary" htmlType="submit">
            SIGN IN
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </div>
);

export default LoginForm;
