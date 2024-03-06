/** This file is contain all button used in project */
import { Button } from "antd";
import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import {
  MdOutlineKeyboardArrowDown,
  MdAddCircleOutline,
  MdMoreHoriz,
} from "react-icons/md";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { CiExport } from "react-icons/ci";
import { IoMdFunnel } from "react-icons/io";
import "./CustomButton.scss";
import Sizes from "../../../constants/Sizes";

type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
interface ButtonProps {
  text: string;
  onClick?: ClickHandler;
}

interface MoreButtonProps {
  onClick?: ClickHandler;
}

interface SubmitButtonProps extends ButtonProps {
  formName?: string;
}

interface DownloadButtonProps {
  text?: string;
  href?: string;
  download?: string;
}

const defaultProps: Partial<ButtonProps> = {
  onClick: () => {},
};

const submitButtonProps: Partial<SubmitButtonProps> = {
  onClick: () => {},
  formName: "",
};

const downloadButtonProps: Partial<DownloadButtonProps> = {
  text: "Download",
  href: "",
  download: "",
};

export const CommonButton = ({ onClick, text }: ButtonProps) => (
  <Button
    type="text"
    onClick={onClick}
    style={{ width: "100%", height: "100%" }}
  >
    {text}
  </Button>
);

export const AddButton = ({ onClick, text }: ButtonProps) => (
  <Button className="btn btn--add" onClick={onClick}>
    <MdAddCircleOutline size={Sizes.LgMedium} />
    <strong>{text}</strong>
  </Button>
);

export const DefaultDeleteButton = ({ onClick, text }: ButtonProps) => (
  <Button type="text" danger className="btn--delete-default" onClick={onClick}>
    {text}
  </Button>
);

export const DeleteButton = ({ onClick, text }: ButtonProps) => (
  <Button className="btn btn--delete" onClick={onClick}>
    <FaTrashCan size={Sizes.LgMedium} />
    <strong>{text}</strong>
  </Button>
);

export const ActionButton = ({ onClick, text }: ButtonProps) => (
  <Button className="btn btn--grey" onClick={onClick}>
    <strong>{text}</strong>
    <MdOutlineKeyboardArrowDown size={Sizes.LgMedium} />
  </Button>
);

export const ImportButton = ({ onClick, text }: ButtonProps) => (
  <Button
    className="btn btn--import"
    icon={<RiDownloadCloud2Line size={Sizes.LgMedium} />}
    type="primary"
    onClick={onClick}
  >
    {text}
  </Button>
);

export const ExportButton = ({ onClick, text }: ButtonProps) => (
  <Button
    className="btn btn--export"
    icon={<CiExport size={Sizes.LgMedium} />}
    type="primary"
    danger
    onClick={onClick}
  >
    {text}
  </Button>
);

export const FilterButton = ({ onClick, text }: ButtonProps) => (
  <Button
    className="btn btn--filter"
    icon={<IoMdFunnel size={Sizes.LgMedium} />}
    type="primary"
    onClick={onClick}
  >
    {text}
  </Button>
);

export const SubmitButton = ({
  text,
  formName,
  onClick,
}: SubmitButtonProps) => (
  <Button
    className="btn btn--filter"
    type="primary"
    onClick={onClick}
    key="Submit"
    htmlType="submit"
    form={formName}
  >
    {text}
  </Button>
);

export const CancelButton = ({ onClick, text }: ButtonProps) => (
  <Button
    key="Cancel"
    htmlType="reset"
    type="text"
    danger
    onClick={onClick}
    className="btn btn--cancel"
  >
    <strong>{text}</strong>
  </Button>
);

export const MoreButton = ({ onClick }: MoreButtonProps) => (
  <Button onClick={onClick}>
    <MdMoreHoriz />
  </Button>
);

export const DownloadButton = ({
  text,
  href,
  download,
}: DownloadButtonProps) => (
  <Button type="primary" href={href} download={download}>
    {text}
  </Button>
);

AddButton.defaultProps = defaultProps;
DeleteButton.defaultProps = defaultProps;
DefaultDeleteButton.defaultProps = defaultProps;
ActionButton.defaultProps = defaultProps;
ImportButton.defaultProps = defaultProps;
ExportButton.defaultProps = defaultProps;
FilterButton.defaultProps = defaultProps;
CancelButton.defaultProps = defaultProps;
CommonButton.defaultProps = defaultProps;
MoreButton.defaultProps = defaultProps;
SubmitButton.defaultProps = submitButtonProps;
DownloadButton.defaultProps = downloadButtonProps;
