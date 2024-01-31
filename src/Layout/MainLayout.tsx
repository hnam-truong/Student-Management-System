import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Col, Row } from "antd";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
const MainLayout: React.FC = () => {
  return (
    <div id="layout">
      {/* Header Component */}
      <Header />

      <Row className="content-container">
        {/* Sidebar on the left side */}
        <Col xs={5} sm={6} lg={4}>
          <Sidebar />
        </Col>
        {/* Content of display (Users, Courses,...) */}
        <Col xs={18} sm={17} lg={19} className="main-content">
          <Outlet />
        </Col>
      </Row>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default MainLayout;
