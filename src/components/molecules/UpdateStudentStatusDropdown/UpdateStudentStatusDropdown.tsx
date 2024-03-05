import { Dropdown, message } from "antd";
import type { MenuProps } from "antd";
import { HiOutlinePencil } from "react-icons/hi";
import { ActionButton } from "../../atoms/CustomButton/CustomButton";

interface UpdateStudentStatusDropdownProps {
  showModal?: () => void;
  isSelectedStudent?: boolean;
}

const UpdateStudentStatusDropdown = ({
  showModal,
  isSelectedStudent,
}: UpdateStudentStatusDropdownProps) => {
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const items: MenuProps["items"] = [
    {
      label: "Update status student",
      key: "1",
      icon: <HiOutlinePencil />,
      onClick: showModal,
      disabled: isSelectedStudent,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <Dropdown menu={menuProps} trigger={["click"]}>
      <ActionButton text="Action" onClick={(e) => e.preventDefault()} />
    </Dropdown>
  );
};

UpdateStudentStatusDropdown.defaultProps = {
  showModal: () => {},
  isSelectedStudent: false,
};
export default UpdateStudentStatusDropdown;
