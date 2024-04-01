import React from "react";
import { Link } from "react-router-dom";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import DisableStudent from "../DisableStudent/DisableStudent";
import EditUser from "../../organisms/EditUser/EditUser";
import DisableUser from "../../atoms/DisableUser/DisableUser";
import {
  CommonButton,
  MoreButton,
} from "../../atoms/CustomButton/CustomButton";
import DisableStudentInClass from "../../atoms/DisableStudentInClass/DisableStudentInClass";
import DeleteEmail from "../../atoms/DeleteEmail/DeleteEmail";

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
  isDeleteStudentInClass?: boolean;
  isDeleteEmail?: boolean;
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
  isDeleteStudentInClass,
  isDeleteEmail,
}) => {
  let items: MenuProps["items"] = [
    {
      key: "1",
      label: id ? (
        <Link
          to={viewLink === "/class100" ? `${viewLink}` : `${viewLink}/${id}`}
          rel="noopener noreferrer"
        >
          <CommonButton text={textView || "View"} />
        </Link>
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
          <Link
            to={
              editLink === "/class100/scores"
                ? `${editLink}`
                : `${editLink}/${id}`
            }
            rel="noopener noreferrer"
          >
            <CommonButton text={textEdit || "Edit"} />
          </Link>
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
  if (isDeleteEmail) {
    items = [
      ...items,
      {
        key: "3",
        label: (
          <DeleteEmail
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
  if (isDeleteStudentInClass) {
    items = [
      ...items,
      {
        key: "6",
        label: (
          <DisableStudentInClass
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
  isDeleteStudentInClass: false,
  isDeleteEmail: false,
};
export default CustomDropdown;
