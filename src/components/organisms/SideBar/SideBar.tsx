import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { Menu, MenuProps } from "antd";

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
import { GrScorecard } from "react-icons/gr";

import "./SideBar.scss";
import RouterEndpoints from "../../../constants/RouterEndpoints";

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
  getItem("Home", RouterEndpoints.Home, <MdOutlineHome />),
  getItem("Students", "students", <MdOutlineGroup />, [
    getItem("Student list", RouterEndpoints.StudentsManagement),
    getItem("Reserve list", RouterEndpoints.ReservedStudents),
  ]),
  getItem("Syllabus", "syllabus", <IoMdBook />, [
    getItem("Syllabus", RouterEndpoints.SyllabusManagement),
  ]),
  getItem("Training program", "training-program", <MdBiotech />, [
    getItem("Training program", RouterEndpoints.TrainingProgramManagement),
  ]),
  getItem("Class", "class", <MdOutlineSchool size={23} />, [
    getItem("View class", RouterEndpoints.StudentsClassManagement),
  ]),
  getItem("Scores", RouterEndpoints.ScoresManagement, <GrScorecard />),
  getItem(
    "Training calendar",
    RouterEndpoints.TrainingCalendarManagement,
    <RiCalendar2Fill />
  ),
  getItem("User management", "usermanagement", <FaRegUser size={20} />, [
    getItem("User management", RouterEndpoints.UsersManagement),
  ]),
  getItem(
    "Learning materials",
    RouterEndpoints.LearningMaterialsManagement,
    <MdOutlineSnippetFolder />
  ),
  getItem("Settings", "settings", <LuSettings />, [
    getItem("Calendar", RouterEndpoints.CalendarManagement),
    getItem("Email configuration", RouterEndpoints.EmailConfiguration),
  ]),
];
const SideBar = () => {
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
    </div>
  );
};

export default SideBar;
