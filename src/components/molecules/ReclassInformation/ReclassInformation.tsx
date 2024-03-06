import { IClass } from "../../../interfaces/class.interface";
import "./ReclassInformation.scss";

interface ReclassInformationProps {
  classInfo: IClass | null;
}

const ReclassInformation = ({ classInfo }: ReclassInformationProps) => (
  <div className="reclass-modal">
    <div className="reclass-title subtitle1-bold">Class Information</div>
    <div className="item">
      <div className="item-title subtitle2">Class name</div>
      <div className="item-content">{classInfo?.ClassName}</div>
    </div>
    <div className="item">
      <div className="item-title subtitle2">Class code</div>
      <div className="item-content">{classInfo?.ClassID} </div>
    </div>
    <div className="item">
      <div className="item-title subtitle2">Class time</div>
      <div className="item-content">
        {classInfo?.StartDate}
        <strong>{" -> "}</strong>
        {classInfo?.EndDate}
      </div>
    </div>
  </div>
);

export default ReclassInformation;
