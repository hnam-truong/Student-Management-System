import { Avatar, Button } from "antd";
import React from "react";
import "./Account.scss";
import { FaUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

const Account: React.FC = () => (
  <div className="avatar centered">
    <Avatar src="/assets/images/avatar.png" size={50} />
    <div className="dropdown">
      <div className="user-name">Warrior Tran</div>
      <div className="dropdown-content">
        <Link to="/profile" className="link">
          <Button className="body1 btn">
            <FaUserCircle size={20} />
            Profile
          </Button>
        </Link>
        <Link to="/login" className="link">
          <Button className="body1 btn ">
            <IoMdLogOut size={20} />
            Log out
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default Account;
