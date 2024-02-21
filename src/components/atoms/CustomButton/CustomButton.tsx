/** This file is contain all button used in project */
import { Button } from "antd";
import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import "./CustomButton.scss";

type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
interface ButtonProps {
  onClick: ClickHandler;
  text: string;
}

export const AddButton = ({ onClick, text }: ButtonProps) => (
  <Button className="btn btn-add" onClick={onClick}>
    <MdAddCircleOutline />
    <strong>{text}</strong>
  </Button>
);

export const DeleteButton = ({ onClick, text }: ButtonProps) => (
  <Button className="btn btn-delete" onClick={onClick}>
    <FaTrashCan />
    <strong>{text}</strong>
  </Button>
);
