import { Avatar, Button, Popover } from "antd";
import React from "react";
import "./Account.scss";
import { FaUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import Sizes from "../../../constants/Sizes";
import { useAuthStore } from "../../../store/AuthStore";
import { errorNotify } from "../../atoms/Notify/Notify";

const Account: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { postLogout } = useAuthStore();

  const handleChange = () => setOpen(!open);
  const handleClickContent = () => setOpen(false);
  const handleLogout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      postLogout(token);
    } else {
      errorNotify("Failed to Logout. Please try again later");
    }
    handleClickContent();
  };

  const content = (
    <div className="content-user">
      <Link to="/profile" className="link">
        <Button className="body1 btn" onClick={handleClickContent}>
          <FaUserCircle size={Sizes.LgMedium} />
          Profile
        </Button>
      </Link>
      <Button className="body1 btn " onClick={handleLogout}>
        <IoMdLogOut size={Sizes.LgMedium} />
        Log out
      </Button>
    </div>
  );
  return (
    <Popover
      arrow={false}
      trigger="click"
      open={open}
      onOpenChange={handleChange}
      content={content}
      placement="bottom"
    >
      <div className="avatar centered">
        <Avatar src="/assets/images/avatar.png" alt="user-avatar" size={50} />
        <div className="user-name centered">
          <p> Warrior Tran</p>
          <MdKeyboardArrowDown size={20} />
        </div>
      </div>
    </Popover>
  );
};

export default Account;
