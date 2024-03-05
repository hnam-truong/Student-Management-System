import React from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import DisableStudent from "../DisableStudent/DisableStudent";
import EditUser from "../../organisms/EditUser/EditUser";
import DisableUser from "../../atoms/DisableUser/DisableUser";
import {
  CommonButton,
  MoreButton,
} from "../../atoms/CustomButton/CustomButton";

interface CustomDropdownProps {
  handleDataChange: () => void;
  id?: string;
  viewLink?: string;
  editLink?: string;
  isDelete?: boolean;
  textView?: string;
  textEdit?: string;
  isEditUser?: boolean;
  isDeleteUser?: boolean;
  isEdit?: boolean;
}
const CustomDropdown: React.FC<CustomDropdownProps> = ({
  id,
  viewLink,
  editLink,
  isDelete,
  textEdit,
  textView,
  handleDataChange,
  isEditUser,
  isDeleteUser,
  isEdit,
}) => {
  let items: MenuProps["items"] = [
    {
      key: "1",
      label: id ? (
        <a
          rel="noopener noreferrer"
          href={viewLink === "/class100" ? `${viewLink}` : `${viewLink}/${id}`}
        >
          <CommonButton text={textView || "View"} />
        </a>
      ) : (
        <CommonButton text={textView || "View"} />
      ),
    },
  ];
  if (!isEditUser && isEdit) {
    items = [
      ...items,
      {
        key: "2",
        label: id ? (
          <a
            rel="noopener noreferrer"
            href={
              editLink === "/class100/scores"
                ? `${editLink}`
                : `${editLink}/${id}`
            }
          >
            <CommonButton text={textEdit || "Edit"} />
          </a>
        ) : (
          <CommonButton text={textEdit || "Edit"} />
        ),
      },
    ];
  }
  if (isDelete) {
    items = [
      ...items,
      {
        key: "3",
        label: (
          <DisableStudent
            id={id !== undefined ? id : ""}
            handleDataChange={handleDataChange}
          />
        ),
      },
    ];
  }
  if (isEditUser) {
    items = [
      ...items,
      {
        key: "4",
        label: (
          <EditUser
            id={id !== undefined ? id : ""}
            handleDataChange={handleDataChange}
          />
        ),
      },
    ];
  }
  if (isDeleteUser) {
    items = [
      ...items,
      {
        key: "5",
        label: (
          <DisableUser
            id={id !== undefined ? id : ""}
            handleDataChange={handleDataChange}
          />
        ),
      },
    ];
  }
  const getPopupContainer = (triggerNode: HTMLElement) =>
    triggerNode.parentNode as HTMLElement;
  return (
    <div>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        placement="bottomRight"
        arrow
        getPopupContainer={getPopupContainer}
      >
        <MoreButton onClick={(e) => e.preventDefault()} />
      </Dropdown>
    </div>
  );
};

CustomDropdown.defaultProps = {
  id: "",
  viewLink: "",
  editLink: "",
  isDelete: false,
  textEdit: "Edit",
  textView: "View",
  isEditUser: false,
  isDeleteUser: false,
  isEdit: true,
};
export default CustomDropdown;
