import { IClass } from "../../../interfaces/class.interface";
import formatDate from "../../../utils/DateFormatting";
import ClassStatus from "../../atoms/ClassStatus/ClassStatus";
import "./ClassDetailHeader.scss";

type ClassDetailHeaderProps = {
  classDetail: IClass;
};
const ClassDetailHeader = ({ classDetail }: ClassDetailHeaderProps) => (
  <div className="classname-status">
    <div className="subtitle2 classname-label">Class</div>
    <div className="cl-st">
      <div className="headingh5 classname">{classDetail.ClassName}</div>
      <div className="classstatus">
        <ClassStatus status={classDetail.Status} />
      </div>
    </div>
    <div className="date">
      <span>{formatDate(classDetail.StartDate.toString())}</span> -{" "}
      <span>{formatDate(classDetail.EndDate.toString())}</span>
    </div>
  </div>
);

export default ClassDetailHeader;
