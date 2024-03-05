import React, { ReactNode, useCallback, useState } from "react";
import { Button, Popover } from "antd";

import { FaRegHandPaper } from "react-icons/fa";
import { MdOutlineMail, MdOutlinePauseCircle } from "react-icons/md";
import "./TerminalReservation.scss";
import EmailTemplate from "../../molecules/EmailTemplate/EmailTemplate";
import { useReservedStudentSingleStore } from "../../../store/ReservedStudentStore";
import { IReservedStudent } from "../../../interfaces/reserved-student.interface";
import Sizes from "../../../constants/Sizes";
import ModalFindClass from "../../molecules/ModalFindClass/ModalFindClass";

interface ContentProps {
  closeFn: () => void;
  data: IReservedStudent;
  handleDataChange: () => void;
}
const Content: React.FC<ContentProps> = ({
  closeFn,
  data,
  handleDataChange,
}) => {
  const [status, setStatus] = useState<string>(data.Status);
  const [loandingRe, setLoadingRe] = useState<boolean>(false);
  const [loadingDrop, setLoadingDrop] = useState<boolean>(false);
  const [openRemind, setOpenRemind] = useState<boolean>(false);
  const [openReservingModal, setOpenReservingModal] = useState<boolean>(false);
  const { putReservedStudent } = useReservedStudentSingleStore();
  const handleOpenRemind = useCallback(() => {
    setOpenRemind(true);
  }, []);
  const handleCloseRemind = useCallback(() => {
    setOpenRemind(false);
  }, []);
  const handleReClass = () => {
    setOpenReservingModal(true);
    // putReservedStudent(data?.ID, {
    //   ...data,
    //   Status: "In class",
    // });
    // setStatus("In class");
    // handleDataChange();
    setLoadingRe(true);
    setTimeout(() => {
      setLoadingRe(false);
      closeFn();
    }, 500);
  };
  const handleDrop = () => {
    putReservedStudent(data?.ID, {
      ...data,
      Status: "Drop out",
    });
    setStatus("Drop out");
    handleDataChange();
    setLoadingDrop(true);
    setTimeout(() => {
      setLoadingDrop(false);
      closeFn();
    }, 500);
  };
  const handleRemind = () => {
    handleOpenRemind();
    closeFn();
  };

  return (
    <div className="wrapper">
      {!(status === "In class") && (
        <Button
          className="item-pop"
          onClick={handleReClass}
          loading={loandingRe}
        >
          <div className="icon">
            <FaRegHandPaper size={Sizes.LgMedium} />
          </div>
          <div className="subtitle1">Re-class</div>
        </Button>
      )}
      <Button className="item-pop" onClick={handleRemind}>
        <div className="icon">
          <MdOutlineMail size={Sizes.LgMedium} />
        </div>
        <div className="subtitle1">Remind</div>
      </Button>
      {!(status === "Drop out") && (
        <Button className="item-pop" onClick={handleDrop} loading={loadingDrop}>
          <div className="icon">
            <MdOutlinePauseCircle size={Sizes.LgMedium} />
          </div>
          <div className="subtitle1">Drop out</div>
        </Button>
      )}
      {openRemind && (
        <EmailTemplate
          open={openRemind}
          handleOpenRemind={handleOpenRemind}
          handleCloseRemind={handleCloseRemind}
          data={data}
        />
      )}
      {openReservingModal && (
        <ModalFindClass
          data={data}
          open={openReservingModal}
          close={() => setOpenReservingModal(false)}
        />
      )}
    </div>
  );
};

interface Props {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  data: IReservedStudent;
  handleDataChange: () => void;
}
const ModalReservation: React.FC<Props> = ({
  isShow,
  setIsShow,
  children,
  data,
  handleDataChange,
}) => {
  const handleClose = useCallback(() => {
    setIsShow(false);
  }, [setIsShow]);
  return (
    <Popover
      content={
        <Content
          closeFn={handleClose}
          data={data}
          handleDataChange={handleDataChange}
        />
      }
      open={isShow}
      trigger="click"
      arrow={false}
      placement="bottomRight"
      onOpenChange={() => setIsShow((pre) => !pre)}
      className="terminal-reservation-popover-container"
    >
      {children}
    </Popover>
  );
};

export default ModalReservation;
