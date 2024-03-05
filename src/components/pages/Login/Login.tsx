import React from "react";
import LoginForm from "../../templates/LoginForm/LoginForm";
import "./Login.scss";

const Login: React.FC = () => (
  <div className="login-container">
    <div className="centered login-left">
      <LoginForm />
    </div>
    <div className="login-right" />
  </div>
);

export default Login;
