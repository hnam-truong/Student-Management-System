/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { MdMoreHoriz } from "react-icons/md";
import DisableStudent from "../../atoms/DisableStudent/DisableStudent";

interface CustomDropdownProps {
  id?: string;
  viewLink?: string;
  editLink?: string;
  isDelete?: boolean;
}
const CustomDropdown: React.FC<CustomDropdownProps> = ({
  id,
  viewLink,
  editLink,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isDelete,
}) => {
  let items: MenuProps["items"] = [
    {
      key: "1",
      label: id ? (
        <a rel="noopener noreferrer" href={`${viewLink}/${id}`}>
          <Button type="text">View</Button>
        </a>
      ) : (
        <Button type="text">View</Button>
      ),
    },
    {
      key: "2",
      label: id ? (
        <a rel="noopener noreferrer" href={`${editLink}/${id}`}>
          <Button type="text">Edit</Button>
        </a>
      ) : (
        <Button type="text">Edit</Button>
      ),
    },
  ];
  if (isDelete) {
    items = [
      ...items,
      {
        key: "3",
        label: <DisableStudent id={id !== undefined ? id : ""} />,
      },
    ];
  }
  const getPopupContainer = (triggerNode: HTMLElement) =>
    triggerNode.parentNode as HTMLElement;
  return (
    <div>
      <Dropdown
        menu={{ items }}
        placement="bottomRight"
        arrow
        getPopupContainer={getPopupContainer}
      >
        <Button className="btn-more">
          <MdMoreHoriz />
        </Button>
      </Dropdown>
    </div>
  );
};

export default CustomDropdown;
