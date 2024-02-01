import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Col, Row } from "antd";
const MainLayout: React.FC = () => {
  return (
    <div id="layout">
    {/* Header Component */}
    <Header />

    <Row className="content-container">
      {/* Sidebar on the left side */}
      <Col   sm={3} md={4} lg={4}>
        <Sidebar />
      </Col>
      {/* Content of display (Users, Courses,...) */}
      <Col   sm={21} md={20} lg={20} className="main-content">
        <Outlet />
      </Col>
    </Row>

    {/* Footer Component */}
    <Footer />
  </div>

  );
};

export default MainLayout;
