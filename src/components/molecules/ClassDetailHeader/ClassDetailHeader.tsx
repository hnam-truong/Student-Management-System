import { BsJournalBookmarkFill } from "react-icons/bs";
import { VscBroadcast } from "react-icons/vsc";
import { LuSpellCheck } from "react-icons/lu";
import { IoHandRightOutline } from "react-icons/io5";
import { RiRemoteControlFill } from "react-icons/ri";
import { useCallback, useState } from "react";
import { IClass } from "../../../interfaces/class.interface";
import "./ClassDetailHeader.scss";
import StatusTag from "../../atoms/StatusTag/StatusTag";
import { SendEmailButton } from "../../atoms/CustomButton/CustomButton";
import EmailTemplate from "../EmailTemplate/EmailTemplate";
import { IUser } from "../../../interfaces/user.interface";

type ClassDetailHeaderProps = {
  classDetail: IClass;
};
const ClassDetailHeader = ({ classDetail }: ClassDetailHeaderProps) => {
  const [openRemind, setOpenRemind] = useState<boolean>(false);
  const handleOpenRemind = useCallback(() => {
    setOpenRemind(true);
  }, []);
  const handleCloseRemind = useCallback(() => {
    setOpenRemind(false);
  }, []);
  const user: IUser = {
    ID: "",
    Email: "",
    Name: "",
    Gender: false,
    DateOfBirth: "",
    UserType: "",
    Status: false,
    Phone: 0,
    ImageUrl: "",
  };
  return (
    <div className="classname-status">
      <div className="subtitle3 classname-label">Class</div>
      <div className="cl-st">
        <div className="headingh5 classname">{classDetail.ClassName}</div>
        <div className="classstatus">
          <StatusTag status={classDetail.Status} content={classDetail.Status} />
        </div>
      </div>
      <div className="subtitle2-bold classid">{classDetail.ClassID}</div>
      <hr className="solid" />
      <div className="fourth-line">
        <div className="subtitle3-bold date">
          <span>{classDetail.StartDate}</span> -{" "}
          <span className="enddate">{classDetail.EndDate}</span>
        </div>
        <div className="icons">
          <BsJournalBookmarkFill />
          <RiRemoteControlFill />
          <LuSpellCheck />
          <VscBroadcast />
          <IoHandRightOutline />
          <SendEmailButton onClick={handleOpenRemind} text="Send email" />
          {openRemind && (
            <EmailTemplate
              open={openRemind}
              handleOpenRemind={handleOpenRemind}
              handleCloseRemind={handleCloseRemind}
              data={user}
              modalTitle="Send email"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassDetailHeader;
