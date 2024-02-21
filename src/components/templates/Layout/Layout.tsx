import React from "react";
import { Outlet } from "react-router-dom";
import { Col, Row } from "antd";
import Header from "../../organisms/Header/Header";
import SideBar from "../../organisms/SideBar/SideBar";
import Footer from "../../organisms/Footer/Footer";

const Layout: React.FC = () => (
  <div id="layout">
    {/* Header Component */}
    <Header />

    <Row className="content-container">
      {/* Sidebar on the left side */}
      <Col sm={3} md={4} lg={4}>
        <SideBar />
      </Col>
      {/* Content of display (Users, Courses,...) */}
      <Col sm={21} md={20} lg={20} className="main-content">
        <Outlet />
      </Col>
    </Row>

    {/* Footer Component */}
    <Footer />
  </div>
);

export default Layout;
