import React from "react";
import { Outlet } from "react-router-dom";
import { Col, Row } from "antd";
import Header from "../../organisms/Header/Header";
import SideBar from "../../organisms/SideBar/SideBar";
import Footer from "../../organisms/Footer/Footer";
import Colors from "../../../constants/Colors";

const Layout: React.FC = () => (
  <div id="layout">
    {/* Header Component */}
    <Header />

    <Row className="content-container">
      {/* Sidebar on the left side */}
      <Col sm={0.5} md={3} lg={4} style={{ backgroundColor: Colors.Secondary }}>
        <SideBar />
      </Col>
      {/* Content of display (Users, Courses,...) */}
      <Col sm={23.5} md={21} lg={20} className="main-content">
        <Outlet />
      </Col>
    </Row>

    {/* Footer Component */}
    <Footer />
  </div>
);

export default Layout;
