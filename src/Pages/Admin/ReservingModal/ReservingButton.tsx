import { Button } from "antd";
import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import "../ReservingModal/ReservingModal.scss";
type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
interface ReservingButtonProps {
  onClick: ClickHandler;
  text: string;
}
const ReservingButton: React.FC<ReservingButtonProps> = ({ onClick, text }) => {
  return (
    <Button className="btn-reversing" onClick={onClick}>
      <MdAddCircleOutline />
      <strong>{text}</strong>
    </Button>
  );
};

export default ReservingButton;
