import React, { ReactNode, useCallback } from "react";
import { Popover } from "antd";

import { FaRegHandPaper } from "react-icons/fa";
import { MdOutlineMail, MdOutlinePauseCircle } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import "./TerminalReservation.scss";

interface ContentProps {
  closeFn: () => void;
}
const Content: React.FC<ContentProps> = ({ closeFn }) => {
  const handleReClass = () => {
    closeFn();
  };
  const handleDrop = () => {
    closeFn();
  };
  const handleRemind = () => {
    closeFn();
  };
  const handleRemove = () => {
    closeFn();
  };
  return (
    <div className="wrapper">
      <button className="item-pop" onClick={handleReClass} type="button">
        <div className="icon">
          <FaRegHandPaper size={24} />
        </div>
        <div className="subtitle1">Re-class</div>
      </button>
      <button className="item-pop" onClick={handleRemind} type="button">
        <div className="icon">
          <MdOutlineMail size={24} />
        </div>
        <div className="subtitle1">Remind</div>
      </button>
      <button className="item-pop" onClick={handleDrop} type="button">
        <div className="icon">
          <MdOutlinePauseCircle size={24} />
        </div>
        <div className="subtitle1">Drop class</div>
      </button>
      <button className="item-pop" onClick={handleRemove} type="button">
        <div className="icon">
          <TiDeleteOutline size={25} />
        </div>
        <div className="subtitle1">Remove reserve</div>
      </button>
    </div>
  );
};

interface Props {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}
const ModalReservation: React.FC<Props> = ({ isShow, setIsShow, children }) => {
  const handleClose = useCallback(() => {
    setIsShow(false);
  }, [setIsShow]);
  return (
    <Popover
      content={<Content closeFn={handleClose} />}
      open={isShow}
      trigger="click"
      arrow={false}
      onOpenChange={() => setIsShow((pre) => !pre)}
    >
      {children}
    </Popover>
  );
};

export default ModalReservation;
