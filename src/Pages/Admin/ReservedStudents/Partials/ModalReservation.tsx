import React, { ReactNode, useCallback } from "react";
import { Popover } from "antd";

import { FaRegHandPaper } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePauseCircle } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

import "./index.scss";

interface Props {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}
const ModalReservation: React.FC<Props> = ({ isShow, setIsShow, children }) => {
  const handleClose = useCallback(() => {
    setIsShow(false);
  }, []);
  return (
    <Popover
      open={isShow}
      trigger={"click"}
      arrow={false}
      content={<Content closeFn={handleClose} />}
      onOpenChange={()=> setIsShow(pre => !pre)}
    >
      {children}
    </Popover>
  );
};

interface contentProps {
  closeFn: Function;
}
const Content: React.FC<contentProps> = ({ closeFn }) => {
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
      <button className="item-pop" onClick={handleReClass}>
        <div className="icon">
          <FaRegHandPaper size={24} />
        </div>
        <div className="subtitle1">Re-class</div>
      </button>
      <button className="item-pop" onClick={handleRemind}>
        <div className="icon">
          <MdOutlineMail size={24} />
        </div>
        <div className="subtitle1">Remind</div>
      </button>
      <button className="item-pop" onClick={handleDrop}>
        <div className="icon">
          <MdOutlinePauseCircle size={24} />
        </div>
        <div className="subtitle1">Drop class</div>
      </button>
      <button className="item-pop" onClick={handleRemove}>
        <div className="icon">
          <TiDeleteOutline size={25} />
        </div>
        <div className="subtitle1">Remove reserve</div>
      </button>
    </div>
  );
};
export default ModalReservation;
