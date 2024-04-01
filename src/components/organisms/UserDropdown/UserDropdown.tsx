import React, { useCallback, useState } from "react";
import { Dropdown, MenuProps } from "antd";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { IUser } from "../../../interfaces/user.interface";
import RouterEndpoints from "../../../constants/RouterEndpoints";
import EmailTemplate from "../../molecules/EmailTemplate/EmailTemplate";
import { CommonButton } from "../../atoms/CustomButton/CustomButton";

interface UserDropdownProps {
  user: IUser;
}
const UserDropdown: React.FC<UserDropdownProps> = ({ user }) => {
  const [openRemind, setOpenRemind] = useState<boolean>(false);
  const handleOpenRemind = useCallback(() => {
    setOpenRemind(true);
  }, []);
  const handleCloseRemind = useCallback(() => {
    setOpenRemind(false);
  }, []);
  // const handleRemind = () => {
  //   handleOpenRemind();
  //   // closeFn();
  // };
  console.log(openRemind);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a rel="noopener noreferrer" href={`tel:${user.Phone}`}>
          {user.Phone}
        </a>
      ),
      icon: <FaPhoneVolume />,
    },
    {
      key: "2",
      label: (
        <a rel="noopener noreferrer" href={`mailto:${user.Email}`}>
          {user.Email}
        </a>
      ),
      icon: <MdOutlineMailOutline />,
    },
    {
      key: "3",
      label: (
        <div>
          <CommonButton onClick={handleOpenRemind} text="Send Email" />

          {openRemind && (
            <EmailTemplate
              open={openRemind}
              handleOpenRemind={handleOpenRemind}
              handleCloseRemind={handleCloseRemind}
              data={user}
              modalTitle="Select email template"
              type="Trainer"
              isIndividual
            />
          )}
        </div>
      ),
      icon: <IoSend />,
    },
  ];
  return (
    <Dropdown key={user.ID} menu={{ items }} className="user-link-container">
      <Link
        to={`${RouterEndpoints.UserDetailGeneral}${user.ID}`}
        className="user-link-container__item"
      >
        {user?.Name}
      </Link>
    </Dropdown>
  );
};

export default UserDropdown;
