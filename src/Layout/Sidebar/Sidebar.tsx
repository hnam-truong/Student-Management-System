import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { ConfigProvider, Menu, MenuProps } from "antd";

import { IoMdBook } from "react-icons/io";
import { RiCalendar2Fill } from "react-icons/ri";
import {
  MdOutlineGroup,
  MdOutlineSnippetFolder,
  MdOutlineHome,
  MdOutlineSchool,
  MdBiotech,
} from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

import "./Sidebar.scss";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "/home", <MdOutlineHome />),
  getItem("Students", "students", <MdOutlineGroup />, [
    getItem("Student list", "/student-list"),
    getItem("Reserve list", "/reserved-students"),
  ]),
  getItem("Syllabus", "syllabus", <IoMdBook />, [
    getItem("Syllabus", "/syllabus"),
  ]),
  getItem("Training program", "training-program", <MdBiotech />, [
    getItem("Training program", "/training-program"),
  ]),
  getItem("Class", "class", <MdOutlineSchool />, [
    getItem("View class", "/classes"),
  ]),
  getItem("Training calendar", "/training-calendar", <RiCalendar2Fill />),
  getItem("User management", "usermanagement", <FaRegUser size={20} />, [
    getItem("User management", "/user-management"),
  ]),
  getItem(
    "Learning materials",
    "/learningmaterial",
    <MdOutlineSnippetFolder />
  ),
  getItem("Settings", "settings", <LuSettings />, [
    getItem("Calendar", "/calendar"),
    getItem("Email configuration", "/email-template"),
  ]),
];
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [current, setCurrent] = useState(`${location.pathname}`);
  const handleClick: MenuProps["onClick"] = (e) => {
    navigate(`${e.key}`);
    setCurrent(e.key);
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width < 768) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [width]);

  return (
    <div className={`sidebar-responsive  ${!isCollapsed && " sidebar"} `}>
      {/* <div
        className="bg-close"
        onClick={() => setIsCollapsed((value) => !value)}
      > */}
      {/* {!isCollapsed ? (
          <AiOutlineMenuFold size={24} />
        ) : (
          <AiOutlineMenuUnfold size={24} />
        )}
      </div> */}
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemSelectedColor: "#333",
              itemSelectedBg: "#ECF8FF",
              collapsedWidth: 75,
              iconSize: 22,
              collapsedIconSize: 22,
            },
          },
        }}
      >
        <Menu
          onClick={handleClick}
          defaultOpenKeys={[`${location.pathname}`]}
          selectedKeys={[current]}
          mode="inline"
          items={items}
          className={`sidebar-content subtitle1 `}
          inlineCollapsed={isCollapsed}
          subMenuCloseDelay={0.2}
          subMenuOpenDelay={0.2}
        />
      </ConfigProvider>
    </div>
  );
};

export default Sidebar;
